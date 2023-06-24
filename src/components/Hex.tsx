import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { LIGHT } from "~/styles";
import CopyButton from "./CopyButton";

const Hex: Component<{
  value: string;
  setHex: (s: string) => void;
  class?: string;
}> = (props) => {
  return (
    <Wrapper class={props.class}>
      <TextArea
        value={props.value}
        onChange={({ target }) => {
          props.setHex(target.value);
        }}
      />
      <CopyButton value={props.value} />
    </Wrapper>
  );
};
export default Hex;

const Wrapper = styled("div")`
  display: flex;
`;

const TextArea = styled("textarea")`
  all: unset;
  font-size: 24px;
  height: 58px;
  width: 450px;
  border: 2px solid ${LIGHT};
  padding: 5px;
  color: ${LIGHT};
`;
