import { Hero } from '../components/Hero';
import { ProblemSolution } from '../components/ProblemSolution';
import { KeyFeatures } from '../components/KeyFeatures';
import { Comparison } from '../components/Comparison';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';

export function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <KeyFeatures />
      <Comparison />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}