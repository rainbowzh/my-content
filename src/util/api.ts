/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-11 10:37:28
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-27 10:40:22
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


const postLogin = (value:any) => {
  return axios.post('//localhost:3000/api/user/login' ,{
    username : value.name ,
    password : value.password
  })
  .then((res) => {
    console.log(res) ;
    return res.data;
  })
  .catch((err) => {
    console.log(err) ;
  }) 
}


//发布文章
const postArticle = (value:any) => {
  return axios.post('//localhost:3000/api/article/save', {
    title : value.title ,
    context : value.context
  })
  .then((res) => {
    console.log(res) ;
    return res.data ;
  })
  .catch((err) => {
    console.log(err) ;
  })
}

//获取文章列表
const getArticleList = () => {
  return axios.get('//localhost:3000/api/article/list', {
    timeout : 5000 
  })
  .then((res) => {
    console.log(res) ;
    return res.data ;
  })
  .catch((err) => {
    console.log(err) ;
  })
}



export {
  goToLogin ,
  postLogin ,
  postArticle ,
  getArticleList
}