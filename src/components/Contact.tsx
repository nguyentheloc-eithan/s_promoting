'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Instagram,
  Mail,
  Phone,
  Send,
  Loader2,
  type LucideIcon,
} from 'lucide-react';
import Image from 'next/image';

interface ContactMethod {
  icon: LucideIcon;
  label: string;
  href: string;
  color: string;
}

interface FormFieldProps {
  label: string;
  type: 'text' | 'email' | 'textarea';
  id: string;
  placeholder: string;
}

interface ContactMethodProps {
  method: ContactMethod;
  index: number;
}

// Components
const ContactMethod = ({ method, index }: ContactMethodProps) => (
  <motion.a
    target="_blank"
    href={method.href}
    className="flex flex-col items-center p-4 bg-blue-800/70 rounded-xl hover:bg-blue-700/80"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}>
    <method.icon
      size={24}
      color={method.color}
    />
    <span className="mt-2 text-sm text-white">{method.label}</span>
  </motion.a>
);

const FormField = ({ label, type, id, placeholder }: FormFieldProps) => {
  const baseClassName =
    'w-full px-4 py-2 bg-white/10 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300';

  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm text-gray-100 mb-2">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          required
          rows={4}
          className={baseClassName}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          required
          className={baseClassName}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactMethods: ContactMethod[] = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/nguyentheloc-eithan',
      color: '#60A5FA',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com',
      color: '#60A5FA',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:nguyentheloc310101@gmail.com',
      color: '#60A5FA',
    },
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+1234567890',
      color: '#60A5FA',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 to-blue-950/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          Let's Create Something Amazing Together
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <motion.div
            className="bg-blue-900/70 backdrop-blur-lg p-6 rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Get in Touch
            </h3>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form onSubmit={handleSubmit}>
                  <FormField
                    label="Name"
                    type="text"
                    id="name"
                    placeholder="John Doe"
                  />
                  <FormField
                    label="Email"
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                  />
                  <FormField
                    label="Message"
                    type="textarea"
                    id="message"
                    placeholder="Your message..."
                  />

                  <motion.button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2
                        className="animate-spin mr-2"
                        size={20}
                      />
                    ) : (
                      <Send
                        className="mr-2"
                        size={20}
                      />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div className="text-center py-6">
                  <div className="text-4xl mb-3">🎉</div>
                  <h4 className="text-lg font-bold text-white">
                    Message Sent!
                  </h4>
                  <p className="text-gray-100">Thank you for reaching out.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Connect With Me
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <ContactMethod
                  key={method.label}
                  method={method}
                  index={index}
                />
              ))}
            </div>

            <div className="mt-8 bg-blue-800/70 backdrop-blur-lg p-4 rounded-xl">
              <h4 className="text-lg font-semibold mb-3 text-white">
                Availability
              </h4>
              <p className="text-gray-100 text-sm">
                Monday - Friday: 9AM - 6PM (EST)
              </p>
              <p className="text-gray-100 text-sm">Weekends: By appointment</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
