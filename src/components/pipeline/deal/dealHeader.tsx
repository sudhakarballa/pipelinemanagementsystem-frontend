import SettingsIcon from '@material-ui/icons/Settings';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DealAddEditDialog } from './dealAddEditDialog';
import SelectDropdown from '../../../elements/SelectDropdown';
import { PipeLine } from '../../../models/pipeline';
import { display, width } from '@xstyled/styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faPencil, faChartSimple, faAlignCenter, faBars, faDollarSign, faCheck, faAdd, faGripLines, faEye, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import OutsideClickHandler from 'react-outside-click-handler';

type params = {
    canAddDeal: boolean,
    onSaveChanges: any,
    selectedItem: PipeLine,
    setSelectedItem: any,
    pipeLinesList: Array<PipeLine>
}
export const DealHeader = (props: params) => {

    const navigate = useNavigate();
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    const { canAddDeal, onSaveChanges, selectedItem, setSelectedItem, ...others } = props;
    const [pipeLinesList, setPipeLinesList]=useState(props.pipeLinesList);
    const [showPipeLineDropdown, setShowPipeLineDropdown] = useState(false);
    const [canEdit, setCanEdit]=useState(false);

    useEffect(()=>{
        setPipeLinesList(props.pipeLinesList);
    },[props.pipeLinesList])

    const addorUpdateStage = () => {
        return (
            <>
                <button type="button" className="btn" onClick={(e: any) => navigate("/pipeline/edit?pipelineID=" + selectedItem.pipelineID)}> <FontAwesomeIcon icon={faPencil} /></button>
            </>
        )
    }

    const addorUpdateDeal = () => {
        return (
            <>
                <button type="button" className="btn btn-success" onClick={(e: any) => setDialogIsOpen(true)} disabled={!canAddDeal}>+ Deal</button>
            </>
        )
    }

    const handlePipeLineEdit=(index?:number)=>{
        let list = pipeLinesList;
        list.forEach((l, idx)=>{
            if (index) l.canEdit = index == idx;
            else l.canEdit=false;
        });
        setPipeLinesList([...list]);
    }

    const pipeLinesJSX = () => {
        return (
            <OutsideClickHandler
                onOutsideClick={(event:any) => {
                    event?.stopPropagation();
                    setShowPipeLineDropdown(false);
                }}
            >
                <div className='pipeselectcontentinner'>
                    <div className='pipeselectpadlr'>
                        <ul className='pipeselectlist' onMouseLeave={(e:any)=>handlePipeLineEdit()}>
                            {pipeLinesList.map((item, index)=>(
                                <li key={index} onClick={(e:any)=>setSelectedItem(item)} onMouseOver={(e:any)=>handlePipeLineEdit(index)}><button className='pipeselectlink' type='button'>{item.pipelineName} <span hidden={selectedItem?.pipelineID!=item.pipelineID || item.canEdit}><FontAwesomeIcon icon={faCheck}/></span></button><span className='pipeselect-editlink' hidden={!item.canEdit}><FontAwesomeIcon icon={faPencil}/></span></li>
                            ))}
                        </ul>
                    </div>
                    <div className='pipeselectpadlr pipeselectbtm'>
                        <ul className='pipeselectlist'>
                            <li><button className='pipeselectlink' type='button'><FontAwesomeIcon icon={faGripLines} /> Reorder Pipelines</button></li>
                            <li><button className='pipeselectlink' type='button'><FontAwesomeIcon icon={faEye} /> Pipeline Visibility</button></li>
                            <li><button className='pipeselectlink' type='button'><FontAwesomeIcon icon={faPencil} /> Custumize deal cards <a className='pipeselect-infolink'><FontAwesomeIcon icon={faCircleInfo} /></a></button></li>
                        </ul>
                    </div>
                    <div className='pipeselectpadlr pipeselectbtm'>
                        <ul className='pipeselectlist'>
                            <li onClick={(e:any)=>navigate("/pipeline/add")}><button className='newpipeline' type='button'><FontAwesomeIcon icon={faAdd} /> New pipeline</button></li>
                        </ul>
                    </div>
                </div>
            </OutsideClickHandler>
        )
    }

    return (
        <>
            <div className="pipe-toolbar pt-3 pb-4">
                <div className="container-fluid">
                    <div className="row toolbarview-row">
                        <div className="col-sm-5 toolbarview-actions">
                            <div className='toolbarview-actionsrow'>
                                <div className="d-flex toolbutton-group">
                                    <button className="toolpipebtn activetoolbtn" type="button"><FontAwesomeIcon icon={faChartSimple} /></button>
                                    <button className="tooldealbtn" type="button"><FontAwesomeIcon icon={faBars} /></button>
                                    <button className="tooltimebtn" type="button"><FontAwesomeIcon icon={faDollarSign} /></button>
                                </div>
                                {addorUpdateDeal()}
                            </div>
                        </div>
                        <div className="col-sm-7 toolbarview-summery">
                            <div className="toolsummary pr-4"><div className="toolsummary-deals">£0 <span>·</span>{selectedItem?.stages?.reduce((count, current) => count + current.deals.length, 0)} deals</div></div>

                            <div className='toolbarview-filtersrow'>
                                <div className="pipeselectbtngroup">
                                    <div className='pipeselectbox variantselectbox' onClick={(e: any) => setShowPipeLineDropdown(!showPipeLineDropdown)}>
                                        <button className="pipeselect" type="button"><FontAwesomeIcon icon={faChartSimple} /> {selectedItem?.pipelineName} <FontAwesomeIcon icon={faCaretDown} /></button>
                                        <div className='pipeselectcontent' hidden={!showPipeLineDropdown}>
                                            {pipeLinesJSX()}
                                        </div>
                                    </div>
                                    <div className='updatestagebtn'>{addorUpdateStage()}</div>
                                </div>
                                <div className="pipeselectbox selecteveryonebox">
                                    <button className="pipeselect" type="button"><FontAwesomeIcon icon={faAlignCenter} /> Everyone <FontAwesomeIcon icon={faCaretDown} /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {
                dialogIsOpen && <DealAddEditDialog  dialogIsOpen={dialogIsOpen}
                                                    setDialogIsOpen={setDialogIsOpen}
                                                    onSaveChanges={(e: any) => props.onSaveChanges()}
                                                    pipeLinesList={pipeLinesList} />
            }

        </>
    )
}