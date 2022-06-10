import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const CodeFormField = () => {
  const [code, setCode] = React.useState('');
  const [cursorState, setCursorState] = React.useState<any>({
    view0: true,
    view1: false,
    view2: false,
    view3: false,
    view4: false,
    view5: false,
  });
  const cursorStateArr = [0, 1, 2, 3, 4, 5];

  const [splitCode, setSplitCode] = React.useState<string[]>([]);

  const updateCursorState = (splitStr: string[]) => {
    const updatedState = {};
    for (let key in cursorState) {
      updatedState[key] = false;
    }
    setCursorState({
      ...updatedState,
      [`view${splitStr.length}`]: true,
    });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) {
      setCode('');
    } else {
      if (e.target.value.length > 6) return;
      setCode(e.target.value);

      const splitStr = e.target.value.split('') || [];
      setSplitCode(splitStr);

      updateCursorState(splitStr);
    }
  };

  const returnCursor = num => {
    if (cursorState[`view${num}`]) return <Cursor />;
    return '';
  };

  return (
    <FormField>
      {cursorStateArr.map(num => (
        <Span key={num}>
          {splitCode[num] ? splitCode[num] : returnCursor(num)}
        </Span>
      ))}

      <InputField
        type="text"
        placeholder=""
        onChange={onChangeHandler}
        value={code}
        autoFocus
      />
    </FormField>
  );
};

const FormField = styled.div`
  height: 5rem;
  width: 40rem;
  display: flex;
  gap: 1rem;
  background: '#F5F5F5';

  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.01);
  font-size: 1.6rem;
  position: relative;
`;

const breatheAnimation = keyframes`
  from, to {
    background-color: transparent;
  }
  50% {
    background-color: black;
  }
`;

const Span = styled.span`
  display: block;
  height: 100%;
  width: 6rem;
  border: 1px solid #1778f2;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const InputField = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  color: transparent;
`;
const Cursor = styled.span`
  display: block;
  height: 25px;
  width: 2px;
  animation-name: ${breatheAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
`;
