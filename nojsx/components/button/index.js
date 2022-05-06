const Button = ({ children, onClick, type }) => {
    return (
        React.createElement("button", {onClick:{onClick}, type:{type}, className:"button"}, children)
    );
}

export default Button;