import 'styled-components';

import { DarkType, LightType } from './theme';

declare module 'styled-components' {
  export interface MyDefaultTheme {
    dark: DarkType;
    light: LightType;
  }
}