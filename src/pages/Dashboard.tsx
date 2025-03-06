
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Calendar, Heart, Nutrition, TrendingUp, User, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

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
            <p className="text-muted-foreground">Here's an overview of your fitness journey</p>
          </div>
          
          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Stat Card 1 */}
            <Card className="backdrop-blur-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Activity size={20} className="text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">Today</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Activity Score</h3>
                  <div className="text-2xl font-bold">87%</div>
                  <div className="flex items-center mt-1 text-green-500 text-xs font-medium">
                    <TrendingUp size={14} className="mr-1" />
                    <span>+12% from yesterday</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Stat Card 2 */}
            <Card className="backdrop-blur-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <Heart size={20} className="text-blue-500" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">Average</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Resting Heart Rate</h3>
                  <div className="text-2xl font-bold">62 bpm</div>
                  <div className="flex items-center mt-1 text-muted-foreground text-xs font-medium">
                    <span>Excellent range</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Stat Card 3 */}
            <Card className="backdrop-blur-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Calendar size={20} className="text-green-500" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">This week</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Workouts</h3>
                  <div className="text-2xl font-bold">4 / 5</div>
                  <div className="flex items-center mt-1 text-muted-foreground text-xs font-medium">
                    <span>On track with your goal</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Stat Card 4 */}
            <Card className="backdrop-blur-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Clock size={20} className="text-purple-500" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">Total</span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Active Minutes</h3>
                  <div className="text-2xl font-bold">247 min</div>
                  <div className="flex items-center mt-1 text-green-500 text-xs font-medium">
                    <TrendingUp size={14} className="mr-1" />
                    <span>+38 min from last week</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Weekly Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Weekly Overview */}
            <Card className="backdrop-blur-card lg:col-span-2">
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
                <CardDescription>Your activity trends for the past 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full flex items-center justify-center bg-gray-100 rounded-md border border-gray-200">
                  <p className="text-muted-foreground">Activity chart visualization</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Goal Progress */}
            <Card className="backdrop-blur-card">
              <CardHeader>
                <CardTitle>Goals Progress</CardTitle>
                <CardDescription>Your progress towards current fitness goals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Goal 1 */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Weight Goal</span>
                    <span className="text-sm text-muted-foreground">78% complete</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                
                {/* Goal 2 */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Running Distance</span>
                    <span className="text-sm text-muted-foreground">45% complete</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                
                {/* Goal 3 */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Workout Frequency</span>
                    <span className="text-sm text-muted-foreground">80% complete</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                
                {/* Goal 4 */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Water Intake</span>
                    <span className="text-sm text-muted-foreground">65% complete</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                
                <Button className="w-full mt-4">Set New Goal</Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Recent Activities and Upcoming Workouts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activities */}
            <Card className="backdrop-blur-card">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Your most recent workout sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Activity 1 */}
                  <div className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Activity size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Morning Run</h4>
                        <span className="text-xs text-muted-foreground">Today</span>
                      </div>
                      <p className="text-sm text-muted-foreground">5km in 28 minutes</p>
                    </div>
                  </div>
                  
                  {/* Activity 2 */}
                  <div className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                      <Activity size={20} className="text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Strength Training</h4>
                        <span className="text-xs text-muted-foreground">Yesterday</span>
                      </div>
                      <p className="text-sm text-muted-foreground">45 minutes, upper body</p>
                    </div>
                  </div>
                  
                  {/* Activity 3 */}
                  <div className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center mr-4">
                      <Activity size={20} className="text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Yoga Session</h4>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm text-muted-foreground">30 minutes, flexibility</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">View All Activities</Button>
              </CardContent>
            </Card>
            
            {/* Upcoming Workouts */}
            <Card className="backdrop-blur-card">
              <CardHeader>
                <CardTitle>Upcoming Workouts</CardTitle>
                <CardDescription>Scheduled sessions for the next few days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Workout 1 */}
                  <div className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center mr-4">
                      <Calendar size={20} className="text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">HIIT Session</h4>
                        <span className="text-xs text-muted-foreground">Tomorrow, 06:30 AM</span>
                      </div>
                      <p className="text-sm text-muted-foreground">30 minutes, high intensity</p>
                    </div>
                  </div>
                  
                  {/* Workout 2 */}
                  <div className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-orange-500/10 flex items-center justify-center mr-4">
                      <Calendar size={20} className="text-orange-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Swimming</h4>
                        <span className="text-xs text-muted-foreground">Wednesday, 05:00 PM</span>
                      </div>
                      <p className="text-sm text-muted-foreground">45 minutes, cardio</p>
                    </div>
                  </div>
                  
                  {/* Workout 3 */}
                  <div className="flex items-start p-3 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="h-10 w-10 rounded-full bg-pink-500/10 flex items-center justify-center mr-4">
                      <Calendar size={20} className="text-pink-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Cycling Class</h4>
                        <span className="text-xs text-muted-foreground">Friday, 06:00 PM</span>
                      </div>
                      <p className="text-sm text-muted-foreground">60 minutes, group session</p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">Schedule New Workout</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
