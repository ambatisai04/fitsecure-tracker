
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";

interface DietPlan {
  id: string;
  goal: string;
  name: string;
  description: string;
  recommended_calories: number;
  protein_percentage: number;
  carbs_percentage: number;
  fat_percentage: number;
}

const DietPlanner = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [dietPlan, setDietPlan] = useState<DietPlan | null>(null);

  const fetchDietPlan = async (goal: string) => {
    const { data, error } = await supabase
      .from('diet_plans')
      .select('*')
      .eq('goal', goal)
      .single();
      
    if (error) {
      console.error('Error fetching diet plan:', error);
      return;
    }
    
    setDietPlan(data);
  };

  useEffect(() => {
    if (selectedGoal) {
      fetchDietPlan(selectedGoal);
    }
  }, [selectedGoal]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Diet Planner</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Your Goal</label>
          <Select onValueChange={setSelectedGoal} value={selectedGoal}>
            <SelectTrigger>
              <SelectValue placeholder="Choose your fitness goal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="weight_loss">Weight Loss</SelectItem>
              <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
              <SelectItem value="maintenance">Maintenance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {dietPlan && (
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-secondary/20 rounded-lg">
              <h3 className="font-medium mb-2">{dietPlan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{dietPlan.description}</p>
              <div className="space-y-2">
                <p className="text-sm">Daily Calories: {dietPlan.recommended_calories}</p>
                <div className="space-y-1">
                  <p className="text-sm">Macronutrient Split:</p>
                  <p className="text-sm">• Protein: {dietPlan.protein_percentage}%</p>
                  <p className="text-sm">• Carbs: {dietPlan.carbs_percentage}%</p>
                  <p className="text-sm">• Fat: {dietPlan.fat_percentage}%</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DietPlanner;
