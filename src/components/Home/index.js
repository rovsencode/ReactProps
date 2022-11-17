import React from 'react'
import Inputs from '../Inputs';

function Home() {
    const [state, setState] = React.useState();
    const [inputsValue, setInputsValue] = React.useState({
        fullname: "",
    });
    const [isShowResult, setIsShowResult] = React.useState(true);
    return (
        <>
           {isShowResult ? ( <Inputs inputsValue={inputsValue} setInputsValue={setInputsValue}
                setIsShowResult={setIsShowResult} />) : <> </>}
           
        </>
  
  )
}

export default Home