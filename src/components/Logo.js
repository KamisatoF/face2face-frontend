import { LogoContainer, LogoPicStyle } from "../styles/HeaderContainer";
import logo from '../images/logo.png';
import { Link } from "react-router-dom"

export const Logo = () => (
    <LogoContainer>
        <div>
            <Link to="/"><LogoPicStyle src={logo} alt="" /></Link>
        </div>   
    </LogoContainer>
)