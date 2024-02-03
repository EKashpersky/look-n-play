export function clampedValue(min: number, max: number, value: number) {
  return Math.min(Math.max(min, value), max);
}

export function progress(from: number, to: number, value: number) {
  return value / (to - from);
}

export function progress0to100(from: number, to: number, value: number) {
  return clampedValue(0, 100, progress(from, to, value));
}

/**
 * roundUpTo being true would result in:
 * @example steppedValue(199, 10, true); // 200, whereas
 * @example steppedValue(199, 10, false); // 190
**/
export function steppedValue(value: number, step: number, roundUpTo: boolean) {
  if (roundUpTo) {
    const remainder = value % step;
    return value - remainder + step * +(remainder > step / 2);
  } else {
    return value - value % step;
  }
}
