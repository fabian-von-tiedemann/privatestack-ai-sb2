import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

interface Model {
  name: string;
  input: number;
  output: number;
}

const models: Model[] = [
  { name: 'Gemini 1.5 Flash', input: 1.00, output: 4.29 },
  { name: 'GPT4o mini', input: 2.15, output: 8.58 },
  { name: 'Llama 3.1 70B', input: 10.01, output: 10.01 },
  { name: 'Gemini 1.5 Pro', input: 17.88, output: 71.50 },
  { name: 'Mistral Large 2', input: 28.60, output: 85.80 },
  { name: 'GPT4o', input: 35.75, output: 143.00 },
  { name: 'o1 mini', input: 42.90, output: 171.60 },
  { name: 'Claude Sonnet 3.5', input: 42.90, output: 214.50 },
  { name: 'o1', input: 214.50, output: 858.00 },
];

export function TokenPricing() {
  const [inputRatio, setInputRatio] = useState(75);

  const calculateBlendedPrice = (input: number, output: number) => {
    return (input * (inputRatio / 100) + output * ((100 - inputRatio) / 100)).toFixed(2);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Betala bara för det ni använder
        </CardTitle>
        <p className="mt-4 text-lg text-gray-600">
          Pris per 1M tokens
        </p>
      </CardHeader>
      <CardContent>
        <div className="mb-8 space-y-4">
          <Label>Input/Output ratio: {inputRatio}% / {100 - inputRatio}%</Label>
          <Slider
            defaultValue={[75]}
            value={[inputRatio]}
            max={100}
            step={1}
            onValueChange={(value) => setInputRatio(value[0])}
          />
        </div>

      <table className="w-full border-t border-gray-200">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 bg-gray-50">
              Modell
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 bg-gray-50">
              Input
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 bg-gray-50">
              Output
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-900 bg-gray-50">
              Blended ({inputRatio}:{100-inputRatio})
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
              <td className="px-6 py-4 text-sm text-gray-900 text-center">
                {model.input.toFixed(2)} kr
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 text-center">
                {model.output.toFixed(2)} kr
              </td>
              <td className="px-6 py-4 text-sm text-gray-900 text-center">
                {calculateBlendedPrice(model.input, model.output)} kr
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="px-6 py-4 bg-gray-50 text-sm text-gray-500">
        * Priserna inkluderar 30% påslag på underliggande API-kostnad och kan justeras baserat på aktuella API-kostnader.
      </div>
      </CardContent>
    </Card>
  );
}