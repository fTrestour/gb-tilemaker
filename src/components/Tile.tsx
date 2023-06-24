import { For, ParentComponent, Signal } from "solid-js";
import Pixel from "./Pixel";
import { css } from "solid-styled";
import TileData from "~/services/TileData";

const Tile: ParentComponent<{
  data: TileData;
  nextColorIdForTile: (i: number, j: number) => void;
}> = (props) => {
  css`
    div {
      display: grid;
      gap: 2px;
      grid-template-columns: repeat(8, 50px);
      grid-template-rows: repeat(8, 50px);
    }
  `;

  return (
    <div>
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
    </div>
  );
};

export default Tile;
