import React from 'react' ;
import { Link } from 'react-router-dom';


const ToolMenu = () => {
  return(
    <div className="ToolMenu-tips">
      <div className="tool-line"></div>
      <div className="tool-block">
        <ul>
          <li className="menu-item">首页</li>
          <li className="menu-item">发布</li>
          <li className="menu-item">列表</li>
        </ul>
      </div>
    </div>
  )
}


export default ToolMenu;