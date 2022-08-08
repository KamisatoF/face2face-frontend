import React, { useState } from "react";
import { LogoContainer, ProfilePicStyle, Menu, MenuLink, DropdownMenu } from "../styles/HeaderContainer";
import profileImage from '../images/profile_default.png';
import { Link } from "react-router-dom"

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
                    <Link to="/service"><MenuLink>Atualizar Cadastro</MenuLink></Link>
                    <Link to="/service"><MenuLink>Cadastrar Conta Bancaria</MenuLink></Link>
                    <Link to="/service"><MenuLink>Cadastrar Cartão de Crédito</MenuLink></Link>
                    <Link to="/service"><MenuLink>Minhas Reservas</MenuLink></Link>
                    <Link to="/service"><MenuLink>Últimas Locações</MenuLink></Link>
                    <Link to="/service"><MenuLink>Cadastrar Espaço</MenuLink></Link>
                    <Link to="/service"><MenuLink>Cadastrar Comodidades</MenuLink></Link>
                    <Link to="/service"><MenuLink>Cadastrar Serviços</MenuLink></Link>
                    <Link to="/service"><MenuLink>Solicitações pendentes</MenuLink></Link>
                    <Link to="/service"><MenuLink>Verificar Agenda</MenuLink></Link>
                    <Link to="/service"><MenuLink>Minhas locações</MenuLink></Link>
                    <Link to="/service"><MenuLink>Relatórios</MenuLink></Link>
                    <Link to="/service"><MenuLink>Logout</MenuLink></Link>
                </DropdownMenu>
            </Menu>

        </div>

    )
}

export default ProfileMenu;