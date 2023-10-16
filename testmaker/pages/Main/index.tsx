import React, { useCallback, useState } from 'react';
import useSWR from 'swr';
import { HeaderRight, HeaderWrapper, Href } from '@pages/Main/style';
import LoginJoin from '@layouts/loginJoin';
import axios from 'axios';
import fetch from '@utils/fetcher';
import { Redirect } from 'react-router';
import CreateProblem from '@components/CreateProblem';
import changeCreateProblemScreen from '@utils/changeCreateProblemScreen';
const Main = () => {
  const { data, error, mutate } = useSWR('http://localhost:3085/api/user', fetch, {
    dedupingInterval: 2000,
  });
  const [bolResult, setBolResult] = useState(true);
  // const {data: onCreateProblemScreen, error: onCreateProblemScreenError, mutate:onCreateProblemScreenMutate} = useSWR("0", changeCreateProblemScreen)
  const [onCreateProblemScreen, setOnCreateProblemScreen] = useState(false);
  const logout = useCallback((e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3085/api/user/logout', null, {
        withCredentials: true,
      })
      .then((response) => {
        mutate(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onCreateProblem = useCallback(() => {
    setBolResult(true);
  }, []);
  //  setBolResult={setBolResult}
  return (
    <>
      {bolResult ? <CreateProblem></CreateProblem> : null}
      <HeaderWrapper>
        <HeaderRight>
          <a>
            <img src="http://localhost:3085/logo.png" />
          </a>
          {data ? <button onClick={logout}>로그아웃</button> : <LoginJoin></LoginJoin>}
        </HeaderRight>
        <div>
          <Href onClick={onCreateProblem}>문제 만들기</Href>
          <Href href="#">나의 시험지</Href>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Main;
