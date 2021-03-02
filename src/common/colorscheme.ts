export type ColorScheme = 'blue' | 'orange';

export const getPaletteWeight = (colormode: 'light' | 'dark') => (colormode === 'light' ? 500 : 200);
