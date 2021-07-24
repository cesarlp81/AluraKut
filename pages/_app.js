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
    background-image: url(https://exame.com/wp-content/uploads/2021/03/foto-corinthians-arena-vazia.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;

  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: flex;
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
