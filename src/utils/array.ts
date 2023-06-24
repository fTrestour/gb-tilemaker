import TileData from "~/services/TileData";

export const chunk = <T>(array: readonly T[], size: number): readonly T[][] =>
  Array.from({ length: size }, (v, i) => array.slice(i * size, (i + 1) * size));

export const update = <T>(
  array: readonly T[],
  i: number,
  v: T
): readonly T[] => {
  const newValue = [...array];
  newValue[i] = v;
  return newValue;
};
