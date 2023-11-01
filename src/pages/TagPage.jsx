import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';

const TagPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split('/').at(-1);

    return (
        <div >
            {/* <Header /> */}
            <div className='mt-24 mb-0'> 
                <div className='flex'>
                    <button onClick={() => navigation(-1)} className='border-2 border-gray-300 py-1 px-4 rounded-md ml-5'>Back</button>
                    <h2 className='mt-2 flex items-center gap-x-3 justify-center w-11/12  mx-auto'>
                    Blog Tagged <span>#{tag}</span>
                </h2>
                </div>
               
            </div>
            <Blog />
            {/* <Pagination /> */}
        </div>
    )
}

export default TagPage