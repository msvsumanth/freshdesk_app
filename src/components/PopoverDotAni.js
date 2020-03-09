import React, { Component } from "react";
import "./PopoverDotAni.css";
import PopoverText from '../components/PopoverText';

export default class PopoverDotAni extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading:props.heading,
      value: props.value,
      text:props.text,
      direction:props.direction
    };
  }

  render() {
    return (
      <div>
     
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="row ">
                <span
                  href="#"
                  className="intro-banner-vdo-play-btn pinkBg d-flex align-items-center justify-content-center"
                  target="_blank"
                >
                  <i
                    className="glyphicon glyphicon-play whiteText "
                    aria-hidden="true"
                  />
                  <h6 className="text-white m-0">{this.state.value}</h6>
                  <span className="ripple pinkBg" />
                </span>
                <span className="PoppoverTextPosition"><PopoverText heading={this.state.heading} text={this.state.text} direction={this.state.direction}/></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{/*<span className="ripple pinkBg" />
<span className="ripple pinkBg" />*/}
