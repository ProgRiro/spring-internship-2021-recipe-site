export const FontSizes = {
  sm: "12px",
  md: "16px",
  lg: "25px",
  xl: "30px",
} as const;
export type FontSizes = keyof typeof FontSizes;
