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
              <h3>TODO: Project Title 1</h3>
              <p>TODO: Brief project description.</p>
              {/* TODO: Add project link/button */}
            </div>
            <div className="bg-lime-100 p-6 rounded-md">
              <h3>TODO: Project Title 2</h3>
              <p>TODO: Brief project description.</p>
              {/* TODO: Add project link/button */}
            </div>
            <div className="bg-lime-100 p-6 rounded-md">
              <h3>TODO: Project Title 3</h3>
              <p>TODO: Brief project description.</p>
              {/* TODO: Add project link/button */}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 text-dark">
          <h2 className="text-3xl font-bold mb-8">My Journey</h2>
          {/* TODO: Implement your interactive timeline here */}
          <div className="bg-teal-100 p-6 rounded-md">TODO: About Me Timeline</div>
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
