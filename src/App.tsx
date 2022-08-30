import React, { useState } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';

import {
  CalculatorBody,
  Content,
  KeysContent,
  Keyboard,
  Button,
  Input,
  Span,
} from './styles/App';

const App = () => {
  let initialResponses: any = [];
  let initialCount = '';
  const [state, setState] = useState(initialCount);
  const [responses, setResponses] = useState(initialResponses);

  const calcula = (index: string) => {
    let trocado: string = index.replace('x', '*');
    try {
      let valor = eval(trocado);
      setState(`${valor}`);
      responses.push({ calc: trocado, result: `${valor}` });
      return state;
    } catch (err) {}
  };

  const handleChange = (reciver: any) => {
    setState(reciver.target.value);
  };

  const verify = (index: any) => {
    if (index.length === 0) {
      return '';
    } else {
      return index[0].calc;
    }
  };

  let lastIndex = responses.slice(-1);

  return (
    <Content>
      <CalculatorBody>
        <Span>{verify(lastIndex)}</Span>
        <Input
          value={state}
          onChange={handleChange}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              calcula(state);
            }
          }}
        ></Input>
        <KeysContent>
          <Keyboard>
            <Button
              onClick={() => {
                setState('');
                setResponses([]);
              }}
            >
              C
            </Button>
            <Button>()</Button>
            <Button>%</Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '/');
              }}
            >
              /
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '7');
              }}
            >
              7
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '8');
              }}
            >
              8
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '9');
              }}
            >
              9
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + 'x');
              }}
            >
              x
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '4');
              }}
            >
              4
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '5');
              }}
            >
              5
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '6');
              }}
            >
              6
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '-');
              }}
            >
              -
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '1');
              }}
            >
              1
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '2');
              }}
            >
              2
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '3');
              }}
            >
              3
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '+');
              }}
            >
              +
            </Button>
            <Button>+/-</Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '0');
              }}
            >
              0
            </Button>
            <Button
              onClick={() => {
                setState(oldState => oldState + '.');
              }}
            >
              .
            </Button>
            <Button
              onClick={() => {
                calcula(state);
              }}
            >
              =
            </Button>
          </Keyboard>
        </KeysContent>
      </CalculatorBody>
      <GlobalStyles />
    </Content>
  );
};

export default App;
