import React from 'react' ;


const DetaiList = (props:any) => {
  const handleTochangeIndex = () => {
    props.tool(props.data);
  }
  
  return(
    <div className="DetailList-block" onClick={handleTochangeIndex}>
      <p className="title">{props.data.title}</p>
      <div className="other">
        <span>❤️</span>
        <span>{props.data.publishTime}</span>
      </div>
    </div>
  )
}


export default DetaiList ;