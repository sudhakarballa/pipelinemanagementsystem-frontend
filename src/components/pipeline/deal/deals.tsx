
// @flow
import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Stage } from "../../../models/stage";
import { DealHeader } from "./dealHeader";
import { DealStage } from "./dealStage";
import { PipeLineService } from "../../../services/pipeLineService";
import { ErrorBoundary } from "react-error-boundary";
import { StageService } from "../../../services/stageService";
import { DealService } from "../../../services/dealService";
import { PipeLine } from "../../../models/pipeline";
import { Deal } from "../../../models/deal";
import LocalStorageUtil from "../../../others/LocalStorageUtil";
import Constants from "../../../others/constants";

type params = {
    isCombineEnabled?: any,
    initial?: any,
    useClone?: any,
    containerHeight?: any,
    withScrollableColumns?: any,
    rowData?: Array<Stage>;
    onSaveChanges?: any;

}

export const Deals = (props: params) => {

    const [isLoading, setIsLoading] = useState(false);
    const pipeLineSvc = new PipeLineService(ErrorBoundary);
    const stagesSvc = new StageService(ErrorBoundary);
    const dealsSvc = new DealService(ErrorBoundary);
    const [pipeLines, setPipeLines] = useState<Array<PipeLine>>([]);
    const [stages, setStages] = useState<Array<Stage>>([]);
    const [deals, setDeals] = useState<Array<Deal>>([]);
    const [selectedItem, setSelectedItem] = useState<PipeLine>();

    useEffect(() => {
        Promise.all([pipeLineSvc.getPipeLines(), stagesSvc.getStages(), dealsSvc.getDeals()]).then(res => {
            
            let pipelines = res[0] as Array<PipeLine>;
            let stages = res[1] as Array<Stage>;
            let deals = res[2] as Array<Deal>;

            pipelines.forEach(p => {
                p.stages = stages.filter(s => s.pipelineID == p.pipelineID);
                p.stages.forEach(s => {
                    s.deals = deals.filter(d => d.stageID == s.stageID && d.pipelineID == s.pipelineID);
                });
            });

            setPipeLines([...pipelines]);
            LocalStorageUtil.setItem(Constants.PIPE_LINES, JSON.stringify([...pipelines]));
            setSelectedItem(pipelines[0]);
        });
    }, [])

    const updateRowData = () => {

        setStages(JSON.parse(localStorage.getItem("stagesList") as any) ?? []);
    }

    const reorderQuoteMap = (quoteMap: Array<Stage>, source: any, destination: any) => {

        // const sourceIndex = quoteMap.findIndex(q => q.name == source.droppableId);
        // const destinationIndex = quoteMap.findIndex(q => q.name == destination.droppableId);
        // const orderIndex = destination.index;

        // let item = quoteMap[sourceIndex].deals[source.index];
        // item.pipeLineId = quoteMap[sourceIndex].id;
        // quoteMap[sourceIndex].deals.splice(source.index, 1);
        // quoteMap[destinationIndex].deals.splice(orderIndex, 0, item);

        return quoteMap;

    };

    const onDragEnd = (result: any) => {
        
        // dropped nowhere
        if (!result.destination) {
            return;
        }

        const source = result.source;
        const destination = result.destination;

        // did not move anywhere - can bail early
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        const data = reorderQuoteMap(
            stages,
            source,
            destination
        ) as any;

        
        localStorage.setItem("stagesList", JSON.stringify([...data]));
        setIsLoading(true);
        setStages([...data]);
        setTimeout(() => {
            setIsLoading(false);
        }, 10);


    };

    return (
        <>

            {isLoading ? null :
                <>
                    <div>
                        <div className="pdstage-area">
                            <div className="container-fluid">
                                <DealHeader canAddDeal={stages.length > 0}
                                    onSaveChanges={(e: any) => updateRowData()}
                                    selectedItem={selectedItem as any}
                                    setSelectedItem={(e:any)=>setSelectedItem(pipeLines.find(p=>p.pipelineID==e))}
                                    pipeLinesList={pipeLines}
                                />
                                <div className="pdstage-row" hidden={selectedItem?.stages?.length == 0}>
                                    <DragDropContext onDragEnd={onDragEnd}>
                                        <Droppable
                                            droppableId="board"
                                            type="COLUMN"
                                            direction="horizontal"
                                        >
                                            {(provided) => (
                                                <>
                                                    {selectedItem?.stages?.map((item, index) => (
                                                        <DealStage
                                                            key={index}
                                                            stageID={item.stageID}
                                                            title={item.stageName}
                                                            deals={item.deals}
                                                            onSaveChanges={(e: any) => props.onSaveChanges()}
                                                        />
                                                    )
                                                    )}
                                                    {/* {provided.placeholder} */}
                                                </>
                                            )}
                                        </Droppable>

                                    </DragDropContext>


                                </div>
                                <div style={{ textAlign: "center" }} hidden={(selectedItem as any)?.stages?.length > 0}>
                                    No pipelines are avilable to show
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            }
        </>
    );
};
