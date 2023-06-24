import { chunk, update } from "~/utils/array";
import ColorId from "./ColorId";
import {
  Byte,
  addBitsByWeight,
  addBytes,
  fromHex,
  toByte,
  toHex,
} from "~/utils/hex";

export default class TileData {
  private static TILE_SIZE = 8;

  private constructor(private readonly pixels: readonly ColorId[]) {}

  public static fromDefault(colorId: ColorId) {
    return new TileData(
      new Array<ColorId>(TileData.TILE_SIZE ** 2).fill(colorId)
    );
  }

  public static fromHex(hex: string) {
    const bytes = hex.split(" ").map(fromHex).map(toByte);

    let pixels = new Array<ColorId>();
    let currentColorIds = new Array<number>();
    for (let i = 0; i < bytes.length; i++) {
      const byte = bytes[i];

      if (i % 2 === 0) {
        currentColorIds = byte;
      } else {
        currentColorIds = addBytes(currentColorIds as Byte, byte);
        pixels = pixels.concat(currentColorIds.map(ColorId.from));
      }
    }

    return new TileData(pixels);
  }

  public incrementPixelColorId(i: number, j: number) {
    const index = i * TileData.TILE_SIZE + j;
    const newPixels = update(this.pixels, index, this.pixels[index].next());

    return new TileData(newPixels);
  }

  public get rows() {
    return chunk(this.pixels, TileData.TILE_SIZE);
  }

  public get hex() {
    const binPixels = this.pixels.map((v) => v.bin);
    const rows = chunk(binPixels, TileData.TILE_SIZE);
    const hex = rows
      .map(addBitsByWeight)
      .map((v) => v.map(toHex).join(" "))
      .join(" ");
    return hex;
  }
}
