import React from 'react';
import { Link } from 'react-router-dom';

//Component for creating the navigation bar & navigation links

function Header() {
    return (

        <div className='flex-container'>
            <div className='gallery'><i className='fa fa-image fa-lg'></i> FLUID GALLERY</div>
            <Link to='/fluid1' className='fluid fluid1-hover'><div>1st Fluid</div></Link>
            <Link to='/fluid2' className='fluid fluid2-hover'><div>2nd Fluid</div></Link>
            <Link to='/fluid3' className='fluid fluid3-hover'><div>3rd Fluid</div></Link>
            <Link to='/columns' className='fluid column-hover'><div>Columns</div></Link>
            <Link to='/message' className='fluid message-hover'><div>Message</div></Link>
        </div>

    );
}

export default Header;