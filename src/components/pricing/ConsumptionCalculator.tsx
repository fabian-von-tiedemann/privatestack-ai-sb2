import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { MultiRangeSlider } from '@/components/ui/multi-range-slider';
import { Slider } from '@/components/ui/slider';

interface UserCategory {
  type: string;
  tokensPerMonth: number;
  color: string;
}

interface ModelCategory {
  type: string;
  pricePerMillion: number;
  color: string;
}

const categories: UserCategory[] = [
  { type: 'Sällananvändare', tokensPerMonth: 50000, color: 'bg-green-500' },
  { type: 'Vanliga användare', tokensPerMonth: 500000, color: 'bg-blue-500' },
  { type: 'Flitiga användare', tokensPerMonth: 5000000, color: 'bg-purple-500' },
];

const modelCategories: ModelCategory[] = [
  { type: 'Mini-modeller', pricePerMillion: 5, color: 'bg-green-500' },
  { type: 'Standard', pricePerMillion: 50, color: 'bg-blue-500' },
  { type: 'Reasoning', pricePerMillion: 500, color: 'bg-purple-500' },
];

export function ConsumptionCalculator() {
  const [totalUsers, setTotalUsers] = useState(150);
  const [distribution, setDistribution] = useState([70, 90]); // Default: 70-20-10 split
  const [modelDistribution, setModelDistribution] = useState([30, 90]); // Default: 30-60-10 split

  const handleTotalUsersChange = (value: number[]) => {
    const total = value[0];
    setTotalUsers(total);
  };

  const handleDistributionChange = (value: number[]) => {
    setDistribution(value);
  };

  const handleModelDistributionChange = (value: number[]) => {
    setModelDistribution(value);
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
  const getModelDistribution = () => {
    const miniPct = modelDistribution[0];
    const standardPct = modelDistribution[1] - modelDistribution[0];
    const reasoningPct = 100 - modelDistribution[1];

    return {
      'Mini-modeller': miniPct / 100,
      'Standard': standardPct / 100,
      'Reasoning': reasoningPct / 100,
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
    const modelDist = getModelDistribution();
    
    return (totalTokens / 1000000) * (
      modelDist['Mini-modeller'] * modelCategories[0].pricePerMillion +
      modelDist['Standard'] * modelCategories[1].pricePerMillion +
      modelDist['Reasoning'] * modelCategories[2].pricePerMillion
    );
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
          <div className="flex items-baseline gap-2">
            <Label>Antal användare:</Label>
            <span className="text-2xl font-semibold">{totalUsers}</span>
          </div>
          <Slider
            defaultValue={[150]}
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
                <p className="text-2xl">{userCounts[category.type]}</p>
                <p className="text-sm text-gray-500">
                  {category.tokensPerMonth.toLocaleString()} tokens/mån
                </p>
              </div>
            )})}
          </div>
        </div>

        <div className="space-y-4">
          <Label>Fördelning av modeller</Label>
          <MultiRangeSlider
            value={modelDistribution}
            max={100}
            step={1}
            onValueChange={handleModelDistributionChange}
            className="w-full mt-2"
          />
          <div className="grid grid-cols-3 gap-4 mt-4">
            {modelCategories.map((category, index) => {
              const dist = getModelDistribution();
              const percentage = index === 0 
                ? modelDistribution[0] 
                : index === 1 
                ? modelDistribution[1] - modelDistribution[0]
                : 100 - modelDistribution[1];
              return (
                <div key={category.type} className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    {category.type}
                    {` (${percentage}%)`}
                  </Label>
                  <p className="text-sm text-gray-500">
                    {category.pricePerMillion} kr/1M tokens
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg bg-gray-50 p-6">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Uppskattad förbrukning (tokens)</span>
              <span>
                {calculateTotalTokens().toLocaleString()} tokens
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Genomsnittspris per 1M tokens</span>
              <span>
                {Math.round(
                  modelCategories[0].pricePerMillion * getModelDistribution()['Mini-modeller'] +
                  modelCategories[1].pricePerMillion * getModelDistribution()['Standard'] +
                  modelCategories[2].pricePerMillion * getModelDistribution()['Reasoning']
                ).toLocaleString()} kr
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Uppskattad förbrukningskostnad</span>
              <span>
                {Math.round(calculateMonthlyCost()).toLocaleString()} kr
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Basplattform</span>
              <span>10 000 kr</span>
            </div>
            <div className="my-2 border-t border-gray-200" />
            <div className="flex justify-between">
              <span className="text-gray-600">Total månadskostnad</span>
              <span className="font-bold">
                {(Math.round(calculateMonthlyCost()) + 10000).toLocaleString()} kr
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Genomsnittskostnad per användare</span>
              <span className="font-bold">
                {Math.round((calculateMonthlyCost() + 10000) / totalUsers).toLocaleString()} kr
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