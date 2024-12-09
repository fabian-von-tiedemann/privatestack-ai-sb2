import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../Button';

const features = [
  'Upp till 100 användare',
  '100 GB vektordatabaslagring',
  'Betala för faktisk förbrukning av tokens',
  'Tillgång till modeller från OpenAI, Claude och Mistral (EU)',
  'Supportportal inkluderad',
];

export function BasePlatform() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-gray-900">Basplattform</h2>
      <p className="mt-4 text-lg text-gray-600">
        En trygg grund med generösa resurser för att komma igång
      </p>
      <p className="mt-6">
        <span className="text-4xl font-bold tracking-tight text-gray-900">10 000</span>
        <span className="text-lg font-semibold text-gray-600"> kr/mån</span>
      </p>
      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-x-3">
            <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
            <span className="text-base text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="mt-8 w-full" size="lg">
        Kontakta oss
      </Button>
    </motion.div>
  );
}