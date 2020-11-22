import React from 'react'
import { Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  onClose: any;
  title: string;
  body: string;
  actions: any;
}

export const ModalPopUp = (props: Props) => {
  const { title, body, actions } = props;


  return (
    <div>

      <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title> {title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          {actions}
        </Modal.Footer>
      </Modal>
    </div>
  )
}
