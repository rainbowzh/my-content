import React, { useState, useEffect } from 'react' ;
import { Link, Redirect } from 'react-router-dom' ;
import { withRouter } from 'react-router-dom' ;

const List = [
  {
    title : "2020-05-02" ,
    id : "123"
  },
  {
    title : "2020-03-25" ,
    id : "234"
  },{
    title : "2020-05-12" ,
    id: "23345"
  },
    {
    title : "2020-05-02" ,
    id : "12444"
  },
  {
    title : "2020-05-02" ,
    id : "12223"
  },
  {
    title : "2020-05-02" ,
    id : "1233333"
  },
  {
    title : "2020-05-02" ,
    id : "00123"
  },
  {
    title : "2020-05-02" ,
    id : "90123"
  },
  {
    title : "2020-05-02" ,
    id : "920123"
  },
  {
    title : "2020-05-02" ,
    id : "901233"
  },
  {
    title : "2020-05-02" ,
    id : "901235"
  },
  {
    title : "2020-05-02" ,
    id : "901423"
  },
  {
    title : "2020-05-02" ,
    id : "904423"
  },
  {
    title : "2020-05-02" ,
    id : "90443323"
  },
  {
    title : "2020-05-02" ,
    id : "11904423"
  },
  
]


const EditList = (props:any) => {
   //删除
  const handleToDelete = (item:any, index:number) => {
    //发起删除的请求
    props.List.splice(index,1);
    console.log('list',props.List, index);
    props.history.goBack();
    console.log(4);
    deleteCache(item);
  }


  //从存储中删除
  const deleteCache = (item:any) => {
    let cached = window?.localStorage?.getItem('edit-list-value');
    if(cached){
      let { dataList } = JSON.parse(cached) ;
      for(let i in dataList){
        if(dataList[i].id == item.id){
          dataList.splice(i,1);
        }
      }
      window.localStorage.setItem("edit-list-value",JSON.stringify({
        value : "list-value" ,
        dataList : dataList
      }));
    }
  }

  const handleToshow = (value:any) => {
    console.log('----', document.getElementsByClassName("text-content")[0].innerHTML);
    props.handler(value);
  }
  return (
    <div className="content-newlist">
      <ul>
        {
          props.List.map((item:any, index:number) => {
            return (
              <Link to={`/edit/${item.id}`} key={item.id} onClick={() => handleToshow(item)}>
                <li className={window.location.hash.indexOf(item.id) == -1 ? "list-item" : "list-item actived-list-item"}>
                  {item.title}
                  <div className="setting">
                    <div className="setting-block">
                      <p className="setting-item">直接发布</p>
                      <p className="setting-item" onClick={() => handleToDelete(item, index)}>删除</p>
                      <p className="setting-item">定时发布</p>
                    </div>
                  </div>
                </li>
              </Link>
            )
          })
        }
      </ul>
    </div>
  )
}


export default withRouter(EditList) ;