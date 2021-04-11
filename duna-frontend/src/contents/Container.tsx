import styled from "styled-components";
import { IContent } from "../services/Interfaces";

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 20px;
`;

export default function Container(prop: IContent) {
  return <StyledContainer>{prop.children}</StyledContainer>;
}
