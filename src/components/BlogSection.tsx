const BlogSection = () => {
  const blogPosts = [
    {
      title: "A Little Story Behind YouMind",
      excerpt: "Nowadays, we spend hours scrolling through endless YouTube videos, tweets, and Instagram posts—only to realize that all that time yielded nothing of real value. It's like eating a bag of chips when you're hungry: momentarily satisfying, but ultimately unfulfilling.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b7dd?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "A Bitter Lesson from Squirrels",
      excerpt: "I couldn't help but wonder from time to time, what is the best way to learn something new? In the past, my instinct told me to collect and save learning materials as much as possible, with a firm believe that \"the more, the better.\"",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
    },
    {
      title: "A Small but Wonderful Improvement for Content Creation",
      excerpt: "This is the scenario I experience all the time whenever I want to write something serious, whether a commentary on a movie, or market research in a specific field. I search, bookmark, save and download every materials related to the aimed subject.",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <div className="mx-auto mt-[120px] w-full max-w-7xl px-4 md:mt-[200px]">
      <h2 className="mb-[60px] text-center font-bold text-3xl md:text-4xl lg:text-[42px]">
        Learn more about YouMind
      </h2>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <a key={index} href="#" className="group w-full overflow-hidden transition-all">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px]">
              <img 
                alt={post.title}
                className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
                src={post.image}
              />
            </div>
            <div className="py-4">
              <h3 className="mb-2 line-clamp-2 text-xl font-semibold">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-base text-secondary-fg">
                {post.excerpt}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;