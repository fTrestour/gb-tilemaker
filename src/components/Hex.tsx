import { Component } from "solid-js";
import { css, styled } from "solid-styled-components";

const Hex: Component<{ value: string; class?: string }> = (props) => {
  return <Wrapper class={props.class}>{props.value}</Wrapper>;
};
export default Hex;

const Wrapper = styled("div")`
  margin-top: 30px;
  font-size: 24px;
  width: 450px;
`;
