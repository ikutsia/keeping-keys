import React from "react";

const Blog = ({ language }) => {
  const blogPosts = [
    {
      id: 1,
      title: {
        en: "Survivor Story: The Journey Through Svanetian Mountains",
        ge: "გადარჩენილის ისტორია: მოგზაურობა სვანეთის მთებში",
      },
      excerpt: {
        en: "A first-hand account of the perilous journey that thousands of Georgians undertook in 1993 to escape ethnic violence...",
        ge: "პირველი პირის მოწმობა საშიში მოგზაურობის შესახებ, რომელიც ათასობით ქართველმა გადაიტანა 1993 წელს ეთნიკური ძალადობისგან გასაქცევად...",
      },
      author: {
        en: "By Maria Kapanadze",
        ge: "მარია კაპანაძის მიერ",
      },
      date: "2024-01-15",
      category: "survivor-stories",
      readTime: { en: "5 min read", ge: "5 წთ წასაკითხი" },
    },
    {
      id: 2,
      title: {
        en: "Memory Walk 2024: Registration Now Open",
        ge: "მეხსიერების ფეხით სიარული 2024: რეგისტრაცია ღიაა",
      },
      excerpt: {
        en: "Join us for the annual Memory Walk through the Caucasus mountains to commemorate the survivors of the 1993 exodus...",
        ge: "შეუერთდით ჩვენ წლიურ მეხსიერების ფეხით სიარულს კავკასიის მთებში 1993 წლის ეგზოდუსის გადარჩენილთა ხსოვნის პატივისცემისთვის...",
      },
      author: {
        en: "By Memory Walk Committee",
        ge: "მეხსიერების ფეხით სიარულის კომიტეტის მიერ",
      },
      date: "2024-01-10",
      category: "events",
      readTime: { en: "3 min read", ge: "3 წთ წასაკითხი" },
    },
    {
      id: 3,
      title: {
        en: "The Symbolism of Keeping Keys: Hope and Determination",
        ge: "გასაღებების შენახვის სიმბოლიზმი: იმედი და გადაწყვეტილება",
      },
      excerpt: {
        en: "Why do we keep the keys to our homes? This powerful symbol represents our unwavering hope to return one day...",
        ge: "რატომ ვინახავთ ჩვენი სახლების გასაღებებს? ეს ძლიერი სიმბოლო წარმოადგენს ჩვენს ურყევ იმედს, რომ ერთ დღეს დავბრუნდებით...",
      },
      author: {
        en: "By Dr. Giorgi Tsereteli",
        ge: "დოქტორ გიორგი წერეთლის მიერ",
      },
      date: "2024-01-05",
      category: "culture",
      readTime: { en: "7 min read", ge: "7 წთ წასაკითხი" },
    },
    {
      id: 4,
      title: {
        en: "Educational Programs: Teaching the Next Generation",
        ge: "საგანმანათლებლო პროგრამები: შემდეგი თაობის სწავლება",
      },
      excerpt: {
        en: "Our educational initiatives aim to ensure that the history of the 1993 exodus is never forgotten...",
        ge: "ჩვენი საგანმანათლებლო ინიციატივები მიზნად ისახავს 1993 წლის ეგზოდუსის ისტორიის არავითარ შემთხვევაში დავიწყებას...",
      },
      author: {
        en: "By Education Team",
        ge: "საგანმანათლებლო გუნდის მიერ",
      },
      date: "2023-12-28",
      category: "education",
      readTime: { en: "4 min read", ge: "4 წთ წასაკითხი" },
    },
  ];

  const categories = [
    { id: "all", name: { en: "All Posts", ge: "ყველა პოსტი" } },
    {
      id: "survivor-stories",
      name: { en: "Survivor Stories", ge: "გადარჩენილების ისტორიები" },
    },
    { id: "events", name: { en: "Events", ge: "ღონისძიებები" } },
    { id: "culture", name: { en: "Culture", ge: "კულტურა" } },
    { id: "education", name: { en: "Education", ge: "განათლება" } },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === "EN" ? "en-US" : "ka-GE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-georgian-black mb-4">
            {language === "EN" ? "Blog" : "ბლოგი"}
          </h2>
          <div className="w-24 h-1 bg-georgian-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === "EN"
              ? "Stories, news, and insights from our community. Read about survivor experiences, upcoming events, and the ongoing work to preserve our history."
              : "ისტორიები, სიახლეები და ინფორმაცია ჩვენი საზოგადოებიდან. წაიკითხეთ გადარჩენილების გამოცდილებების შესახებ, მომავალი ღონისძიებების შესახებ და ჩვენი ისტორიის შენარჩუნებისთვის მიმდინარე სამუშაოების შესახებ."}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-6 py-2 rounded-full border-2 border-georgian-red text-georgian-red hover:bg-georgian-red hover:text-white transition-colors duration-200"
            >
              {language === "EN" ? category.name.en : category.name.ge}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-64 md:h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">
                    {language === "EN" ? "Featured Image" : "ძირითადი სურათი"}
                  </p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-georgian-red text-white px-3 py-1 rounded-full text-sm">
                    {language === "EN" ? "Featured" : "ძირითადი"}
                  </span>
                  <span className="text-gray-500 ml-4">
                    {formatDate(blogPosts[0].date)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-georgian-black mb-4">
                  {language === "EN"
                    ? blogPosts[0].title.en
                    : blogPosts[0].title.ge}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === "EN"
                    ? blogPosts[0].excerpt.en
                    : blogPosts[0].excerpt.ge}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {language === "EN"
                      ? blogPosts[0].author.en
                      : blogPosts[0].author.ge}
                  </span>
                  <span className="text-sm text-gray-500">
                    {language === "EN"
                      ? blogPosts[0].readTime.en
                      : blogPosts[0].readTime.ge}
                  </span>
                </div>
                <button className="mt-4 bg-georgian-red text-white px-6 py-2 rounded hover:bg-red-700 transition-colors duration-200">
                  {language === "EN" ? "Read More" : "წაიკითხეთ მეტი"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">
                  {language === "EN" ? "Post Image" : "პოსტის სურათი"}
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-auto">
                    {formatDate(post.date)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-georgian-black mb-3">
                  {language === "EN" ? post.title.en : post.title.ge}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {language === "EN" ? post.excerpt.en : post.excerpt.ge}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {language === "EN" ? post.author.en : post.author.ge}
                  </span>
                  <span className="text-sm text-gray-500">
                    {language === "EN" ? post.readTime.en : post.readTime.ge}
                  </span>
                </div>
                <button className="mt-4 w-full bg-transparent border-2 border-georgian-red text-georgian-red py-2 rounded hover:bg-georgian-red hover:text-white transition-colors duration-200">
                  {language === "EN" ? "Read More" : "წაიკითხეთ მეტი"}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-georgian-red rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            {language === "EN" ? "Stay Updated" : "დარჩით განახლებული"}
          </h3>
          <p className="mb-6">
            {language === "EN"
              ? "Subscribe to our newsletter for the latest news and updates about our community and events."
              : "გამოიწერეთ ჩვენი ბიულეტენი უახლესი სიახლეებისა და განახლებებისთვის ჩვენი საზოგადოებისა და ღონისძიებების შესახებ."}
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder={
                language === "EN"
                  ? "Enter your email"
                  : "შეიყვანეთ თქვენი ელ-ფოსტა"
              }
              className="flex-1 px-4 py-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-black focus:outline-none"
            />
            <button className="bg-georgian-black px-6 py-2 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-gray-800 transition-colors duration-200">
              {language === "EN" ? "Subscribe" : "გამოწერა"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
