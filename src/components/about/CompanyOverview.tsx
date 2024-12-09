import { motion } from 'framer-motion';

export function CompanyOverview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="prose prose-lg max-w-none"
    >
      <h2 className="text-2xl font-bold text-gray-900">Vilka vi är</h2>
      <p className="text-gray-600">
        privatestack.ai drivs av ett team med lång erfarenhet inom AI, säkerhet och 
        molninfrastruktur. Vi tror på att kombinationen av teknisk kompetens, öppenhet 
        och användarvänlighet är nyckeln till att hjälpa företag utnyttja AI på ett 
        tryggt och långsiktigt sätt.
      </p>

      <h2 className="text-2xl font-bold text-gray-900 mt-12">
        Vår AI-resa – två år av lärande och innovation
      </h2>
      <p className="text-gray-600">
        För två år sedan, när ChatGPT introducerades, tog vi ett stort kliv och började 
        använda AI som en kollega i vår organisation. Vår strategi har hela tiden varit 
        att förstärka våra medarbetare med hjälp av AI och skapa en kultur där nya 
        arbetssätt och lösningar uppmuntras.
      </p>
      <p className="text-gray-600">
        Vi testade över tjugo AI-verktyg, gav våra team friheten att experimentera, och 
        lyfte fram framgångarna på våra måndagsmöten. Frågan "Hur kan AI hjälpa mig?" 
        blev snabbt ett självklart inslag i vår vardag.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mt-8">
        Utmaningarna som formade vår lösning
      </h3>
      <p className="text-gray-600">
        Längs vägen mötte vi hinder. Många verktyg vi testade kunde inte integreras med 
        vårt ledningssystem eller hantera vår företagsdata på ett säkert sätt. Det blev 
        tydligt att enskilda lösningar och nya verktyg inte var framtiden, och att vi 
        behövde något annat – något mer långsiktigt och flexibelt.
      </p>

      <div className="mt-6 space-y-4">
        <p className="text-gray-600">
          Vi utvecklade därför en egen AI-plattform där vi har full kontroll över 
          datakedjan och kan anpassa lösningen efter våra krav. Det har gett oss:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>
            Kostnadseffektivitet genom att vi betalar för faktisk användning istället 
            för per användare.
          </li>
          <li>
            Möjlighet att lägga till funktioner direkt i plattformen istället för att 
            introducera ännu ett nytt verktyg. Detta minskar komplexiteten och sparar tid.
          </li>
          <li>
            En plattform som redan är informationsklassificerad och säker, vilket gör att 
            vi snabbt, säkert och smidigt kan addera nya funktioner.
          </li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mt-8">Där vi är idag</h3>
      <p className="text-gray-600">
        Sedan maj har vi rullat ut denna lösning både internt och hos kunder. Vi ser att 
        de som idag inleder sin AI-resa stöter på samma utmaningar som vi en gång gjorde. 
        Med vår plattform kan de snabbare anamma AI på ett naturligt och säkert sätt, och 
        få ut mesta möjliga värde ur tekniken.
      </p>
    </motion.div>
  );
}