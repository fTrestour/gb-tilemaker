import { createSignal } from "solid-js";
import { Title } from "solid-start";
import Tile from "~/components/Tile";
import ColorId from "~/services/ColorId";
import TileData from "~/services/TileData";

export default function Home() {
  const [tile, setTile] = createSignal(TileData.from(ColorId[0]));

  const nextColorIdForTile = (i: number, j: number) => {
    setTile(tile().incrementPixelColorId(i, j));
  };

  return (
    <main>
      <Title>Hello World</Title>
      <div>{tile().gb}</div>
      <Tile data={tile()} nextColorIdForTile={nextColorIdForTile} />
    </main>
  );
}
