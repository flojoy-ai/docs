export function partialUnflatten(
  obj: { [key: string]: string[] } | string[],
  delimiter: string,
  maxDepth: number,
  ignoreUnflatten?: string[],
  key?: string,
  depth = 0
): object {
  // Keys passed to the ignoreUnflatten array ignore the max depth condition
  if (depth >= maxDepth && !ignoreUnflatten.includes(key)) {
    return Object.values(obj).reduce((acc, val) => acc.concat(val), []);
  }
  let res = {};

  for (const [key, val] of Object.entries(obj)) {
    const [first, rest] = splitOnce(key, delimiter);

    if (!rest) {
      res[first] = val;
      continue;
    }

    const prev = res[first] ?? {};
    res[first] = {
      ...prev,
      [rest]: val,
    };
  }

  for (const key of Object.keys(res)) {
    if (!Array.isArray(res[key])) {
      res[key] = partialUnflatten(
        res[key],
        delimiter,
        maxDepth,
        ignoreUnflatten,
        key,
        depth + 1
      );
    }
  }
  return res;
}

function splitOnce(s: string, delimiter: string) {
  const [first, ...rest] = s.split(delimiter);
  if (rest.length === 0) return [first];

  return [first, rest.join(delimiter)];
}
