import React from 'react'
import Twitter from '../src/img/icons/twitter.png'
import Discord from '../src/img/icons/discord.png'
import '../src/css/ThankYouSection.css'

const ThankYouSection = () => (
    <div id="thank-you-section">
        <header id="thank-you-title">
            <h1>Thank You!</h1>
        </header>
        <div id="thank-you-content">
            <p>Your form was successfully submitted!</p><br/>
            <p>
                Stay tuned on future updates by following me on twitter
                or joining me on discord. Best of luck on the rift and
                may the odds be ever in your favor.
            </p>
            <div id="social-media-links">
                <a href="https://discord.gg/qDkGZNp"><img id="discord" src={Discord}/></a>
                <a href="https://twitter.com/jsweet895"><img id="twitter" src={Twitter}/></a>
            </div>
        </div>
    </div>
);

export default ThankYouSection;
