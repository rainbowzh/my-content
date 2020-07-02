/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-07-02 16:44:06
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-07-02 17:11:44
 */ 
export interface TagType {
  tagName : string ,
  tagId : strig ,
  tagStyle : string
}

export interface postArticleType {
  title : string ,
  context : string,
  textType : {
    tagName : string ,
    tagId : string ,
    tagStyle : string 
  } | {}
}
