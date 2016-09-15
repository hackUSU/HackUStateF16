"use strict";

import React                    from 'react';
import Scroll                   from 'react-scroll';
import assets                   from '../libs/assets';
import Navbar                   from './common/nav_bar';
import Materialize              from 'materialize-css';


export default class Home extends React.Component {

  render(){

    return(
      <div>
        <Navbar />
        <div className='default-background'>
          <Scroll.Element name='home'>
            <div className='row' style={{'marginTop': '-5rem'}}>
              <img src={assets('./images/logo-with-text.png')} className='responsive-img'/>
              <a id="mlh-trust-badge" style={{display:'block',maxWidth:'100px',minWidth:'60px',position:'fixed',right:'50px',top:'0',width:'10%',zIndex:'10000'}}
              href="https://mlh.io/seasons/na-2017/events?utm_source=na-2017&utm_medium=TrustBadge&utm_campaign=na-2017&utm_content=white" target="_blank">
              <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg" alt="Major League Hacking 2017 Hackathon Season" style={{width:'100%'}}/></a>
            </div>
          </Scroll.Element>

          <div className='row text-blue center' style={{fontSize: '40px'}}>500 Students - 36 Hours</div>


          <Scroll.Element name='about' style={{paddingTop: '100px'}}>
            <div className='row image1'>
              <div className='col s12 cards-container'>
                <div className='col m10'>
                  <div className="card text-blue default-background">
                    <div className="card-content">
                      <span className="card-title">About</span>
                      <p>
                        HackUState is developing an environment for technology innovation. <br/><br/>
                        This is where students and employers come together at Utah State University
                        to create the future of tech in Utah. <br/>
                    </p><br/>
                    <div className="card-action">
                      <a href="https://hackustate.typeform.com/to/SiqUcO" className="waves-light brown lighten-5 btn text-blue default-background">Register HERE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col s12 cards-container'>
              <div className='col m10 push-m2'>
                <div className="card text-blue default-background">
                  <div className="card-content">
                    <span className="card-title">FAQ</span>
                    <p>
                      What is a hackathon?<br/><br/>
                      A hackathon is an event for students at all skill levels; which encourages learning new technology, collaborating with other students, and creating something mind-blowing.<br/><br/>
                      How can I register?<br/><br/>
                      Registration is now open! Save your seats and register now, spots are filling up fast! If you're a USU Student, you're guaranteed a seat but still need to register.<br/><br/>
                      Who is invited?<br/><br/>
                      All undergraduate students from any university are welcome. Non-USU students must be 18 or older. Unfortunately, high school students cannot attend this year.<br/><br/>
                      How much is it?<br/><br/>
                      The event is FREE TO ALL UNIVERSITY STUDENTS and includes food, drinks, and a bunch of swag for the entire hackathon!<br/><br/>
                      Will there be buses?<br/><br/>
                      We would like to provide buses from BYU, UVU, and U of U. In order for us to do so, we need at least 50 attendees from each school. Please contact us to find out how many hackers you need to invite and to help organize a bus for your school!<br/><br/>
                      What should I bring?<br/><br/>
                      All attendees are required to bring their valid student ID for admission (name must match registration) and a laptop for hacking.<br/><br/>
                      Are there any rules?<br/><br/>
                      USU is a dry campus (no alcohol) but we'll have lots of energy drinks! Please no firearms, knives, or weapons of any kind. Also, we expect all hackers to follow MLH's Code of Conduct.<br/><br/>
                      What food will you provide?<br/><br/>
                      All meals from Lunch on Friday to Dinner on Saturday, as well as snacks in between, are covered by us. We&#39;ll try to accommodate dietary restrictions as best we can!<br/><br/>
                      Other Questions?<br/><br/>
                      You can get in touch with us at team@hackustate.org or via <a href="https://twitter.com/hackustate">Twitter</a>, or <a href="https://facebook.com/hackustate">Facebook</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </Scroll.Element>

          <Scroll.Element name='schedule'>
            <div className='row image1'>
              <div className='text-blue center' style={{paddingTop: '120px', fontSize: '40px'}}>Schedule</div>
              <div className='col s12 cards-container'>
                <div className='col m6'>
                  <div className="card text-blue default-background">
                    <div className="card-content">
                      <div className='left-align'>Friday, October 7th<br/><br/>
                      9:00am - Registration<br/><br/>
                      10:30am - Opening Ceremony<br/><br/>
                      1:00pm - Lunch<br/><br/>
                      6:00pm - Dinner<br/><br/>
                      9:00pm - Mini-Event<br/><br/>
                      12:00am - Aggie Ice Cream</div><br/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col m6 push-m6'>
                <div className="card text-blue default-background">
                  <div className="card-content">
                    <div className='right-align'>Saturday, October 8th<br/><br/>
                      8:00am - Breakfast<br/><br/>
                      9:00am - Workshop<br/><br/>
                      11:00am - Mini-Event<br/><br/>
                      1:00pm - Lunch<br/><br/>
                      6:00pm - Dinner<br/><br/>
                      8:00pm - Closing Ceremony</div><br/>
                  </div>
                </div>
              </div>
            </div>

          </Scroll.Element>

          <Scroll.Element name='sponsors'>
            <div className='row image1' style={{paddingTop: '120px'}}>
              <div className='col s12 cards-container'>
                <div className='col m6'>
                  <div className="card text-blue default-background">
                    <div className="card-content">
                      <span className="card-title">Sponsors</span><br/><br/>
                      <div className="divider default-background" style={{paddingBottom: '50px'}}></div>
                      <a href="http://mlh.io"><img src={assets('./images/mlh-logo-color.png')} className='responsive-img scale-image'/></a><br/><br/>
                      <div className="divider default-background" style={{paddingBottom: '50px'}}></div>
                      <a href="http://amadeus.com"><img src={assets('./images/amadeus.png')} className='responsive-img scale-image'/></a><br/><br/>
                      <div className="divider default-background" style={{paddingBottom: '50px'}}></div>
                      <a href="http://clarifai.com"><img src={assets('./images/clarifai.png')} className='responsive-img scale-image'/></a><br/><br/>
                      <div className="divider default-background" style={{paddingBottom: '50px'}}></div>
                      <a href="http://engineering.usu.edu/"><img src={assets('./images/eng-usu-blue.png')} className='responsive-img scale-image'/></a><br/><br/>
                      <div className="divider default-background" style={{paddingBottom: '50px'}}></div>
                      <a href="https://stgconsulting.com/"><img src={assets('./images/stg-logo.png')} className='responsive-img scale-image'/></a><br/><br/>
                      <div className="divider default-background" style={{paddingBottom: '50px'}}></div>
                      <a href="http://growutahventures.com//"><img src={assets('./images/GrowUtah.png')} className='responsive-img scale-image'/></a><br/><br/>
                    </div>
                  </div>
                </div>
                <div className='col m6'>
                  <div className="card text-blue default-background">
                    <div className="card-content">
                      <a href="http://qualtrics.com"><img src={assets('./images/qualtrics.png')} className='responsive-img scale-image'/></a><br/><br/>
                      <div className="divider default-background" style={{paddingBottom: '50px'}}></div>
                      <a href="http://lightningkite.com"><img src={assets('./images/lk-yellow.png')} className='responsive-img scale-image'/></a><br/><br/>
                      <div className="divider default-background" style={{paddingBottom: '50px'}}></div>
                      <a href="http://namecheap.com"><img src={assets('./images/namecheap_Logo.png')} className='responsive-img scale-image'/></a><br/><br/>
                      <div className="divider default-background" style={{paddingBottom: '50px'}}></div>
                      <a href="http://atomicjolt.com"><img src={assets('./images/aj-logo.png')} className='responsive-img scale-image'/></a><br/><br/>
                      <div className="divider default-background" style={{paddingBottom: '50px'}}></div>
                      <a href="http://sdl.usu.edu/"><img src={assets('./images/sdl-color-logo.png')} className='responsive-img scale-image'/></a><br/><br/>
                      <div className="divider default-background" style={{paddingBottom: '50px'}}></div>
                      <a href="https://hackusu.github.io/hackusu"><img src={assets('./images/career-services.png')} className='responsive-img scale-image'/></a><br/><br/>
                      <div className="divider default-background" style={{paddingBottom: '50px'}}></div>
                      <a href="https://hackusu.github.io/hackusu"><img src={assets('./images/Logo-Main.png')} className='responsive-img scale-image'/></a><br/><br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Scroll.Element>
        </div>
      </div>
    );
  }
}

// <div className="parallax-container">
//   <div className="parallax"><img src={"\." + assets('./images/hackustate-logo.png')} /></div>
//   <h1>Things that I say</h1>
// </div>
