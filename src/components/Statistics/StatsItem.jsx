

export default function StatsItem({id, label, percentage}) {
    return (
      <li key={id}>
        <span className="label">{label} </span>
        <span className="percentage"> {percentage} %</span>
      </li>
    )
}