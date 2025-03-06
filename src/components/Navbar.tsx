
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X, UserCircle, LogOut, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Monitor scroll position to apply different styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen || location.pathname !== "/" 
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="font-bold text-xl">FitSecure</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium ${location.pathname === "/" ? "text-primary" : "text-foreground hover:text-primary"} animated-underline`}>
            Home
          </Link>
          {user && (
            <Link to="/dashboard" className={`text-sm font-medium ${location.pathname === "/dashboard" ? "text-primary" : "text-foreground hover:text-primary"} animated-underline`}>
              Dashboard
            </Link>
          )}
          <Link to="#features" className={`text-sm font-medium text-foreground hover:text-primary animated-underline`}>
            Features
          </Link>
        </nav>
        
        {/* Auth Buttons or User Menu */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <UserCircle size={16} />
                  <span>{user.name || user.email}</span>
                  <ChevronDown size={14} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center gap-2">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center gap-2">
                    Profile Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="flex items-center gap-2 text-destructive">
                  <LogOut size={16} />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Log in</Button>
              </Link>
              <Link to="/register">
                <Button>Sign up</Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-up">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-md ${location.pathname === "/" ? "bg-primary/10 text-primary" : "hover:bg-gray-100"}`}
            >
              Home
            </Link>
            {user && (
              <Link 
                to="/dashboard" 
                className={`px-4 py-2 rounded-md ${location.pathname === "/dashboard" ? "bg-primary/10 text-primary" : "hover:bg-gray-100"}`}
              >
                Dashboard
              </Link>
            )}
            <Link 
              to="#features" 
              className="px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Features
            </Link>
            
            {user ? (
              <>
                <Link 
                  to="/profile" 
                  className="px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  Profile Settings
                </Link>
                <button 
                  onClick={logout} 
                  className="flex items-center gap-2 px-4 py-2 rounded-md text-destructive hover:bg-destructive/10"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2 mt-2">
                <Link to="/login">
                  <Button variant="outline" className="w-full">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full">Sign up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
