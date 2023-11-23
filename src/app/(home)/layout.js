import Navbar from '@/component/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className=' xl:container mx-auto'>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layout;