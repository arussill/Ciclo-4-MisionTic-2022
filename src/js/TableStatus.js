export default function TableStatus (props) {
    
    const data= props.datos;

    return (
            
            <tr>
            <th scope="row">{data._id}</th>
            <td>{data.nombre}</td>
            <td>{data.fecha_inicio}</td>
            <td>{data.fecha_fin}</td>
            <td>{data.estado}</td>
            </tr>
      
    );
}
