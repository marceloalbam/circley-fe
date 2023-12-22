import { Global } from '@emotion/react'

export const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'BreeSerif';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/BreeSerif-Regular.woff2') format('woff2'),
          url('/fonts/BreeSerif-Regular.woff') format('woff');
      }

      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 200;
        font-display: swap;
        src: url('/fonts/Muli-ExtraLight.woff2') format('woff2'),
          url('/fonts/Muli-ExtraLight.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 200;
        font-display: swap;
        src: url('/fonts/Muli-ExtraLightItalic.woff2') format('woff2'),
          url('/fonts/Muli-ExtraLightItalic.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/Muli-Light.woff2') format('woff2'),
          url('/fonts/Muli-Light.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/Muli-LightItalic.woff2') format('woff2'),
          url('/fonts/Muli-LightItalic.woff') format('woff');
      }
    
      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Muli-Regular.woff2') format('woff2'),
          url('/fonts/Muli-Regular.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Muli-Italic.woff2') format('woff2'),
          url('/fonts/Muli-Italic.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/Muli-SemiBold.woff2') format('woff2'),
           url('/fonts/Muli-SemiBold.woff') format('woff')
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/Muli-SemiBoldItalic.woff2') format('woff2'),
           url('/fonts/Muli-SemiBoldItalic.woff') format('woff')
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Muli-Bold.woff2') format('woff2'),
           url('/fonts/Muli-Bold.woff') format('woff')
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/Muli-BoldItalic.woff2') format('woff2'),
           url('/fonts/Muli-BoldItalic.woff') format('woff')
      }

      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/Muli-ExtraBold.woff2') format('woff2'),
          url('/fonts/Muli-ExtraBold.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/Muli-ExtraBoldItalic.woff2') format('woff2'),
          url('/fonts/Muli-ExtraBoldItalic.woff') format('woff');
      }

      @font-face {
        font-family: 'Muli';
        font-style: normal;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/Muli-Black.woff2') format('woff2'),
          url('/fonts/Muli-Black.woff') format('woff');
      }
      
      @font-face {
        font-family: 'Muli';
        font-style: italic;
        font-weight: 900;
        font-display: swap;
        src: url('/fonts/Muli-BlackItalic.woff2') format('woff2'),
          url('/fonts/Muli-BlackItalic.woff') format('woff');
      }

      @font-face {
        font-family: 'SortsMillGoudy';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/Sorts-Mil-Goudy.woff2') format('woff2'),
          url('/fonts/Sorts-Mill-Goudy.woff') format('woff');
      }
    `}
  />
)

export default Fonts
