import React, { useContext } from 'react';
import { AboutMeItems } from './AboutMeItems';
import { Text, LanguageContext } from '../../containers/Language';
import './AboutMe.css'
import { HLink } from '../HLink';
import { SectionIcon } from '../SectionIcon';

export const AboutMe = () => {
	const { dictionary } = useContext(LanguageContext);

    return (
            <section id="one" className="wrapper style3 fade-up">
				<div className="inner">
					<h2><Text tid="aboutme" bid="title"/></h2>
					<p><Text tid="aboutme" bid="subtitle"/></p>
					<div className="features">
						{AboutMeItems.map((item, index)=> (
							<SectionIcon
							key={index} 
							id={item.icon}
							className={item.cName} 
							dataIcon={item.dataIcon}
							d={item.d}
							viewBox={item.viewBox}
							title={dictionary[item.id][item.title]}
							paragraph={dictionary[item.id][item.paragraph]}
							/>
                 		 ))}
					</div>
					<ul className="actions">
						<li><HLink children={dictionary.button.learnmore} href="generic.html" /></li>
					</ul>
				</div>
			</section>

    )
}