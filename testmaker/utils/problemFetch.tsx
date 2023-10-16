import axios from 'axios';

const problemFetch = ([url,viewProblem]:any) =>{
    console.log(url)
    return axios.get(url + `/${viewProblem}` ,{ withCredentials: true}). then((response) => response.data)


} 

export default problemFetch;