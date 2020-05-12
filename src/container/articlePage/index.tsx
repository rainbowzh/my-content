import React from 'react' ;
import { Header } from '../../component' ;

const ArticlePage = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="ArticlePage-block">
        <div className="leftList">
          <div className="center-extends"></div>
          <div className="content-main">
            1.下午3点至4点展示，每天展示1次；
            2.点击看直播按钮进入直播间，点击X关闭弹窗，关闭后当天不再展示；
            3.弹窗物料根据当天直播内容有所不同，按照下述对应日期上线。
          </div>
        </div>
        <div className="rightList">
          <span>热门</span>
          <span>热门职位</span>
          <span>热门职位</span>
          <span>热门职位专区</span>
          <span>热门职位</span>
          <span>热门位</span>
          <span>热门位</span>
          <span>热门职位</span>
          <span>热门职位</span>
          <span>热门职位</span>
        </div>
      </div>
    </React.Fragment>
  )
}


export default ArticlePage;