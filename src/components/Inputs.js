import React from 'react'

function Inputs({ inputsValue, setInputsValue,setIsShowResult }) {
    const handleChangeInputValue = (e) => {
        // setInputsValue();
        const { name, value } = e.target;
        // console.log(e.target.value);
        setInputsValue({ ...inputsValue, [name]: value });
    };
    const handleClickedButton = () => setIsShowResult(false);
    {
        
        }
  return (
      <>
      
          <label>Fullname</label>
          <input placeholder='fullname' onChange={handleChangeInputValue} name='fullname' defaultValue={inputsValue.fullname}></input>
          <button onClick={handleClickedButton}>Show</button>
      </>
  )
}

export default Inputs