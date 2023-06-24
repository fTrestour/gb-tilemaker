import { chunk, update } from "~/utils/array";
import ColorId from "./ColorId";
import { addBitsByWeight, toHex } from "~/utils/hex";

export default class TileData {
  private static TILE_SIZE = 8;

  private constructor(private readonly pixels: readonly ColorId[]) {}

  public static from(colorId: ColorId) {
    return new TileData(
      new Array<ColorId>(TileData.TILE_SIZE ** 2).fill(colorId)
    );
  }

  public incrementPixelColorId(i: number, j: number) {
    const index = i * TileData.TILE_SIZE + j;
    const newPixels = update(this.pixels, index, this.pixels[index].next());

    return new TileData(newPixels);
  }

  public get rows() {
    return chunk(this.pixels, TileData.TILE_SIZE);
  }

  public get gb() {
    const binPixels = this.pixels.map((v) => v.bin);
    const rows = chunk(binPixels, TileData.TILE_SIZE);
    const hex = rows
      .map(addBitsByWeight)
      .map((v) => v.map(toHex).join(" "))
      .join(" ");
    return hex;
  }
}
