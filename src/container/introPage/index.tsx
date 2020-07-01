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
      front : "工作经历" ,
      back : [
        "公司 ： 58同城" ,
        "职务 ： web前端开发工程师" ,
        "工作内容 ： 开发新项目维护老项目，产出公共组件和工具，相关页面的性能优化和技术创新~" ,
        "工作职责 ： 负责58招聘全职C端所有项目的开发和维护，涉及PC/M/APP"
      ]
    },{
      front : "项目经历" ,
      back : [
        "招聘发现页 ： 单页面，使用PWA和骨架屏优化" ,
        "IM推荐消息页 ： 职位列表为主，app内push页面，支持上拉加载更多和职位标签的切换" ,
        "短视频专区 ： 以短视频招聘为主，使用react-hook+ts为整体架构，支持上拉刷新和下拉加载" ,
        "优质职位专区 ： 主要为职位列表和兼职引导。包含下拉刷新，职位标签切换和职位订阅刷新功能，产出组件"
      ]
    },{
      front : "我的技能" ,
      back : [
        "我 ： 100%" ,
        "html+css ： 30%" ,
        "react ： 30%" ,
        "webpack ： 10%" ,
        "js/es6 ： 30%"
      ]
    },{
      front : "教育背景" ,
      back : [
        "时间 ： 2014/9-2018/7" ,
        "学校 ： 西安邮电大学" ,
        "专业 ： 计算机科学与技术" ,
        "学位 ： 本科"
      ]
    },{
      front : "其他经历" ,
      back : [
        "有待补充" ,
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
        <textarea name="youSaid" id="" cols={30} rows={10} className="youSaid-block" placeholder="有什么想对我说的畅所欲言吧~"></textarea>
        <div className="support"></div>
        <div className="unsupport"></div>
        <div className="youSaid-submit">提交</div>
      </div>
      <ToolMenu/>
    </div>
  )
}


export default IntroPage ;