import React from "react"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
let options = document.getElementsByTagName("option")

class Notes extends React.Component{
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        let returnstr = []
        for(let i=0; i<options.length; ++i){
            if(options[i].selected && options[i].value !== "" && !returnstr.includes(options[i].value)){
                returnstr.push(options[i].value)
               // returnstr = returnstr.concat(options[i].value)       
            }
        }
        this.props.updateNotes(returnstr)
    }
    render(){
        return(
            <div>
                <Form> 
                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label id="formlabel">Select Notes</Form.Label>
                            <Row className="scaleRow">    
                            <Col>
                            <Form.Control as="select" size="sm">
                                <option></option>
                                <option>A</option>
                                <option>A#/Bb</option>
                                <option>B</option>
                                <option>C</option>
                                <option>C#/Db</option>
                                <option>D</option>
                                <option>D#/Eb</option>
                                <option>E</option>
                                <option>F</option>
                                <option>F#/Gb</option>
                                <option>G</option>
                                <option>G#/Ab</option>
                            </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control as="select" size="sm" id="formGroup">
                                <option></option>
                                <option>A</option>
                                <option>A#/Bb</option>
                                <option>B</option>
                                <option>C</option>
                                <option>C#/Db</option>
                                <option>D</option>
                                <option>D#/Eb</option>
                                <option>E</option>
                                <option>F</option>
                                <option>F#/Gb</option>
                                <option>G</option>
                                <option>G#/Ab</option>
                            </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control as="select" size="sm" id="formGroup">
                                <option></option>
                                <option>A</option>
                                <option>A#/Bb</option>
                                <option>B</option>
                                <option>C</option>
                                <option>C#/Db</option>
                                <option>D</option>
                                <option>D#/Eb</option>
                                <option>E</option>
                                <option>F</option>
                                <option>F#/Gb</option>
                                <option>G</option>
                                <option>G#/Ab</option>
                            </Form.Control>
                            </Col>
                            </Row>
                            <Row className="scaleRow">    
                            <Col>
                            <Form.Control as="select" size="sm" id="formGroup">
                                <option></option>
                                <option>A</option>
                                <option>A#/Bb</option>
                                <option>B</option>
                                <option>C</option>
                                <option>C#/Db</option>
                                <option>D</option>
                                <option>D#/Eb</option>
                                <option>E</option>
                                <option>F</option>
                                <option>F#/Gb</option>
                                <option>G</option>
                                <option>G#/Ab</option>
                            </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control as="select" size="sm" id="formGroup">
                                <option></option>
                                <option>A</option>
                                <option>A#/Bb</option>
                                <option>B</option>
                                <option>C</option>
                                <option>C#/Db</option>
                                <option>D</option>
                                <option>D#/Eb</option>
                                <option>E</option>
                                <option>F</option>
                                <option>F#/Gb</option>
                                <option>G</option>
                                <option>G#/Ab</option>
                            </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control as="select" size="sm" id="formGroup">
                                <option></option>
                                <option>A</option>
                                <option>A#/Bb</option>
                                <option>B</option>
                                <option>C</option>
                                <option>C#/Db</option>
                                <option>D</option>
                                <option>D#/Eb</option>
                                <option>E</option>
                                <option>F</option>
                                <option>F#/Gb</option>
                                <option>G</option>
                                <option>G#/Ab</option>
                            </Form.Control>
                            </Col>
                            </Row> 
                            <Row className="scaleRow">
                            <Col>
                            <Form.Control as="select" size="sm" id="formGroup">
                                <option></option>
                                <option>A</option>
                                <option>A#/Bb</option>
                                <option>B</option>
                                <option>C</option>
                                <option>C#/Db</option>
                                <option>D</option>
                                <option>D#/Eb</option>
                                <option>E</option>
                                <option>F</option>
                                <option>F#/Gb</option>
                                <option>G</option>
                                <option>G#/Ab</option>
                            </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control as="select" size="sm" id="formGroup">
                                <option></option>
                                <option>A</option>
                                <option>A#/Bb</option>
                                <option>B</option>
                                <option>C</option>
                                <option>C#/Db</option>
                                <option>D</option>
                                <option>D#/Eb</option>
                                <option>E</option>
                                <option>F</option>
                                <option>F#/Gb</option>
                                <option>G</option>
                                <option>G#/Ab</option>
                            </Form.Control>
                            </Col>
                            <Col>
                            <Form.Control as="select" size="sm" id="formGroup">
                                <option></option>
                                <option>A</option>
                                <option>A#/Bb</option>
                                <option>B</option>
                                <option>C</option>
                                <option>C#/Db</option>
                                <option>D</option>
                                <option>D#/Eb</option>
                                <option>E</option>
                                <option>F</option>
                                <option>F#/Gb</option>
                                <option>G</option>
                                <option>G#/Ab</option>
                            </Form.Control>
                            </Col>
                            </Row>
                    </Form.Group>
                </Form>
                <Button onClick={() => this.handleClick()} id="submitBtn" variant="primary">Find Key</Button>   

            </div>


        )
    }
}

export default Notes