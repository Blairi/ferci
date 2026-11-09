import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { SectionDivider } from './components/SectionDivider';
import { Hero } from './sections/Hero';
import { Introduction } from './sections/Introduction';
import { Memories } from './sections/Memories';
import { Music } from './sections/Music';
import { Letter } from './sections/Letter';
import { Proposal } from './sections/Proposal';
import { Celebration } from './sections/Celebration';
import { config } from './data/config';

export default function App() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    document.title = config.meta.title;
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar accepted={accepted} />
      <main>
        <Hero />
        <Introduction />
        <SectionDivider />
        <Memories />
        <SectionDivider />
        <Music />
        <SectionDivider />
        <Letter />
        <Proposal accepted={accepted} onAccept={() => setAccepted(true)} />
        {accepted && <Celebration accepted />}
      </main>
    </>
  );
}
