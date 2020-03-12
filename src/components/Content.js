import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Answer from "./Answer.js"
import keysData from "./Keys.js"
import Notes from "./Notes.js"
import Scales from "./Scales.js"
import Frets from "./Frets.js"

class Content extends React.Component{
    constructor(){
        super()

        this.state = {
            notes: [],
            displayanswer: false
        }
        this.calculateKey = this.calculateKey.bind(this)
    }

    updateNotes(value){
        this.setState({notes : value}, () => this.calculateKey())  
    }   

    //Add +1 to score for every key that contains selected note
    calculateKey(){
        keysData.forEach((key) =>{
            key.notes.forEach((note) =>{
                this.state.notes.forEach((statenote) =>{
                    if(note === statenote){
                        key.score++ 
                    }
                })
            })
        })
        this.selectKey()
    }

    //Deselect answer screen when clicking on header links
    componentDidUpdate(prevProps) {
        if (prevProps.pagenum !== this.props.pagenum) 
            this.setState({displayanswer : false})    
      }

    selectKey(){
       keysData.sort(this.compare)
       this.changeDisplay();
    }
    //Change between selecting notes/frets and answer
    changeDisplay(){
        if(!this.state.displayanswer)
            this.setState({displayanswer : true})
        else
            this.setState({displayanswer : false})
    }   

    //Order keys based on score
    compare(a, b) {
        const scoreA = a.score;
        const scoreB = b.score;
      
        let comparison = 0;
        if (scoreA > scoreB) {
          comparison = -1;
        } else if (scoreA < scoreB) {
          comparison = 1;
        }
        return comparison;    
    }
    
    render(){
        if(this.props.pagenum === 0){
            return(
      
                <div>
                    <Jumbotron className="contentContainer" style={{marginTop: "25px"}}>
                   {this.state.displayanswer
                    ? <Answer changeDisplay={this.changeDisplay.bind(this)}/>
                    : <Notes updateNotes={this.updateNotes.bind(this)}/>
                   }
                    </Jumbotron>
                </div>
    
            )
                
        }
        if(this.props.pagenum === 1){
            return(
      
                <div>
                    <Jumbotron className="contentContainer" style={{marginTop: "25px", height:"800px", width:"fit-content"}}>
                    {this.state.displayanswer
                    ? <Answer changeDisplay={this.changeDisplay.bind(this)}/>
                    : <Frets updateNotes={this.updateNotes.bind(this)}/>
                   }
                    </Jumbotron>
                </div>
    
            )
                
        }
        if(this.props.pagenum === 2){
            return(
      
                <div>
                    <Jumbotron className="contentContainer" style={{marginTop: "25px", width: "fit-content"}}>
                        <Scales />
                    </Jumbotron>
                </div>
    
            )
                
        }

    }
}

export default  Content