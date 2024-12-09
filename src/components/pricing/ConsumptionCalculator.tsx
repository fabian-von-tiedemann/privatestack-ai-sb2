import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MultiRangeSlider } from '@/components/ui/multi-range-slider';
import { Slider } from '@/components/ui/slider';

interface UserCategory {
  type: string;
  tokensPerMonth: number;
  color: string;
}

const categories: UserCategory[] = [
  { type: 'Sällananvändare', tokensPerMonth: 50000, color: 'bg-green-500' },
  { type: 'Vanliga användare', tokensPerMonth: 500000, color: 'bg-blue-500' },
  { type: 'Flitiga användare', tokensPerMonth: 5000000, color: 'bg-purple-500' },
];

const modelPrices: Record<string, number> = {
  gpt4o: 62.63,
  gpt4o_mini: 3.72,
  claude: 85.80,
};

export function ConsumptionCalculator() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [distribution, setDistribution] = useState([70, 90]); // Default: 70-20-10 split
  const [selectedModel, setSelectedModel] = useState('gpt4o');

  const handleTotalUsersChange = (value: number[]) => {
    const total = value[0];
    setTotalUsers(total);
  };

  const handleDistributionChange = (value: number[]) => {
    setDistribution(value);
  };

  const getUserCounts = () => {
    const rarePct = distribution[0];
    const regularPct = distribution[1] - distribution[0];
    const frequentPct = 100 - distribution[1];

    return {
      'Sällananvändare': Math.round(totalUsers * (rarePct / 100)),
      'Vanliga användare': Math.round(totalUsers * (regularPct / 100)),
      'Flitiga användare': Math.round(totalUsers * (frequentPct / 100)),
    };
  };

  const calculateTotalTokens = () => {
    const userCounts = getUserCounts();
    return categories.reduce(
      (total, cat) => total + cat.tokensPerMonth * userCounts[cat.type],
      0
    );
  };

  const calculateMonthlyCost = () => {
    const totalTokens = calculateTotalTokens();
    const pricePerMillion = modelPrices[selectedModel];
    return (totalTokens / 1000000) * pricePerMillion;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Få en uppskattning av er månadskostnad
        </CardTitle>
        <p className="mt-4 text-lg text-gray-600">
          Beräkna ungefärlig kostnad baserat på era användarmönster
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="space-y-4">
          <Label>Antal användare (totalt: {totalUsers})</Label>
          <Slider
            defaultValue={[0]}
            value={[totalUsers]}
            max={5000}
            step={25}
            onValueChange={handleTotalUsersChange}
            className="w-full"
          />
          
          <div className="mt-8">
            <Label>Fördelning av användare</Label>
            <MultiRangeSlider
              value={distribution}
              max={100}
              step={1}
              onValueChange={handleDistributionChange}
              className="w-full mt-2"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {categories.map((category, index) => {
              const userCounts = getUserCounts();
              const percentage = index === 0 
                ? distribution[0] 
                : index === 1 
                ? distribution[1] - distribution[0]
                : 100 - distribution[1];
              return (
              <div key={category.type} className="space-y-2">
                <Label className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${category.color}`} />
                  {category.type}
                  {` (${percentage}%)`}
                </Label>
                <p className="text-2xl font-semibold">{userCounts[category.type]}</p>
                <p className="text-sm text-gray-500">
                  {category.tokensPerMonth.toLocaleString()} tokens/mån
                </p>
              </div>
            )})}
          </div>
        </div>

        <div className="space-y-4">
          <Label htmlFor="model">Primär modell</Label>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger>
              <SelectValue className="bg-white" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="gpt4o">GPT-4 (62,63 kr/1M tokens)</SelectItem>
              <SelectItem value="gpt4o_mini">GPT-4 Mini (3,72 kr/1M tokens)</SelectItem>
              <SelectItem value="claude">Claude (85,80 kr/1M tokens)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-lg bg-gray-50 p-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total tokenförbrukning/mån:</span>
              <span className="font-semibold">
                {calculateTotalTokens().toLocaleString()} tokens
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Uppskattad månadskostnad:</span>
              <span className="font-semibold">
                {Math.round(calculateMonthlyCost()).toLocaleString()} kr
              </span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          * Detta är endast en preliminär uppskattning. Faktisk kostnad varierar med
          verkligt användningsmönster, modellval och tillkommande funktioner.
          En vanlig fråga använder ca 2-500 tokens. En större kontextuell sökning är ca 3-8000 tokens.
        </p>

        <Button className="w-full" size="lg">
          Få en detaljerad kostnadsanalys
        </Button>
      </CardContent>
    </Card>
  );
}