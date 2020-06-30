import React from 'react' ;
// import ReactDOM from 'react-dom' ;
import MdEditor from 'react-markdown-editor-lite' ;
import MarkdownIt from 'markdown-it' ;
import 'react-markdown-editor-lite/lib/index.css';

// const MarkedPage = ()  => {
//   const mock_content:string = "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it." ;
//   return(
//     <div className="MarkedPage-block">
//       <MdEditor
//         value={mock_content}
//         style={{height: '400px'}}
//       />
//     </div>
//   )
// }

const mock_content = "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it."

const MOCK_DATA = "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it."
export default class MarkedPage extends React.Component {
  mdParser:any = null ;
  constructor(props:any) {
    super(props)
    this.mdParser = new MarkdownIt(/* Markdown-it options */)
  }
  handleEditorChange ({html, text}:any) {    
    console.log('handleEditorChange', html, text)
  }
  render() {
    return (      
      <div className="Markedpage-block">
        <MdEditor
          value={MOCK_DATA}
          renderHTML={(text) => this.mdParser.render(text)}
          onChange={this.handleEditorChange} 
        />                
      </div>
    )
  }
}
// export default MarkedPage ;