import React, { ReactNode } from 'react';
import { ReactComponent as PlusCart} from '@/components/UI/MyButton/plusCart.svg'

interface MyButtonProps {
    children: ReactNode;
    onClick: () => void
}

const MyButton: React.FC<MyButtonProps> = ({children, onClick}) => {
    return (
        <button className="button button--outline button--add"  onClick={onClick}>
            <PlusCart/>
            <span>Добавить</span>
            {children && <i>{children}</i>}
        </button>
    );
};

export default MyButton;


