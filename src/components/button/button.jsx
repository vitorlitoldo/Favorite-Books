import React from "react";

import { ButtonEditAndDelete } from "./styles.js"

const Button = (onClick, id, variant ) => {
    return (
        <ButtonEditAndDelete id={id} variant={variant} onClick={onClick}></ButtonEditAndDelete>
    )
}

export { Button };