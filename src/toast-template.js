import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast } from 'react-bootstrap';
import React, { useState } from 'react';

function Example(props) {
  const [show, setShow] = useState(true);

  return (
        <Toast key = {props.i} onClose={() => setShow(false)} show={show} delay={3000} bg={props.color} autohide>
          <Toast.Header style={{
            display: props.isHeaderHided,
            backgroundClip: 'border-box'
          }}>
            <img
              src={props.icon}
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">{props.header}</strong>
            <small>1 second ago</small>
          </Toast.Header>
          <Toast.Body className='toastSuccess' style={{display: props.isBodyHided}}>
            <div><i class="fas fa-check-circle"></i></div>
            <p><b>{props.header}</b></p>
            <p>{props.body}</p>
            </Toast.Body>
        </Toast>
  );
}
export default Example;