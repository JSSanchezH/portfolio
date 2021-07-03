import React, { useContext } from 'react';
import { Text, LanguageContext } from '../../containers/Language';
import { LinkTo } from '../LinkTo';
import ('./Home.css')


export const Home = () => {
    const { dictionary } = useContext(LanguageContext);

    return (
        <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
            <h1><Text tid="home" bid="title"/></h1>
            <p><Text tid="home" bid="subtitle"/></p>

            <ul className="actions">
                <li><LinkTo to="one" children={dictionary.button.learnmore}/></li>
            </ul>
        </div>
    </section>
    )
}