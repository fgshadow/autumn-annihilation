import React from 'react'
import LoLHarrowing from '../src/img/backgrounds/halloween-teemo.jpg'
import '../src/css/HomeContent.css'

const HomeContent = () => (
    <div id="home-content">
        <div id="home-content-wrapper">
            <img src={LoLHarrowing}/>
            <p style={{color: 'red', textAlign: 'center', fontSize: '1.2em', margin: '0px auto 10px auto', width: '92.5%'}}>
                "All shall hail me! My darkness will sweep across the world!"<br/>
                - Little Devil Teemo
            </p><hr style={{height: '1px', backgroundColor: '#FBC02D', border: 'none', opacity: '0.6'}}/>
            <p>
                Why kill when you can kill <span style={{color: '#FBC02D'}}>TOGETHER</span>!!
                Call on your blood brothers and <span style={{color: '#FBC02D'}}>FIGHT</span> in the ultimate killing frenzy. Divide
                and conquer the Rift. We shall see who holds the most knowledge,
                skill, and most importantly, <span style={{color: 'red'}}>THIRST</span>!
            </p>
            <p>
                Shout your team name
                so that they may <span style={{color: '#FBC02D'}}>ALL FEAR YOUR COLLECTIVE POWER</span>!
            </p><br/><br/>
            <a href="/registration" id="button">Continue</a>
        </div>
    </div>
);

export default HomeContent;

/*<div id="team-description">
    <div class="options-header">
        <p>Team Registration</p>
    </div>

    <div class="options-content">
        <div id="team-content-img"><img src="images/azyr-wallpaper.png"/></div>
        <p style="text-align: center;"><em style="color: #FBC02D;">"What delightful agony we shall inflict."</em> - Thresh</p>
        <p>
            Why kill when you can kill <span style="color: #FBC02D;">TOGETHER</span>!!
            Call on your blood brothers and <span style="color: #FBC02D;">FIGHT</span> in the ultimate killing frenzy. Divide
            and conquer the Rift. We shall see who holds the most knowledge,
            skill, and most importantly, <span style="color: red;">thirst</span>!
        </p>
        <p>
            Shout your team name
            so that they may <span style="color: #FBC02D;">ALL FEAR YOUR COLLECTIVE POWER</span>!
        </p><br/><br/>
    </div>

    <div class="selection">
        <a href="team.html" class="button">Continue</a>
    </div>
</div>*/
