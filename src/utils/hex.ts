export type Bin = 0 | 1;

export const toHex = (n: number) => "$" + ("0" + n.toString(16)).slice(-2);

export const addBitsByWeight = (numbers: [Bin, Bin][]) =>
  numbers.reduce<[number, number]>(
    ([l, h], [hc, lc]) => [2 * l + lc, 2 * h + hc],
    [0, 0]
  );
