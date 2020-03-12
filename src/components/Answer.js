import React from "react"
import keysData from "./Keys"
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

class Answer extends React.Component{

    checkScores(){
        if(keysData[0].score >= 6){
            return (
            <div>
                <h1 id="keyfoundid">Key Found: 
                <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay = {<Tooltip>{keysData[0].desc}</Tooltip>}
                >
                <Button variant="light" id="keyfoundbtn">{keysData[0].key}</Button>
                </OverlayTrigger>
                </h1>
               

                <Table striped bordered hover size="sm" variant="dark">
                <thead>
                <tr>
                    <th>Other close keys</th>
                    <th>Notes</th>
                    <th>Key</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>{keysData[1].notes[0] + ", " + keysData[1].notes[1] + ", " + keysData[1].notes[2] + ", " + keysData[1].notes[3] + ", " + keysData[1].notes[4] + ", "
                     + keysData[1].notes[5] + ", " + keysData[1].notes[6] + ", "}</td>              
                    <td>{keysData[1].key}</td>

                </tr>
                <tr>
                    <td>2</td>
                    <td>{keysData[2].notes[0] + ", " + keysData[2].notes[1] + ", " + keysData[2].notes[2] + ", " + keysData[2].notes[3] + ", " + keysData[2].notes[4] + ", "
                     + keysData[2].notes[5] + ", " + keysData[2].notes[6] + ", "}</td>              
                    <td>{keysData[2].key}</td>

                </tr>
                <tr>
                <td>3</td>
                <td>{keysData[3].notes[0] + ", " + keysData[3].notes[1] + ", " + keysData[3].notes[2] + ", " + keysData[3].notes[3] + ", " + keysData[3].notes[4] + ", "
                     + keysData[3].notes[5] + ", " + keysData[3].notes[6] + ", "}</td>              
                    <td>{keysData[3].key}</td>
                </tr>
                </tbody>
                </Table>
                <Button variant="primary" style={{marginTop: "50px"}} onClick={() => this.props.changeDisplay()}>Search Again</Button>
                {    keysData.forEach((key)=>{
      key.score = 0
    })}
            </div>
            )
        }
        else{
          return (
            <div>
              <h1>No Key Found</h1>
              <span>Keys close to input: </span>
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                <tr>
                    <th>Relevancy</th>
                    <th>Notes</th>
                    <th>Key</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>{keysData[0].notes[0] + ", " + keysData[0].notes[1] + ", " + keysData[0].notes[2] + ", " + keysData[0].notes[3] + ", " + keysData[0].notes[4] + ", "
                     + keysData[0].notes[5] + ", " + keysData[0].notes[6] + ", "}</td>              
                    <td>{keysData[0].key}</td>

                </tr>
                <tr>
                    <td>2</td>
                    <td>{keysData[1].notes[0] + ", " + keysData[1].notes[1] + ", " + keysData[1].notes[2] + ", " + keysData[1].notes[3] + ", " + keysData[1].notes[4] + ", "
                     + keysData[1].notes[5] + ", " + keysData[1].notes[6] + ", "}</td>              
                    <td>{keysData[1].key}</td>

                </tr> 
                <tr>
                <td>3</td>
                <td>{keysData[2].notes[0] + ", " + keysData[2].notes[1] + ", " + keysData[2].notes[2] + ", " + keysData[2].notes[3] + ", " + keysData[2].notes[4] + ", "
                     + keysData[2].notes[5] + ", " + keysData[2].notes[6] + ", "}</td>              
                    <td>{keysData[2].key}</td>
                </tr>
                </tbody>
                </Table>
                <Button variant="primary" style={{marginTop: "50px"}} onClick={() => this.props.changeDisplay()}>Search Again</Button>
                {    keysData.forEach((key)=>{
      key.score = 0
    })}
            </div>    
          )       
    }
  }

    render(){
        return(
            <div>  
                 {this.checkScores()}
            </div>

        )
    }
}

export default Answer