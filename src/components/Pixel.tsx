import { Component } from "solid-js";
import { styled } from "solid-styled-components";
import ColorId from "~/services/ColorId";
import { DARK } from "~/styles";

const Pixel: Component<{ colorId: ColorId; nextColorId: () => void }> = (
  props
) => <Button colorId={props.colorId} onClick={props.nextColorId} />;

export default Pixel;

const Button = styled("button")<{ colorId: ColorId }>`
  background: ${(props) => props.colorId.color};
  box-sizing: border-box;
  border: none;
  outline: none;

  &:hover {
    border: 2px solid ${DARK};
  }
`;
