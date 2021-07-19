import { css } from 'styled-components';
import AvengerFont from './AvengeroRegular-zvgl.ttf';

const fonts = css`
  @font-face {
    font-family: 'Noto Sans TC';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://fonts.gstatic.com/l/font?kit=-nFkOG829Oofr2wohFbTp9i9gwQvDsVdMllaCf1JNY78W9Uo&skey=113355c0388222ad&v=v11')
      format('woff2');
  }
  @font-face {
    font-family: 'Marvel';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.gstatic.com/s/marvel/v10/nwpVtKeoNgBV0qa4llTF.woff2')
      format('woff2');
    unicode-range: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD';
  }
  @font-face {
    font-family: 'Avenger';
    font-display: swap;
    src: url(${AvengerFont}) format('truetype');
  }
`;

export default fonts;
