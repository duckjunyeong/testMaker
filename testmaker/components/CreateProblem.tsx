import React, { useCallback, useState } from 'react';
import { Div, ProblemSovingInput, TitleInput, Wrapper } from './createProblemCss';
import useInput from '@hooks/useInput';
import axios from 'axios';

const CreateProblem = ({ setBolResult }: any) => {
  const [problemTitle, setProblemTitle] = useInput('');
  const [problemOne, setProblemOne] = useInput('');
  const [problemTwo, setProblemTwo] = useInput('');
  const [problemThree, setProblemThree] = useInput('');
  const [problemFour, setProblemFour] = useInput('');
  const [problemFive, setProblemFive] = useInput('');
  const [problemDescription, setProblemDescription] = useInput('');
  const [problemAnswer, setProblemAnswer] = useInput('');
  const [problemSort, setProblemSort] = useInput('');

  const offCreateScreen = useCallback((e) => {
    console.log(e.target.id);
    if (e.target.id === 'close') {
      setBolResult(false);
    }
  }, []);
  const onCreateProblem = useCallback(
    (e) => {
      e.preventDefault();

      axios.post('http://localhost:3085/api/problem/create', {
        problemTitle,
        problemOne,
        problemTwo,
        problemThree,
        problemFour,
        problemFive,
        problemAnswer,
        problemSort,
        problemDescription,
      });
    },
    [
      problemTitle,
      problemOne,
      problemTwo,
      problemThree,
      problemFour,
      problemFive,
      problemAnswer,
      problemSort,
      problemDescription,
    ],
  );

  return (
    <>
      <Wrapper id="close" onClick={offCreateScreen}>
        <Div>
          <h1>createProblem</h1>
          <form onSubmit={onCreateProblem}>
            <div>title</div>
            <TitleInput id="title" name="title" value={problemTitle} onChange={setProblemTitle}></TitleInput>
            <div>problemSoving</div>
            <div>
              <ProblemSovingInput
                id="problemOne"
                name="problemOne"
                value={problemOne}
                onChange={setProblemOne}
                placeholder="one"
              ></ProblemSovingInput>
              <ProblemSovingInput
                id="problemTwo"
                name="problemTwo"
                value={problemTwo}
                onChange={setProblemTwo}
                placeholder="two"
              ></ProblemSovingInput>
              <ProblemSovingInput
                id="problemThree"
                name="problemThree"
                value={problemThree}
                onChange={setProblemThree}
                placeholder="three"
              ></ProblemSovingInput>
              <ProblemSovingInput
                id="problemFour"
                name="problemFour"
                value={problemFour}
                onChange={setProblemFour}
                placeholder="four"
              ></ProblemSovingInput>
              <ProblemSovingInput
                id="problemFive"
                name="problemFive"
                value={problemFive}
                onChange={setProblemFive}
                placeholder="five"
              ></ProblemSovingInput>
            </div>
            <div>answer</div>
            <input name="problemAnswer" id="problemAnswer" value={problemAnswer} onChange={setProblemAnswer}></input>
            <div>description</div>
            <input
              name="description"
              id="description"
              value={problemDescription}
              onChange={setProblemDescription}
            ></input>
            <div>문제 선택</div>
            <select name="problemSort" id="problemSort" value={problemSort} onChange={setProblemSort}>
              <option value="react">react</option>
              <option value="javascript">javascript</option>
              <option value="CS">CS</option>
              <option value="html">html</option>
            </select>
            <button>생성하기</button>
          </form>
          <button id="close" onClick={offCreateScreen}>
            X
          </button>
        </Div>
      </Wrapper>
    </>
  );
};

export default CreateProblem;
