import React, { useState } from 'react' ;
import ShapeIntro from '../shapIntro' ;
import { SlideBlock, ToolMenu } from '../../component';
const IntroPage = () => {
  const [curEnter, setCurEnter]= useState(-1) ;
  const list = [
    {
      front : "个人资料" ,
      back : [
        "姓名 ： 周虹" ,
        "性别 ： 女" ,
        "求职意向 ： web前端开发工程师" ,
        "邮箱 ： 17691148782@163.com"
      ]
    } ,{
      front : "个人经历" ,
      back : [
        "招聘发现页 ： 周虹" ,
        "性别 ： 女" ,
        "求职意向 ： web前端开发工程师" ,
        "邮箱 ： 17691148782@163.com"
      ]
    },{
      front : "个人经历" ,
      back : [
        "招聘发现页 ： 周虹" ,
        "性别 ： 女" ,
        "求职意向 ： web前端开发工程师" ,
        "邮箱 ： 17691148782@163.com"
      ]
    },{
      front : "个人经历" ,
      back : [
        "招聘发现页 ： 周虹" ,
        "性别 ： 女" ,
        "求职意向 ： web前端开发工程师" ,
        "邮箱 ： 17691148782@163.com"
      ]
    },{
      front : "个人经历" ,
      back : [
        "招聘发现页 ： 周虹" ,
        "性别 ： 女" ,
        "求职意向 ： web前端开发工程师" ,
        "邮箱 ： 17691148782@163.com"
      ]
    },{
      front : "个人经历" ,
      back : [
        "招聘发现页 ： 周虹" ,
        "性别 ： 女" ,
        "求职意向 ： web前端开发工程师" ,
        "邮箱 ： 17691148782@163.com"
      ]
    }
  ];
  const handleEnterBlock = (index:number) => {
    // 处理翻转
    setCurEnter(index);
  }

  return(
    <div className="IntroPage-block">
      <ul className="person-cards-content">
        {
          list.map((item:any, index:number) => {
            return (
              <li className={curEnter == index ? "person-cards-block person-cards-block-hide": "person-cards-block"} key={index} onMouseEnter={() => handleEnterBlock(index)}>
                <div className="normal-intro">
                  <div className="title-img"></div>
                  <div className="title-intro">{item.front}</div>
                </div>
                <div className={curEnter == index ? "reverse-detail reverse-detail-show": "reverse-detail"}>
                  {
                    item.back.map((initem:any, inindex:number) => {
                      return(
                        <p>{initem}</p>
                      )
                    })
                  }
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className="icon-more"></div>
      <div className="userTool-content">
        <ShapeIntro/>
      </div>
      <div className="icon-more"></div>
      <SlideBlock/>
      <div className="icon-more"></div>
      <div className="extends-intro">
        <div className="gotoList"></div>
        <div className="gotoEdit"></div>
      </div>
      <ToolMenu/>
    </div>
  )
}


export default IntroPage ;