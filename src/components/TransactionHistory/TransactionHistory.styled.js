import styled from 'styled-components';

export const Table = styled.table`
    padding: 5px;
    font-family: Roboto;
    width: 300px;
    border-radius: 3px;
    -webkit-box-shadow: -2px 2px 5px 3px rgba(27,154,163,0.4);
    -moz-box-shadow: -2px 2px 5px 3px rgba(27,154,163,0.4);
    box-shadow: -2px 2px 5px 3px rgba(27,154,163,0.4);
    color: white;
    // background-color: #56bae8;
        
    thead {
        background: #56bae8;
        color: white;
    }
`;

export const ListItem = styled.tr`
    background-color: white;
    color: #a1a1a1;
    text-align: center;
    &:nth-child(2n) {
        background-color: #e6f9fc;
  }
`;