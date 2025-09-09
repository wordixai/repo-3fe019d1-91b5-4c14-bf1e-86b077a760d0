const FeaturesSection = () => {
  return (
    <section className="relative mx-auto mt-10 w-full max-w-7xl md:mt-0 lg:px-8">
      <div className="mx-auto px-4">
        <h2 className="mb-12 text-center font-bold text-3xl md:mb-14 md:text-[42px]">
          One place for you
        </h2>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {/* Save Feature */}
          <div className="h-[420px] rounded-3xl border border-snip-card bg-youmind-gray px-9 py-6 transition-all duration-300 hover:-translate-y-1 md:h-[460px] lg:col-span-6">
            <h3 className="mb-2 text-2xl font-medium">Save</h3>
            <p className="mb-4 text-secondary-fg md:mb-6">
              Save youtube, podcasts, articles and webpages to YouMind with our browser extension. Upload PDFs, m4a files and other documents all in one board.
            </p>
            <div className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-xl md:h-[260px]">
              <img 
                alt="Save Feature"
                className="h-full w-full object-contain"
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center"
              />
            </div>
          </div>

          {/* Research Feature */}
          <div className="relative flex h-[420px] flex-col rounded-3xl border border-snip-card bg-youmind-gray py-6 !pb-0 transition-all duration-300 hover:-translate-y-1 md:h-[460px] lg:col-span-6">
            <h3 className="mb-2 px-9 text-2xl font-medium">Research</h3>
            <p className="mb-4 px-9 text-secondary-fg md:mb-6">
              Dive deep into materials: convert youtube and podcasts to text, highlight key points, take notes, and generate summaries with our AI assistants – all to deepen your understanding.
            </p>
            <div className="relative flex h-0 flex-grow items-end justify-center overflow-hidden rounded-xl px-4">
              <img 
                alt="Research Feature"
                className="relative -bottom-[2px] h-full w-full object-contain object-bottom"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center"
              />
            </div>
          </div>

          {/* Organize Feature */}
          <div className="relative flex h-[420px] flex-col overflow-hidden rounded-3xl border border-snip-card bg-youmind-gray py-6 !pb-0 transition-all duration-300 hover:-translate-y-1 md:h-[460px] lg:col-span-4">
            <h3 className="relative z-10 mb-2 px-9 text-2xl font-medium">Organize</h3>
            <p className="relative z-10 mb-4 px-9 text-secondary-fg md:mb-6">
              Gather all the materials, thoughts and notes of a project in one board, and organize the project within this board. Bring everything together and create something new at ease.
            </p>
            <div className="relative z-0 flex flex-grow flex-col justify-end overflow-hidden align-bottom">
              <img 
                alt="Organize Feature"
                className="relative bottom-0 z-0 flex h-full w-full rounded-b-3xl object-contain object-right-bottom"
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center"
              />
            </div>
          </div>

          {/* Ask Feature */}
          <div className="relative rounded-3xl py-6 transition-all duration-300 hover:-translate-y-1 lg:col-span-8 bg-gradient-to-br from-yellow-300 to-orange-300">
            <h3 className="relative mb-2 px-9 text-2xl font-medium">Ask</h3>
            <p className="relative mb-4 px-9 text-secondary-fg md:mb-6">
              Ask AI whenever you have doubts or questions. Easily reference multiple materials with top AI models powered by OpenAI, Anthropic, Google, and DeepSeek.
            </p>
            <div className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-xl px-4 md:h-[260px]">
              <img 
                alt="Ask Feature"
                className="h-full w-full object-contain"
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop&crop=center"
              />
            </div>
          </div>

          {/* Write Feature */}
          <div className="relative rounded-3xl py-6 text-white transition-all duration-300 hover:-translate-y-1 lg:col-span-8 bg-gradient-to-br from-blue-500 to-purple-600">
            <h3 className="relative mb-2 px-9 text-2xl font-medium">Write</h3>
            <p className="relative mb-4 px-9 text-white/80 md:mb-6">
              Focus on writing: create custom prompts, add your notes, and work with AI to turn ideas into content of good quality.
            </p>
            <div className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-xl px-4 md:h-[360px]">
              <img 
                alt="Write Feature"
                className="h-full w-full object-contain"
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop&crop=center"
              />
            </div>
          </div>

          {/* Share Feature */}
          <div className="flex flex-col rounded-3xl border border-snip-card bg-youmind-gray px-9 py-6 !pb-0 transition-all duration-300 hover:-translate-y-1 lg:col-span-4">
            <h3 className="mb-2 text-2xl font-medium">Share</h3>
            <p className="mb-4 flex-grow text-secondary-fg md:mb-6">
              Share your work with one click, and use the link anywhere at will.
            </p>
            <div className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-xl md:h-[360px]">
              <img 
                alt="Share Feature"
                className="h-full w-full object-contain"
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;