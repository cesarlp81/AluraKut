import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AluraKutStyles } from '../src/lib/AluraKutCommons';

const GlobalStyle = createGlobalStyle`
  /* Reset css */

  *{
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: #D9E6F6;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: columns;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ${AluraKutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
  }
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}