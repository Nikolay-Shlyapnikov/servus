import React from 'react';
import {inputInterface} from "../../types/input";
export const Input = (props:inputInterface) =>{
    return (
        <div className='input__wrapper'>
            <input className={'input '+props.inputStyle} value={props.value} onChange={props.changeInputFunc}/>
            <p className={'input__error '+props.errorStyle}>{props.error}</p>
        </div>
    )
}