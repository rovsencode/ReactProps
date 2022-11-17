import React from 'react'

function Inputs({ inputsValue, setInputsValue,setIsShowResult }) {
    const handleChangeInputValue = (e) => {
        // setInputsValue();
        console.log(e.target.value);
    };
    const handleClickedButton = () => setIsShowResult(false);
    {
        
        }
  return (
      <>
      
          <label>Fullname</label>
          <input placeholder='fullname' onChange={handleChangeInputValue} name='fullname' defaultValue={inputsValue.fullname}></input>
          <button onClick={handleClickedButton}>Add input</button>
      </>
  )
}

export default Inputs