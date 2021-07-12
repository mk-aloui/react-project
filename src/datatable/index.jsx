import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { pencil } from "react-icons/fa";




export default function Datatable({ data }) {
    const columns = data[0] && Object.keys(data[0]);
    const [show, setShow] = useState(false);
    const [shows, setShows] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleCloses = () => setShows(false);
    const handleshows = () => setShows(true);
    let m_id;

    // state: {
    //     name = '';
    // }

    // handelchange = (e) => {

    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }
    return (
        <div className="mg">
            <Button className="bgg" onClick={handleShow} variant="success">Ajouter bus</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Ajouter Bus</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <from>
                        <div className='form-group'>
                            <label className='form-label' for="im" >Immatriculation</label>
                            <input type="text" id="im" className='form-control' />
                        </div>
                        <label for="mar">Marque</label><br></br>
                        <input type="text" id="mar" className='form-control'></input>
                        <label for="gen">Genre</label>
                        <input type="text" id="gen" className='form-control'></input>
                        <label for="mod">Model</label>
                        <input type="text" id="mod" className='form-control'></input>
                        <label for="pa">Places_assises</label>
                        <input type="text" id="pa" className='form-control'></input>
                        <label for="pdb">Placesdebouts</label>
                        <input type="text" id="pdb" className='form-control'></input>
                    </from>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={(e) => {
                        let imm = document.getElementById("im").value;
                        let mar = document.getElementById("mar").value;
                        let gen = document.getElementById("gen").value;
                        let mod = document.getElementById("mod").value;
                        let pa = document.getElementById("pa").value;
                        let pdb = document.getElementById("pdb").value;

                        let bus = {
                            "num_bus": 0,
                            "immatriculation": imm,
                            "marque": mar,
                            "genre": gen,
                            "model": mod,
                            "places_assises": pa,
                            "placesdebouts": pdb



                        };
                        async function addData() {
                            const respo = await axios.post("http://127.0.0.1:8000/Bus/add/", bus).then(
                                respo => {
                                    document.getElementById("im").value = "";
                                    document.getElementById("mar").value = "";
                                    document.getElementById("gen").value = "";
                                    document.getElementById("mod").value = "";
                                    document.getElementById("pa").value = "";
                                    document.getElementById("pdb").value = "";
                                    window.location.reload();
                                    handleClose();



                                }
                            )
                        }
                        addData();
                    }



                    }>

                        Ajouter
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={shows} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Modifer Bus</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <from>
                        <label for="im">immatriculation</label>
                        <input type="text" id="im"></input><br></br>
                        <label for="mar">marque</label><br></br>
                        <input type="text" id="mar"></input><br></br>
                        <label for="gen">genre</label><br></br>
                        <input type="text" id="gen"></input><br></br>
                        <label for="mod">model</label><br></br>
                        <input type="text" id="mod"></input><br></br>
                        <label for="pa">places_assises</label><br></br>
                        <input type="text" id="pa"></input><br></br>
                        <label for="pdb">placesdebouts</label><br></br>
                        <input type="text" id="pdb"></input><br></br>
                        <input id="m_id" hidden></input>
                    </from>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloses}>
                        Annuler
                    </Button>
                    <Button variant="primary" onClick={(e) => {
                        let imm = document.getElementById("im").value;
                        let mar = document.getElementById("mar").value;
                        let gen = document.getElementById("gen").value;
                        let mod = document.getElementById("mod").value;
                        let pa = document.getElementById("pa").value;
                        let pdb = document.getElementById("pdb").value;



                        let bus = {
                            "num_bus": 0,
                            "immatriculation": imm,
                            "marque": mar,
                            "genre": gen,
                            "model": mod,
                            "places_assises": pa,
                            "placesdebouts": pdb



                        };
                        async function updateData() {
                            let num = 26;
                            let d_id = parseInt(document.getElementById("m_id").value)
                            bus.num_bus = d_id

                            const respo = await axios.put("http://127.0.0.1:8000/Bus/update/", bus).then(
                                respo => {
                                    console.log("bus updated")
                                    console.log(e.target)
                                    handleCloses();
                                    window.location.reload();

                                }
                            )
                        }
                        updateData();
                    }



                    }>

                        Modifier
                    </Button>
                </Modal.Footer>
            </Modal>

            <table cellPadding={20} cellSpacing={20}>
                <thead>
                    <tr id="trbg">
                        {/* {data[0] && columns.map((column) => <th>{data[column]}</th>)} */}

                        <th>num_bus</th>
                        <th>immatriculation</th>
                        <th>marque</th>
                        <th>genre</th>
                        <th>model</th>
                        <th>places_assises</th>
                        <th>placesdebouts</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => <tr name="cell_id" id={`d-${row[0]}`}>
                        {
                            columns.map(column => <td>{
                                row[column]
                            }</td>)

                        }
                        <td><svg style={{ color: "red" }} data-id={row[0]} onClick={(e) => {
                            let d_id = parseInt(e.target.dataset.id)
                            async function deleteData() {
                                const respo = await axios.delete("http://127.0.0.1:8000/Bus/delete/" + d_id)
                                    .then(document.querySelector(`#d-${d_id}`).remove())


                                // const resp = respo.data;
                                // console.log(resp)
                            }


                            deleteData();

                        }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path data-id={row[0]} d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg><svg style={{ color: "blue" }} data-id={row[0]} onClick={(e) => {
                            handleshows();
                            let d_id = parseInt(e.target.dataset.id)
                            async function getData() {
                                const respo = await axios.get("http://127.0.0.1:8000/Bus/" + d_id).then(
                                    function (r) {
                                        console.log(r)
                                        document.getElementById("im").value = r.data[0][1];
                                        document.getElementById("mar").value = r.data[0][2];
                                        document.getElementById("gen").value = r.data[0][3];
                                        document.getElementById("mod").value = r.data[0][4];
                                        document.getElementById("pa").value = r.data[0][5];
                                        document.getElementById("pdb").value = r.data[0][6];
                                        document.getElementById("m_id").value = d_id;


                                    }
                                    // (respo) => {
                                    // document.getElementById("im").value = respo[1];
                                    // document.getElementById("mar").value = respo[2];
                                    // document.getElementById("gen").value = respo[3];
                                    // document.getElementById("mod").value = respo[4];
                                    // document.getElementById("pa").value = respo[5];
                                    // document.getElementById("pdb").value = respo[6];
                                    //     console.log(respo[0])
                                    //     d_id = respo[0];


                                    // }
                                )

                            }
                            getData();


                        }




                        } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
                                <path data-id={row[0]} d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                            </svg></td> </tr>)}

                </tbody>


            </table>


            {/* <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal> */}



        </div >

    )




}
