import styled from "styled-components";

export const StyledTechList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--Grey-4);
  height: 297px;
  border-radius: 5px;
  margin: 0 120px;
  padding: 15px 16px;

  @media (max-width:720px) {
    max-width: 90%;
    margin: auto;
  }
`;
