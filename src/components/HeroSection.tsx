import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative mx-auto w-full pb-10 pt-6 md:pb-0 md:pt-10 lg:pt-[72px]">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <h1 className="mb-4 font-bold text-3xl md:mb-6 md:text-5xl lg:text-[56px] flex items-center px-2">
          Create something good.
        </h1>
        
        <p className="hidden md:block mx-auto mb-8 max-w-3xl text-base text-secondary-fg md:mb-10 md:max-w-4xl md:text-lg lg:text-xl px-6 lg:px-8">
          YouMind is the first AI creation studio where learning meets writing, <br />
          helping everyone turn ideas into good creations.
        </p>
        
        <p className="md:hidden mx-auto mb-8 max-w-3xl text-base text-secondary-fg px-6">
          YouMind is the first AI creation studio where learning meets writing, helping everyone turn ideas into good creations.
        </p>

        <div className="flex justify-center items-center gap-4 flex-col">
          <Button 
            size="lg"
            className="h-[44px] rounded-full bg-black text-white hover:bg-black/90 hover:scale-105 transition-all duration-300 md:text-[20px] lg:h-[52px] lg:w-[280px]"
          >
            Start for free
          </Button>
          
          <Button 
            variant="ghost"
            className="flex items-center gap-2 text-foreground hover:scale-105 transition-all duration-300"
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            Join the community
            <ArrowUpRight className="w-4 h-4 text-secondary-fg" />
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative mx-auto mt-10 w-full max-w-[1600px] origin-top scale-125 md:mt-0 md:scale-100 md:px-8 lg:-top-14">
        <div className="relative aspect-[1204/796] w-full overflow-hidden">
          <div className="absolute inset-0 left-[calc(220/1204*100%)] top-[calc(148/796*100%)] aspect-[760/480] w-[calc(760/1204*100%)]">
            <div className="h-full w-full object-cover rounded-lg shadow-2xl bg-white">
              <img 
                alt="YouMind Interface"
                className="w-full h-full object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
              />
            </div>
          </div>
          <img 
            alt="Hero Illustration"
            className="pointer-events-none absolute inset-0 h-full w-full object-contain"
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=1000&fit=crop&crop=center"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;