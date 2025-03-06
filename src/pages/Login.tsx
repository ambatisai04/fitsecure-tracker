
import React from "react";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";

const Login = () => {
  const { login, isLoading } = useAuth();

  const handleLogin = async (data: any) => {
    await login(data.email, data.password);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-md">
          <AuthForm 
            type="login"
            onSubmit={handleLogin}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
