import { StyledInput } from "./styles.js"

const Input = ({ placeholder, ...props }) => {
    return (
        <StyledInput placeholder={placeholder} {...props} />
    )
}

export { Input };