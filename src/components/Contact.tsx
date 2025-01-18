'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Instagram, Mail, Phone, Send, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactMethods = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/nguyentheloc-eithan',
      color: '#ffffff',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com',
      color: '#ffffff',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'nguyentheloc310101@gmail.com',
      color: '#ffffff',
    },
    { icon: Phone, label: 'Phone', href: 'tel:+1234567890', color: '#ffffff' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 relative overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dw"
          alt="Abstract geometric pattern"
          layout="fill"
          objectFit="cover"
          className="opacity-65"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          Let's Create Something Amazing Together
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
              Get in Touch
            </h3>
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-3 py-2 bg-white bg-opacity-10 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
                      placeholder="Your message here..."></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="animate-spin mr-2" />
                    ) : (
                      <Send className="mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-8">
                  <motion.div
                    className="text-5xl mb-4"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}>
                    🎉
                  </motion.div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-200">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-white">
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  className="flex flex-col items-center justify-center p-4 md:p-6 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm rounded-xl hover:bg-opacity-60 transition duration-300"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}>
                  <motion.div
                    className="text-3xl mb-2"
                    style={{ color: method.color }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}>
                    <method.icon size={32} />
                  </motion.div>
                  <span className="text-sm md:text-base font-medium text-white">
                    {method.label}
                  </span>
                </motion.a>
              ))}
            </div>
            <motion.div
              className="mt-8 md:mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}>
              <h4 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                My Availability
              </h4>
              <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm p-4 md:p-6 rounded-xl">
                <p className="text-gray-200 mb-2 text-sm md:text-base">
                  Monday - Friday: 9AM - 6PM (EST)
                </p>
                <p className="text-gray-200 text-sm md:text-base">
                  Weekends: By appointment
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
