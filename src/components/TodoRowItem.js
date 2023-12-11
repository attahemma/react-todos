function TodoRowItem(props){

    // const rowNumber = 1;
    // const rowDescription = "Feed doggyy";
    // const rowAssigned = 'Eric';

    return (
        <tr onClick={() => props.deleteTodo(props.rowNumber)}>
            <th scrope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem