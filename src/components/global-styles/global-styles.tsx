import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
    body {
        font-family: 'Poppins';
        line-height: 1.6;
    }

    .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        line-height: 1.3;
        color: #082e6d;
    }

    a:hover {
    text-decoration: none;
  }
    `;
