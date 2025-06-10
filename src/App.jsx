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
        This project was born out of a desire to create an accessible and intelligent financial advisor. The journey involved leveraging AI to provide personalized financial guidance, overcoming challenges in data integration and algorithm optimization. The key takeaway was the power of AI to democratize financial knowledge.
      </p>
    </div>
    <div className="timeline-item">
      <h3 className="font-bold">News Article Automation to Trello workflow</h3>
      <p>
        This project focused on automating the process of extracting information from news articles and creating Trello cards. The development process involved web scraping, data parsing, and Trello API integration. The main challenge was handling the variability in news article formats. The key learning was the importance of robust error handling and adaptability in automation workflows.
      </p>
    </div>
    <div className="timeline-item">
      <h3 className="font-bold">Screen Recorder App With Video/Audio Settings And Live Timer</h3>
      <p>
        This project was a rapid development challenge to build a screen recording app in under 2 hours. The experience highlighted the importance of prioritizing features, efficient coding, and effective time management. The key takeaway was the ability to deliver a functional solution under extreme constraints.
      </p>
    </div>
  </div>
</section>

        <section id="contact" className="py-16 text-neutral bg-secondary">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          {/* TODO: Add your contact form or information here */}
          <div className="bg-accent-100 p-6 rounded-md">TODO: Contact Form/Info</div>
        </section>
      </main>

      <footer className="py-4 text-center text-neutral bg-dark">
        {/* TODO: Add copyright information */}
      </footer>
    </div>
  );
}

export default App;
