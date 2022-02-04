import { useState } from "react";

export default function TextArea(props) {
  const funcOnClickUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (newText === '') {
      props.showAlert('Enter Text to perform operation', 'warning');
    }
    else {
      props.showAlert('Converted to Upper case', 'success');
    }
  };

  const funcOnClickLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (newText === '') {
      props.showAlert('Enter Text to perform operation', 'warning');
    }
    else {
      props.showAlert('Converted to lower case', 'success');
    }
  }

  const funcOnChange = (e) => {
    setText(e.target.value);
  };

  const funcOnClickClr = () => {
    setText('');
    props.showAlert('Text cleared', 'success');
  };

  const funcOnClickExtEmail = () => {
    let emails = '';
    let regx = /[\w\d.-]+@[\w\d.-]+\.[\w\d.-]+/g;
    let emailList = text.match(regx);
    console.log(emailList);
    if (emailList === null) {
      props.showAlert('Email id is not found ', 'warning');
    }
    else {
      props.showAlert('Email id Extracted', 'success');
    }
    emailList.forEach((e) => {
      emails += e;
    });
    setText(emails);
  };

  const funcOnClickCpyTxt = () => {
    let text = document.getElementById('textArea');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert('Text Cppied to Clipboard', 'success');
  };

  const funcOnClickRmvExtraSpc = () => {
    let newTxt = text.split(/[ ]+/);
    setText(newTxt.join(" "));
    props.showAlert('Extar Spaces Removed', 'success');
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="mb-0">
          <h2 className="my-4 ">{props.heading}</h2>
          <textarea className="form-control" id="textArea" rows="9" value={text} onChange={funcOnChange} style={{ background: props.mode === 'dark' ? '#3f445b' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mt-3" onClick={funcOnClickUp}> Convert UpperCase </button>
        <button disabled={text.length === 0} className="btn btn-success mx-3 mt-3" onClick={funcOnClickLow}> Convert LowerCase </button>
        <button disabled={text.length === 0} className="btn btn-secondary mt-3 " onClick={funcOnClickRmvExtraSpc}>Remove Extra spaces</button>
        <button disabled={text.length === 0} className="btn btn-warning mx-3 mt-3" onClick={funcOnClickExtEmail}>Extract Email</button>
        <button disabled={text.length === 0} className="btn btn-info mt-3" onClick={funcOnClickCpyTxt}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-danger mt-3 mx-3" onClick={funcOnClickClr}> Clear</button>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h5>{/*text.split(' ')[text.split(' ').length - 1] === '' ? text.split(' ').length - 1 : text.split(' ').length*/ text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words {text.length} Characters</h5>
        <p>{0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} minuts to read</p>
        <h4 className="my-3"> Preview </h4>
        <p>{text.length > 0 ? text : "Nothing To Preview !"}</p>
      </div>
    </>
  );
}
