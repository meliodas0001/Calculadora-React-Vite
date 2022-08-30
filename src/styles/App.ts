import styled from 'styled-components';

const backgroundColor = '#252a2e';
const calculatorBackground = '#171C22';
const keyboardBackground = '#212A35';
const greyButton = '#171C22';
const oldAccount = '#828A93';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: ${backgroundColor};
  justify-content: center;
  align-items: center;
`;

export const CalculatorBody = styled.div`
  height: 782px;
  width: 414px;
  background: ${calculatorBackground};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Span = styled.span`
  color: ${oldAccount};
  font-size: 36px;
  position: relative;
  margin-left: auto;
  top: 15%;
  font-weight: 500;
  line-height: 43px;
`;

export const Input = styled.input`
  width: 100%;
  height: 233px;
  background: #171c22;
  border: none;
  outline: none;
  text-align: right;
  color: #ffffff;
  font-size: 64px;
  font-weight: 700;
  line-height: 77px;
  padding-top: 100px;
`;

export const KeysContent = styled.div`
  width: 414px;
  height: 538px;
  background: ${keyboardBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Keyboard = styled.div`
  width: 374px;
  height: 455px;
`;

export const Button = styled.button`
  height: 83px;
  width: 83px;
  text-align: center;
  border-radius: 9px;
  background: ${greyButton};
  border: none;
  color: white;
  font-size: 26px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  line-height: 31px;
  margin-left: 10px;
  margin-top: 11px;
  display: inline-flex;
  outline: none;
`;
