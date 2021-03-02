import { extendTheme } from '@chakra-ui/react';
import ButtonStyle from './components/button_style';

const theme = extendTheme({
  fonts: {
    body: 'inter',
  },
  /* shadows: {
    outline: "0 7px 14px rgba(50,50,93,.15),0 3px 6px rgba(0,0,0,.08)",
  }, */
  components: {
    Button: ButtonStyle,
  },
  colors: {
    orange: {
      50: '#FDE4C4',
      100: '#FCDCB1',
      200: '#FBD49D',
      300: '#FBCB89',
      400: '#FAC375',
      500: '#f9b453',
      600: '#F8A93A',
      700: '#F69813',
      800: '#D98208',
      900: '#C57607',
    },
    blue: {
      50: '#86aaba',
      100: '#6e98ac',
      200: '#56879e',
      300: '#3d7690',
      400: '#256582',
      500: '#0D5474',
      600: '#0a435d',
      700: '#093b51',
      800: '#083246',
      900: '#072a3a',
    },
  },
});

export default theme;
