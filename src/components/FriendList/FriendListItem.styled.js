import styled from "styled-components"

export const Chip = styled.span`
    &::before {
        content: '';
        width: 10px;
        height: 10px;
        margin-right: 10px;
        border-radius: 50%;
        display: inline-block;
        background-color: ${props => {
            switch (props.isOnline) {
                case true:
                    return 'green';
                case false:
                    return 'red';
                default:
                    return 'black';
            }
        }}
      } 
`;

export const Friend = styled.li`
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 5px;
      padding: 5px;
      -webkit-box-shadow: 10px 16px 14px -12px rgba(0,0,0,0.75);
      -moz-box-shadow: 10px 16px 14px -12px rgba(0,0,0,0.75);
      box-shadow: 10px 16px 14px -12px rgba(0,0,0,0.75);
      transition: box-shadow 0.3s ease-in-out;
       
      p {
            margin-left: 10px;
        }
    
    &:hover {
        -webkit-box-shadow: 14px 16px 14px -12px rgba(27,134,148,1);
        -moz-box-shadow: 14px 16px 14px -12px rgba(27,134,148,1);
        box-shadow: 14px 16px 14px -12px rgba(27,134,148,1);
        transition: box-shadow 0.3s ease-in-out;
    }
`;