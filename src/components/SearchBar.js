import { Input, FindPicStyle, SearchBarContainer } from "../styles/HeaderContainer";
import findIcon from '../images/findIcone.png';

export const SearchBar = () => (
    <nav>
        <ul>
            <Input placeholder="Cidade" type="text" />
            <Input placeholder="Data checkin" type="text" />
            <Input placeholder="Data checkout" type="text" />
            <FindPicStyle src={findIcon} alt="" />
        </ul>
    </nav>
)