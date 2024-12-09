import { motion } from 'framer-motion';
import { Button } from '../Button';

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg p-8"
    >
      <h2 className="text-2xl font-bold text-gray-900">Hör av er</h2>
      <p className="mt-4 text-lg text-gray-600">
        Har ni frågor, behöver ni support eller vill ni diskutera ett kommande projekt? 
        Vi finns här för er.
      </p>

      <form className="mt-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Namn
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-post
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Meddelande
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <Button type="submit" className="w-full">
          Skicka meddelande
        </Button>
      </form>

      <div className="mt-8 space-y-4 text-sm text-gray-600">
        <p>
          <strong>E-post:</strong>{' '}
          <a href="mailto:kontakt@privatestack.ai" className="text-blue-600 hover:text-blue-500">
            kontakt@privatestack.ai
          </a>
        </p>
        <p>
          <strong>Support:</strong>{' '}
          <a href="mailto:support@privatestack.ai" className="text-blue-600 hover:text-blue-500">
            support@privatestack.ai
          </a>
        </p>
      </div>
    </motion.div>
  );
}