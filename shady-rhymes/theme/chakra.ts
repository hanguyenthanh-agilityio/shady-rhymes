// Components
import * as components from './components';
import { extendTheme } from '@chakra-ui/react';
import { breakpoints } from './breakpoints';
import colors from './colors';

const overrides = {
  components: { ...components },
  colors,
  breakpoints
};

const CHAKRA_THEME_DEFAULT = extendTheme(overrides);

export default CHAKRA_THEME_DEFAULT;
