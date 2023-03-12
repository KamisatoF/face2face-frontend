import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../images/logo.png';
import React, { useContext } from "react";
import { Context } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';


function Header() {
    const { authenticated, userData, handleLogout } = useContext(Context);
    const navigate = useNavigate();

    const loginControll = () => {
        if (authenticated) {
            return (
                <NavDropdown title={"Olá " + userData.nome} >
                    <NavDropdown.Item onClick={() => navigate("/cadastro")}>Alterar Cadastro</NavDropdown.Item>
                    <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
                    <NavDropdown.Item></NavDropdown.Item>
                </NavDropdown>
            );
        } else {
            return (
                <Navbar.Text >
                    <a href="/login">Login</a>
                </Navbar.Text>
            );
        }
    }

    const logout = () => {
        handleLogout();
        navigate("/");
    }

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <img alt=""
                        src={logo}
                        width="70"
                        height="70"
                        className="d-inline-block align-center"
                    />{' '}
                    Face2Face
                </Navbar.Brand>
                <Navbar.Collapse id="navbarscroll" >
                    <Nav>
                        <Nav.Link onClick={() => navigate("/serviceRef")}>Serviços</Nav.Link>
                    </Nav>
                    <Nav >
                        <Nav.Link onClick={() => navigate("/equipamento")}>Equipamentos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {loginControll()}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;