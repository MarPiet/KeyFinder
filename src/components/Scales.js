import React from "react"
import keysData from "./Keys"
import Table from "react-bootstrap/Table"


class Scales extends React.Component{


    render(){
            return (
            <div>
                <Table striped bordered hover size="lg" variant="dark">
                <thead>
                <tr>
                    <th>Scale</th>
                    <th>Notes</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/C_major" target="_blank">{keysData[0].key}</a></td>
                    <td>{keysData[0].notes[0] + ", " + keysData[0].notes[1] + ", " + keysData[0].notes[2] + ", " + keysData[0].notes[3] + ", " + keysData[0].notes[4] + ", "
                     + keysData[0].notes[5] + ", " + keysData[0].notes[6] + ", "}</td>              

                </tr>
                <tr>
                    <td> <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/D_major" target="_blank">{keysData[1].key}</a></td>
                    <td>{keysData[1].notes[0] + ", " + keysData[1].notes[1] + ", " + keysData[1].notes[2] + ", " + keysData[1].notes[3] + ", " + keysData[1].notes[4] + ", "
                     + keysData[1].notes[5] + ", " + keysData[1].notes[6] + ", "}</td>              

                </tr>
                <tr>
                    <td> <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/E_major" target="_blank">{keysData[2].key}</a></td>
                    <td>{keysData[2].notes[0] + ", " + keysData[2].notes[1] + ", " + keysData[2].notes[2] + ", " + keysData[2].notes[3] + ", " + keysData[2].notes[4] + ", "
                     + keysData[2].notes[5] + ", " + keysData[2].notes[6] + ", "}</td>              
                </tr>
                <tr>
                    <td> <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/F_major" target="_blank">{keysData[3].key}</a></td>
                    <td>{keysData[3].notes[0] + ", " + keysData[3].notes[1] + ", " + keysData[3].notes[2] + ", " + keysData[3].notes[3] + ", " + keysData[3].notes[4] + ", "
                     + keysData[3].notes[5] + ", " + keysData[3].notes[6] + ", "}</td>              
                </tr>
                <tr>
                    <td> <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/G_major" target="_blank">{keysData[4].key}</a></td>
                    <td>{keysData[4].notes[0] + ", " + keysData[4].notes[1] + ", " + keysData[4].notes[2] + ", " + keysData[4].notes[3] + ", " + keysData[4].notes[4] + ", "
                     + keysData[4].notes[5] + ", " + keysData[4].notes[6] + ", "}</td>              
                </tr>
                <tr>
                    <td> <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/A_major" target="_blank">{keysData[5].key}</a></td>
                    <td>{keysData[5].notes[0] + ", " + keysData[5].notes[1] + ", " + keysData[5].notes[2] + ", " + keysData[5].notes[3] + ", " + keysData[5].notes[4] + ", "
                     + keysData[5].notes[5] + ", " + keysData[5].notes[6] + ", "}</td>              
                </tr>
                <tr>
                    <td> <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/E-flat_major" target="_blank">{keysData[6].key}</a></td>
                    <td>{keysData[6].notes[0] + ", " + keysData[6].notes[1] + ", " + keysData[6].notes[2] + ", " + keysData[6].notes[3] + ", " + keysData[6].notes[4] + ", "
                     + keysData[6].notes[6] + ", " + keysData[6].notes[6] + ", "}</td>              
                </tr>
                <tr>
                    <td> <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/A-flat_major" target="_blank">{keysData[7].key}</a></td>
                    <td>{keysData[7].notes[0] + ", " + keysData[7].notes[1] + ", " + keysData[7].notes[2] + ", " + keysData[7].notes[3] + ", " + keysData[7].notes[4] + ", "
                     + keysData[7].notes[6] + ", " + keysData[7].notes[6] + ", "}</td>              
                </tr>
                <tr>
                    <td> <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/B-flat_major" target="_blank">{keysData[8].key}</a></td>
                    <td>{keysData[8].notes[0] + ", " + keysData[8].notes[1] + ", " + keysData[8].notes[2] + ", " + keysData[8].notes[3] + ", " + keysData[8].notes[4] + ", "
                     + keysData[8].notes[6] + ", " + keysData[8].notes[6] + ", "}</td>              
                </tr>
                <tr>
                    <td> <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/B_major" target="_blank">{keysData[9].key}</a></td>
                    <td>{keysData[9].notes[0] + ", " + keysData[9].notes[1] + ", " + keysData[9].notes[2] + ", " + keysData[9].notes[3] + ", " + keysData[9].notes[4] + ", "
                     + keysData[9].notes[5] + ", " + keysData[9].notes[6] + ", "}</td>              
                </tr>
                <tr>
                    <td> <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/C-sharp_major" target="_blank">{keysData[10].key}</a></td>
                    <td>{keysData[10].notes[0] + ", " + keysData[10].notes[1] + ", " + keysData[10].notes[2] + ", " + keysData[10].notes[3] + ", " + keysData[10].notes[4] + ", "
                     + keysData[10].notes[5] + ", " + keysData[10].notes[6] + ", "}</td>              
                </tr>
                <tr>
                    <td> <a rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/F-sharp_major" target="_blank">{keysData[11].key}</a></td>
                    <td>{keysData[11].notes[0] + ", " + keysData[11].notes[1] + ", " + keysData[11].notes[2] + ", " + keysData[11].notes[3] + ", " + keysData[11].notes[4] + ", "
                     + keysData[11].notes[5] + ", " + keysData[11].notes[6] + ", "}</td>              
                </tr>


                </tbody>
                </Table>
            </div>
            )
        
    }
}

export default Scales