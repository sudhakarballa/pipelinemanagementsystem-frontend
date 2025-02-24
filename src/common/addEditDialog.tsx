import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";

type Props = {
    isNewItem?: boolean;
    header?: any;
    onSave?: any;
    onClose?: any;
    dialogIsOpen: any;
    closeDialog: any;
    canSave?: boolean;
    customFooter?: any;
    onFormChange?: any;
    customHeader?: any;
    dialogSize?: any;
    customSaveChangesButtonName?: string;
    children?: any;
};

export const AddEditDialog: React.FC<Props> = (props) => {

    console.log("AddEditDialog - props: ", props);
    const [dialogIsOpen, setDialogIsOpen] = useState(props.dialogIsOpen);
    const { customSaveChangesButtonName, header, customHeader, onSave, onClose, closeDialog, canSave, children, customFooter, onFormChange, ...rest } = props;
    const [dialogSize, setDialogSize] = useState(props.dialogSize ? props.dialogSize : "lg");

    useEffect(() => {
        setDialogIsOpen(props.dialogIsOpen);
    }, [props.dialogIsOpen]);

    const onFormChange1 = () => {
        if (props.onFormChange) props.onFormChange();
    }

    return (
        <div>
            <Modal className='modalpopup modalpopupadddeal' animation={false} show={dialogIsOpen} onHide={closeDialog}
                aria-labelledby="contained-modal-title-vcenter"
                size={dialogSize as any}
                backdrop="static" keyboard={false} // this was added to disable click outside of Modal window
                centered
            >
                <Modal.Header className='modalhead' closeButton>
                    <Modal.Title className='modalheadtitle' id="dialogHeader">{customHeader ?? header}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalbody'>
                    <form className="DialogForm" id="AddEditForm" onChange={(e) => onFormChange1()}>
                        {children}
                    </form>
                </Modal.Body>
                <Modal.Footer className='modalfoot'>
                    <div className='modalfootbar' hidden={customFooter}>
                        <div className="modelfootcountcol me-2">
                            <div className="modelfootcount me-2">1608/10000</div>
                            <button className="modelinfobtn"><i className="rs-icon rs-icon-info"></i></button>
                        </div>
                        <button onClick={closeDialog} className="btn btn-secondary btn-sm me-2" id="closeDialog">Cancel</button>
                        <button type="submit" className={`btn btn-primary btn-sm save${header}`} onClick={onSave}>{customSaveChangesButtonName ? customSaveChangesButtonName : props.isNewItem ? "Create" : "Save"}</button>
                    </div>
                    {customFooter}
                </Modal.Footer>
            </Modal>
        </div>
    );
};