import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //outline: 1px solid #66b8da !important;
}

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,600&display=swap');

html {
    font-size: 0.65vw;
    font-family: "Sarabun", sans-serif;
}
`;

export default GlobalStyles;
