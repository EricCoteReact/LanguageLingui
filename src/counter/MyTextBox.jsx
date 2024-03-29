import React from 'react';
import {Input} from 'reactstrap';

export default function MyTextbox(props) {
    return (<Input className="my-3" 
                   value={props.value} 
                   onChange={props.onChange} />
    );
} 





