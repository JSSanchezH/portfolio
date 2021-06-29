import React from 'react';
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

export const Portfolio = () => {
    return (
        <section id="two" className="wrapper style2 spotlights">
        <section>
            <a href="#" className="image"><img src={pic01} alt="" data-position="center center" /></a>
            <div className="content">
                <div className="inner">
                    <h2>Sed ipsum dolor</h2>
                    <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                    <ul className="actions">
                        <li><a href="generic.html" className="button">Learn more</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <a href="#" className="image"><img src={pic02} alt="" data-position="top center" /></a>
            <div className="content">
                <div className="inner">
                    <h2>Feugiat consequat</h2>
                    <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                    <ul className="actions">
                        <li><a href="generic.html" className="button">Learn more</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section>
            <a href="#" className="image"><img src={pic03} alt="" data-position="25% 25%" /></a>
            <div className="content">
                <div className="inner">
                    <h2>Ultricies aliquam</h2>
                    <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                    <ul className="actions">
                        <li><a href="generic.html" className="button">Learn more</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </section>
    )
}