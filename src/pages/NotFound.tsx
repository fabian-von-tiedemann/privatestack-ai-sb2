import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <main className="grid min-h-[calc(100vh-4rem)] place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <Container>
        <div className="text-center">
          <p className="text-base font-semibold text-blue-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Sidan kunde inte hittas</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Tyvärr kunde vi inte hitta sidan du letade efter.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild>
              <Link to="/">
                Tillbaka till startsidan
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}