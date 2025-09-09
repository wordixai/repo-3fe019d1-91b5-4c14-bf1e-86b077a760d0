import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="bg-card">
      {/* Final CTA Section */}
      <div className="mx-auto mt-[120px] w-full max-w-7xl px-4 pb-10 sm:px-6 md:mt-[200px] md:pb-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center lg:px-8">
          <h1 className="mb-4 font-bold text-3xl md:mb-6 md:text-5xl lg:text-[56px]">
            Create something good.
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-sm text-secondary-fg md:mb-10 md:max-w-4xl md:text-lg lg:text-xl">
            YouMind is the first AI creation studio where learning meets writing.
          </p>
          <Button 
            size="lg"
            className="h-[44px] rounded-full bg-black text-white hover:bg-black/90 hover:scale-105 transition-all duration-300 md:text-[20px] lg:h-[52px] lg:w-[280px]"
          >
            Start for free
          </Button>
        </div>
      </div>

      {/* Product Hunt Badge */}
      <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-50">
        <a 
          href="https://www.producthunt.com/products/youmind" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=989426&theme=light" 
            alt="YouMind - Where creation begins | Product Hunt" 
            className="w-[180px] h-[39px] md:w-[250px] md:h-[54px]"
          />
        </a>
      </div>

      {/* Footer */}
      <div className="footer flex flex-col px-[8%] pb-[90px] pt-[64px] md:pt-[160px] text-sm md:text-base bg-card">
        <div className="flex flex-col w-full mt-4 md:flex-row">
          <div className="mb-8 flex-1 md:mb-0 text-[rgba(0,0,0,0.88)]">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Y</span>
            </div>
            <p className="mt-4 text-caption-fg">© 2025 MIND MOTOR PTE. LTD.</p>
            <div className="flex gap-6 mt-[84px]">
              <a href="#" target="_blank" rel="noopener" className="text-caption-fg hover:text-foreground">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </a>
              <a href="#" target="_blank" rel="noopener" className="text-caption-fg hover:text-foreground">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.7477 2.7995H20.8025L14.0953 10.4364L21.9314 20.796H15.782L10.9675 14.5005L5.45564 20.796H2.40089L9.50651 12.6278L2.00244 2.7995H8.30453L12.6542 8.55041L17.7477 2.7995ZM16.6785 19.003H18.3719L7.41467 4.5261H5.5951L16.6785 19.003Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-shrink-0 gap-12">
            <div className="w-[110px]">
              <div className="mb-[16px] text-base font-semibold">Product</div>
              <div className="flex flex-col gap-[16px] text-sm">
                <a className="text-[rgba(0,0,0,0.6)] hover:text-foreground" href="#">Use cases</a>
                <a className="text-[rgba(0,0,0,0.6)] hover:text-foreground" href="#">Shortcuts</a>
                <a className="text-[rgba(0,0,0,0.6)] hover:text-foreground" href="#">Pricing</a>
                <a className="text-[rgba(0,0,0,0.6)] hover:text-foreground" href="#">Blog</a>
                <a className="text-[rgba(0,0,0,0.6)] hover:text-foreground" href="#">Updates</a>
              </div>
            </div>
            
            <div>
              <div className="mb-[16px] text-base font-semibold">Company</div>
              <div className="flex flex-col gap-[16px] text-sm">
                <div className="cursor-pointer text-[rgba(0,0,0,0.6)] hover:text-foreground">Contact us</div>
                <a className="text-[rgba(0,0,0,0.6)] hover:text-foreground" href="#">Privacy</a>
                <a className="text-[rgba(0,0,0,0.6)] hover:text-foreground" href="#">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;