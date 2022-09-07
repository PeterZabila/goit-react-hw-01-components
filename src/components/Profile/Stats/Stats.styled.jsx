import styled from "styled-components";

export const ProfileStats = styled.ul`
    display: flex;
    flex-direction: row;
    width: 250px;
    justify-content: space-between;

    li {
        display: flex;
        flex-direction: column;
        
    }

    .label {
        text-align: center;
        font-size: 18px;
        font-family: Roboto;
        color: #a4a5a6;
    }

    .quantity {
        text-align: center;
        font-size: 22px;
        font-family: Roboto;
        color: black;
    }
`;