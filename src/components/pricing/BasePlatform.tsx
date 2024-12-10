import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ProfessionalServices } from './ProfessionalServices';

const features = [
  'Upp till 100 användare',
  '100 GB vektordatabaslagring',
  'Betala för faktisk förbrukning av tokens',
  'Tillgång till modeller från OpenAI, Claude och Mistral (EU)',
  'Supportportal inkluderad',
];

const enterpriseGroups = {
  'Användare & säkerhet': [
    'Fler än 100 användare',
    'Single Sign-On (SSO)',
    'LDAP-autentisering (LDAP)',
    'Förhöjd säkerhet och spårbarhet',
  ],
  'AI & modelltjänster': [
    'Privata modeller (egen Ollama server)',
    'Avancerad bildgenerering (Flux, Recraft)',
    'Videogenerering (Sora, RunwayML)',
  ],
  'Integration & Automation': [
    'Automatiserings- och integrationsmotor för agentflöden och integrationer (n8n, dify, flowwise)',
    'Extern API-nyckelintegration (Egen API-nyckel)',
  ],
  'Anpassning & Konfiguration': [
    'Anpassad domän/URL',
    'Anpassat användargränssnitt',
    'Anpassade bildstilar',
  ],
};

export function BasePlatform() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
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
      </div>

      <div className="bg-gray-900 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-white">Enterprise</h2>
        <p className="mt-4 text-lg text-gray-300">
          Skräddarsy er lösning med avancerade funktioner
        </p>
        <div className="mt-8 space-y-8">
          {Object.entries(enterpriseGroups).map(([title, features]) => (
            <div key={title}>
              <h3 className="font-semibold text-gray-100 mb-4">{title}</h3>
              <div className="space-y-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-x-3">
                    <Checkbox 
                      id={feature} 
                      className="mt-1 border-white/20 data-[state=checked]:bg-blue-600"
                    />
                    <label 
                      htmlFor={feature} 
                      className="text-sm text-gray-300 cursor-pointer"
                    >
                      {feature}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Button 
          variant="outline"
          className="mt-8 w-full bg-transparent border-white text-white hover:bg-white/10 hover:text-white font-semibold"
          size="lg"
        >
          Kontakta oss
        </Button>
      </div>
    </motion.div>
    <ProfessionalServices />
    </div>
);
}