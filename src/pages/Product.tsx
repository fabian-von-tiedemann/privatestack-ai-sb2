import { PageHeader } from '../components/PageHeader';
import { ArchitectureOverview } from '../components/product/ArchitectureOverview';
import { OpenSource } from '../components/product/OpenSource';
import { Integrations } from '../components/product/Integrations';
import { Scalability } from '../components/product/Scalability';
import { TechnicalOverview } from '../components/product/TechnicalOverview';

export function Product() {
  return (
    <main>
      <PageHeader
        title="Vår Platform"
        description="En flexibel och säker AI-plattform byggd för era behov"
      />

      <ArchitectureOverview />
      <OpenSource />
      <Integrations />
      <Scalability />
      <TechnicalOverview />
    </main>
  );
}