import { motion } from 'framer-motion';

const models = [
  { name: 'GPT4o', price: '62,63' },
  { name: 'GPT4o mini', price: '3,72' },
  { name: 'o1 preview', price: '375,38' },
  { name: 'o1 mini', price: '75,08' },
  { name: 'Claude Sonnet 3.5', price: '85,80' },
  { name: 'Llama 3.1 70B', price: '10,01' },
  { name: 'Llama 3.1 405B', price: '114,40' },
  { name: 'Mixtral 8x22B', price: '42,90' },
];

export function TokenPricing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Betala bara för det ni använder
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Pris per 1M tokens (inkluderar 30% påslag på underliggande API-kostnad)
        </p>
      </div>
      <table className="w-full border-t border-gray-200">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50">
              Modell
            </th>
            <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 bg-gray-50">
              Pris per 1M tokens
            </th>
          </tr>
        </thead>
        <tbody>
          {models.map((model, index) => (
            <tr
              key={model.name}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              <td className="px-6 py-4 text-sm text-gray-900">{model.name}</td>
              <td className="px-6 py-4 text-sm text-gray-900 text-right">
                {model.price} kr
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-6 py-4 bg-gray-50 text-sm text-gray-500">
        * Priserna är exempel och kan justeras baserat på aktuella API-kostnader.
      </div>
    </motion.div>
  );
}