import React, { useState, useEffect, useRef, useCallback } from 'react' ;
// import ReactDOM from 'react-dom' ;
import MdEditor from 'react-markdown-editor-lite' ;
import MarkdownIt from 'markdown-it' ;
import 'react-markdown-editor-lite/lib/index.css';
import { postArticle, getTagList } from '../../util/api' ;
import { Modal } from 'antd' ;
import TYPE from './index.d';

const MarkedPage = ()  => {
  const [visible, setVisible] = useState(false) ; //是否出现发布提示
  const [html, setHtml] = useState("") ;//转换成的html
  const [title, setTitle] = useState(new Date().toLocaleDateString()); //文章title
  const [tagList, setTagList] = useState([]) ;//标签数组
  const [curTag, setCurTag] = useState({}) ;//发布选中的标签
  const [actived, setActived]  = useState([]); //选择标签数组

  let inputValue:any = useRef(null);

  const mdParser = new MarkdownIt(/* Markdown-it options */) ;
  const mock_content:string = "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it." ;

  //编辑页面值
  const handleEditorChange = ({html , text}:any) => {
    // console.log('handleEditorChange', html, text)
    setHtml(html);
  }

  //是否出现发布提示
  const handleToShowBlock = (e:any) => {
    e.nativeEvent.stopImmediatePropagation();
    // e.stopPropagation() ;
    setVisible(!visible);
  }

  //发布
  const handleToSubmit = (e:any) => {
    e.stopPropagation() ;
    console.log("html",html,title);
    
    let params:TYPE.postArticleType = {
      title : title ,
      context : html ,
      textType : curTag
    }
    postArticle(params).then((res) => {
      if(res.status == '0'){
         Modal.success({
          title : "发布成功" ,
          onOk : () => {
             window.location.href= "//49.235.235.22:3000/web/mylog#/article";
          }
        })
      }else{
         Modal.error({
          title : "发布失败" ,
        })
      }
    }) ;
  }


  //标题设定
  const handleTitleChange = () => {
    setTitle(inputValue.current.value);
    console.log("e",inputValue.current.value);
  }

  //发布前选定标签
  const handleToChooseTag = (item:TYPE.TagType, e:any) => {
    // console.log(item);
    // e.stopPropagation();
    setCurTag(item);
    let temp =  e.target.className ;
    console.log('temp',temp, temp.indexOf("actived"));
    if(temp.indexOf("actived") == -1) {
      e.target.className += ' actived' ;
      console.log('temp',temp, temp.indexOf("actived"));
    }
    else{
      e.target.className = temp.slice(0, temp.indexOf("actived") - 1 );
    }
    // console.log('e',e.target.className);
  }

  //触发其他地方点击关闭
  const handleShowTags = (e:any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }


  //
  useEffect(() => {
    document.addEventListener('click', () => {
      setVisible(false);
    });
    const getTagData = async () => {
      let res = await getTagList();
      setTagList(res);
    }
    getTagData();
  },[]);


  return(
    <div className="MarkedPage-block">
      <div className="Marked-nav-bar">
        <input type="text" ref={inputValue} className="article-title" placeholder="请输入文章标题..." onChange={() => handleTitleChange()}/>
        <div className="save-intime">已自动保存</div>
        <div className="article-publish" onClick={(e) => handleToShowBlock(e)}>发布
          <div className={visible ? "selectType" : "selectType-hidden"} onClick={(e) => handleShowTags(e)}>
            <div className="type-content">
              {
                tagList.map((item:any, index:number) => {
                  return (
                    <span className="item-type" key={index} onClick={(e) => handleToChooseTag(item , e)}>{item.tagName}</span>
                  )
                })
              }
            </div>
            <div className="button-submit" onClick={(e) => handleToSubmit(e)}>确定发布</div>
          </div>
        </div>
        <div className="user-icon"></div>
      </div>
      <MdEditor
        value={mock_content}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange} 
      />
    </div>
  )
}

export default MarkedPage ;