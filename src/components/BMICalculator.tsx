
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BMIResult {
  bmi: number;
  category: string;
  recommendation: string;
}

const BMICalculator = () => {
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = () => {
    const heightInM = Number(height) / 100;
    const weightInKg = Number(weight);
    
    if (heightInM <= 0 || weightInKg <= 0) {
      return;
    }

    const bmi = weightInKg / (heightInM * heightInM);
    let category = '';
    let recommendation = '';

    if (bmi < 18.5) {
      category = 'Underweight';
      recommendation = 'Consider consulting with a nutritionist about healthy weight gain strategies.';
    } else if (bmi < 25) {
      category = 'Normal weight';
      recommendation = 'Maintain your healthy lifestyle with balanced diet and regular exercise.';
    } else if (bmi < 30) {
      category = 'Overweight';
      recommendation = 'Focus on portion control and increasing physical activity.';
    } else {
      category = 'Obese';
      recommendation = 'Consider consulting with a healthcare provider about weight management strategies.';
    }

    setResult({ bmi, category, recommendation });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>BMI Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="height">Height (cm)</Label>
          <Input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height in cm"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="weight">Weight (kg)</Label>
          <Input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight in kg"
          />
        </div>
        <Button onClick={calculateBMI} className="w-full">Calculate BMI</Button>
        
        {result && (
          <div className="mt-4 p-4 bg-secondary/20 rounded-lg space-y-2">
            <p className="font-medium">Your BMI: {result.bmi.toFixed(1)}</p>
            <p>Category: {result.category}</p>
            <p className="text-sm text-muted-foreground">{result.recommendation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BMICalculator;
