import React from 'react';
import { connect } from 'react-redux'
import Link from '../../../Link'
import './Collage.css'

import Video from '../Video'

const Collage = ({ collage }) => (
    <div className="collage">
        {collage.map(elem => (

            <div key={elem.id} className="collage_elem">
                <Link to={`/${elem.idGroup}/${elem.product}`}>
                    <div className="elem">
                        {elem.img ? <img className='img' src={elem.img} alt={elem.label} /> : 
                        elem.video ? <Video video={elem.video} label={elem.label} /> : ''}
                    </div>
                    <span className="elem_label">{elem.label}</span>
                </Link>
            </div>
            
        ))}   
    </div>
)

const mapStateToProps = state => ({ collage: state.CollageState })

export default connect(mapStateToProps)(Collage)