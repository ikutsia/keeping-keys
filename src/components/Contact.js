import React, { useState } from "react";

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: { en: "Email", ge: "ელ-ფოსტა" },
      value: "info@keepingkeys.org",
      link: "mailto:info@keepingkeys.org",
    },
    {
      icon: "📞",
      title: { en: "Phone", ge: "ტელეფონი" },
      value: "+995 XXX XXX XXX",
      link: "tel:+995XXXXXXXXX",
    },
    {
      icon: "📍",
      title: { en: "Address", ge: "მისამართი" },
      value: { en: "Tbilisi, Georgia", ge: "თბილისი, საქართველო" },
      link: null,
    },
    {
      icon: "🕒",
      title: { en: "Office Hours", ge: "ოფისის საათები" },
      value: { en: "Mon-Fri: 9:00 AM - 6:00 PM", ge: "ორშ-პარ: 9:00 - 18:00" },
      link: null,
    },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: "📘",
      url: "#",
    },
    {
      name: "Instagram",
      icon: "📷",
      url: "#",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "#",
    },
    {
      name: "YouTube",
      icon: "📺",
      url: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-georgian-black mb-4">
            {language === "EN" ? "Contact Us" : "დაგვიკავშირდით"}
          </h2>
          <div className="w-24 h-1 bg-georgian-red mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {language === "EN"
              ? "Get in touch with us to learn more about our mission, participate in events, or share your story. We welcome your questions and support."
              : "დაგვიკავშირდით, რომ მეტი გაიგოთ ჩვენი მისიის შესახებ, მონაწილეობა მიიღოთ ღონისძიებებში ან გააზიაროთ თქვენი ისტორია. ჩვენ ვიღებთ თქვენს კითხვებს და მხარდაჭერას."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-georgian-black mb-6">
              {language === "EN"
                ? "Send us a Message"
                : "გაგვიგზავნეთ შეტყობინება"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {language === "EN" ? "Full Name" : "სრული სახელი"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-georgian-red focus:border-transparent"
                    placeholder={
                      language === "EN"
                        ? "Enter your full name"
                        : "შეიყვანეთ თქვენი სრული სახელი"
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {language === "EN" ? "Email Address" : "ელ-ფოსტა"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-georgian-red focus:border-transparent"
                    placeholder={
                      language === "EN"
                        ? "Enter your email"
                        : "შეიყვანეთ თქვენი ელ-ფოსტა"
                    }
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {language === "EN" ? "Subject" : "თემა"}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-georgian-red focus:border-transparent"
                  placeholder={
                    language === "EN" ? "Enter subject" : "შეიყვანეთ თემა"
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {language === "EN" ? "Message" : "შეტყობინება"}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-georgian-red focus:border-transparent resize-none"
                  placeholder={
                    language === "EN"
                      ? "Enter your message"
                      : "შეიყვანეთ თქვენი შეტყობინება"
                  }
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-georgian-red text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors duration-200 font-semibold"
              >
                {language === "EN" ? "Send Message" : "გაგზავნა"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-georgian-black mb-6">
                {language === "EN" ? "Get in Touch" : "დაგვიკავშირდით"}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-georgian-black">
                        {language === "EN" ? info.title.en : info.title.ge}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 hover:text-georgian-red transition-colors duration-200"
                        >
                          {typeof info.value === "string"
                            ? info.value
                            : language === "EN"
                            ? info.value.en
                            : info.value.ge}
                        </a>
                      ) : (
                        <p className="text-gray-600">
                          {typeof info.value === "string"
                            ? info.value
                            : language === "EN"
                            ? info.value.en
                            : info.value.ge}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-georgian-black mb-6">
                {language === "EN" ? "Follow Us" : "გამოგვყევით"}
              </h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-12 h-12 bg-georgian-red text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h3 className="text-2xl font-bold text-georgian-black mb-6">
                {language === "EN"
                  ? "Frequently Asked Questions"
                  : "ხშირად დასმული კითხვები"}
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-georgian-red pl-4">
                  <h4 className="font-semibold text-georgian-black">
                    {language === "EN"
                      ? "How can I participate in the Memory Walk?"
                      : "როგორ შემიძლია მეხსიერების ფეხით სიარულში მონაწილეობა?"}
                  </h4>
                  <p className="text-gray-600 mt-2">
                    {language === "EN"
                      ? "Registration for the Memory Walk opens several months before the event. Check our website or contact us for details."
                      : "მეხსიერების ფეხით სიარულის რეგისტრაცია ღიაა ღონისძიებამდე რამდენიმე თვით ადრე. შეამოწმეთ ჩვენი ვებსაიტი ან დაგვიკავშირდით დეტალებისთვის."}
                  </p>
                </div>
                <div className="border-l-4 border-georgian-red pl-4">
                  <h4 className="font-semibold text-georgian-black">
                    {language === "EN"
                      ? "How can I share my family's story?"
                      : "როგორ შემიძლია ჩემი ოჯახის ისტორიის გაზიარება?"}
                  </h4>
                  <p className="text-gray-600 mt-2">
                    {language === "EN"
                      ? "We welcome personal stories from survivors and their families. Please contact us to share your story."
                      : "ჩვენ ვიღებთ პირად ისტორიებს გადარჩენილებისა და მათი ოჯახებისგან. გთხოვთ დაგვიკავშირდით თქვენი ისტორიის გასაზიარებლად."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
