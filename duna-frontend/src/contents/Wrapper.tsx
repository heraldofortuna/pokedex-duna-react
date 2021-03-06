import styled from "styled-components";
import { IContent } from "../services/Interfaces";

const StyledWrapper = styled.div`
  background-color: var(--white);
  width: 400px;
  min-height: 100vh;
  margin: 0 auto;
`;

export default function Wrapper(prop: IContent) {
  return <StyledWrapper>{prop.children}</StyledWrapper>;
}
