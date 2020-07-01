import React, { useEffect, useState } from 'react' ;
import { Header, DetaiList } from '../../component' ;
import { getArticleList } from '../../util/api' ;


const ListPage  = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let res = await getArticleList();
      console.log('list---',res.list) ;
      setList(res.list);
    }
    getList();
  },[]);


  return(
    <div className="ListPage-block">
      <Header/>
      <div className="center-List">
        {
          list.map( (item:any, index:number) => {
            return(
              <DetaiList data={item} key={index}/>
            )
          })
        }
      </div>
    </div>
  )
}


export default ListPage ;