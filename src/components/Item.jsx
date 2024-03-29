import React from 'react'
import Button from './Button.jsx'
import './Item.css'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const Item = (props) => {

    return (
        <div className='item' style={{
            backgroundImage: `url(${props.backgroungImg})`
        }}>
            <div className="item_container">
                <div className="item_text">
                    <p>{props.title}</p>
                    <div className="item_textDesc">
                        <p>{props.desc}</p>
                        
                    </div>

                    
                    
                </div>
                
                <div className="item_lowerThird">
                    <div className="item_buttons">
                        <Button imp='primary' text={props.leftBtnTxt} link={props.leftBtnLink} />
                        { // the and sign check if left side is tyrue then move to the right
                            props.twoButtons && (

                                <Button imp='secondary' text={props.rightBtnTxt} link={props.rightBtnLink} />

                            )}
                        
                    </div>
                    {
                        props.first && (
                            <div className="item_expand">
                                <ExpandMoreIcon />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Item
