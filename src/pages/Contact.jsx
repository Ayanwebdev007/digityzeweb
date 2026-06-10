import { useState } from 'react';
import ScrollReveal from '../components/common/ScrollReveal';
import Icon from '../components/common/Icon';

const inquiryTypes = [
  'Strategic Consultation',
  'Business Transformation',
  'Technology Advisory',
  'Partnership Inquiry',
  'General Inquiry',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', inquiryType: '', message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', company: '', email: '', phone: '', inquiryType: '', message: '' });
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[500px] lg:h-[700px] flex flex-col justify-center overflow-hidden bg-brand-primary">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          <img 
            src="/images/contact_hero.png" 
            alt="Global Connectivity" 
            className="w-full h-full object-cover opacity-50 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-darker/50 via-brand-primary/80 to-brand-primary" />
        </div>
        
        {/* Glowing Blurs */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-brand-accent/30 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/10 text-blue-100 border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                Contact Us
              </span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
                Let's Build <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                  What's Next.
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-blue-100/90 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                Whether you're exploring enterprise digital transformation, seeking strategic consulting, 
                or looking for technology partnerships — we're ready to start the conversation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white rounded-[2rem] p-6 lg:p-10 border border-slate-200/60 shadow-xl shadow-brand-primary/5">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Start a Conversation</h2>
                  <p className="text-slate-500 text-sm mb-8">Fill out the form below and our team will respond within 24 hours.</p>

                  {isSubmitted && (
                    <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm font-semibold">
                      Thank you for reaching out. Our team will contact you shortly.
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900
                            placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10
                            transition-all duration-300 text-sm"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-company" className="block text-sm font-semibold text-slate-700 mb-2">Company</label>
                        <input
                          id="contact-company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900
                            placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10
                            transition-all duration-300 text-sm"
                          placeholder="Company name"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900
                            placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10
                            transition-all duration-300 text-sm"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900
                            placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10
                            transition-all duration-300 text-sm"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-inquiry" className="block text-sm font-semibold text-slate-700 mb-2">Inquiry Type *</label>
                      <select
                        id="contact-inquiry"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900
                          focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10
                          transition-all duration-300 text-sm cursor-pointer"
                      >
                        <option value="" className="text-slate-400">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type} className="text-slate-800 bg-white">{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900
                          placeholder:text-slate-400 focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10
                          transition-all duration-300 text-sm resize-none"
                        placeholder="Tell us about your business challenges and goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit"
                      className="w-full sm:w-auto px-8 py-4 bg-brand-primary text-white font-semibold rounded-xl
                        hover:bg-brand-dark transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/20
                        hover:-translate-y-0.5 active:translate-y-0 group flex items-center justify-center gap-2"
                    >
                      Send Message
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {[
                  {
                    title: 'Strategic Consultation',
                    desc: 'Schedule a session with our advisory team in India to audit your operational workflows.',
                    icon: 'clipboard',
                  },
                  {
                    title: 'Business Inquiry',
                    desc: 'Explore our services and customize a dedicated modernization roadmap.',
                    icon: 'briefcase',
                  },
                  {
                    title: 'Partnerships',
                    desc: "Interested in strategic integrations or collaborations? Let's explore opportunities.",
                    icon: 'handshake',
                  },
                  {
                    title: 'Global Collaboration',
                    desc: 'We support international enterprise clients seamlessly across standard time zones.',
                    icon: 'market-expansion',
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200/60 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-brand-primary/5 hover:border-brand-primary/20 transition-all duration-300 group">
                      <div className="flex gap-4">
                        <span className="text-brand-primary bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={item.icon} className="w-5 h-5" />
                        </span>
                        <div>
                          <h3 className="text-slate-900 font-bold mb-1 group-hover:text-brand-accent transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}

                {/* Office Info */}
                <ScrollReveal delay={500}>
                  <div className="bg-slate-50 rounded-xl p-6 mt-8 border border-slate-100">
                    <h3 className="text-slate-900 font-bold mb-4">Global Operations Base</h3>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-brand-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>info@digityze.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 text-brand-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>India — Global Operations Hub</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
