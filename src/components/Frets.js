import React from "react"
import fretboard from ".././img/fretboard.png"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"

let options = document.getElementsByTagName("option")
const notes = ["E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B", "C", "C#/Db", "D", "D#/Eb"]

class Frets extends React.Component{
    constructor(){
        super()
        this.getFrets = this.getFrets.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    //Determine note depending on selected fret and string
    handleClick(){
        let returnvalue
        let returnstr = []
        for(let i=0; i<options.length; ++i){
            if(options[i].selected && options[i].value !== ""){
                returnvalue = Number(options[i].value) 
                switch(options[i].className){
                    case "1":
                        break
                    case "2":
                        returnvalue = returnvalue + 5
                        break
                    case "3":
                        returnvalue +=10
                        break
                    case "4":
                        returnvalue +=3
                        break
                    case "5":
                        returnvalue +=7
                        break
                    case "6":
                        break
                    default:
                        console.log("error")
                        break
                }
                if(returnvalue >= 12){
                    returnvalue -=  12
                }
            }

              if(!returnstr.includes(notes[returnvalue]) && returnvalue !== undefined) {
                    returnstr.push(notes[returnvalue])    
            }
        }
        this.props.updateNotes(returnstr)
    }

    getFrets(value){
        return(
            <Row className = "fretSelect">
            <Form.Control as="select" size="sm">
                                    <option className={value}></option>
                                    <option className={value}>0</option>
                                    <option className={value}>1</option>
                                    <option className={value}>2</option>
                                    <option className={value}>3</option>
                                    <option className={value}>4</option>
                                    <option className={value}>5</option>
                                    <option className={value}>6</option>
                                    <option className={value}>7</option>
                                    <option className={value}>8</option>
                                    <option className={value}>9</option>
                                    <option className={value}>10</option>
                                    <option className={value}>11</option>
                                    <option className={value}>12</option>
                                    <option className={value}>13</option>
                                    <option className={value}>14</option>
                                    <option className={value}>15</option>
                                    <option className={value}>16</option>
                                    <option className={value}>17</option>
                                    <option className={value}>18</option>
                                    <option className={value}>19</option>
                                    <option className={value}>20</option>
                                    <option className={value}>21</option>
                                    <option className={value}>22</option>
                                    <option className={value}>23</option>
                                    <option className={value}>24</option>
            </Form.Control>
            </Row>
        )
    }

    render(){
        return(
            <div>
                <h1 style={{position: "relative", top: "-20px"}}>Tuning: E Standard</h1>
                <img  id="guitarimg"alt="Guitar"src={fretboard} style={{width: "auto",  height: "100%"}}></img>
                <Form className ="fretRow">
                <Form.Group controlId="exampleForm.ControlSelect2">
                    {this.getFrets(1)}
                    {this.getFrets(2)}
                    {this.getFrets(3)}
                    {this.getFrets(4)}
                    {this.getFrets(5)}
                    {this.getFrets(6)}
                </Form.Group>
                </Form>
                <Button style = {{position: "relative", top: "-300px"}} onClick={() => this.handleClick()} id="submitBtn" variant="primary">Find Key</Button>   
            </div>

        )
    }
}


export default Frets