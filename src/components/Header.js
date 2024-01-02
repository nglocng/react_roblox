import React from "react"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import { withRouter } from "react-router";
//import { Navigate } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
//import Login from "components/login/Login"

function Header () {

    const navigate = useNavigate();
    const handleClick = () => {
      // 👇️ replace set to true
      navigate('/login', {replace: true});
    };

    return (
        <header>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">RobLox</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Button variant="outline-info" className="button-signup">Sign Up</Button>                           
                            <Button 
                             onClick={handleClick}
                            variant="outline-danger">Sign In</Button>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h1>Viec can lam</h1>
        </header>
    )
}
export default Header 