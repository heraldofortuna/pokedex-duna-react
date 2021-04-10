import styled from "styled-components";
import { IContainer } from "../services/Interfaces";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
`;

export default function Container(prop: IContainer) {
  return <StyledContainer>{prop.children}</StyledContainer>;
}
