'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaPaperPlane,
  FaCheck,
  FaTimes,
  FaUser,
  FaComment
} from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (name: string) => setFocused(name);
  const handleBlur = () => setFocused(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate loading for demo purposes
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl text-indigo-600" />,
      title: "Phone",
      content: "+356 995 88 696",
      action: "tel:+35699588696",
      color: "bg-indigo-50"
    },
    {
      icon: <FaEnvelope className="text-2xl text-emerald-600" />,
      title: "Email",
      content: "info.halseus@gmail.com",
      action: "mailto:info.halseus@gmail.com",
      color: "bg-emerald-50"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-rose-600" />,
      title: "Visit Us",
      content: "Park Side hotel, San-Giljan, Malta",
      action: "https://maps.app.goo.gl/anHnWpzPjWbCmVLK8",
      color: "bg-rose-50"
    }
  ];

  return (
    <section className="w-full mt-10 py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with animations */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-3 px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium"
          >
            Get In Touch
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            We'd Love to Hear 
            <span className="relative inline-block ml-3">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                From You
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-indigo-100 rounded-sm -z-10"></span>
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our services? Need support with your project? 
            Or just want to say hello? Our team is always ready to assist you.
          </p>
        </motion.div>

        {/* Contact Methods Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.a
              href={method.action}
              key={index}
              className={`${method.color} rounded-xl p-6 flex flex-col items-center text-center group hover:shadow-lg transition-all duration-300 cursor-pointer`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md mb-4 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
              <p className="text-gray-600">{method.content}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form Card */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Side: Image/Gradient */}
            <div className="lg:col-span-2 bg-black p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Let's start a conversation</h3>
                <p className="text-indigo-100 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                  We're committed to providing you with exceptional service.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-xl text-white opacity-80">
                      {method.icon}
                    </div>
                    <p className="text-white">{method.content}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side: Form */}
            <div className="lg:col-span-3 p-10 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h3>
              
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div 
                    className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaCheck className="text-2xl text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600 mb-4">Thanks for reaching out. We'll get back to you shortly.</p>
                    <button 
                      onClick={() => setSubmitStatus('idle')}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <div className={`relative border ${focused === 'name' ? 'border-indigo-500 ring-2 ring-indigo-100' : 'border-gray-300'} rounded-lg transition-all duration-200`}>
                          <div className="absolute left-4 top-3 text-gray-500">
                            <FaUser />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => handleFocus('name')}
                            onBlur={handleBlur}
                            className="block w-full pl-10 pr-4 py-3 bg-transparent rounded-lg focus:outline-none"
                            placeholder="Your name"
                            required
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <div className={`relative border ${focused === 'email' ? 'border-indigo-500 ring-2 ring-indigo-100' : 'border-gray-300'} rounded-lg transition-all duration-200`}>
                          <div className="absolute left-4 top-3 text-gray-500">
                            <FaEnvelope />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => handleFocus('email')}
                            onBlur={handleBlur}
                            className="block w-full pl-10 pr-4 py-3 bg-transparent rounded-lg focus:outline-none"
                            placeholder="Your email"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <div className={`relative border ${focused === 'subject' ? 'border-indigo-500 ring-2 ring-indigo-100' : 'border-gray-300'} rounded-lg transition-all duration-200`}>
                        <div className="absolute left-4 top-3 text-gray-500">
                          <FaComment />
                        </div>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => handleFocus('subject')}
                          onBlur={handleBlur}
                          className="block w-full pl-10 pr-4 py-3 bg-transparent rounded-lg focus:outline-none"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <div className={`relative border ${focused === 'message' ? 'border-indigo-500 ring-2 ring-indigo-100' : 'border-gray-300'} rounded-lg transition-all duration-200`}>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => handleFocus('message')}
                          onBlur={handleBlur}
                          className="block w-full px-4 py-3 bg-transparent rounded-lg focus:outline-none"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-violet-700 transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none overflow-hidden relative"
                      >
                        <div className="flex items-center justify-center space-x-2 relative z-10">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <FaPaperPlane />
                              <span>Send Message</span>
                            </>
                          )}
                        </div>
                        {!isSubmitting && (
                          <div className="absolute inset-0 bg-white opacity-25 transform translate-x-[-100%] skew-x-[-15deg] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        )}
                      </button>
                    </div>

                    {/* Error Message */}
                    <AnimatePresence>
                      {submitStatus === 'error' && (
                        <motion.div 
                          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <FaTimes className="text-red-600" />
                          <p className="text-red-600 text-sm">Failed to send message. Please try again.</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;