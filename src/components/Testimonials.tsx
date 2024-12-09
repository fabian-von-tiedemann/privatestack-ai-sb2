import { motion } from 'framer-motion';
import { Container } from './Container';

const testimonials = [
  {
    quote: "privatestack.ai har revolutionerat vårt sätt att arbeta med AI. Vi har äntligen full kontroll över vår data och kan bygga precis de lösningar vi behöver.",
    author: "Maria Andersson",
    title: "CTO, TechCorp AB",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Säkerheten och flexibiliteten i plattformen överträffade alla våra förväntningar. Vi kunde snabbt komma igång med våra AI-projekt.",
    author: "Erik Johansson",
    title: "Head of Innovation, DataTech Solutions",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const logos = [
  { name: 'TechCorp', className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1' },
  { name: 'DataTech', className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1' },
  { name: 'InnovateSE', className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1' },
  { name: 'AIPartner', className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1' }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 sm:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-title-lg tracking-tight text-gray-900">
            Kundexempel
          </h2>
          <p className="mt-6 text-body-lg leading-8 text-gray-600">
            Se vad våra kunder säger om privatestack.ai
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
            >
              <blockquote className="text-gray-900">
                <p className="text-lg font-semibold leading-7">"{testimonial.quote}"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full bg-gray-50"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-16 divide-y divide-gray-200 overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="px-8 py-12">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-10 px-6 lg:grid-cols-4 lg:px-8">
              {logos.map((logo) => (
                <div key={logo.name} className="flex justify-center">
                  <div className={`h-12 w-40 bg-gray-200 rounded ${logo.className}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}