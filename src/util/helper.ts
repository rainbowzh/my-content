/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-06-10 19:52:12
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-06-10 19:52:47
 */ 

const random = () => { // 生成10-12位不等的字符串
  return Math.random().toString(36).slice(2); // 截取小数点后的字符串
}


export {
  random
}
