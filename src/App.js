import React, { useState } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  const [language, setLanguage] = useState("EN");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "GE" : "EN");
  };

  const navItems = [
    { en: "Home", ge: "მთავარი" },
    { en: "History", ge: "ისტორია" },
    { en: "Memory Walk", ge: "მეხსიერების ფეხით სიარული" },
    { en: "Gallery", ge: "გალერეა" },
    { en: "Blog", ge: "ბლოგი" },
    { en: "Contact", ge: "კონტაქტი" },
  ];

  const heroContent = {
    EN: {
      title: "We Keep Keys to Our Home",
      subtitle: "We Remember - 1993",
      description:
        "Commemorating the victims of the 1993 exodus of Georgians from Abkhazia and survivors of the death road through Svanetian mountains.",
    },
    GE: {
      title: "მე ვინახავ ჩემი სახლის გასაღებს",
      subtitle: "ჩვენ გვახსოვს 1993",
      description:
        "1993 წელს აფხაზეთიდან ქართველების ეგზოდუსის მსხვერპლთა და სვანეთის მთებში სიკვდილის გზის გადარჩენილთა ხსოვნის პატივისცემა.",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-red-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-white">
                  {language === "EN"
                    ? "I Keep Keys to My Home"
                    : "მე ვინახავ ჩემი სახლის გასაღებს"}
                </h1>
              </div>
            </div>

            {/* Navigation Items - Desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={`#${item.en.toLowerCase().replace(" ", "-")}`}
                    className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {language === "EN" ? item.en : item.ge}
                  </a>
                ))}
              </div>
            </div>

            {/* Language Switcher - Desktop */}
            <div className="hidden md:flex items-center">
              <button
                onClick={toggleLanguage}
                className="bg-georgian-red text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors duration-200"
              >
                {language === "EN" ? "GE" : "EN"}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="bg-georgian-red text-white px-3 py-1 rounded text-sm font-medium hover:bg-red-700 transition-colors duration-200"
              >
                {language === "EN" ? "GE" : "EN"}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-red-600">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.en.toLowerCase().replace(" ", "-")}`}
                  className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {language === "EN" ? item.en : item.ge}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/gexodus.jpg')",
            filter: "brightness(0.6)",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">{heroContent[language].title}</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-georgian-red">
              {heroContent[language].subtitle}
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              {heroContent[language].description}
            </p>
            <div className="mt-12">
              <button className="bg-georgian-red text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200 mr-4">
                {language === "EN" ? "Learn More" : "მეტის ნახვა"}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-200">
                {language === "EN"
                  ? "Join Memory Walk"
                  : "შეუერთდი მეხსიერების ფეხით სიარულს"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <section id="history" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-georgian-black mb-4">
              {language === "EN" ? "The 1993 Exodus" : "1993 წლის ეგზოდუსი"}
            </h2>
            <div className="w-24 h-1 bg-georgian-red mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {language === "EN"
                  ? 'In September-October 1993, up to 100,000 Georgians were forced to flee Abkhazia due to ethnic violence and genocide. The survivors undertook a perilous journey through the Svanetian mountains, known as the "Death Road," in search of safety and survival.'
                  : '1993 წლის სექტემბერ-ოქტომბერში, 100,000-მდე ქართველი იძულებული გახდა აფხაზეთიდან გაქცეულიყო ეთნიკური ძალადობისა და გენოციდის გამო. გადარჩენილებმა საშიში მოგზაურობა გადაიტანეს სვანეთის მთებში, რომელიც "სიკვდილის გზად" იყო ცნობილი, უსაფრთხოებისა და გადარჩენის ძიებაში.'}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === "EN"
                  ? "This website serves as a memorial to those who lost their lives and honors the courage of those who survived. We keep the keys to our homes as a symbol of hope and determination to return one day."
                  : "ეს ვებსაიტი ეძღვნება იმ ადამიანების ხსოვნას, რომლებიც დაკარგეს სიცოცხლე და პატივს სცემს იმ ადამიანების სიმამაცეს, რომლებიც გადარჩნენ. ჩვენ ვინახავთ ჩვენი სახლების გასაღებებს, როგორც იმედისა და გადაწყვეტილების სიმბოლოს, რომ ერთ დღეს დავბრუნდებით."}
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-lg">
                {language === "EN"
                  ? "Historical Image Placeholder"
                  : "ისტორიული სურათის ადგილი"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Memory Walk Section */}
      <section id="memory-walk" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-georgian-black mb-4">
              {language === "EN"
                ? "Annual Memory Walk"
                : "წლიური მეხსიერების ფეხით სიარული"}
            </h2>
            <div className="w-24 h-1 bg-georgian-red mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-lg">
                {language === "EN"
                  ? "Memory Walk Image Placeholder"
                  : "მეხსიერების ფეხით სიარულის სურათის ადგილი"}
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {language === "EN"
                  ? 'Every year, we organize a commemorative hike through the Caucasus mountains to honor the memory of those who walked the path of survival in 1993. This annual "Memory Walk" retraces the route that up to 100,000 people took to escape ethnic violence.'
                  : 'ყოველწლიურად, ჩვენ ვაწყობთ მემორიალურ ფეხით სიარულს კავკასიის მთებში, რათა პატივი მოვაგოთ იმ ადამიანების ხსოვნას, რომლებიც 1993 წელს გადაიტანეს გადარჩენის გზა. ეს წლიური "მეხსიერების ფეხით სიარული" მიჰყვება იმ მარშრუტს, რომელიც 100,000-მდე ადამიანმა გაიარა ეთნიკური ძალადობისგან გასაქცევად.'}
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-georgian-red rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    {language === "EN"
                      ? "Commemorative ceremonies at key locations"
                      : "მემორიალური ცერემონიები ძირითად ადგილებში"}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-georgian-red rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    {language === "EN"
                      ? "Educational programs about the historical events"
                      : "ისტორიული მოვლენების შესახებ საგანმანათლებლო პროგრამები"}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-georgian-red rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    {language === "EN"
                      ? "Support for survivors and their families"
                      : "გადარჩენილებისა და მათი ოჯახების მხარდაჭერა"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery language={language} />

      {/* Blog Section */}
      <Blog language={language} />

      {/* Contact Section */}
      <Contact language={language} />

      {/* Footer */}
      <footer className="bg-georgian-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                {language === "EN"
                  ? "I Keep Keys to My Home"
                  : "მე ვინახავ ჩემი სახლის გასაღებს"}
              </h3>
              <p className="text-gray-300">
                {language === "EN"
                  ? "Commemorating the victims and survivors of the 1993 Georgian exodus from Abkhazia."
                  : "1993 წელს აფხაზეთიდან ქართველების ეგზოდუსის მსხვერპლთა და გადარჩენილთა ხსოვნის პატივისცემა."}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "EN" ? "Quick Links" : "სწრაფი ბმულები"}
              </h4>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.en.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {language === "EN" ? item.en : item.ge}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                {language === "EN" ? "Contact" : "კონტაქტი"}
              </h4>
              <p className="text-gray-300">
                {language === "EN"
                  ? "Email: info@keepingkeys.org"
                  : "ელ-ფოსტა: info@keepingkeys.org"}
              </p>
              <p className="text-gray-300">
                {language === "EN"
                  ? "Phone: +995 XXX XXX XXX"
                  : "ტელეფონი: +995 XXX XXX XXX"}
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024{" "}
              {language === "EN"
                ? "I Keep Keys to My Home"
                : "მე ვინახავ ჩემი სახლის გასაღებს"}
              .{" "}
              {language === "EN"
                ? "All rights reserved."
                : "ყველა უფლება დაცულია."}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
