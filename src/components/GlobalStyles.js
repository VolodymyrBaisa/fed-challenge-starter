import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //outline: 1px solid #66b8da !important;
}

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

html {
    font-size: 0.65vw;
    font-family: "Open Sans", sans-serif;
}

@media (max-width: 1024px) {
        html {
            font-size: 0.85vw;
        }
    }

    @media (max-width: 800px) {
        html {
            font-size: 1.5vw;
        }
    }

    @media (max-width: 600px) {
        html {
            font-size: 2.5vw;
        }
    }
`;

export default GlobalStyles;
