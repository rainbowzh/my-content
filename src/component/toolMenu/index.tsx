import React from 'react' ;
import { Link } from 'react-router-dom';


const ToolMenu = () => {
  return(
    <div className="ToolMenu-tips">
      <div className="tool-line">
        <div className="tool-block">
          <ul>
            <Link to="/"><li className="menu-item">首页</li></Link>
            <Link to="/edit"><li className="menu-item">发布</li></Link>
            <Link to="/list"><li className="menu-item">列表</li></Link>
          </ul>
        </div>
      </div>

    </div>
  )
}


export default ToolMenu;