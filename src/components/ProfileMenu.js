import React, { useState } from "react";
import { LogoContainer, ProfilePicStyle, Menu, MenuLink, DropdownMenu } from "../styles/HeaderContainer";
import profileImage from '../images/profile_default.png';

export const ProfileMenu = () => {
    const [display, setDisplay] = useState('none')

    function handleClick() {
        if (display === 'none') {
            setDisplay('block')
        } else {
            setDisplay('none')
        }
    }
    return (
        <div>
            <div>
                <LogoContainer>
                    <div>
                        <ProfilePicStyle src={profileImage} alt="" onClick={() => handleClick()} />
                    </div>
                </LogoContainer>
            </div>
            <Menu >
                <DropdownMenu style={{ display: display }}>
                        <MenuLink href="">Cadastro de Serviço</MenuLink>
                </DropdownMenu>
            </Menu>

        </div>

    )
}

export default ProfileMenu;