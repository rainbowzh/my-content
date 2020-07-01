import React from 'react' ;
import { Link } from 'react-router-dom' ;


const DetaiList = (props:any) => {
  // const handleTochangeIndex = () => {
  //   // props.tool(props.data);
  // }
  
  return(
    <div className="DetailList-block">
      <Link to={`/article/${props.data.id}`}>
         <div className="type-text">专栏.user</div>
          <p className="title">{props.data.title}</p>
          <div className="other">
            <span>❤️</span>
            <span>{props.data.publishTime}</span>
          </div>
      </Link>
    </div>
  )
}


export default DetaiList ;