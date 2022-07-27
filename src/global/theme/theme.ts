import { MyDefaultTheme } from 'styled-components';

const dark = {
  primary: '#000',
  text: '#fff',
};

const light = {
  primary: '#fff',
  text: '#000',
};


export const globalTheme: MyDefaultTheme = {
  dark,
  light
};

export type DarkType = typeof dark;
export type LightType = typeof light;