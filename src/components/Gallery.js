import React from 'react';

const Gallery = ({ language }) => {
  const galleryItems = [
    {
      id: 1,
      title: { en: 'Historical Documentation', ge: 'ისტორიული დოკუმენტაცია' },
      category: 'history',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: { en: 'Memory Walk 2023', ge: 'მეხსიერების ფეხით სიარული 2023' },
      category: 'memory-walk',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: { en: 'Survivor Stories', ge: 'გადარჩენილების ისტორიები' },
      category: 'stories',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      title: { en: 'Caucasus Mountains', ge: 'კავკასიის მთები' },
      category: 'landscape',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      title: { en: 'Commemorative Events', ge: 'მემორიალური ღონისძიებები' },
      category: 'events',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      title: { en: 'Community Support', ge: 'საზოგადოების მხარდაჭერა' },
      category: 'community',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const categories = [
    { id: 'all', name: { en: 'All', ge: 'ყველა' } },
    { id: 'history', name: { en: 'History', ge: 'ისტორია' } },
    { id: 'memory-walk', name: { en: 'Memory Walk', ge: 'მეხსიერების ფეხით სიარული' } },
    { id: 'stories', name: { en: 'Stories', ge: 'ისტორიები' } },
    { id: 'landscape', name: { en: 'Landscape', ge: 'ლანდშაფტი' } },
    { id: 'events', name: { en: 'Events', ge: 'ღონისძიებები' } },
    { id: 'community', name: { en: 'Community', ge: 'საზოგადოება' } }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-georgian-black mb-4">
            {language === 'EN' ? 'Gallery' : 'გალერეა'}
          </h2>
          <div className="w-24 h-1 bg-georgian-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === 'EN' 
              ? 'Explore our collection of historical photographs, memory walk images, and stories from survivors and their families.'
              : 'გამოიკვლიეთ ჩვენი კოლექცია ისტორიული ფოტოების, მეხსიერების ფეხით სიარულის სურათებისა და გადარჩენილებისა და მათი ოჯახების ისტორიების.'
            }
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-6 py-2 rounded-full border-2 border-georgian-red text-georgian-red hover:bg-georgian-red hover:text-white transition-colors duration-200"
            >
              {language === 'EN' ? category.name.en : category.name.ge}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={item.imageUrl}
                  alt={language === 'EN' ? item.title.en : item.title.ge}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === 'EN' ? item.title.en : item.title.ge}
                  </h3>
                  <button className="text-georgian-red hover:text-white transition-colors duration-200">
                    {language === 'EN' ? 'View Details' : 'დეტალების ნახვა'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-georgian-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200">
            {language === 'EN' ? 'Load More Images' : 'მეტი სურათის ჩვენება'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
