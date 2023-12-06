function TodoRowItem(props){

    // const rowNumber = 1;
    // const rowDescription = "Feed doggyy";
    // const rowAssigned = 'Eric';

    return (
        <tr>
            <th scrope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem