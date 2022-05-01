import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row, Col, ToastContainer} from 'react-bootstrap';
import React, { useState } from 'react';
import Example from './toast-template';
import errorIcon from './assets/error.svg';
import infoIcon from './assets/check.svg';

function App() {
  const [toasts, setToast] = useState([]);
  const [i, setI] = useState(0);
  const [inputHeader, setHeaderInput] = useState(null);
  const [inputBody, setBodyInput] = useState(null);
  const [hideHeaderCB, setHideHeaderCB] = useState('flex');
  const [hideBodyCB, setHideBodyCB] = useState('block');

  const [iconType, setIconType] = useState(infoIcon)

  const hideHeader = function(){
    if(document.getElementById("hideHeader").checked){
      setHideHeaderCB('none');
    } else {
      setHideHeaderCB('flex');
    }
  }
  const hideBody = function(){
    if(document.getElementById("hideBody").checked){
      setHideBodyCB('none');
    } else {
      setHideBodyCB('block');
    }
  }
  const getHeaderInput = function(val) {
    setHeaderInput(val.target.value);
  }
  const getBodyInput = function(val) {
    setBodyInput(val.target.value);
  }
  const addNewToast = function() {
    setI(function(i){
      i = i+1;
      return i;
    });
    setToast(function (toasts) {
      return [...toasts,(<Example i ={i} key = {i} header = {inputHeader} body = {inputBody} color = {document.querySelector("#tstclr1").value} icon = {iconType} isHeaderHided = {hideHeaderCB} isBodyHided = {hideBodyCB}></Example>)];
    });
  }
  const changeToastIcon = function() {
    if(document.querySelector("#tstclr1").value === "danger"){
      setIconType(errorIcon);
    }else{
      setIconType(infoIcon);
    }
  }

  return (
    <Row>
      <Col xs={1}>
        <label for="headerText">Header:</label>
        <input type="text" onChange={getHeaderInput} id ="headerText"></input>
        <label for="hideHeader">Hide Header:</label>
        <input type="checkbox" name="Hide Header" id="hideHeader" onChange={() => hideHeader()}></input>
        <label for="bodyText">Body:</label>
        <input type="text" onChange={getBodyInput} id ="bodyText"></input>
        <label for="hideBody">Hide Body:</label>
        <input type="checkbox" name="Hide Body" id="hideBody" onChange={() => hideBody()}></input>
        <select id="tstclr1" title="Toast Color" onChange={changeToastIcon}>
            <option value="light">Blue</option>
            <option value="danger">Red</option>
        </select>
      </Col>
      <Col xs={6}>
        <ToastContainer className="p-3" position='top-end'>
          {toasts.map((toast) =>
            (toast)
          )}
        </ToastContainer>
      </Col>
      <Col xs={6}>
        <Button onClick={() => addNewToast()}>Show Toast</Button>
      </Col>
    </Row>
  );
}

export default App;
