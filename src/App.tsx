import React from 'react';
import './App.css';
import styled from 'styled-components';
import StyledButton, { FancyButton } from './components/button/Button';

function App() {
  return (
    <div className="App">
      <StyledButton>Styled Button</StyledButton>
      <hr />
      <StyledButton variant="outline">Outline Button</StyledButton>
      <hr/>
      <FancyButton>Fancy Button</FancyButton>
    </div>
  );
}

export default App;
