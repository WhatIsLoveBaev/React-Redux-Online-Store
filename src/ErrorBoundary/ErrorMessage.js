import React from 'react';
import './ErrorMessage.css'

const ErrorMessage = ({ info }) => {
    return (
        <div className='error'>
            <span>Произошла ошибка, перезагрузите страницу и сообщите нам об ошибке</span>
            <div>{info.componentStack}</div>
        </div>
    )
}

export default ErrorMessage