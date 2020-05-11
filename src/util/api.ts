/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-11 10:37:28
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-11 16:05:31
 */
import axios from 'axios' ;
const host = '//localhost:3000/users' ;

const login = `${host}/registe` ;




const goToLogin = (value:any) => {
  return axios.get(login, {
    params : {
      name : value.name ,
      password : value.password
    } ,
    // withCredentials : true ,
    timeout : 5000,
  }).then((res) => {
    console.log('login:',res) ;
    return res.data ;
  }).catch((err) => {
    console.log('err:',err);
  })
}


export {
  goToLogin
}