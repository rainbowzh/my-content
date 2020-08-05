import React from 'react' ;
import { Link } from 'react-router-dom' ;

interface textTypes {
  tagId : string ,
  tagName : string ,
  tagStyle : string
}

interface propsTypes {
  id : string ,
  textType : textTypes[] ,
  title : string ,
  publishTime : string ,
  context : string
}

const DetaiList = (props:any) => {
  // const handleTochangeIndex = () => {
  //   // props.tool(props.data);
  // }
  let data:propsTypes = props.data ;
  let { id = "", textType = [], title = "" , publishTime = "" , context = "" } = data  ;
  // let { tagId = "" ,tagName = "" , tagStyle= "" } = (textType as textTypes) ;
  return(
    <div className="DetailList-block">
      <Link to={`/article/${id}`}>
         <div className="type-text">
           {
             textType.map((item:textTypes, index:number) => {
               return (
                <span style={{background : item.tagStyle}}>{item.tagName}</span>
               )
             })
           }
         </div>
          <p className="title">{title}</p>
          <div className="other">
            <span className="item-likes">❤️</span>
            <span className="item-publishTime">{publishTime}</span>
          </div>
      </Link>
    </div>
  )
}


export default DetaiList ;