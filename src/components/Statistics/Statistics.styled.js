import styled from "styled-components";

export const StatsList = styled.ul`
    display: flex;
    font-family: Roboto;
`; 

export const StatsListItem = styled.li`
    padding: 5px;
    width: 50px;
    color: #e0e0e0;
    span {
            display: block;
            
        }
        .label {
            font-size: 16px;
          }
          
          .percentage {
            font-size: 20px;
          }
`; 

export const StatsHeading = styled.h2`
    text-align: center;
    color: grey;
`;