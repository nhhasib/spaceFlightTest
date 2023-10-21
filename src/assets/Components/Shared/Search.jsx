import React from 'react';

const Search = () => {
    return (
        <div className='grid grid-cols-2 gap-6 my-6'>
            <div className=''>
            <input className='border w-4/5' type="text" />
            </div>
            <div className='flex gap-6'>
                <div>
                <input className='border' type="text" />
                </div>
                <div>
                    <input className='border' type="text" />
                    </div>
            </div>
        </div>
    );
};

export default Search;