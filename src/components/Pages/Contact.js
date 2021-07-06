import React, { useContext } from 'react';
import { Text, LanguageContext } from '../../containers/Language';
import { ContactItems } from './ContactItems';
import { Button } from '../Button'
import { Social } from '../Social';
import './Contact.css'

export const Contact = () => {
	const { dictionary } = useContext(LanguageContext);

    return (
                    <section id="three" className="wrapper style1 fade-up">
						<div className="inner">
							<h2><Text tid="contactme" bid="title"/></h2>
							<p><Text tid="contactme" bid="subtitle"/></p>
							<div className="split style1">
								<section>
									<form method="post" action="#">
										<div className="fields">
											<div className="field half">
												<label htmlFor="name"><Text tid="contactme" bid="name"/></label>
												<input type="text" name="name" id="name" />
											</div>
											<div className="field half">
												<label htmlFor="email"><Text tid="contactme" bid="email"/></label>
												<input type="text" name="email" id="email" />
											</div>
											<div className="field">
												<label htmlFor="message"><Text tid="contactme" bid="message"/></label>
												<textarea name="message" id="message" rows="5"></textarea>
											</div>
										</div>
										<ul className="actions">
											<li><Button children={dictionary.button.learnmore}/></li>
										</ul>
									</form>
								</section>
								<section>
									<ul className="contact">
										<li>
											<h3><Text tid="contactme" bid="address"/></h3>
											<a target="_blank" rel="noreferrer" href="https://google.com/maps/place/Armenia,+Quindio">Armenia, Quindio<br />
											Colombia</a>
										</li>
										<li>
											<h3><Text tid="contactme" bid="email"/></h3>
											<a href="mailto:juansebastiansanchezh@gmail.com">juansebastiansanchezh@gmail.com</a>
										</li>
										{/* <li>
											<h3>Phone</h3>
											<span>+00 (000) 000-0000</span>
										</li> */}
										<li>
											<h3><Text tid="contactme" bid="social"/></h3>
											<ul className="icons">
												{/* <Social 
												href="https://twitter.com/js_sanchezh" 
												icon="icon brands icon-tw" 
												text="Twitter"
												/>
												<Social 
												href="https://facebook.com/jssanchezh" 
												icon="icon brands icon-fb" 
												text="Facebook"
												/>
												<Social 
												href="https://github.com/JSSanchezH/" 
												icon="icon brands icon-gh" 
												text="GitHub"
												/>
												<Social 
												href="https://www.linkedin.com/in/jssanchezh/" 
												icon="icon brands icon-in" 
												text="LinkedIn"
												/> */}
												{ContactItems.map((item, index)=> (
												<Social
												key={index} 
												id={item.id}
												href={item.href}
												className={item.cName} 	
												dataIcon={item.dataIcon}
												d={item.d}
												viewBox={item.viewBox}
												text={item.dataIcon}
												/>
											))}
											</ul>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</section>
    )
}