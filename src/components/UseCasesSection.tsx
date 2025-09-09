import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, BookOpen, PenTool, Palette, Users } from "lucide-react";

const UseCasesSection = () => {
  return (
    <section className="mx-auto mt-[120px] w-full max-w-7xl md:mt-[200px]">
      <div className="mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-bold text-3xl md:text-4xl lg:text-[42px]">Use cases</h2>
          <p className="mx-auto max-w-2xl text-base text-secondary-fg md:text-[20px]">
            See how users create with YouMind in real projects.
          </p>
        </div>

        <div className="mb-10 flex justify-center md:mb-16 lg:mb-20">
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="flex h-[40px] items-center rounded-full px-6 gap-2 bg-black text-white">
              <Star className="w-5 h-5" />
              Featured
            </Button>
            <Button variant="outline" className="flex h-[40px] items-center rounded-full px-6 gap-2 text-secondary-fg hover:bg-muted">
              <BookOpen className="w-5 h-5" />
              Learn
            </Button>
            <Button variant="outline" className="flex h-[40px] items-center rounded-full px-6 gap-2 text-secondary-fg hover:bg-muted">
              <PenTool className="w-5 h-5" />
              Write
            </Button>
            <Button variant="outline" className="flex h-[40px] items-center rounded-full px-6 gap-2 text-secondary-fg hover:bg-muted">
              <Palette className="w-5 h-5" />
              Create
            </Button>
            <Button variant="outline" className="flex h-[40px] items-center rounded-full px-6 gap-2 text-secondary-fg hover:bg-muted">
              <Users className="w-5 h-5" />
              Life
            </Button>
          </div>
        </div>

        <div className="hidden grid-cols-10 gap-12 md:grid">
          <div className="col-span-4">
            <Accordion type="single" defaultValue="item-1">
              <AccordionItem value="item-1" className="border-b border-muted">
                <AccordionTrigger className="py-4 hover:no-underline [&>svg]:hidden">
                  <div className="flex w-full items-center">
                    <div className="mr-3 h-[10px] w-[10px] flex-shrink-0 rounded-[2px] bg-foreground"></div>
                    <div className="text-left text-xl">
                      <span className="font-semibold text-foreground">Smart AI Browser Extension for Reading & Clipping</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4">
                  <div className="pl-7">
                    <p className="mb-3 line-clamp-2 text-base text-secondary-fg">
                      The complete workflow of your all-in-one web browsing plugin: clipping, video-to-text, AI chat, paper reading, and a variety of amazing little tools
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-muted">
                <AccordionTrigger className="py-4 hover:no-underline [&>svg]:hidden">
                  <div className="flex w-full items-center">
                    <div className="mr-3 h-[10px] w-[10px] flex-shrink-0 rounded-[2px] bg-border"></div>
                    <div className="text-left text-xl">
                      <span className="font-normal text-secondary-fg">Write a Steve Jobs article using New Board</span>
                    </div>
                  </div>
                </AccordionTrigger>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-muted">
                <AccordionTrigger className="py-4 hover:no-underline [&>svg]:hidden">
                  <div className="flex w-full items-center">
                    <div className="mr-3 h-[10px] w-[10px] flex-shrink-0 rounded-[2px] bg-border"></div>
                    <div className="text-left text-xl">
                      <span className="font-normal text-secondary-fg">Add Ghibli images to articles</span>
                    </div>
                  </div>
                </AccordionTrigger>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-muted">
                <AccordionTrigger className="py-4 hover:no-underline [&>svg]:hidden">
                  <div className="flex w-full items-center">
                    <div className="mr-3 h-[10px] w-[10px] flex-shrink-0 rounded-[2px] bg-border"></div>
                    <div className="text-left text-xl">
                      <span className="font-normal text-secondary-fg">Generate SVG diagram images for the article</span>
                    </div>
                  </div>
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="col-span-6">
            <div className="overflow-hidden rounded-2xl border border-snip-card bg-background p-2">
              <div className="group relative aspect-video overflow-hidden rounded-xl shadow-md">
                <div className="relative block h-full w-full bg-gray-100">
                  <img 
                    alt="Smart AI Browser Extension"
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop&crop=center"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/60 shadow-md backdrop-blur-sm">
                      <div className="w-0 h-0 border-l-[8px] border-l-black border-y-[6px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile version */}
        <div className="md:hidden">
          <Accordion type="single" defaultValue="item-1">
            <AccordionItem value="item-1" className="border-b border-muted">
              <AccordionTrigger className="py-4 hover:no-underline [&>svg]:hidden">
                <div className="flex w-full items-center">
                  <div className="mr-3 h-[10px] w-[10px] flex-shrink-0 rounded-[2px] bg-foreground"></div>
                  <div className="text-left text-xl">
                    <span className="font-semibold text-foreground">Smart AI Browser Extension for Reading & Clipping</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-4">
                <div className="pl-7">
                  <p className="mb-4 line-clamp-2 text-base text-secondary-fg">
                    The complete workflow of your all-in-one web browsing plugin: clipping, video-to-text, AI chat, paper reading, and a variety of amazing little tools
                  </p>
                  <div className="overflow-hidden rounded-2xl border border-snip-card bg-background p-2">
                    <div className="group relative aspect-video overflow-hidden rounded-xl shadow-md">
                      <img 
                        alt="Smart AI Browser Extension"
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=338&fit=crop&crop=center"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white/60 shadow-md backdrop-blur-sm">
                          <div className="w-0 h-0 border-l-[6px] border-l-black border-y-[4px] border-y-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="mt-20 text-center">
          <Button className="inline-flex h-[44px] items-center justify-center rounded-full bg-black px-6 py-3 font-normal text-white transition-all duration-300 hover:scale-105 md:text-[20px] lg:h-[52px] lg:w-[276px]">
            Explore more use cases
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;