import styled from "styled-components";
import { IWrapper } from "../interfaces";

const StyledWrapper = styled.div`
  background-color: var(--white);
  width: 50%;
  min-height: 100vh;
  margin: 0 auto;
`;

export default function Wrapper(prop: IWrapper) {
  return <StyledWrapper>{prop.children}</StyledWrapper>;
}
