import StatsItem from "./StatsItem";
import {StatsList, StatsHeading} from './Statistics.styled';

export default function Statistics ({stats, title}) {

    const elements = stats.map(({id, label, percentage, title}) => {
       return <StatsItem key={id} label={label} percentage={percentage}> 
       </StatsItem>});

    return (
        <section className="container">
            {title && (<StatsHeading>{title}</StatsHeading>)}
            
            <StatsList>{elements}</StatsList>
       </section>
    )
}