import { HeaderContainer } from "../styles/HeaderContainer";
import { SearchBar } from "./SearchBar";
import { Logo } from "./Logo";
import { ProfileMenu } from "./ProfileMenu";


export const Header = () => (
    <div>
        <HeaderContainer>
            <Logo />
            <SearchBar />
            <ProfileMenu />
            
        </HeaderContainer>
    </div>
)

export default Header;