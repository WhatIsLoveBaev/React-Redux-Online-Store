import React from 'react';

import Slider from '../Slider'
import Collage from './Collage'
import SaleLine  from './Sale/SaleLine'
import SaleBlock from './Sale/SaleBlock'

const Content = () => {
    return (
        <div>
            <SaleLine />
            <SaleBlock />
            <Slider />
            <Collage />
        </div>
    ) 
}

export default Content
