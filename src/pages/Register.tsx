
import React from "react";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";

const Register = () => {
  const { register, isLoading } = useAuth();

  const handleRegister = async (data: any) => {
    await register(data.email, data.password, data.name);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4 pt-24">
        <div className="w-full max-w-md">
          <AuthForm 
            type="register"
            onSubmit={handleRegister}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
