import React, { useEffect, useState } from 'react' ;
import { Header, DetaiList } from '../../component' ;
import { getCurIdArticle } from '../../util/api' ;
import { withRouter } from 'react-router-dom' ;


const ArticlePage = (props:any) => {
  const [data, setData] = useState({publishTime : "" , title : "" ,context : "暂无更多"}) ;
  // const [content, setContent] = useState("暂无内容") ;

  useEffect(() =>  {
    const getId = () => {
      let result:string = props.location.pathname.split("/")[2] || "";
      return result ;
    }
    const getDetail = async () => {
      let res = await getCurIdArticle(getId());
      console.log('list---',res) ;
      setData(res);
    }
    getDetail();
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  },[]);


  //切换了文章
  // const updateContent = (value:any) => {
  //   const { context } = value;
  //   setContent(context) ;
  // }

  return (
    <React.Fragment>
      <Header/>
      <div className="ArticlePage-block">
        <div className="content-main" >
          <div className="article-page-title">{data.title}</div>
          <div className="article-page-main custom-html-style" dangerouslySetInnerHTML={{__html: data.context}}></div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default withRouter(ArticlePage);