import React from 'react';
import './AboutMe.css'
import { HLink } from '../HLink';
import { SectionIcon } from '../SectionIcon';

export const AboutMe = () => {
    return (
            <section id="one" className="wrapper style3 fade-up">
				<div className="inner">
					<h2>About Me</h2>
					<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
					<div className="features">
						<SectionIcon 
						icon="icon solid major icon-fb" 
						title="Lorem ipsum amet" 
						paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus." 
						/>
						<SectionIcon 
						icon="icon solid major icon-fb" 
						title="Aliquam sed nullam" 
						paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus." 
						/>
						<SectionIcon 
						icon="icon solid major icon-fb" 
						title="Sed erat ullam corper" 
						paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus." 
						/>
						<SectionIcon 
						icon="icon solid major icon-fb" 
						title="Veroeros quis lorem" 
						paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus." 
						/>
						<SectionIcon 
						icon="icon solid major icon-fb" 
						title="Urna quis bibendum" 
						paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus." 
						/>
						<SectionIcon 
						icon="icon solid major icon-fb" 
						title="Aliquam urna dapibus" 
						paragraph="Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus." 
						/>
					</div>
					<ul className="actions">
						<li><HLink children="Learn More" href="generic.html" /></li>
					</ul>
				</div>
			</section>

    )
}