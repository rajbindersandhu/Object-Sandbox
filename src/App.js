import React, { useState } from "react";
import './App.css';

//import List from"./components/list/list.js";
function App() {
  let[keyStr,setKeyStr] = React.useState("");
  let [keyList, setKeyList] = React.useState([]);
  let [valueVisible, setValueVisible] = React.useState(false);
  let [valueStr,setValueStr]= React.useState("");
  let [valueList, setValueList] = React.useState([]);
  let [finalVisible,setFinalVisible] = React.useState(false);
  
  let [objList, setObjList] = React.useState([]);
  let [obj,setObj] = React.useState({
    key : "",
    value: ""
  });

  let [showTable, setShowTable] = React.useState(false);

  function reset(){
    setKeyStr("");
    setKeyList([]);
    setValueVisible(false);
    setValueStr("");
    setValueList([]);
    setFinalVisible(false);
    setObjList([]);
    setObj({
      key : "",
      value: ""
    });
    setShowTable(false);
  }

  function callValue(){
    if(keyStr.length > 0){
      let tempList = keyStr.split(",").filter(item=> /[\w]+/.test(item));
      setKeyList([...tempList]);
      setValueVisible(true);
    }
    else{
      alert("Enter the key List");
    }
  }
  function callFinal(){
    if(valueStr.length>0){
      let tempList = valueStr.split(",").filter(item=> /[\w]+/.test(item));;
      setValueList([...tempList]);
    }
    setFinalVisible(true);
  }
  function changeValue(e){
    if(e.target.id="inpOpt" && e.target.value.length > 0){
      setObj({...obj,value : e.target.value});
    }
    else if(e.target.id="selOpt"){
      setObj({...obj,value : e.target.value});
    }
  }

  function addToObject(){
    if(obj.key.length > 0 && obj.value.length > 0){
    
        let tempObj ={};
        tempObj[obj.key] = obj.value;
        objList.push(tempObj);
        setObjList([...objList]);
        setShowTable(true);
    }
     
   
  }

  return (
    <div className="App">
      <div className="key-box">
        <h3>Enter the list of keys below : </h3>
        <p>(seprated by comma's)</p>
        <textarea rows={5} cols={50} value = {keyStr} onChange={(e)=> setKeyStr(e.target.value)} placeholder ="A, B, C......" style={{paddingLeft:"2%"}} disabled={valueVisible}></textarea><br/>
        <button onClick = {callValue} disabled={valueVisible}>NEXT</button>
      </div>
      {valueVisible ?
        <div className="value-box">
          <h3>Enter the list of values below (optional) : </h3>
          <p>(seprated by comma's)</p>
          <textarea rows={5} cols={50} value = {valueStr} onChange={(e)=>setValueStr(e.target.value)} placeholder ="A, B, C......" style={{paddingLeft:"2%"}} disabled={finalVisible}></textarea>
          <br/><button onClick = {callFinal} disabled={finalVisible}>NEXT</button>
        </div>
        :
        null}
      {finalVisible ?
        <div className="final-box">
          <p>Select the key : </p>
          <select onChange = {(e)=>setObj({...obj,key : e.target.value})}>
          <option disabled selected>Select Key</option>
            {keyList.map((item,index)=><option key={index}>{item.trim()}</option>)}
          </select>
          <p>Select the Value : </p>
          <select id="selOpt" onChange = {changeValue}>
            <option disabled selected>Select Value</option>
            {valueList.map((item,index)=><option key={index}>{item.trim()}</option>)}
          </select>
          <span> OR </span>
          <input type="text"  id ="inpOpt" onChange ={changeValue}/>
          <br/>
            <div className="btn-final">
              <button onClick = {addToObject}>ADD</button>
              <button onClick ={reset}>ReStart</button>
          </div>
        </div>
        :null
      }
      <fieldset>
        <legend>Object table</legend>
      {showTable ?
        <div className ="table">
          <table className="obj-table">
            <thead>
              <tr >
                <th style={{border:"2px solid black"}}>Key</th><th style={{border:"2px solid black"}}>Value</th>
              </tr>
            </thead>
            <tbody>
              {objList.map((item,index) => <tr key={index}><td style={{border:"2px solid black"}}>{Object.keys(item)[0]}</td><td style={{border:"2px solid black"}}>{item[Object.keys(item)[0]]}</td></tr>)}
            </tbody>
          </table>
        </div>
        :
        null
      }
      </fieldset>
    </div>
  );
}

export default App;
