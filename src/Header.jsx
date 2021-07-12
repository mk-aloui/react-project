import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.css';
import React from 'react';





function Header(props) {

  return (


    <>

      <div class="row align-items-center" >
        <div class="col-md-3 col-3 logo" >
          <div className="img" >
            <a href="./"><img className="img" src="https://www.transtu.tn/images/front/transtu_logo.png" alt="logot"    ></img></a></div>
        </div>

        <div class="col-md-9 col-6">

          <Navbar className="navbar">

            <Container>
              <Nav className="me-auto">

                <div className="lis">
                  <div className="li">

                    <Nav.Link href="/MainContent" id="navac">Acceuil</Nav.Link></div>
                </div>
                { }
                {props.a != 0 ? <div className="lis">
                  <Nav.Link className="li" >Gérer vehicule</Nav.Link> </div> : null}


              </Nav>
            </Container>
            <div class=" col-6">
              {props.a == 0 ? <Button href="./Signup" id="su" variant="success">Sign up</Button> : null}
              {props.a == 0 ? <Button href="./Login" variant="success">Login</Button> : null}
              {props.a != 0 ? <Button href="./Login" variant="success">Logout</Button> : null}
            </div>
          </Navbar>

        </div>

      </div>
    </>

  );
}

export default Header;