import React from 'react';
import Link from '../../Link'
import Search from './Search/Search'

const Header = ({ modal, productList }) => (
    
    <div className="header_menu">
        <div className='header_container'>
            <div className='logo_wrapper'>
                <Link to='/'>
                    <span className="logo">STORE</span>
                </Link>
            </div>
            <div className='product_wrapper active'><span>товары</span></div>
            <Search />
            <div className='svg_wrapper'>

                <span className='svg'>
                    <Link to='/login'>
                        <svg fill='#fff' height="20" viewBox='0 0 20 20'>
                            <path d='M14 6a4 4 0 10-8 0 4 4 0 008 0zm2 0A6 6 0 114 6a6 6 0 0112 0zm-6 9c-3.068 0-5.67 1.223-7.035 3h14.07c-1.365-1.777-3.967-3-7.035-3zm10 5H0c.553-4.006 4.819-7 10-7s9.447 2.994 10 7z'/>
                        </svg>
                    </Link>
                </span>
                <span className='svg'>
                    <Link to='/liked'>
                        <svg fill='#fff' height="20" viewBox='0 0 20 17'>
                            <path d='M9.966 3.105l.17-.166A4.772 4.772 0 0113.4 1.636c2.705-.003 4.9 2.271 4.903 5.08.009 6.458-8.321 9.92-8.321 9.92S1.644 13.195 1.636 6.74c-.002-2.81 2.187-5.09 4.891-5.095A4.778 4.778 0 019.796 2.94l.17.165z'/>
                        </svg>
                    </Link>
                </span>
                <span className='svg'>
                    <Link to='/basket'>
                        <svg fill='#fff' height="20" viewBox='0 0 20 20'>
                            <path d='M18 17.987V7H2v11l16-.013zM4.077 5A5.996 5.996 0 0110 0c2.973 0 5.562 2.162 6.038 5H20v14.986L0 20V5h4.077zm9.902-.005C13.531 3.275 11.86 2 10 2 8.153 2 6.604 3.294 6.144 4.995c.92 0 7.654.03 7.835 0z'/>
                        </svg>
                    </Link> 
                </span>
            </div>
        </div>
        {productList}
        {modal} 
    </div>
)

export default Header