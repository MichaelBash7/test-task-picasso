import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import './Button.scss';

interface ButtonProps {
    onClick?: () => void;
    children?: ReactNode;
}

export const Button = (props: ButtonProps ) => {
    const {
        children,
        onClick
    } = props;

    return (
        <button className="Button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
