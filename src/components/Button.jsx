import React from 'react';

const Button = ({title}) => {
    return (
        <div>
            <button className='bg-[#20AD96] text-[13px] text-white px-4 py-2 rounded-md'>{title}</button>
        </div>
    );
};

export default Button;