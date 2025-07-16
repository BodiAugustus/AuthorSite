"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    consent: false,
  });

  return (
    <section
      className="w-full min-h-screen bg-[url('/portal.jpg')] bg-center bg-no-repeat 
             bg-[length:200%_auto] sm:bg-[length:150%_auto] md:bg-cover 
             text-white py-16 px-6 sm:px-10 md:px-20"
      id="newsletter"
    >
      <div
        className="bg-[#6AAAD6] p-2 sm:bg-transparent sm:p-0
      max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center "
      >
        <div className="text-3xl sm:text-4xl md:text-5xl font-extralight font-serif sm:leading-15">
          <p>Get all the latest</p>
          <p className="">Tristan Nettles news and</p>
          <p className="">info sent to your inbox.</p>
        </div>

        <form className="bg-white text-black p-8 rounded shadow-md space-y-6">
          <h2 className="text-2xl font-semibold text-[#6AAAD6]">
            Newsletter Signup
          </h2>

          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 text-black rounded"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 text-black rounded"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Country</label>
            <select
              className="w-full px-3 py-2 text-black rounded"
              value={form.country}
              onChange={(e) => setForm({ ...form, country: e.target.value })}
            >
              <option value="">Select One...</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="ca">Canada</option>
              <option value="au">Australia</option>
            </select>
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              className="mr-2 mt-1"
              checked={form.consent}
              required
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
            />
            <label className="text-sm text-[#6AAAD6]">
              Marketing permission: I consent to be in contact via email using
              the information I have provided in this form for the purpose of
              news, updates, and marketing.
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#6AAAD6] text-white font-semibold tracking-wider hover:opacity-90"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </section>
  );
}
