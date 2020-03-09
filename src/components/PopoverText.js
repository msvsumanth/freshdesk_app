import React, { Component } from 'react';
import {ButtonToolbar, OverlayTrigger, Tooltip} from 'react-bootstrap';
import './PopOverText.css'

export default class PopoverText extends Component {
  constructor(props){
    super(props);
    this.state={
      heading:props.heading,
      text:props.text,
      direction:props.direction,
    }
  }
    render() {
        return (
        <div>
            <ButtonToolbar>
            {[this.state.direction].map(placement => (
              <OverlayTrigger key={placement} placement={placement} 
                overlay={<Tooltip id={`tooltip-${placement}`}> <span style={{fontWeight:"bold"}} className="popoverTextStyle">{this.state.heading}</span> <span style={{fontSize:"11px"}} className="popoverTextStyle">{this.state.text}</span></Tooltip>}>
                <button className="popoverButton "></button>
              </OverlayTrigger>
            ))}
          </ButtonToolbar>
        </div>
        )
    }
}
