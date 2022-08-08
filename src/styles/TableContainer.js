import styled from 'styled-components'

export const Table = styled.table`
width: 400px;
height: 500px;
margin: 0;
border-spacing: 0;
border-collapse: collapse;
overflow-y: auto;
display: block;
`

export const TableHead = styled.thead`
font-size: 4vh;
font-weight: bold;
text-align: left;
padding: 2px
`

export const TableRow = styled.tr`
:hover {
    background-color: grey;
}
width: 400px;
`

export const TableData = styled.td`
border: 1px solid LightGrey;
height: 100%;
text-align: center;
overflow-wrap: break-word;
vertical-align: middle;
width: 400px;
text-align: justify;
text-indent: 10px;
`

export const TableDataHeader = styled.td`
color: black;
background-color: #efefef;
border: 1px solid LightGrey;
text-align: center;
vertical-align: middle;
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
export const FieldDiv = styled.div`
 width: 370px;
 text-align: justify;
 word-wrap: justify;
`
