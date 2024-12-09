import { motion } from 'framer-motion';
import { Container } from './Container';
import { Button } from './Button';

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100),theme(colors.gray.900))] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-blue-600/10 ring-1 ring-white/10" />
      
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:max-w-4xl"
        >
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-3xl sm:leading-9">
              <p>
                "Framtiden inom AI är här – och den är privat, säker och helt under er kontroll."
              </p>
            </blockquote>
            <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
              <Button size="lg">Be om en demo</Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Gå med i vår waitlist
              </Button>
            </div>
          </figure>
        </motion.div>
      </Container>
    </section>
  );
}