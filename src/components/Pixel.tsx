import { Component, createSignal } from "solid-js";
import { css } from "solid-styled";
import ColorId from "~/services/ColorId";

const Pixel: Component<{ colorId: ColorId; nextColorId: () => void }> = (
  props
) => {
  css`
    button {
      background-color: ${props.colorId.color};
      box-sizing: border-box;
      border: 2px solid black;
      outline: none;
    }
  `;

  return <button onClick={props.nextColorId} />;
};

export default Pixel;
