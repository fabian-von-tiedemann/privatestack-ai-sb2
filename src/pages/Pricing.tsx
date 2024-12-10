import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { BasePlatform } from '../components/pricing/BasePlatform';
import { TokenPricing } from '../components/pricing/TokenPricing';
import { ConsumptionCalculator } from '../components/pricing/ConsumptionCalculator';

export function Pricing() {
  return (
    <main>
      <PageHeader
        title="Starta med en stark bas – skala i er egen takt"
        description="Vår basplattform ger er en trygg grund och inkluderar generösa resurser för att komma igång. 
          Ni betalar en fast månadsavgift och sedan baseras era löpande kostnader på den faktiska 
          tokenförbrukningen, inte antalet användare. Detta gör det lättare att budgetera och skala upp 
          när era behov ökar."
      />

      <Container className="pb-16">
        <div className="mt-16 space-y-16">
          <BasePlatform />
          <TokenPricing />
          <ConsumptionCalculator />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 rounded-2xl px-6 py-24 sm:py-32 lg:px-8"
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-title-lg tracking-tight text-white">
                Skräddarsy er lösning
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-body-lg leading-8 text-gray-300">
                Vill ni ha en detaljerad kostnadsberäkning för ert specifika scenario eller 
                diskutera hur agenter och andra avancerade funktioner påverkar era kostnader?
              </p>
              <div className="mt-10">
                <Button size="lg">Kontakta oss</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}