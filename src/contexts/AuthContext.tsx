
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Check if user is already logged in on mount
  useEffect(() => {
    const checkLoggedIn = () => {
      const savedUser = localStorage.getItem("fitness_user");
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
      setIsLoading(false);
    };

    checkLoggedIn();
  }, []);

  // In a real application, these functions would make API calls to a backend
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would be an API call to verify credentials
      // Here we're just doing a simple check for demo purposes
      if (email === "demo@example.com" && password === "password") {
        const userData = { id: "1", email, name: "Demo User" };
        localStorage.setItem("fitness_user", JSON.stringify(userData));
        setUser(userData);
        toast.success("Logged in successfully!");
        navigate("/dashboard");
      } else {
        // Check if this user exists in localStorage from registration
        const registeredUsers = JSON.parse(localStorage.getItem("registered_users") || "[]");
        const foundUser = registeredUsers.find((u: any) => u.email === email && u.password === password);
        
        if (foundUser) {
          const userData = { id: foundUser.id, email, name: foundUser.name };
          localStorage.setItem("fitness_user", JSON.stringify(userData));
          setUser(userData);
          toast.success("Logged in successfully!");
          navigate("/dashboard");
        } else {
          toast.error("Invalid email or password");
        }
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, this would be an API call to register the user
      // For demo purposes, we'll store in localStorage
      const registeredUsers = JSON.parse(localStorage.getItem("registered_users") || "[]");
      
      // Check if email already exists
      if (registeredUsers.some((user: any) => user.email === email)) {
        toast.error("Email already registered");
        return;
      }
      
      const newUser = {
        id: Date.now().toString(),
        email,
        password, // In a real app, this should be hashed
        name
      };
      
      registeredUsers.push(newUser);
      localStorage.setItem("registered_users", JSON.stringify(registeredUsers));
      
      // Auto-login after registration
      const userData = { id: newUser.id, email, name };
      localStorage.setItem("fitness_user", JSON.stringify(userData));
      setUser(userData);
      
      toast.success("Registration successful!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("fitness_user");
    setUser(null);
    toast.info("Logged out successfully");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
