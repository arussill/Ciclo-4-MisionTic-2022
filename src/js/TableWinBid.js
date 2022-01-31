export default function TableWinBid (props) {
    
    const data= props.datos;

    return (
        
                            
            
                <tr>
                    <th scope="row">{data.idPuja}</th>
                    <td>{data.idUser}</td>
                    <td>$ {data.montoMiPuja}</td>
                    <td>{data.idSubasta}</td>
                    <td>{data.nombreSubasta}</td>
                </tr>
            
        
    );
}
