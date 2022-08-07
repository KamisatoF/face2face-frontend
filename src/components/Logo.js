import { LogoContainer, LogoPicStyle } from "../styles/HeaderContainer";
import logo from '../images/logo.png';

export const Logo = () => (
    <LogoContainer>
        <div>
            <LogoPicStyle src={logo} alt="" />         
        </div>   
    </LogoContainer>
)