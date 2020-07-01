import React from 'react';
import { connect } from 'react-redux'
import Link from '../../../../Link'
import './SaleLine.css'

const SaleLine = ({ DBState }) => {

    let arrSale = []

    for (let key in DBState) {
        if (DBState[key].saleGroup) arrSale.push({productGroupId: 'Sale', productName: key})
    }
        
    /* let arrSaleFilter = arrSale.filter((item, pos) => arrSale.indexOf(item) === pos) */

    let left = arrSale.length ? arrSale[0].productName : ''
    let right = arrSale.length ? arrSale[1].productName : ''

    return (
        <div className='sale_line_container'>
            <div className="sale_line">

                <div className="sale_wrapper">
                    <Link to='/sale/phones'>
                        <div className='sale_element'>{left}</div>
                    </Link>
                </div>

                <div className="sale_text">Скидки до -50%</div>

                <div className="sale_wrapper">
                    <Link to='/sale/monitors'>
                        <div className='sale_element'>{right}</div>
                    </Link> 
                </div>

            </div>
        </div>
    )
}
const mapStateToProps = state => ({ DBState: state.DataBase })
     
export default connect(mapStateToProps)(SaleLine)