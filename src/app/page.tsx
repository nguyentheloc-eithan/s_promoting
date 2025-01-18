'use client';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};
export default Home;
