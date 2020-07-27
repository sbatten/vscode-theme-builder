export interface IColorPalette {
  light: IColorModePalette;
  dark: IColorModePalette;
}

export interface IColorModePalette {
  accent0: string; // red
  accent1: string; // orange
  accent2: string; // yellow
  accent3: string; // green
  accent4: string; // cyan
  accent5: string; // blue
  accent6: string; // purple 
  accent7: string; // magenta

  shade0: string; // black
  shade1: string;
  shade2: string;
  shade3: string;
  shade4: string;
  shade5: string;
  shade6: string;
  shade7: string; // light gray
}