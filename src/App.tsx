import React from 'react';
import './App.css';
import StyledButton, { AnimatedLogo, DarkButton, FancyButton, SubmitButton } from './components/button/Button';
import { ThemeProvider } from 'styled-components';
import { globalTheme } from './global/theme/theme';
import logo from './logo.svg';
import GlobalStyle from './global/theme/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <GlobalStyle />
      <div className="App">
        <StyledButton>Styled Button</StyledButton>
        <hr />
        <StyledButton variant="outline">Outline Button</StyledButton>
        <hr />
        <FancyButton>Fancy Button</FancyButton>
        <hr />
        <SubmitButton>Submit Button</SubmitButton>
        <hr />
        <AnimatedLogo src={logo} width="100px" />
        <hr />
        <DarkButton>DarkButton</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
