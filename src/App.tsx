import React from 'react';
import './App.css';
import StyledButton, { AnimatedLogo, FancyButton, SubmitButton } from './components/button/Button';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <StyledButton>Styled Button</StyledButton>
      <hr />
      <StyledButton variant="outline">Outline Button</StyledButton>
      <hr />
      <FancyButton>Fancy Button</FancyButton>
      <hr />
      <SubmitButton>Submit Button</SubmitButton>
      <hr />
      <AnimatedLogo src={logo} />
    </div>
  );
}

export default App;
