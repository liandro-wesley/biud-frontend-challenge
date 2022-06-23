// import original module declarations
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blue900: string;
      blue800: string;
      blue700: string;

      gray900: string;
      gray800: string;
      gray700: string;

      white: string;
      red: string;
    };
    rounded: {
      total: string;
    };
  }
}
