import { StatsListItem } from './Statistics.styled'

export default function StatsItem({id, label, percentage}) {
  const itemColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return (
      <StatsListItem key={id} style={{backgroundColor: `${itemColor}`}}>
        <span className="label">{label} </span>
        <span className="percentage"> {percentage} %</span>
      </StatsListItem>
    )
}