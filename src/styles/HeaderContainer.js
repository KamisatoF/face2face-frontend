import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #E5E4E2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`
export const LogoContainer = styled.div`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.1rem;
`
export const LogoPicStyle = styled.img`
    width: 10vh;
    height: 10vh;
    margin-left: 30px;
    padding-bottom: 0px;
`

export const ProfilePicStyle = styled.img`
    align-self: right;
    border: none;
    outline: none;
    width: 6vh;
    height: 6vh;
    margin-right: 30px;
    padding-right: 0px;
    padding-bottom: 0px;
    border-radius: 50%;
`

export const FindPicStyle = styled.img`
    width: 3vh;
    height: 3vh;
    margin-top: 0.5em;
    padding: 0.5em;
    margin: 0.5em;
    padding-left: 0px;
    padding-bottom: 0px;
    border-radius: 50%;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #000000;
  background: #C0C0C0;
  border: none;
  border-radius: 3px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  justify-content: center;
  
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: "300px";
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  display: block;
  left: 0;
  top: calc(100% + .15rem);
  background-color: white;
  padding: .10rem;
  border-radius: .25rem;
  align-items: center;
  text-align: center;
  display: list-item;
  background-color: #D3D3D3;
  width: 100px;
`

export const MenuLink = styled.div`
  padding: .7rem .2rem;
  cursor: pointer;
  display: block;
  position: relative;
  text-align: center;
  text-decoration: none;
  color: #000000;
  transition: all 0.3s ease-in;
  font-size: 0.7rem;

  &:hover {
    color: #7b7fda;
  }
`;