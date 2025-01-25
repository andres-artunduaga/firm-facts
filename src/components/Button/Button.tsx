import React from 'react';
import './Button.scss';
import { useCardContext } from '../Card/Card';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    variant: "default" | "icon";
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, variant, children, disabled }) => {

    const BASE_CLASS = 'button';

    const cardContext = useCardContext();

    return (
        <button  className={`${BASE_CLASS} ${variant} ${ cardContext.isHovered ? 'hovered' : '' }`} onClick={onClick} disabled={disabled}>
            <span className={`${BASE_CLASS}__icon`}>

            </span>
            <span className={`${BASE_CLASS}__text`}>
                {children}

            </span>
        </button>
    );
};

export default Button;