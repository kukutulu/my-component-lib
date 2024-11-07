import { SxProps, Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';

export function random(min: number, max: number) {
  if (max < 0) max = 1;
  if (min < 0) min = 0;
  if (min >= max) {
    min = 0;
    max = 1;
  }
  const seed = Math.random();
  const range = max - min;
  return seed * range + min;
}

export function mergeSx(sxs: Array<boolean | SxProps<Theme> | undefined>): SxProps<Theme> {
  let result: Array<
    boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)
  > = [];
  for (const sx of sxs) {
    if (sx) {
      if (Array.isArray(sx))
        result = result.concat(
          sx as ReadonlyArray<
            boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)
          >
        );
      else
        result.push(sx as SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>));
    }
  }
  return result;
}
