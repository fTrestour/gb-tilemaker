import ColorId from "./ColorId";

export default class TileData {
  private static TILE_SIZE = 8;

  private constructor(private readonly pixels: ColorId[]) {}

  public static from(colorId: ColorId) {
    return new TileData(
      new Array<ColorId>(TileData.TILE_SIZE ** 2).fill(colorId)
    );
  }

  public incrementPixelColorId(i: number, j: number) {
    const index = i * TileData.TILE_SIZE + j;

    const newValue = [...this.pixels];
    newValue[index] = newValue[index].next();

    return new TileData(newValue);
  }

  public get rows() {
    return Array.from({ length: TileData.TILE_SIZE }, (v, i) =>
      this.pixels.slice(i * TileData.TILE_SIZE, (i + 1) * TileData.TILE_SIZE)
    );
  }

  public get gb() {
    const binPixels = this.pixels.map((v) => v.bin);
    const rows = Array.from({ length: TileData.TILE_SIZE }, (v, i) =>
      binPixels.slice(i * TileData.TILE_SIZE, (i + 1) * TileData.TILE_SIZE)
    );
    const hex = rows
      .map((v) => v.reduce(([l, h], [hc, lc]) => [2 * l + lc, 2 * h + hc]))
      .map(
        ([h, l]) =>
          `$${("0" + h.toString(16)).slice(-2)} $${("0" + l.toString(16)).slice(
            -2
          )}`
      )
      .join(" ");
    return hex;
  }
}
