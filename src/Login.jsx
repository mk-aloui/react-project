import React from 'react'
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "./App.css";
import history from './history';




function Login(props) {
  // const hundlSubmit = e => {
  //   e.preventDefault();
  // }



  const Loginfetch = () => {
    let mail = document.getElementById("formBasicEmail").value;
    let password = document.getElementById("formBasicPassword").value;



    let data = {
      "mail": mail,
      "pass": password
    }
    let logged = Object.keys(data.mail && data.pass).length;



    axios.post('http://127.0.0.1:8000/signin', data).then(res => {
      console.log(data)
      console.log(logged)
      if (logged != 0) {
        props.fna()
        history.push({
          pathname: "/Gerer",
          state: { Mounir: logged }
        })
      }

    })
      .catch(err => {
        console.log(err)
      });









  }







  return (
    <div className="gbg">
      <div className="ok">
        <div class="container">
          <div class="row" style={{ height: 50 }}>
          </div>
          <div class="row">
            <Form className="cc" >

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <center><Form.Control className="mail" type="email" placeholder="Enter email" /></center>
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <center><Form.Control className="pswd" type="password" placeholder="Password" /></center>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <center> <Form.Check type="checkbox" label="Check me out" /></center>
              </Form.Group>
              <Button id="btsu" variant="success" type="button" onClick={Loginfetch}>
                Submit

              </Button>



            </Form>
          </div>

        </div>
      </div>
      <div class="voidG"></div>
    </div>
  );






}
export default Login;