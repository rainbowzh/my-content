import React, { useRef, useState, useEffect } from 'react' ;
import CryptoJS from 'crypto-js' ;
import { postLogin } from '../../util/api' ;
import { useAppState } from '../../state' ;
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
  const [name, setName] = useState("") ;
  const [password, setPassword] = useState("") ;
  const [nametips, setNameTips] = useState("") ;
  const [passtips, setPassTips] = useState("") ;
  const [res, setRes] = useState(1) ;
  const [state, dispatch] = useAppState() ; //更改状态

  const handleName = (e:any) => {
    setName(e.target.value) ;
  }

  const handlePassword = (e:any) => {
    setPassword(e.target.value) ;
  }

  //处理登录逻辑
  const handleTosubmit = async () => {
    if((name.length>0)&&(password.length>0)&&(nametips.length<1)&&(passtips.length<1)){
      //加密，发起请求
      // let salt = window.localStorage.getItem('userSalt');
      let salt = "34565E5T3" ;
      if(salt){
        let saltPass = CryptoJS.HmacMD5(password, salt).toString(CryptoJS.enc.Hex);//加密
        let params = { name : name ,password : saltPass} ;
        let result:any = await postLogin(params) ;
        console.log('result',result);
        switch(result.status){
          case "0"://登录成功
          case "2"://注册成功
            window.location.href = window.location.origin ;
            break;
          default ://失败
            break;
        }
      }else{//请求salt
        
      }
      
    }else{
      setPassTips('未正确填写信息');
      console.log(33)
    }
  }

  function Debounce (fn:any){
    let timer:any = null ;
    let now = true ;
    return function(...args:any){
      if(now){
        fn.call(null, ...args) ;
        now = false ;
      }
      if(timer){
        clearTimeout(timer) ;
      }
      timer = setTimeout(() => {
        now = true ;
      },2000) ;
    }
  }

  useEffect(() => {
    console.log(name,password);
    //4到16位（数字、字母、下划线、减号
    let namePattern = /^[a-zA-Z0-9_-]{4,16}$/;
    //包括至少1个大写字母，1个小写字母，1个数字
    let passPattern = /^.*(?=.{6,20})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/ ;
    if(!namePattern.test(name) && name.length>0){
      setNameTips("4到16位（数字、字母、下划线、减号）");
    }else{
      setNameTips("");
    }
    if(!passPattern.test(password) && password.length > 0){
      setPassTips('至少6位1个大写字母,1个小写字母,1个数字')
    }else{
      setPassTips("");
    }

  },[name, password]);

  return (         
    <div className="loginPage-block">
      <div className="main-block">
        <div className="user-icon">
          <div className="img"></div>
        </div>
        <div className="user-name">
          <input type="text" name="username" id="name-input" onChange={(e) => handleName(e)} maxLength={16}/>
          {nametips == "" ? "" : <p>{nametips}</p> }
        </div>
        <div className="user-password">
          <input type="password" name="userpassword" id="password-input" onChange={(e) => handlePassword(e)} maxLength={20}/>
          {passtips == "" ? "" : <p>{passtips}</p>}
        </div>
        <div className="button-login" onClick={Debounce(handleTosubmit)}>登录</div>
      </div>
    </div>
  )                
}


export default LoginPage ;