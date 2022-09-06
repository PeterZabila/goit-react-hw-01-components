import { ListItem } from './TransactionHistory.styled'

export default function TrasnactionListItem ({id, type, amount, currency}) {
    return (
        <ListItem>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </ListItem>
    )
}