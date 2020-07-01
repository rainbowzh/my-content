import React, { useState, useCallback, useEffect, useRef } from 'react' ;



const List = [
  {
    value : {
      id : "0" ,
      title : "短视频专区" ,
      tech : "使用到的技术 ：react-hook + ts + es6 + css3 + IntersectionObsever" ,
      detail : [
        "项目简介： 表现内容为短视频招聘相关，页面功能包含吸顶 ，上拉加载，下拉刷新，吸顶。为app内页面"  ,
        "技术支持： 使用reactHook+ts搭建整体项目结构，划分项目目录，进行组件拆分，封装常用的工具。项目中的上拉和下拉数据刷新使用的是新的Api-IntersectionObsever来监听进出入视口的变化" ,
        "技术难点： 下拉刷新在未使用第三方库的情况下,且兼容性好" ,
        "体验地址： https://zprecommend.58.com/api/find/?type=getBannerInfo#/"
      ]
    } ,
    url : " //pic1.58cdn.com.cn/nowater/cxnomark/n_v2bb23cd2ffaf64c0a856956f3a5d2f16e.jpg"
  },
  {
    value : {
      id : "1" ,
      title : "短视频专区" ,
      tech : "react-hook + ts + es6 + css3 + IntersectionObsever" ,
      detail : [
        "项目简介： 表现内容为短视频招聘相关，页面功能包含上拉加载，下拉刷新。为app内页面"  ,
        "技术支持： 使用reactHook+ts搭建整体项目结构，划分项目目录，进行组件拆分，封装常用的工具。<br/>项目中的上拉和下拉数据刷新使用的是新的Api-IntersectionObsever来监听进出入视口的变化" ,
        "技术难点： 下拉刷新在未使用第三方库的情况下,且兼容性好"
      ]
    } ,
    url : "//pic1.58cdn.com.cn/nowater/cxnomark/n_v2a0668b0308c94c6c86e811e355faed56.jpg"
  },
  {
    value : {
      id : "2" ,
      title : "短视频专区" ,
      tech : "react-hook + ts + es6 + css3 + IntersectionObsever" ,
      detail : [
        "项目简介： 表现内容为短视频招聘相关，页面功能包含上拉加载，下拉刷新。为app内页面"  ,
        "技术支持： 使用reactHook+ts搭建整体项目结构，划分项目目录，进行组件拆分，封装常用的工具。<br/>项目中的上拉和下拉数据刷新使用的是新的Api-IntersectionObsever来监听进出入视口的变化" ,
        "技术难点： 下拉刷新在未使用第三方库的情况下,且兼容性好"
      ]
    } ,
    url : "//pic1.58cdn.com.cn/nowater/cxnomark/n_v2ca165d928f814e13a14c1bff88389fc1.jpg"
  },{
    value : {
      id : "3" ,
      title : "短视频专区" ,
      tech : "react-hook + ts + es6 + css3 + IntersectionObsever" ,
      detail : [
        "项目简介： 表现内容为短视频招聘相关，页面功能包含上拉加载，下拉刷新。为app内页面"  ,
        "技术支持： 使用reactHook+ts搭建整体项目结构，划分项目目录，进行组件拆分，封装常用的工具。<br/>项目中的上拉和下拉数据刷新使用的是新的Api-IntersectionObsever来监听进出入视口的变化" ,
        "技术难点： 下拉刷新在未使用第三方库的情况下,且兼容性好"
      ]
    } ,
    url : "//pic1.58cdn.com.cn/nowater/cxnomark/n_v2cf5d6c9adaef41dea5629094f8b25322.jpg"
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
                <img src={curIndex == item.value.id ? item.url : ""} data-src={item.url}/>
                <div className="intro-item">
                  <p className="pro-title">{item.value.title}</p>
                  <p className="pro-tech">{item.value.tech}</p>
                 {
                   item.value.detail.map((itemIn:any, indexIn:number) => {
                     return  <p className="pro-detail" key={indexIn}>{itemIn}</p>
                   })
                 }
                </div>
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