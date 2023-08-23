import React from "react";

export interface inputInterface {
    value: string
    error?: string
    inputStyle?: string
    errorStyle?: string
    changeInputFunc: React.ChangeEventHandler<HTMLInputElement>
}