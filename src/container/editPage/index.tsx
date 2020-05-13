import React, { useRef, useState } from 'react' ;
import { Header } from '../../component' ;
import { Link, Route } from 'react-router-dom' ;

const EditPage = () => {
  const [value, setValue] = useState("20200513") ;
  const [htmlShow, setHtmlShow] = useState("");
  //改变名称
  const hanleToChangeValue = (e:any) => {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  const handleToText = (value:string, addValue?:string) => {
    document.execCommand(value, false, addValue);
  }

  //发布
  const handleToPublish = () => {
    let html = document.getElementsByClassName("text-content")[0].innerHTML ;
    setHtmlShow(html);
  }

  return(
    <React.Fragment>
      <Header/>
      <div className="EditPage-block">
        <div className="left">
          <div className="btn-add-new">新建文章</div>
          <div className="content-newlist">
            <ul>
              <Link to="/Edit/1213"><li className="list-item">20201212</li></Link>
              <Link to="/Edit/333"><li className="list-item">20120111</li></Link>
              <Link to="/Edit/332"><li className="list-item">20101211</li></Link>
            </ul>
          </div>
        </div>
        <div className="right">
          <input className="text-title" value={value} onChange={(e) => hanleToChangeValue(e)}></input>
          <div className="text-tool">
            <div className="text-item" onClick={() => handleToText("Bold")}></div>
            <div className="text-item" onClick={() => handleToText("justifyCenter")}></div>
            <div className="text-item" onClick={() => handleToText("strikeThrough")}></div>
            <div className="text-item" onClick={() => handleToText("italic")}></div>
            <div className="text-item" onClick={() => handleToText("justifyLeft")}></div>
            <div className="text-item" >
              <div className="text-size-block">
                <p onClick={() => handleToText("fontSize","2")}>小</p>
                <p onClick={() => handleToText("fontSize","4")}>中</p>
                <p onClick={() => handleToText("fontSize","6")}>大</p>
              </div>
            </div>
            <div className="ad-out">
              <div className="btn-save">save</div>
              <div className="btn-publish" onClick={handleToPublish}>publish</div>
            </div>
          </div>
          <div className="text-content" dangerouslySetInnerHTML={{__html : htmlShow}} >
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default EditPage ;