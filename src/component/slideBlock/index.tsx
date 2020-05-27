import React, { useState, useCallback, useEffect, useRef } from 'react' ;



const List = [
  {
    value : "0" ,
    url : "//pic8.58cdn.com.cn/nowater/tribenowatermark/n_v20fa9e655fd144b57a754612095907c0b.jpg"
  },
  {
    value : "1" ,
    url : "//pic8.58cdn.com.cn/nowater/tribenowatermark/n_v20fa9e655fd144b57a754612095907c0b.jpg"
  },
  {
    value : "2" ,
    url : "//pic8.58cdn.com.cn/nowater/tribenowatermark/n_v20fa9e655fd144b57a754612095907c0b.jpg"
  }
];


const SlideBlock = () => {
  const [curIndex, setCurIndex] = useState(0) ;

  //pre
  const handleToPre = () => {
    if(curIndex == 0) return;
    setCurIndex(curIndex - 1);
  }

  //next
  const handleToNext = () => {
    if(curIndex > List.length-1) return;
    setCurIndex(curIndex + 1)
  }

  console.log('xxx',curIndex)
  return(
    <div className="Slide-block">
      <div className="slide-main">
        {
          List.map( (item:any, index:number) => {
             return(
              <div 
                className={curIndex == item.value ? "slide-item width-frame" : "slide-item"} 
                key={index} 
                style={
                  {transform : `translate3d(0px ,${curIndex*-100}%,0px)`}
                }>
                <img src={curIndex == item.value ? item.url : ""} data-src={item.url}/>
                <div className="intro-item">{item.value}</div>
              </div>
            )
          })
        }
      </div>
      {
        curIndex == 0 ? ""
        : <div className="btn-pre" onClick={handleToPre}>←</div>
      }
      {
        curIndex == List.length -1 ? ""
        :  <div className="btn-next" onClick={handleToNext}>→</div>
      }
    </div>
  )
}


export default SlideBlock ;