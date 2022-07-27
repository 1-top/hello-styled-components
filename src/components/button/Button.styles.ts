import styled, { keyframes } from 'styled-components';

type StyledButtonProps = {
  variant?: string;
}

/**
 * generic 을 이용하여 props 타입을 정의할 수 있다.
 */
export const StyledButton = styled.button<StyledButtonProps>`
  border: 2px solid #4caf50;
  background-color: ${(props) => props.variant ? '#fff' : '#4caf50'};
  color: ${props => props.variant ? '#4caf50' : '#fff'};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  transition: .5s all ease-out;

  &:hover {
    background-color: ${({ variant }) => variant !== 'outline' ? '#fff' : '#4caf50'};
    color: ${({ variant }) => variant !== 'outline' ? '#4caf50' : '#fff'};
  }
`;

/**
 * style 을 확장할 수 있다.
 */
export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs({
  type: 'submit',
})`
  box-shadow: 0 9px #999;

  &:active {
    background-color: ${({ variant }) => variant !== 'outline' ? '#fff' : '#4caf50'};
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled.img`
  animation: ${rotate} infinite 20s linear;
`;