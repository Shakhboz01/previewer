import React,{Component} from 'react'
import './App.css'
import {marked} from 'marked'

class App extends Component{
  state={
    markdown:""
  }
  // getMarkdownText() {
  //   var rawMarkup = marked.parse("This is _Markdown_.");
  //   return { __html: rawMarkup };
  // }
handleChange=(e)=>{
  this.setState({
    markdown:e.target.value
  })
}

  render(){
    const {markdown}=this.state;
    const texts=marked(markdown);
    return(
    <div>
        <h1 className="m-24 text-center ">Convert your markdown</h1>
        <div className='row'>
          <div className='col-md-6 '>
            <textarea placeholder='Enter your markdown here' id="editor" className="form-control text" value={markdown} onChange={this.handleChange}  />
          </div>
          <div id="preview" className='col-md-6 '>
            <div className="preview" dangerouslySetInnerHTML={{__html:texts}}  />
          </div>
        </div>
     </div>
    )
  }
}
export default App;