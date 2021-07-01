import React from 'react';
import { LinkTo } from '../LinkTo';
import ('./Home.css')


export const Home = () => {
    return (
        <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
            <h1>Hello, My Name is Juan Sebastian,
            </h1>
            <p>I'm a web developer and programmer living in Armenia, Colombia.</p>

            <ul className="actions">
                <li><LinkTo to="one" children="Learn More"/></li>
            </ul>
        </div>
    </section>
    )
}