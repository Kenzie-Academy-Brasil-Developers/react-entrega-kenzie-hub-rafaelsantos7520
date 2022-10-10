import styled from "styled-components";

export const SubmitButton = styled.button`
  height: 48px;
  border-radius: 4px;
  padding: 0px 22px 0px 22px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  color: var(--Color-white);
  cursor: pointer;

  background-color:var(--Color-primary);

  :hover{
    background-color:var(--Color-primary-Focus);
  }
  :disabled{
    background-color:var(--Color-primary-Negative);
  }
`;
