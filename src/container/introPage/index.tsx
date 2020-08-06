import React, { useState, useEffect, useRef, useCallback } from 'react' ;
import ShapeIntro from '../shapIntro' ;
import { SlideBlock, ToolMenu } from '../../component';
import { sayWhat } from '../../util/api' ;



const IntroPage = () => {
  const [curEnter, setCurEnter]= useState(-1) ;
  const [textLen, setTextLen] = useState(0) ;
  const textareaRef = useRef<any>(null) ;
  const inputRef = useRef<any>(null) ;
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

  useEffect(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  },[]);


  //提交留言
  const handleToSubmit = async() => {
    let sayText = textareaRef.current.value ;
    let nickName = inputRef.current.value ;
    let res = await sayWhat({sayText , nickName});
    if(res) {
      console.log('submit' ,res) ;
      window.location.href = `//zhsroom.cn/web/mylog#/list` ;
    }else{
      console.log('defeat',res) ;
    }
  } ;
  //留言内容
  const handleChange = () => {
    console.log('textareaRef.current',textareaRef.current.value.length)
    setTextLen(textareaRef.current.value.length);
  } ;

  //防抖
  const useDebounce = (fn:any, delay:number = 300, dep:any[] = []) => {
    const { current } = useRef({ fn, timer: null });
    useEffect(function () {
      current.fn = fn;
    }, [fn]);

    return useCallback(function f(this:typeof f ,...args) {
      if (current.timer) {
        clearTimeout((current.timer as any));
      }
      (current.timer as any)  = setTimeout(() => {
        current.fn.call(this, ...args);
      }, delay);
    }, dep)
  };

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
                        <p key={inindex}>{initem}</p>
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
        <textarea name="youSaid" id="" cols={30} rows={10} className="youSaid-block" placeholder="有什么想对我说的畅所欲言吧~" ref={textareaRef} onChange={useDebounce(handleChange)}></textarea>
        <input type="text" className={textLen > 15 ? "youSaid-name" : "youSaid-name visible"} placeholder="留下你的昵称吧~" ref={inputRef}/>
        <div className="youSaid-submit" onClick={useDebounce(handleToSubmit)}>提交</div>
      </div>
      <ToolMenu/>
    </div>
  )
}


export default IntroPage ;