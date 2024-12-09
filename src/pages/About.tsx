import { Container } from '../components/Container';
import { motion } from 'framer-motion';
import { CompanyOverview } from '../components/about/CompanyOverview';
import { Vision } from '../components/about/Vision';
import { ContactForm } from '../components/about/ContactForm';
import { PageHeader } from '../components/PageHeader';

export function About() {
  return (
    <main>
      <PageHeader
        title="Om Oss"
        description="Vår vision är att stärka företag med öppen, säker och flexibel AI-infrastruktur"
      />

      <Container className="pb-16">
        <div className="mt-16 grid gap-16">
          <CompanyOverview />
          <Vision />
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}