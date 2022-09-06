import styled from "styled-components"

export const Chip = styled.span`
    &::before {
        content: '';
        width: 10px;
        height: 10px;
        margin-right: 5px;
        border-radius: 50%;
        display: inline-block;
        background-color: ${props => {
            switch (props.isOnline) {
                case true:
                    return 'green';
                case false:
                    return 'red';
            }
        }}
      }

   
`;