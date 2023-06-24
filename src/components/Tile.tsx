import { For, ParentComponent } from "solid-js";
import Pixel from "./Pixel";
import TileData from "~/services/TileData";
import { styled } from "solid-styled-components";
import { DARK, LIGHT } from "~/styles";

const Tile: ParentComponent<{
  data: TileData;
  class?: string;
  nextColorIdForTile: (i: number, j: number) => void;
}> = (props) => {
  return (
    <Wrapper class={props.class}>
      <For each={props.data.rows}>
        {(tileRow, i) => (
          <For each={tileRow}>
            {(colorId, j) => (
              <Pixel
                colorId={colorId}
                nextColorId={() => {
                  props.nextColorIdForTile(i(), j());
                }}
              />
            )}
          </For>
        )}
      </For>
    </Wrapper>
  );
};

export default Tile;

const Wrapper = styled("div")`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: ${DARK};
  gap: 2px;
  padding-left: 2px;
  padding-top: 2px;
  border: 2px solid ${LIGHT};
  grid-template-columns: repeat(8, calc(12.5% - 2px));
  grid-template-rows: repeat(8, calc(12.5% - 2px));
`;
