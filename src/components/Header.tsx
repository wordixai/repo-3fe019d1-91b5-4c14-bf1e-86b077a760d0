import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full bg-card">
      <div className="flex h-14 w-full items-center justify-between px-3 md:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rounded-full outline-offset-8 outline-white">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">Y</span>
          </div>
          <span className="font-bold text-xl">YouMind</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-4">
          <Button variant="ghost" size="sm" className="text-secondary-fg hover:text-foreground">
            Overview
          </Button>
          <Button variant="ghost" size="sm" className="text-secondary-fg hover:text-foreground">
            Use cases
          </Button>
          <Button variant="ghost" size="sm" className="text-secondary-fg hover:text-foreground">
            Shortcuts
          </Button>
          <Button variant="ghost" size="sm" className="text-secondary-fg hover:text-foreground">
            Pricing
          </Button>
          <Button variant="ghost" size="sm" className="text-secondary-fg hover:text-foreground">
            Blog
          </Button>
          <Button variant="ghost" size="sm" className="text-secondary-fg hover:text-foreground">
            Updates
          </Button>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center justify-end space-x-3">
          <Button 
            variant="outline" 
            size="sm"
            className="hidden md:block"
          >
            Sign in
          </Button>
          <Button 
            className="hidden md:block bg-black text-white hover:bg-black/90 hover:scale-105 transition-transform duration-300"
            size="sm"
          >
            Add to Chrome
          </Button>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </Button>

          {/* Mobile CTA */}
          <Button className="md:hidden bg-black text-white rounded-full px-4 py-2 text-sm">
            Start
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-t">
          <div className="flex flex-col p-6 space-y-4">
            <a href="#" className="text-gray-700 py-3 border-b border-neutral-300">Overview</a>
            <a href="#" className="text-gray-700 py-3 border-b border-neutral-300">Use cases</a>
            <a href="#" className="text-gray-700 py-3 border-b border-neutral-300">Shortcuts</a>
            <a href="#" className="text-gray-700 py-3 border-b border-neutral-300">Pricing</a>
            <a href="#" className="text-gray-700 py-3 border-b border-neutral-300">Blog</a>
            <a href="#" className="text-gray-700 py-3 border-b border-neutral-300">Updates</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;