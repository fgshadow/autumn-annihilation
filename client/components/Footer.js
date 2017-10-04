import React from 'react'
import '../src/css/Footer.css'
import Discord from '../src/img/icons/discord.png'
import Twitch from '../src/img/icons/twitch.png'
import Twitter from '../src/img/icons/twitter.png'

const Footer = (props) => (
    <footer id="footer" style={{borderTop: '1px solid ' + props.color}}>
        <div id="footer-wrapper">
            <div id="social-icons">
                <a href="http://twitch.tv/jsweet895"><img id="twitch" src={Twitch}/></a>
                <a href="https://twitter.com/jsweet895"><img id="twitter" src={Twitter}/></a>
                <a href="https://discord.gg/qDkGZNp"><img id="discord" src={Discord}/></a>
            </div>
            <hr style={{
                backgroundColor: props.color,
                backgroundImage: 'none'
            }}/>
            <div id="credits">
                <p>Image credit goes to Riot Games.</p><br/>
                <p>Created by <span>Shadow</span></p>
            </div>
        </div>
    </footer>
);

export default Footer;
