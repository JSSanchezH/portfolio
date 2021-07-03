import React, { useContext } from 'react';
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
						<SectionIcon 
						icon="icon solid major icon-fb" 
						title={dictionary.aboutme.section1}
						paragraph={dictionary.aboutme.paragraph1}
						/>
						<SectionIcon 
						icon="icon solid major icon-fb" 
						title={dictionary.aboutme.section2}
						paragraph={dictionary.aboutme.paragraph2}
						/>
						<SectionIcon 
						icon="icon solid major icon-fb" 
						title={dictionary.aboutme.section3}
						paragraph={dictionary.aboutme.paragraph3}
						/>
						<SectionIcon 
						icon="icon solid major icon-fb" 
						title={dictionary.aboutme.section4}
						paragraph={dictionary.aboutme.paragraph4}
						/>
						<SectionIcon 
						icon="icon solid major icon-fb" 
						title={dictionary.aboutme.section5}
						paragraph={dictionary.aboutme.paragraph5}
						/>
						<SectionIcon 
						icon="icon solid major icon-fb" 
						title={dictionary.aboutme.section6}
						paragraph={dictionary.aboutme.paragraph6}
						/>
					</div>
					<ul className="actions">
						<li><HLink children={dictionary.button.learnmore} href="generic.html" /></li>
					</ul>
				</div>
			</section>

    )
}