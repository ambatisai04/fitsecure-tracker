
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BMICalculator from "@/components/BMICalculator";
import DietPlanner from "@/components/DietPlanner";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-1 py-24">
        <div className="container px-4 mx-auto">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome back, {user?.name || "User"}</h1>
            <p className="text-muted-foreground">Track your fitness journey</p>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BMICalculator />
            <DietPlanner />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
