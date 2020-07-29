/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-11 10:37:28
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-07-29 16:41:36
 */
import axios from 'axios' ;
const host = '//zhsroom.cn/api' ;


const postLogin = (value:any) => {
  return axios.post(`${host}/user/login` ,{
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
  return axios.post(`${host}/article/save`, {
    title : value.title ,
    context : value.context ,
    textType : value.textType || {}
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
  return axios.get(`${host}/article/list`, {
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

//获取当前id的文章
const getCurIdArticle = (id:string) => {
  return axios.get(`${host}/article/detail`, {
    params : {
      id : id
    },
    timeout : 5000
  })
  .then((res) => {
    console.log(res);
    return res.data.data ;
  })
  .catch((err) => {
    console.log(err) ;
  })
}


//获取标签列表
const getTagList = () => {
  return axios.get(`${host}/article/tagList` ,{
    timeout : 5000 
  })
  .then((res) => {
    console.log(res);
    return res.data.data ;
  })
  .catch((err) => {
    console.log(err) ;
  })
}

export {
  postLogin ,
  postArticle ,
  getArticleList ,
  getCurIdArticle ,
  getTagList
}