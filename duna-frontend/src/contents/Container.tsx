import styled from "styled-components";
import { IContainer } from "../interfaces";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
`;

export default function Container(prop: IContainer) {
  return <StyledContainer>{prop.children}</StyledContainer>;
}
