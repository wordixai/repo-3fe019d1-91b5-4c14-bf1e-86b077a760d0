import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

const ProductHuntBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-orange-400 to-pink-400" style={{ height: "48px" }}>
      <div className="relative flex h-full items-center justify-center px-2 md:px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full">
            <img 
              alt="Product Hunt" 
              width="24" 
              height="24" 
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=989426&theme=light&period=daily" 
              className="w-6 h-6"
            />
          </div>
          <span className="font-medium text-white tracking-wide text-sm md:text-lg">
            We're live on Product Hunt!
          </span>
          <Button 
            variant="ghost"
            size="sm"
            className="bg-white text-orange-500 hover:bg-white/90 hover:scale-105 transition-transform duration-150 rounded-full px-3 py-1 text-sm font-medium"
          >
            <span className="hidden md:block">Check out launch</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-1 top-1/2 -translate-y-1/2 text-white hover:bg-transparent hover:scale-110 md:right-4"
          onClick={() => setIsVisible(false)}
        >
          <X className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ProductHuntBanner;