import React from "react"
import Header from "./Header.js"
import Content from "./Content"
import "./style.css"

class App extends React.Component{
    constructor(){
        super()

        this.state = {
            pagenum: 0
        }
    }
    componentDidMount(){
        document.title = "Key Finder"
    }
    changePage(value){
        this.setState({pagenum : value})
    }

   render(){
       return( 
           <div>
                <Header changePage = {this.changePage.bind(this)}/>
                <Content pagenum = {this.state.pagenum}/>
           </div>
       )
   }
}


export default App