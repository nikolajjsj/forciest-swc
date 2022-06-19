import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'system-ui',
    },
    colors: {},
    fontSizes: {
      sml: '13px',
      md: '15px',
      lg: '17px',
    },
  },
});
