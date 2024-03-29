import React from 'react';
import {Button} from 'reactstrap'

export default function MyButton(props) {
    return(
        <Button color='primary' className='mr-3' 
            onClick={(e) => props.onClick(+props.incr)} >
               Increase {props.incr}
        </Button>
    );
}
