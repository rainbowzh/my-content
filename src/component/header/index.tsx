import React from 'react' ;

const Header = () => {
  return(
    <div className="header-block">
      <div className="search-title">
        <div className="logo-left">
          {/* <img src="//pic1.58cdn.com.cn/nowater/cxnomark/n_v2bb0d176220354a72b027acca296439b2.png" alt=""/> */}
          <img src="//pic1.58cdn.com.cn/nowater/cxnomark/n_v229d1e5aebc3c4682a939caf98eae35ae.png" alt=""/>
        </div>
        <div className="title-welcome">welcome</div>
        <input type="text" placeholder="search..."/>
      </div>
    </div>
  )
}

export default Header ;