import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
  }
  
  body {
    margin: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;
