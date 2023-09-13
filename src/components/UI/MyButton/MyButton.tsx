import classNames from 'classnames';
import React, { ReactNode } from 'react';


interface MyButtonProps {
    icon?: ReactNode,
    onClick: () => void,
    style: string[]
}

const MyButton: React.FC<MyButtonProps> = ({onClick, icon, style}) => {
    return (
        <button className={classNames('button', 'button--outline', ...style)} onClick={onClick}>
            { icon }
        </button>
    );
};

export default MyButton;


