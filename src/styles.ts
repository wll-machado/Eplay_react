import styled, { createGlobalStyle } from "styled-components";

export const cores = {
  branca: '#eeeeee',
  preta:'#111',
  cinza: '#333',
  verde: '#10ac84',
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
}

body{
  background-color: ${cores.preta};
  color: ${cores.branca};

  .container{
    max-width: 1024px;
    margin: 0 auto;
 }
}

`

export const breakpoints = {
  tablet: '768px',
  desktop: '1024px'
}

export const Container = styled.div`

 /* max-width: 1024px; */
 width: 100%;
 margin: 0 auto;

 @media (max-width: ${breakpoints.tablet}) {
   max-width: 80%;
 }
`
