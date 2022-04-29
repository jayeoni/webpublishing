import React from 'react';
import { Category } from '../pages/HomePage';

type CategoryButtonProps = {
    category: Category;
    onClick: (index: number) => void;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
    category,
    onClick
}) => {
    return (
        <div onClick={() => onClick(category.id)}>
            <img
                src='https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
                alt=''
                className='w-20 h-20 object-cover rounded-full'
            />
            <div className='text-center'>{category.label}</div>
        </div>
    )
};