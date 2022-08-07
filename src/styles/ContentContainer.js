import styled from 'styled-components'

export const ContentContainerDiv = styled.div`
  padding: 10rem;
  display: block;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: 0;
  top: 0;
  left: 0;
  right: 0;
  width: 80%;
  height: 600px;
  margin: 0px auto;
  background-color: whitesmoke;
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #000000;
  background: #C0C0C0;
  border: none;
  border-radius: 3px;
  width: ${props => props.width ? props.width : 'auto'}
  `

export const InputText = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  color: #000000;
  background: #C0C0C0;
  border: none;
  border-radius: 3px;
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
`

export const CrudeDiv = styled.div`
  display: block;
  position: relative;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  right: 0;
  width: 80%;
  height: 600px;
  margin: 0px auto;
  justify-content: left;
`

export const InputDiv = styled.div`
  display: table-column;
  position: relative;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  right: 0;
  width: 60%;
  height: 400px;
  margin: 0px auto;
  background-color: whitesmoke;
  justify-content: left;
`

export const CrudeTitle = styled.h2`
align-self: left;
`

export const IconImage = styled.img`
  width: 6vh;
  height: 6vh;
  margin-top: 0.5em;
  padding: 0.5em;
  margin: 0.5em;
  padding-left: 0px;
  padding-bottom: 0px;
  border-radius: 0%;
`