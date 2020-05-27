import React from 'react' ;
import ShapeIntro from '../shapIntro' ;
import { SlideBlock, ToolMenu } from '../../component';
const IntroPage = () => {
  return(
    <div className="IntroPage-block">
      <ul className="person-cards-content">
        <li className="person-cards-block">
          <div className="normal-intro">
            <div className="title-img"></div>
            <div className="title-intro">我的工作</div>
          </div>
          <div className="reverse-detail">哈哈，反过来了</div>
        </li>
        <li className="person-cards-block">
          <div className="normal-intro">
            <div className="title-img"></div>
            <div className="title-intro">我的工作</div>
          </div>
          <div className="reverse-detail">哈哈，反过来了</div>
        </li>
        <li className="person-cards-block">
          <div className="normal-intro">
            <div className="title-img"></div>
            <div className="title-intro">我的工作</div>
          </div>
          <div className="reverse-detail">哈哈，反过来了</div>
        </li>
        <li className="person-cards-block">
          <div className="normal-intro">
            <div className="title-img"></div>
            <div className="title-intro">我的工作</div>
          </div>
          <div className="reverse-detail">哈哈，反过来了</div>
        </li>
        <li className="person-cards-block">
          <div className="normal-intro">
            <div className="title-img"></div>
            <div className="title-intro">我的工作</div>
          </div>
          <div className="reverse-detail">哈哈，反过来了</div>
        </li>
        <li className="person-cards-block">
          <div className="normal-intro">
            <div className="title-img"></div>
            <div className="title-intro">我的工作</div>
          </div>
          <div className="reverse-detail">哈哈，反过来了</div>
        </li>
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