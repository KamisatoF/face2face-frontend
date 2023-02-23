import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavLink from 'react-bootstrap/esm/NavLink';
import { Nav } from 'reactstrap';
import logo from '../images/logo.png';

export const Header = () => (
    <Navbar bg="light" variant="light">
        <Container>
            <NavbarBrand href="/">
                <img alt=""
                src={logo}
                width="70"
                height="70"
                className="d-inline-block align-center"
                />{' '}
                Face2Face
            </NavbarBrand>
            <NavbarCollapse id="navbarscroll">
                <Nav className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px'}}
                navbarScroll>
                    <NavLink href="/service">Serviços</NavLink>
                </Nav>

            </NavbarCollapse>
        </Container>
    </Navbar>

)

export default Header;