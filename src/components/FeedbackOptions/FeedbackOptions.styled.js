import styled from 'styled-components';

export const OptionsWrap = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
`;

export const OptionsButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  padding: 7px;
  background-color: rgb(101, 217, 223);
  border-radius: 5px;
  border: none;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  color: rgb(29, 45, 39);
  transition: transform 0.4s;

  :hover {
    transform: scale(1.2);
    background-color: teal;
  }
`;
