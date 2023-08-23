import React from 'react';

export default function App() {
    return (
        <div className="App">
            <header>
                <h1>My Portfolio</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="about">
                    <h2>About Me</h2>
                    <p>I am a web developer with experience in HTML, CSS, and JavaScript. I enjoy building responsive, accessible, and user-friendly websites.</p>
                </section>
                <section id="portfolio">
                    <h2>Portfolio</h2>
                    <div className="projects">
                        <div className="project">
                            <img src="project1.jpg" alt="Project 1" />
                            <h3>Project 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="project">
                            <img src="project2.jpg" alt="Project 2" />
                            <h3>Project 2</h3>
                            <p>Nulla facilisi. Proin tincidunt dignissim purus, a tristique velit tincidunt eu.</p>
                        </div>
                    </div>
                </section>
                <section id="contact">
                <h2>Contact Me</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"></textarea>
                    <button type="submit">Send</button>
                </form>
                </section>
            </main>
            <footer>
                <p>Copyright © 2023</p>
            </footer>
        </div>
    );
}