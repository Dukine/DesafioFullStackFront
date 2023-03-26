import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

:root{
    --color-primary:#5079B3;
    --color-primary-focus:#2482E1;
    --color-primary-negative:#0066CC;
    --grey-4:#DAE3EB;
    --grey-3:#B2BDD9;
    --grey-2:#9099B0;
    --grey-1:#868E96;
    --grey-0:#F8F9FA;
    --sucess:#3FE864;
    --negative:#E83F5B;
    --text: #30496B;

}

body{
    width: 100vw;
    height: 100vh;
    background-color: var(--grey-4);
    color: var(--text);
}
`;

export default GlobalStyle;
