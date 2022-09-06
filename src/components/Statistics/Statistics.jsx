import StatsItem from "./StatsItem";

export default function Statistics ({stats, title}) {

    const elements = stats.map(({id, label, percentage, title}) => {
       return <StatsItem key={id} label={label} percentage={percentage}>
       </StatsItem>});

    return (
        <section className="statistics">
            {title && (<h2>{title}</h2>)}
            
            <ul>{elements}</ul>
       </section>
    )
}