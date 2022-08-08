import { Table, TableData, TableRow, IconImage, FieldDiv } from "../styles/TableContainer";
import newIcon from '../images/novo_sf.png';

var service;

export function handleRow(se) {
    service = se;
    console.log(service);
    return service;
}

export const ServiceTable = ({ services }) => (
    <Table>
        <tbody>
            <TableRow>
                <TableData>
                    <IconImage src={newIcon} alt="" />
                </TableData>
            </TableRow>
            {services.map(se => {
                return (
                    <TableRow key={ se.id } onClick={() => handleRow(se)}>
                        <TableData>
                            <FieldDiv>{ se.descricao }</FieldDiv>
                            <FieldDiv>{ se.preco }</FieldDiv>
                            <FieldDiv>{ se.detalhes }</FieldDiv>
                        </TableData>
                    </TableRow>
                );
            })}

        </tbody>

    </Table>

)

export default ServiceTable;