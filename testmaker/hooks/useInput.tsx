import React, { useCallback, useState } from "react";

const useInput = (result:any) => {
    const [data, setData] = useState(result);

    const changeData = useCallback((e) => {
        setData(e.target.value);
    }, [])

    return [data, changeData];
}


export default useInput;    