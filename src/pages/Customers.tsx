import { PageHeader } from '../components/PageHeader';
import { CustomerCases } from '../components/customers/CustomerCases';
import { Certifications } from '../components/customers/Certifications';
import { DataSecurity } from '../components/customers/DataSecurity';
import { Monitoring } from '../components/customers/Monitoring';

export function Customers() {
  return (
    <main>
      <PageHeader
        title="Kunder"
        description="Se hur våra kunder använder privatestack.ai för att bygga säkra AI-lösningar"
      />

      <CustomerCases />
      <Certifications />
      <DataSecurity />
      <Monitoring />
    </main>
  );
}