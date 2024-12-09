import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { PageHeader } from '../components/PageHeader';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Framtiden med privat AI',
    description: 'Hur företag kan säkra sin AI-infrastruktur',
    date: '2024-03-15',
  },
  {
    title: 'RAG vs. Fine-tuning',
    description: 'Välj rätt strategi för dina AI-modeller',
    date: '2024-03-10',
  },
];

export function Blog() {
  return (
    <main>
      <PageHeader
        title="Blogg"
        description="Insikter och best practices inom AI och datasäkerhet"
      />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid gap-8"
        >
          {posts.map((post) => (
            <article
              key={post.title}
              className="relative isolate flex flex-col gap-8 lg:flex-row"
            >
              <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-gray-50 object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {post.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button size="lg">Prenumerera på nyhetsbrev</Button>
        </div>
      </Container>
    </main>
  );
}