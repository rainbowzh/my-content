import React from 'react' ;

const LoginPage = () => {
  return (
    <div className="loginPage-block">
      <div className="main-block">
        <div className="user-icon">
          <div className="img"></div>
        </div>
        <div className="user-name">
          <input type="text" name="username" id=""/>
        </div>
        <div className="user-password">
          <input type="password" name="userpassword" id=""/>
        </div>
        <div className="button-login">登录</div>
      </div>
    </div>
  )
}


export default LoginPage ;