'use client'; // Required for interactivity
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
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

  return (
    <section className="w-full mt-10 bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg sm:text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We're here to help! Whether you have a question about our services, need technical support, or just want to say hello, feel free to reach out. Our team is ready to assist you.
        </motion.p>

        {/* Contact Information and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900">Get in Touch</h3>
            <p className="text-gray-600">
              Reach out to us via phone, email, or visit our office. We're always happy to hear from you!
            </p>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-purple-600">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+356 995 88 696</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="text-2xl text-green-600">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">info.halseus@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <FaPaperPlane />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </div>
                </button>
              </div>

              {/* Submission Status */}
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;