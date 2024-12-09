import { motion } from 'framer-motion';
import { Container } from './Container';
import { Database, Lock, Settings, Activity } from 'lucide-react';

const features = [
  {
    name: 'Full datakontroll',
    description: 'Bestäm själva var och hur er data lagras och hanteras.',
    icon: Database,
  },
  {
    name: 'Egna modeller',
    description: 'Integrera och använd de AI-modeller som passar era behov.',
    icon: Settings,
  },
  {
    name: 'Anpassad RAG',
    description: 'Skräddarsy Retrieval-Augmented Generation för era specifika användningsfall.',
    icon: Activity,
  },
  {
    name: 'Säkerhet',
    description: 'Omfattande säkerhetsfunktioner och full spårbarhet.',
    icon: Lock,
  },
];

export function KeyFeatures() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-title-lg tracking-tight text-gray-900">
            Nyckelfunktioner
          </h2>
          <p className="mt-6 text-body-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Allt ni behöver för att bygga en säker och skalbar AI-infrastruktur
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <feature.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-subtitle leading-7 text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-body leading-7 text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}