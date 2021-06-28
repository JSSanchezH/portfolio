import React from 'react';

export const Contact = () => {
    return (
                    <section id="three" class="wrapper style1 fade-up">
						<div class="inner">
							<h2>Get in touch</h2>
							<p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet imperdiet est velit quis lorem.</p>
							<div class="split style1">
								<section>
									<form method="post" action="#">
										<div class="fields">
											<div class="field half">
												<label for="name">Name</label>
												<input type="text" name="name" id="name" />
											</div>
											<div class="field half">
												<label for="email">Email</label>
												<input type="text" name="email" id="email" />
											</div>
											<div class="field">
												<label for="message">Message</label>
												<textarea name="message" id="message" rows="5"></textarea>
											</div>
										</div>
										<ul class="actions">
											<li><a href="" class="button submit">Send Message</a></li>
										</ul>
									</form>
								</section>
								<section>
									<ul class="contact">
										<li>
											<h3>Address</h3>
											<a target="_blank" href="https://google.com/maps/place/Armenia,+Quindio">Armenia, Quindio<br />
											Colombia</a>
										</li>
										<li>
											<h3>Email</h3>
											<a href="mailto:juansebastiansanchezh@gmail.com">juansebastiansanchezh@gmail.com</a>
										</li>
										<li>
											<h3>Phone</h3>
											<span>+57 (300) 559-0746</span>
										</li>
										<li>
											<h3>Social</h3>
											<ul class="icons">
												<li><a target="_blank" href="https://twitter.com/js_sanchezh" class="icon brands icon-tw"><span class="label">Twitter</span></a></li>
												<li><a target="_blank" href="#" class="icon brands icon-fb"><span class="label">Facebook</span></a></li>
												<li><a target="_blank" href="https://github.com/JSSanchezH/" class="icon brands icon-gh"><span class="label">GitHub</span></a></li>
												{/* <li><a target="_blank" href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li> */}
												<li><a target="_blank" href="https://www.linkedin.com/in/jssanchezh/" class="icon brands icon-in"><span class="label">LinkedIn</span></a></li>
											</ul>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</section>
    )
}