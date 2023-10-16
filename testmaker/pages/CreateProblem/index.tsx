import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import problemFetch from "@utils/problemFetch";
import fetcher from "@utils/fetcher";
const CreateProblem = () => {
    const { data, error, mutate } = useSWR("http://localhost:3085/api/user", fetcher, {
        dedupingInterval: 2000,
      });
      
      const [exProblem, setExproblem] = useState('');
      const [corProblem, setCorproblem] = useState('');
      const [problemName, setPrombelmName] = useState('');
      const [viewProblem, setViewPromblem] = useState('react')
      const {data: problem, error: problemError}= useSWR(['http://localhost:3085/api/problem', viewProblem], problemFetch, {
        dedupingInterval: 2000,
      })
     
      
    // const loadingProblem = useCallback((name) => {
    //     console.log(name)
    //     axios.get(`http://localhost:3085/api/problem/${name}`)
    //     .then((response) => {
    //         console.log(response)
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //     })
    // } , [])

    const changeExproblem = useCallback((e) => {
        setExproblem(e.target.value)
    }, [exProblem])

    const changeCorproblem = useCallback((e) => {
        setCorproblem(e.target.value)
    }, [corProblem])

    const changeName = useCallback((e) => {
        console.log(e.target.value)
        setPrombelmName(e.target.value)
    }, [])

    const clearInput = useCallback(() => {
        setExproblem('')
        setCorproblem('')
    }, [])
    const onCreateProblem = useCallback((e) =>{
        e.preventDefault();
        
            axios.post('http://localhost:3085/api/problem/create', {exProblem, corProblem,problemName})
            .then((response) => {
                console.log(response.data)
                clearInput()
            })
            .catch((error) => {
                console.error(error)
            })
    
        
    } , [exProblem, corProblem, problemName])

    
    return(
        <>
            <h1>문제만들기</h1>
            <h2>의 문제</h2>
            <form onSubmit={onCreateProblem}>
                <div>
                    <div>문제의 설명</div>
                    <textarea name="exProblem" id="exProblem" onChange={changeExproblem} value={exProblem}></textarea>
                </div>
                <div>
                    <div>문제의 정답</div>
                    <div>1번</div>
                    <input></input>
                    <div>2번</div>
                    <input></input>
                    <div>3번</div>
                    <input></input>
                    <input></input>
                    <input></input>
                    {/* <textarea name="corProblem" id="corProblem"  onChange={changeCorproblem} value={corProblem}></textarea> */}
                </div>
                <div>
                    <div>문제 선택</div>
                    <select onChange={changeName}>
                        <option value="react">react</option>
                        <option value="javascript">javascript</option>
                        <option value="CS">CS</option>
                        <option value="html">html</option>
                    </select>
                </div>
                <button>생성하기</button>
            </form>

            <button onClick={() => {setViewPromblem('react')}}>react문제보기</button>
            <button onClick={() => {setViewPromblem('html')}}>html문제보기</button>

        </>
    )
}

export default CreateProblem;