import React from 'react' ;
import { Link } from 'react-router-dom' ;

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
  const handleToDelete = (value:number) => {
    //发起删除的请求
    List.splice(value,1);
  }

  const handleToshow = (value:any) => {
    props.handler(value);
    console.log(1)
  }
  return (
    <div className="content-newlist">
      <ul>
        {
          props.List.map((item:any, index:number) => {
            return (
              <Link to={`/Edit/${item.id}`} key={item.id} onClick={() => handleToshow(item)}>
                <li className="list-item">
                  {item.title}
                  <div className="setting">
                    <div className="setting-block">
                      <p className="setting-item">直接发布</p>
                      <p className="setting-item" onClick={() => handleToDelete(index)}>删除</p>
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


export default EditList ;