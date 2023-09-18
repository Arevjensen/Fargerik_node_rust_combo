export type HexColor = string;
/**
 * @example [255, 255, 255]
 */
export type RGBColor = [r: number, g: number, b: number];
/**
 * @see https://www.hsluv.org/
 * @example [200, 50, 50]
 */
export type HSLUVColor = [h: number, s: number, luv: number];
/**
 * @example [200, 50, 50]
 */
export type HSLColor = [h: number, s: number, l: number];
/**
 * @example [200, 50, 50]
 */
export type HSVColor = [h: number, s: number, v: number];
/**
 * A distance measurement to the value, from something else (not in the type)
 */
export type ValueDistance<TValue> = [value: TValue, distance: number];

/**
 * A color palette in a colorspace
 */
export type Palette<TColor> = { light: TColor; medium: TColor; dark: TColor };
/**
 * A color palette defined in HEX
 */
export type HexPalette = Palette<HexColor>;
export type HslPalette = Palette<HSLColor>;

/**
 * The result of running a fargerik algorithm
 */
export type FargerikResult = {
  /**
   * Analysis of the algorithm, for visualization
   */
  analysis: Analysis;
  /**
   * the generated palette
   */
  palette: HexPalette;
};

/**
 * Histogram Bin.
 */
export type ColorBin<TColor> = [averageColor: TColor, percent: number];
/**
 * Histogram for an image.
 */
export type Histogram<TColor> = ColorBin<TColor>[];

export type AgeGroup = { min: number; max: number };

type HexHistogram = Histogram<HexColor>;

export type Analysis = {
  age?: number;
  averageColor?: HexColor;
  histogram?: HexHistogram;
  histogramWeighted?: HexHistogram;
  histogramColorWeighted?: HexHistogram;
  saturationAdjustment?: number;
  generatedPalette?: HexPalette;
  classification?: ValueDistance<HexPalette>[];
  closestLeft?: ValueDistance<HexPalette>;
  closestRight?: ValueDistance<HexPalette>;
  wcag?: string[];
  button?: any;
  scales?: {
    grays: {
      whiteC30Dark: string;
      whiteC45Dark: string;
      whiteC30Medium: string;
      whiteC45Medium: string;
      whiteC30MediumLight5: string;
      whiteC45MediumLight5: string;
      whiteC30MediumLight10: string;
      whiteC45MediumLight10: string;
      whiteC30MediumLight20: string;
      whiteC45MediumLight20: string;
    };
    lights: {
      lightC30Dark: string;
      lightC45Dark: string;
      lightC30Medium: string;
      lightC45Medium: string;
      lightC30MediumLight5: string;
      lightC45MediumLight5: string;
      lightC30MediumLight10: string;
      lightC45MediumLight10: string;
      lightC30MediumLight20: string;
      lightC45MediumLight20: string;
    };
  };
};
