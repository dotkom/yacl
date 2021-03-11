import { extendTheme } from '@chakra-ui/react';
import ButtonStyle from './components/button_style';

const theme = extendTheme({
  fonts: {
    body: 'inter',
  },
  components: {
    Button: ButtonStyle,
  },
  styles: {
    global: () => ({
      ':focus:not(:focus-visible):not([role="dialog"]):not([role="menu"])': {
        boxShadow: 'none !important',
      },
    }),
  },
  colors: {
    orange: {
      50: '#fde9cb',
      100: '#fde1ba',
      200: '#fcdaa9',
      300: '#fbd298',
      400: '#fac375',
      500: '#f9b453',
      600: '#F8A93A',
      700: '#F69813',
      800: '#D98208',
      900: '#C57607',
    },
    blue: {
      50: '#cfdde3',
      100: '#b6ccd5',
      200: '#9ebbc7',
      300: '#6e98ac',
      400: '#3d7690',
      500: '#0D5474',
      600: '#0a435d',
      700: '#083246',
      800: '#072a3a',
      900: '#05222e',
    },
  },
});

export { theme as OnlineTheme };
