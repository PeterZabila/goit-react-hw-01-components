import styled from "styled-components";

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    justufy-content: center;
    margin-bottom: 30px;

    h3 {
        text-align: center;
        font-size: 24px;
        font-family: Roboto;
    }
    p {
        text-align: center;
        font-size: 18px;
        font-family: Roboto;
        color: #a4a5a6;
        margin: 0;
    }
`;

export const Avatar = styled.img`
        border-radius: 50%;
        width: 150px;
        height: 150px;
        margin-left: auto;
        margin-right: auto;
`;