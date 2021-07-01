import React from 'react';
import { Button } from '../Button'
import { Social } from '../Social';
import './Contact.css'

export const Contact = () => {
    return (
                    <section id="three" className="wrapper style1 fade-up">
						<div className="inner">
							<h2>Get in touch</h2>
							<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
							<div className="split style1">
								<section>
									<form method="post" action="#">
										<div className="fields">
											<div className="field half">
												<label htmlFor="name">Name</label>
												<input type="text" name="name" id="name" />
											</div>
											<div className="field half">
												<label htmlFor="email">Email</label>
												<input type="text" name="email" id="email" />
											</div>
											<div className="field">
												<label htmlFor="message">Message</label>
												<textarea name="message" id="message" rows="5"></textarea>
											</div>
										</div>
										<ul className="actions">
											<li><Button children="Send Message"/></li>
										</ul>
									</form>
								</section>
								<section>
									<ul className="contact">
										<li>
											<h3>Address</h3>
											<a target="_blank" rel="noreferrer" href="https://google.com/maps/place/Armenia,+Quindio">Armenia, Quindio<br />
											Colombia</a>
										</li>
										<li>
											<h3>Email</h3>
											<a href="mailto:juansebastiansanchezh@gmail.com">juansebastiansanchezh@gmail.com</a>
										</li>
										{/* <li>
											<h3>Phone</h3>
											<span>+00 (000) 000-0000</span>
										</li> */}
										<li>
											<h3>Social</h3>
											<ul className="icons">
												<Social 
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
												/>
											</ul>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</section>
    )
}