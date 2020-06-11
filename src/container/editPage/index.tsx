import React, { useRef, useState,useEffect } from 'react' ;
import { Header, EditList } from '../../component' ;
import { Link, Route } from 'react-router-dom' ;
import { postArticle } from '../../util/api' ;
import { Modal } from 'antd' ;
import { random } from '../../util/helper';

const EditPage = (props:any) => {
  const [value, setValue] = useState(new Date().toLocaleDateString()) ;
  const [htmlShow, setHtmlShow] = useState("");
  const [list ,setList] = useState([]);
  const [curId, setCurId] = useState("");

  //获取编辑文章列表
  useEffect(() => {
    initList();
  },[]);

  const initList = () => {
     // let list = [
    //   {
    //     id : "1",
    //     title : "222",
    //     context : `dfadfsfdsgag<div>刮大风胡</div><div>g8yet8ierb</div><div>根本就风的告白井冈山报</div>`
    //   },
    //    {
    //     id : "12",
    //     title : "1222",
    //     context : `dfadfsfdsgag<div>666666</div><div>g8yet8ierb</div><div>hgfjdsh</div>`
    //   }
    // ] ;
    // let value = JSON.stringify({value : list}) ;
    // window.localStorage.setItem('Article-List', value);

    let item = window.localStorage.getItem("edit-list-value") ;
    if(item){
      console.log(JSON.parse(item));
      setList(JSON.parse(item).dataList);
    }

  }

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
    let params = {
      title : value ,
      context : html 
    }
    postArticle(params).then((res) => {
      if(res.status == '0'){
         Modal.success({
          title : "发布成功" ,
          onOk : () => {
            window.location.href= "//localhost:3000/#/article";
          }
        })
      }else{
         Modal.error({
          title : "发布失败" ,
        })
      }
    })
  }

  const setInnerText = (value:any) => {
    setHtmlShow(`${value.context}`);
    //第一次新建未保存，做一次保存
    console.log("htmlshow", htmlShow,value)
  }

  const handleToAddNew = () => {
    let idKey = random();
    let item:any = { id : idKey ,title : `${new Date().toLocaleDateString()}`, context : ""} ;
    setList(list.concat(item));
    props.history.replace(`/edit/${idKey}`) ;
  }

  const handleToSave = () => {
    setCurId(getCurId(list));
    let html = document.getElementsByClassName("text-content")[0].innerHTML ;
    setHtmlShow(html);
    console.log('html',htmlShow,value);
    console.log(getCurId(list));
    //存储到localstorage中
    saveCache({
      title : value ,
      context : html ,
      id : getCurId(list)
    })
  }
  
  //存储文章
  const saveCache = (item:any) => {
    let cached = window?.localStorage?.getItem('edit-list-value');
    let data = [] ;
    if(cached){
      let { dataList } = JSON.parse(cached) ;
      if (dataList.length < 1) {
        window.localStorage.setItem("edit-list-value",JSON.stringify({
          value : "list-value" ,
          dataList : [item]
        }));
      }
      for(let i in dataList) {
        console.log('dataList',dataList[i].id,item.id)
        if(dataList[i].id !== item.id){
          dataList.push(item);
          data = dataList ;
          window.localStorage.setItem("edit-list-value",JSON.stringify({
            value : "list-value" ,
            dataList : data
          }));
        }
        else{
          if(dataList[i].title !== item.title || dataList[i].context !== item.context) {
            dataList[i].title = item.title ;
            dataList[i].context = item.context ;
          }
          window.localStorage.removeItem('edit-list-value');
          window.localStorage.setItem('edit-list-value',JSON.stringify({
            value : "list-value" ,
            dataList : dataList
          }))
        }
      }
    }else{
      window.localStorage.setItem("edit-list-value",JSON.stringify({
        value : "list-value" ,
        dataList : [item]
      }));
    }
    
  }

  const getCurId = (value:Array<any>) => {
    let res = null ;
    for(let i in value){
      if(window.location.hash.indexOf(value[i].id) !== -1){
        res = value[i].id ;
      }
    }
    return res;
  }

  console.log('html-show',htmlShow);
  return(
    <React.Fragment>
      {/* <Header/> */}
      <div className="EditPage-block">
        <div className="left">
          <div className="btn-add-new" onClick={handleToAddNew}>新建文章</div>
          <EditList handler={setInnerText} List={list}></EditList>
        </div>
        <div className="right">
          {
            list.length < 1 ? <span className="writer-ground">rainbow</span>
            : <React.Fragment>
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
                <div className="text-item" onClick={() => handleToText("backColor","transparent")}></div>
                <div className="ad-out">
                  <div className="btn-save" onClick={handleToSave}>save</div>
                  <div className="btn-publish" onClick={handleToPublish}>publish</div>
                </div>
              </div>
              {
                htmlShow == "" ? <div className="text-content" contentEditable={true}></div>
                : <div className="text-content" dangerouslySetInnerHTML={{__html : htmlShow}}  contentEditable={true}></div>
              }
            </React.Fragment>
          }
        </div>
      </div>
    </React.Fragment>
  )
}


export default EditPage ;