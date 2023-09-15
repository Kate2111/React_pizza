import classNames from 'classnames';
import React, { ReactNode } from 'react';


interface MyButtonProps {
    icon?: ReactNode,
    children?: ReactNode,
    onClick: () => void,
    style: string[]
}

const MyButton: React.FC<MyButtonProps> = ({onClick, icon, style, children}) => {
    return (
        <button className={classNames('button', 'button--outline', ...style)} onClick={onClick}>
            { icon }
            <span>{children}</span>
        </button>
    );
};

export default MyButton;


