import { LIGHT } from "~/styles";
import { Bin } from "~/utils/hex";

type ColorIdValue = 0 | 1 | 2 | 3;

export default class ColorId {
  private constructor(private readonly colorId: ColorIdValue) {}

  public static 0 = new ColorId(0);
  public static 1 = new ColorId(1);
  public static 2 = new ColorId(2);
  public static 3 = new ColorId(3);

  public next() {
    return new ColorId(((this.colorId + 1) % 4) as ColorIdValue);
  }

  public get color() {
    switch (this.colorId) {
      case 0:
        return LIGHT;
      case 1:
        return `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 2px,
          ${LIGHT} 2px,
          ${LIGHT} 8px
        )`;
      case 2:
        return `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 2px,
          ${LIGHT} 2px,
          ${LIGHT} 4px
        )`;
      case 3:
        return "transparent";
    }
  }

  public get bin(): [Bin, Bin] {
    switch (this.colorId) {
      case 0:
        return [0b0, 0b0];
      case 1:
        return [0b0, 0b1];
      case 2:
        return [0b1, 0b0];
      case 3:
        return [0b1, 0b1];
    }
  }
}
