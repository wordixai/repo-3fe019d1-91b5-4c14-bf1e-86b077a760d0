const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "What I see in YouMind is its boundless potential.",
      content: "Whether it's the generous offering of multiple top models, the Assistant that fully empowers users with freedom, or the user-friendly Notes, what I see in YouMind is its boundless potential.",
      author: "Eason Huang",
      role: "Writer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=44&h=44&fit=crop&crop=face"
    },
    {
      quote: "Gather materials, organize thoughts, and aggregate on board.",
      content: "YouMind helps me swiftly gather materials, organize my thoughts and notes, and then aggregate them on the board. The entire experience is incredibly smooth.",
      author: "Mark Thompson",
      role: "AI independent developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=44&h=44&fit=crop&crop=face"
    },
    {
      quote: "It helped me produce an article that received a good response.",
      content: "Start the new year with YouMind!❤️ During two weeks of deeply experiencing YouMind, I'm grateful it helped me write an article that got a good response in the company. Thanks to the YouMind team for their rapid response and support 🫶.",
      author: "Uni",
      role: "Blogger",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c7d30d0d?w=44&h=44&fit=crop&crop=face"
    },
    {
      quote: "YouMind can reduce the number of tools I need to use.",
      content: "I paid for YouMind: Its overall design appears to integrate \"source clipping and archiving\", \"thought recording\", and \"structured output\", which might revolutionize my creative workflow (reduce the number of tools used).",
      author: "Shan",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=44&h=44&fit=crop&crop=face"
    },
    {
      quote: "It could replace my Readwise and Notion workflow.",
      content: "I gave YouMind a try. It's a content collection, summarization and organization tool. Despite being newly launched, it's already very complete and powerful. It seems like it could replace my Readwise and Notion workflow.",
      author: "Gui Zang",
      role: "Designer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=44&h=44&fit=crop&crop=face"
    }
  ];

  return (
    <section className="mx-auto mt-[120px] w-full md:mt-[200px]">
      <div className="mx-auto">
        <h2 className="mx-auto mb-8 max-w-7xl px-8 text-center font-bold text-3xl md:mb-16 md:text-4xl lg:text-[42px]">
          Our users love YouMind
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="group flex overflow-hidden p-2 gap-4 py-4 md:gap-7 lg:gap-9">
            <div className="flex shrink-0 justify-around animate-marquee flex-row group-hover:[animation-play-state:paused] gap-4 md:gap-7 lg:gap-9">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="relative w-[306px] flex-shrink-0 overflow-hidden rounded-3xl border border-snip-card bg-youmind-gray p-6 md:w-[340px] lg:w-[376px]">
                  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="mb-6">
                    <path d="M9 17.022a9.023 9.023 0 0 1 6.178-5.555c3.2-1.023 1.633-4.445-1.2-3.567C7.31 9.767 3.333 14.844 3.333 21.478 3.333 26.667 6.29 30 10.878 30c4.588 0 7.466-2.767 7.466-7.067 0-6.155-5.833-7.622-9.344-5.91Zm18.322 0a9.023 9.023 0 0 1 6.178-5.555c3.166-1.011 1.666-4.445-1.2-3.567-6.667 1.878-10.645 6.944-10.645 13.589 0 5.178 2.967 8.511 7.545 8.511 4.578 0 7.466-2.767 7.466-7.067 0-6.133-5.8-7.633-9.344-5.91Z" fill="#02041A" fillOpacity="0.16"/>
                  </svg>
                  
                  <div className="mb-6">
                    <div className="mb-4">
                      <div className="line-clamp-2 text-xl leading-7 text-foreground mb-4">
                        {testimonial.quote}
                      </div>
                      <div className="line-clamp-6 font-serif text-base font-normal leading-relaxed text-secondary-fg">
                        {testimonial.content}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <img 
                      alt={testimonial.author}
                      className="h-11 w-11 rounded-full object-cover"
                      src={testimonial.avatar}
                    />
                    <div>
                      <div className="text-base leading-normal text-foreground/90">
                        {testimonial.author}
                      </div>
                      <div className="text-sm font-normal leading-tight text-caption-fg">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicate for seamless loop */}
            <div className="flex shrink-0 justify-around animate-marquee flex-row group-hover:[animation-play-state:paused] gap-4 md:gap-7 lg:gap-9">
              {testimonials.map((testimonial, index) => (
                <div key={`duplicate-${index}`} className="relative w-[306px] flex-shrink-0 overflow-hidden rounded-3xl border border-snip-card bg-youmind-gray p-6 md:w-[340px] lg:w-[376px]">
                  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" className="mb-6">
                    <path d="M9 17.022a9.023 9.023 0 0 1 6.178-5.555c3.2-1.023 1.633-4.445-1.2-3.567C7.31 9.767 3.333 14.844 3.333 21.478 3.333 26.667 6.29 30 10.878 30c4.588 0 7.466-2.767 7.466-7.067 0-6.155-5.833-7.622-9.344-5.91Zm18.322 0a9.023 9.023 0 0 1 6.178-5.555c3.166-1.011 1.666-4.445-1.2-3.567-6.667 1.878-10.645 6.944-10.645 13.589 0 5.178 2.967 8.511 7.545 8.511 4.578 0 7.466-2.767 7.466-7.067 0-6.133-5.8-7.633-9.344-5.91Z" fill="#02041A" fillOpacity="0.16"/>
                  </svg>
                  
                  <div className="mb-6">
                    <div className="mb-4">
                      <div className="line-clamp-2 text-xl leading-7 text-foreground mb-4">
                        {testimonial.quote}
                      </div>
                      <div className="line-clamp-6 font-serif text-base font-normal leading-relaxed text-secondary-fg">
                        {testimonial.content}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <img 
                      alt={testimonial.author}
                      className="h-11 w-11 rounded-full object-cover"
                      src={testimonial.avatar}
                    />
                    <div>
                      <div className="text-base leading-normal text-foreground/90">
                        {testimonial.author}
                      </div>
                      <div className="text-sm font-normal leading-tight text-caption-fg">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;