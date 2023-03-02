import colors from './color';
// Components
import * as components from './components';
import { extendTheme } from '@chakra-ui/react';

const overrides = {
  components: { ...components },
  colors
};

const CHAKRA_THEME_DEFAULT = extendTheme(overrides);

export default CHAKRA_THEME_DEFAULT;
