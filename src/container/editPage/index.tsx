import React from 'react' ;
import { Header } from '../../component' ;


const EditPage = () => {
  return(
    <React.Fragment>
      <Header/>
      <div className="EditPage-block">
        <div className="left">
          <div className="btn-add-new">新建文章</div>
          <div className="content-newlist">
            <ul>
              <li className="list-item">20201212</li>
              <li className="list-item">20120111</li>
              <li className="list-item">20101211</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="text-title"></div>
          <div className="text-tool"></div>
          <div className="text-content"></div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default EditPage ;