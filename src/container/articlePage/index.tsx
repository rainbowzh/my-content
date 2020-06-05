import React, { useEffect, useState } from 'react' ;
import { Header, DetaiList } from '../../component' ;
import { getArticleList } from '../../util/api' ;

const ArticlePage = () => {
  const [list, setList] = useState([]) ;
  const [content, setContent] = useState("暂无内容") ;
  useEffect(() =>  {
    const getList = async () => {
      let res = await getArticleList();
      console.log('list---',res.list) ;
      setList(res.list);
      // if()
      // setContent(res.list[2].context);
    }
    getList();
  },[]);

  //切换了文章
  const updateContent = (value:any) => {
    const { context } = value;
    setContent(context) ;
  }

  return (
    <React.Fragment>
      <Header/>
      <div className="ArticlePage-block">
        <div className="leftList">
          <div className="center-extends">
           
            {
              list.map( (item:any, index:number) => {
                return(
                  <DetaiList data={item} key={index} tool={updateContent}/>
                )
              })
            }
          </div>
          <div className="content-main" dangerouslySetInnerHTML={{__html: content}}>
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