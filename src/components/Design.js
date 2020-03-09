import React, {Component} from 'react';
import Conversations from "../images/1conversations.png";
import Collaborations from "../images/2collaborations.png";
import Support from "../images/3support.png";
import Answers from "../images/4answers.png";
import Insights from "../images/5insights.png";
import ChatLogo from "../images/chatLogo.png";
import './Design.css';
import Nav from '../components/Nav';
import PopoverDotAni from './PopoverDotAni';


export default class Design extends Component {
        constructor(){
          super();
          this.state={
             Conversations:{
                  headingOne:"Unify support channels",
                  textOne:"Streamline your support channels - Email, Phone, Chat and more - so you can respond to all your customers from just one place.",
                  directionOne:"right",
                  headingTwo:"Manage conversationeasily ",
                  textTwo:"Notice trends, set priorities, assign tickets to right agents, and enable faster resolutions from one place.",               
                  directionTwo:"left"
                } ,
                Collaborations:{
                  headingOne:"Conversations with context",
                  textOne:"Invite anyone - agents, colleagues, or external business partners - to discuss and solve tickets through Fresh connect.",
                  directionOne:"left",
                  headingTwo:"Share ticket ownership",
                  textTwo:"Work in parallel with other teams by sharing ticket  ownership, and find  answers without losing  visibility at any point.",               
                  directionTwo:"left"
                },
                Support:{
                  headingOne:"Three different automation",
                  textOne:"These automations will help you eliminate repetitive tasks and keep an eye on critical events.",
                  directionOne:"right",
                  headingTwo:"Manage automations easily",
                  textTwo:"Automatic rule summaries, audit logs and the flexibility in using logical operators makes managing automations simple.",               
                  directionTwo:"top"
                },
                Answers:{
                  headingOne:"Solutions up front-center",
                  textOne:"Guide customers to get help faster, by showing solution articles on your website.",
                  directionOne:"left",
                  headingTwo:"A simple contact form",
                  textTwo:"When your customers have a question, you’ll be just a click away.",               
                  directionTwo:"left"
                },
                Insights:{
                  headingOne:"Team Dashboards",
                  textOne:"Monitor your teams easily and take data driven decisions to hit your support targets with customizable Team Dashboards",
                  directionOne:"right",
                  headingTwo:"Seven Widget Types",
                  textTwo:"Observe important metrics closely with seven widget types. Notice trends and drill down into extensive reports anytime with just one click.",               
                  directionTwo:"left"
                }
              
          }
        }
        render(){

        return (
            <div className="bg-white">
                <Nav/>
              
              <div className="container">
                <div className="row">
                    <h2 className="col-12 d-flex justify-content-center pt-3 pb-3" style={{color:"#4d4d4d"}}>Support, now simplified</h2>
                  
                
                <div className="container-fluid d-flex justify-content-center">
                 <div className="col-lg-12 col-xl-12 d-flex ">
                  <div className="col-lg-4 col-xl-4">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <a className="supportButtons nav-link text-secondary pt-4 pb-4 mb-2 active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Conversations made easier</a>
                      <a className="supportButtons nav-link text-secondary pt-4 pb-4 mb-2" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Collaborations made stronger</a>
                      <a className="supportButtons nav-link text-secondary pt-4 pb-4 mb-2" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Support made more automatic</a>
                      <a className="supportButtons nav-link text-secondary pt-4 pb-4 mb-2" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Answers made available faster</a>
                      <a className="supportButtons nav-link text-secondary pt-4 pb-4 mb-2" id="v-pills-Insights-tab" data-toggle="pill" href="#v-pills-Insights" role="tab" aria-controls="v-pills-Insights" aria-selected="false">Insights made more accessible</a>
                    </div>
                  </div>

                  <div className="col-lg-8 col-xl-8 p-0">
                  <div className="imageBackground col-lg-12 col-xl-12">
            
                    <span id="dot" className="dot1"></span>
                    <span id="dot" className="dot2"></span>
                    <span id="dot" className="dot3"></span>
                
                  
                  <div className="tab-content" id="v-pills-tabContent">
                    <div className="pictureDimensions tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><img src={Conversations} className="img-fluid" alt="Conversations" /> 
                      <div className="onePopover1"><PopoverDotAni value = {1} heading={this.state.Conversations.headingOne} text={this.state.Conversations.textOne} direction={this.state.Conversations.directionOne}/></div>
                      <div className="twoPopover1"><PopoverDotAni value = {2} heading={this.state.Conversations.headingTwo} text={this.state.Conversations.textTwo} direction={this.state.Conversations.directionTwo}/></div>
                    </div>

                    <div className="pictureDimensions tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"><img src={Collaborations} className="img-fluid" alt="Collaborations" />
                      <div className="onePopover2"><PopoverDotAni value = {1} heading={this.state.Collaborations.headingOne} text={this.state.Collaborations.textOne} direction={this.state.Collaborations.directionOne}/></div>
                      <div className="twoPopover2"><PopoverDotAni value = {2} heading={this.state.Collaborations.headingTwo} text={this.state.Collaborations.textTwo} direction={this.state.Collaborations.directionTwo}/></div>
                    </div>
                      
                    <div className="pictureDimensions tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"><img src={Support} className="img-fluid" alt="Support" />
                      <div className="onePopover3"><PopoverDotAni value = {1} heading={this.state.Support.headingOne} text={this.state.Support.textOne} direction={this.state.Support.directionOne}/></div>
                      <div className="twoPopover3"><PopoverDotAni value = {2} heading={this.state.Support.headingTwo} text={this.state.Support.textTwo} direction={this.state.Support.directionTwo}/></div>
                    </div>
                    <div className="pictureDimensions tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"><img src={Answers} className="img-fluid" alt="Answers" />
                      <div className="onePopover4"><PopoverDotAni value = {1} heading={this.state.Answers.headingOne} text={this.state.Answers.textOne} direction={this.state.Answers.directionOne}/></div>
                      <div className="twoPopover4"><PopoverDotAni value = {2} heading={this.state.Answers.headingTwo} text={this.state.Answers.textTwo} direction={this.state.Answers.directionTwo}/></div>
                    </div>
                    <div className="pictureDimensions tab-pane fade" id="v-pills-Insights" role="tabpanel" aria-labelledby="v-pills-Insights-tab"><img src={Insights} className="img-fluid" alt="Insights" />
                      <div className="onePopover5"><PopoverDotAni value = {1} heading={this.state.Insights.headingOne} text={this.state.Insights.textOne} direction={this.state.Insights.directionOne}/></div>
                      <div className="twoPopover5"><PopoverDotAni value = {2} heading={this.state.Insights.headingTwo} text={this.state.Insights.textTwo} direction={this.state.Insights.directionTwo}/></div>
                    </div>
                  </div>
                
                  </div>
                  </div>
                </div>
                
              </div>
              </div>
            </div>
            <div className="ChatLogo"><img src={ChatLogo} className="img-fluid" alt="ChatLogo" /></div>
          </div>
        )
                  
      }
    
}
