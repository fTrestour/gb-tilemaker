export type Bin = 0 | 1;
export type Byte = [Bin, Bin, Bin, Bin, Bin, Bin, Bin, Bin];

export const toHex = (n: number) => "$" + ("0" + n.toString(16)).slice(-2);
export const fromHex = (hex: string) => parseInt(hex.replace("$", ""), 16);

export const addBitsByWeight = (numbers: [Bin, Bin][]) =>
  numbers.reduce<[number, number]>(
    ([l, h], [hc, lc]) => [(l << 1) + lc, (h << 1) + hc],
    [0, 0]
  );

export const toByte = (n: number): Byte =>
  Array.from({ length: 8 }, (_v, i) => (n >> i) & 1).reverse() as [
    Bin,
    Bin,
    Bin,
    Bin,
    Bin,
    Bin,
    Bin,
    Bin
  ];

export const addBytes = (b1: Byte, b2: Byte) =>
  b1.map((b, i) => (b << 1) + b2[i]);
