import TrasnactionListItem from './TransactionListItem';
import { Table } from './TransactionHistory.styled'

export default function TransactionHistory ({items}) {
    const transactions = items.map(({id, type, amount, currency}) => {
        return (
        <TrasnactionListItem key={id} type={type} amount={amount} currency={currency} />
    )
})

    return (
        <Table>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions}
            </tbody>
        </Table>
    )
}