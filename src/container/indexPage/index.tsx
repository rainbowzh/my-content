import React, { useRef, useEffect, useCallback, useState } from 'react' ;
import { Link } from 'react-router-dom' ;
import axios from 'axios' ;
import { useAppState } from '../../state' ;


const IndexPage = (props:any) => {
  const [id, setId] = useState(0) ;
  const [state, dispatch] = useAppState() ; //更改状态
  // const decounceId = useDebounce(id, 2000) ;

  const handleClick = () => {
    console.log("id:",id) ;
    setId(id+1) ;
  }

  useEffect(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  },[]);
  

  //防抖
  function useDebounce(fn:any, delay:number) {
  // 存储去抖动后的值
    return useCallback(
      (...args:any) => {
        // 在延迟delay之后更新去抖动后的值
        const handler = setTimeout((...args:any) => {
          fn.call(null, ...args);
        }, delay);
        // 如果值改变了取消timeout (同样在delay改变或者unmount时生效)
        // 这就是我们通过延迟间隔内值没有被改变来达到防止值去抖动 清空timeout并且重新运行
        return () => {
          clearTimeout(handler);
        };
      },
      [fn, delay] // 只有当搜索值或者delay值发生改变时才会重新调用
    );
  }


  return (
    <div className="IndexPage-block">
      <div className="user-img">
      </div>
      <div className="enter-text" onClick={useDebounce(handleClick, 2000)}>
        <Link to="/intro">Enter</Link>
      </div>
      <div className="bruce">
        <ul className="bubble-bgwall">
          <li>Love</li> 
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
          <li>Love</li>
        </ul>
      </div>
    </div>
  )
}


export default IndexPage ;