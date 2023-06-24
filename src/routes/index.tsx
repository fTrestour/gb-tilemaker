import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import Hex from "~/components/Hex";
import Tile from "~/components/Tile";
import ColorId from "~/services/ColorId";
import TileData from "~/services/TileData";
import { DARK, LIGHT } from "~/styles";

export default function Home() {
  const [tile, setTile] = createSignal(TileData.fromDefault(ColorId[0]));

  const nextColorIdForTile = (i: number, j: number) => {
    setTile(tile().incrementPixelColorId(i, j));
  };
  const setHex = (hex: string) => {
    setTile(TileData.fromHex(hex));
  };

  return (
    <Wrapper>
      <Header>
        <H1>GB TILEMAKER</H1>
        <p>An online tool to visualize and edit GameBoy tile data.</p>
      </Header>
      <StyledTile data={tile()} nextColorIdForTile={nextColorIdForTile} />
      <StyledHex value={tile().hex} setHex={setHex} />
    </Wrapper>
  );
}

const Wrapper = styled("main")`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled("header")`
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 400px;
`;

const H1 = styled("h1")`
  background-color: ${LIGHT};
  color: ${DARK};
  padding: 5px 20px;
  font-weight: normal;
  font-size: 32px;
  position: relative;

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      45deg,
      ${LIGHT},
      ${LIGHT} 3px,
      hsla(0, 0%, 100%, 0) 0,
      hsla(0, 0%, 100%, 0) 8px
    );
  }
`;

const StyledTile = styled(Tile)`
  flex-grow: 0;
  margin-left: auto;
  margin-right: auto;
`;

const StyledHex = styled(Hex)`
  margin-top: 50px;
  margin-bottom: auto;
`;
