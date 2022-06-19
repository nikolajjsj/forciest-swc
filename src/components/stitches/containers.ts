import { styled } from '../../../stitches.config';

export const Page = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
});

export const Flex = styled('div', {
  display: 'flex',

  variants: {
    flow: {
      row: {},
      col: {
        flexDirection: 'column',
      },
    },
  },
});
