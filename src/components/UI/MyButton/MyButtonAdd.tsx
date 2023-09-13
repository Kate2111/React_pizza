import React, { ReactNode } from 'react';
import { ReactComponent as PlusCart} from '@/assets/plusCart.svg';

interface MyButtonProps {
    children?: ReactNode,
    onClick: () => void,
}

const MyButtonAdd: React.FC<MyButtonProps> = ({onClick, children}) => {
    return (
        <button className='button button--outline button--add'   onClick={onClick}>
            <PlusCart/>
            
            <span>Добавить</span> 

            {children && <i>{children}</i>}
        </button>
    );
};

export default MyButtonAdd;


