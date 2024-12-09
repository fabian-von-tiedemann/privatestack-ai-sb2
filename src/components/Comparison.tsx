import { motion } from 'framer-motion';
import { Container } from './Container';
import { Check, X } from 'lucide-react';

const competitors = ['Microsoft Copilot', 'Sana', 'privatestack.ai'];

const features = [ 
  { name: 'Ekosystem-agnostisk', values: [false, true, true] },
  { name: 'Anpassade agenter och assistenter', values: [true, true, true] },
  { name: 'Externa integrationer med realtidsbehörighet', values: [false, true, true] },
  { name: 'Multi LLM (flera språkmodeller)', values: [false, true, true] },
  { name: 'Automationer', values: [false, true, true] },
  { name: 'Arbetsflödesautomation', values: [false, true, true] },
  { name: 'Realtidshandlingar', values: [false, true, true] },
  { name: 'Kunskapsgraf', values: [false, true, true] },
  { name: 'Multi-step agenter', values: [false, true, true] },
  { name: 'Enterprise-sökning', values: [false, true, true] },
  { name: 'Mötesanteckningar', values: [false, true, true] },
  { name: 'Källhänvisningar', values: [false, true, true] },
  { name: 'Avancerade mallar', values: [false, true, true] },
  { name: 'Övervakning, säkerhet, granskning', values: [true, true, true] },
  { name: 'iOS och Android-appar', values: [true, true, false] },
  { name: 'Uppstart på några minuter', values: [false, true, true] },
  { name: 'Strukturerad och ostrukturerad data', values: [false, true, true] },
  { name: 'Guardrails (säkerhetsfunktioner)', values: [false, true, true] },
  { name: 'On-prem hosting (även offline)', values: [false, false, true] },
  { name: 'Endast open source-komponenter (ingen lock-in)', values: [false, false, true] },
  { name: 'Privata modeller', values: [false, false, true] },
  { name: 'Eget API-nyckelstöd', values: [false, false, true] },
  { name: 'Förberett för CRA', values: [false, false, true] },
  { name: 'Utbyggbart', values: [false, false, true] },
];

export function Comparison() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-title-lg tracking-tight text-gray-900">
            Jämförelse
          </h2>
          <p className="mt-6 text-body-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Se hur privatestack.ai skiljer sig från traditionella AI-plattformar
          </p>
        </motion.div>

        <div className="mt-16 flow-root">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Funktioner
                    </th>
                    {competitors.map((competitor) => (
                      <th key={competitor} scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {competitor}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {features.map((feature) => (
                    <tr key={feature.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {feature.name}
                      </td>
                      {feature.values.map((value, index) => (
                        <td key={index} className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
                          {value ? (
                            <Check className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}