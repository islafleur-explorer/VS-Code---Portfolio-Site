import React, { useState, useEffect } from 'react';
import './App.css'; // We'll put more specific styles here

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const colorBlocks = ['primary', 'secondary', 'accent']; // Add more as needed

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getBackgroundColor = () => {
    const index = Math.floor(scrollPosition / 500) % colorBlocks.length; // Adjust 500 for sensitivity
    return `bg-${colorBlocks[index]}`;
  };

  return (
    <div className={`app ${getBackgroundColor()} min-h-screen`}>
      <header className="py-6 px-8 text-neutral">
        {/* TODO: Add your logo/name and navigation here */}
        <nav>
          {/* TODO: Add navigation links */}
        </nav>
      </header>

      <main className="px-8 py-12">
        <section id="hero" className="flex min-h-[50vh] py-16 text-neutral">
          <div className="hero-image flex-1">
            {/* TODO: Add your hero image/graphic here */}
            <div className="bg-teal-200 h-64 w-full rounded-md"></div> {/* Placeholder */}
          </div>
          <div className="hero-content flex-1 flex flex-col justify-center">
            <h1 className="font-headline text-4xl font-bold mb-4">Impactful Solutions, Tangible Results.</h1>
            <p className="font-body text-lg mb-8">A vibrant portfolio showcasing adaptable and effective work.</p>
            {/* TODO: Add a call to action button */}
          </div>
        </section>

        <section id="projects" className="py-16 text-dark">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* TODO: Map through your projects here */}
<div className="bg-lime-100 p-6 rounded-md">
  <a href="https://islafleur-explorer.github.io/VS-Code---Solomon_s-Path---AI-Financial-Advisor/" target="_blank">
    <img src="/Logo Solomons Path ChatGPT Image May 12 2025 09_59_04 AM.png" alt="Solomon's Path AI Financial Advisor" className="w-full h-32 object-cover rounded-md mb-2 hover:opacity-75 hover:scale-110 transition-transform" />
  </a>
  <h3 className="font-bold">Solomon's Path AI Financial Advisor</h3>
  <p>
    An AI-powered financial advisor. <a href="https://x.com/IsaiahSLafleur/status/1920307531148149005" target="_blank" className="hover:underline">Learn more</a>.
  </p>
  <a href="https://islafleur-explorer.github.io/VS-Code---Solomon_s-Path---AI-Financial-Advisor/" target="_blank" className="hover:underline block">View on GitHub</a>
</div>
<div className="bg-lime-100 p-6 rounded-md">
  <a href="https://github.com/islafleur-explorer/cursor-news-trello" target="_blank">
    <img src="/Thumbnail Image For News Article Automation To Trello.png" alt="News Article Automation to Trello workflow" className="w-full h-32 object-cover rounded-md mb-2 hover:opacity-75 hover:scale-110 transition-transform" />
  </a>
  <h3 className="font-bold">News Article Automation to Trello workflow</h3>
  <p>
    MVP Goal: Automate the extraction of the title and date from news articles, and the creation of Trello cards with that information. <a href="https://x.com/IsaiahSLafleur/status/1907991477784830230" target="_blank" className="hover:underline">Learn more</a>.
  </p>
  <a href="https://github.com/islafleur-explorer/cursor-news-trello" target="_blank" className="hover:underline block">View on GitHub</a>
</div>
<div className="bg-lime-100 p-6 rounded-md">
  <a href="https://github.com/islafleur-explorer/Claude---screen-recorder-app-with-video-audio-settings-and-live-timer" target="_blank">
    <img src="/Thumbnail Image For Screen Recording App.jpg" alt="Screen Recorder App With Video/Audio Settings And Live Timer" className="w-full h-32 object-cover rounded-md mb-2 hover:opacity-75 hover:scale-110 transition-transform" />
  </a>
  <h3 className="font-bold">Screen Recorder App With Video/Audio Settings And Live Timer</h3>
  <p>
    At Pursuit we had the challenge to build a screen recording app in less than 2 hours. <a href="https://x.com/IsaiahSLafleur/status/1911180955437728085" target="_blank" className="hover:underline">Learn more</a>.
  </p>
  <a href="https://github.com/islafleur-explorer/Claude---screen-recorder-app-with-video-audio-settings-and-live-timer" target="_blank" className="hover:underline block">View on GitHub</a>
</div>
          </div>
        </section>

        <section id="about" className="py-16 text-dark">
  <h2 className="text-3xl font-bold mb-8">My Journey</h2>
  <div className="timeline">
  <div className="timeline-item">
    <h3 className="font-bold">Solomon's Path AI Financial Advisor</h3>
    <p>
      This project was born out of a desire to create an accessible and intelligent financial advisor. The journey involved leveraging AI to provide personalized financial guidance, overcoming challenges in data integration and algorithm optimization. A significant amount of planning was done before starting the code generation, with the help of Google Gemini, as documented in these plans: <a href="https://docs.google.com/document/d/1j9v7t2dCKclUZFnVjRiOPZmvMxcZUGMdEuXtl0Kx3QY/edit?usp=sharing" target="_blank" className="hover:underline">Problem Statement and Next Steps</a>, <a href="https://docs.google.com/document/d/1bsWrBQf1me7Nz6-mdRdOWoGvpwc90yL2zQGQsaMF2d8/edit?usp=sharing" target="_blank" className="hover:underline">Refined Product Requirements</a>, <a href="https://docs.google.com/document/d/1yDeZplusmxODeJLEhpPfM-OrVrOWzdB5LAsyhMaHkQY/edit?usp=sharing" target="_blank" className="hover:underline">MVP Plan</a>, <a href="https://docs.google.com/document/d/1ePPKEeGaN6qjTWI_c6Gt2-8D8orzABfWFqGb6wGuSRk/edit?usp=sharing" target="_blank" className="hover:underline">Modular Implementation Plan</a>, <a href="https://docs.google.com/document/d/1XwYwt95rs1JfQE1hF4U-hK_B2cUaYYsbtC3HEUBB8KA/edit?usp=sharing" target="_blank" className="hover:underline">AI Infrastructure Tool Timeline</a>, and <a href="https://docs.google.com/document/d/1Hm2W8hqqnperOYhR8O2aY3dHQjWsrsuJ7V6ySJSCUIM/edit?usp=sharing" target="_blank" className="hover:underline">Decomposition</a>. Estimated time spent: 40 hours. The key takeaway was the power of AI to democratize financial knowledge.
    </p>
  </div>
  <div className="timeline-item">
    <h3 className="font-bold">News Article Automation to Trello workflow</h3>
    <p>
      This project focused on automating the process of extracting information from news articles and creating Trello cards. The development process involved web scraping, data parsing, and Trello API integration. I also created a <a href="https://docs.google.com/document/d/1BkyFJ1kpvwW03ZFmub04UT1VRuQGQ_5vm3lxTl4JBi4/edit?usp=sharing" target="_blank" className="hover:underline">Workflow Mapping & AI Integration plan</a> with the help of an LLM. Estimated time spent: 20 hours. The main challenge was handling the variability in news article formats. The key learning was the importance of robust error handling and adaptability in automation workflows.
    </p>
  </div>
  <div className="timeline-item">
    <h3 className="font-bold">Screen Recorder App With Video/Audio Settings And Live Timer</h3>
    <p>
      This project was a rapid development challenge to build a screen recording app in under 2 hours. The experience highlighted the importance of prioritizing features, efficient coding, and effective time management. Estimated time spent: 2 hours. The key takeaway was the ability to deliver a functional solution under extreme constraints.
    </p>
  </div>
</div>
</section>

        <section id="contact" className="py-16 text-primary bg-secondary">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          {/* TODO: Add your contact form or information here */}
          <div className="bg-accent-100 p-6 rounded-md text-lg">
            <p>
              Connect with me on:
              <ul className="list-none pl-0">
                <li><a href="https://linkedin.com/in/isaiah-lafleur-91ba5a28" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
                <li><a href="https://x.com/IsaiahSLafleur" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
              </ul>
            </p>
          </div>
        </section>
      </main>

      <footer className="py-4 text-center text-neutral bg-dark">
        {/* TODO: Add copyright information */}
      </footer>
    </div>
  );
}

export default App;
