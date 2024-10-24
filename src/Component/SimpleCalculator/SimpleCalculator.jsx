import React from "react";
import Style from "./SimpleCalculator.module.css";
import {useState} from "react";

const SimpleCalculator = () => {



    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState("");
    const buttonLayout = [["7","8","9","+"],["4","5","6","-"],["1","2","3","*"],["C","0","=","/"]];
    
    const handleButtonClick = (value) => {
        if(value === "C") {
            setInputValue("");
            setResult("");
        }
        else if(value === "="){
            try{
                setResult(eval(inputValue).toString());
            }catch(error){
                setResult("Error");
            }
        }else{
            setInputValue(prev=> prev + value);
        }
    };

    return (
        
        <>
            <div className={Style.Calculator}>
                <h1 style={{fontSize:"40px"}}>React Calculator</h1>
                
                <input 
                        style={{width:"200px"}}
                        value={inputValue}
                        type="text"
                        placeholder=""
                        name="Input"
                        id="input"
                        readOnly
                /> 
                {result ? <p>{result}</p> : <p></p>}
                    
                           
                
                {buttonLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className={Style.Row}>
                        {row.map((buttonValue, buttonIndex) => (
                            <button 
                                key={buttonIndex} 
                                className={Style.Button}
                                onClick={() => handleButtonClick(buttonValue)}>
                             {buttonValue}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}
export default SimpleCalculator;