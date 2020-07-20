export default function chunkData(list: any[], size: number) {
  return list.reduce(
    (rows: any, key, index) =>
      (index % size === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    []
  );
}
