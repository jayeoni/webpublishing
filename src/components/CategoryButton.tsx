import React from 'react';
import { Category } from '../pages/HomePage';

type CategoryButtonProps = {
    category: Category;
    onClick: (index: number) => void;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
    category,
    onClick,
}) => {
    return (
        <div onClick={() => onClick(category.id)} >
            <img
                src={`https://source.unsplash.com/random/?${category.imageUrl}`}
                alt=''
                className='w-20 h-20 object-cover rounded-full'
            />
            <div className='text-center'>{category.label}</div>
        </div>
    )
};