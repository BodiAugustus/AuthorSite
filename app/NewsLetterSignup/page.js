// // 1. ================= FRONTEND =================
// "use client";

// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function NewsletterSignup() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     country: "",
//     consent: false,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("/api/newsletter", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(form),
//       });

//       if (response.ok) {
//         toast.success("You have successfully signed up!");
//         setForm({ name: "", email: "", country: "", consent: false });
//       } else {
//         toast.error("Signup failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <section
//       className="w-full min-h-screen bg-[url('/portal.jpg')] bg-center bg-no-repeat bg-[length:200%_auto] sm:bg-[length:150%_auto] md:bg-cover text-white py-16 px-6 sm:px-10 md:px-20"
//       id="newsletter"
//     >
//       <div className="bg-[#6AAAD6] p-2 sm:bg-transparent sm:p-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
//         <div className="text-3xl sm:text-4xl md:text-5xl font-extralight font-serif sm:leading-15">
//           <p>Get all the latest</p>
//           <p className="">Tristan Nettles news and</p>
//           <p className="">info sent to your inbox.</p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white text-black p-8 rounded shadow-md space-y-6"
//         >
//           <h2 className="text-2xl font-semibold text-[#6AAAD6]">
//             Newsletter Signup
//           </h2>

//           <div>
//             <label className="block text-sm font-medium mb-1">Your Name</label>
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full px-3 py-2 text-black rounded"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-3 py-2 text-black rounded"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Country</label>
//             <select
//               className="w-full px-3 py-2 text-black rounded"
//               value={form.country}
//               onChange={(e) => setForm({ ...form, country: e.target.value })}
//               required
//             >
//               <option value="">Select One...</option>
//               <option value="us">United States</option>
//               <option value="uk">United Kingdom</option>
//               <option value="ca">Canada</option>
//               <option value="au">Australia</option>
//             </select>
//           </div>

//           <div className="flex items-start">
//             <input
//               type="checkbox"
//               className="mr-2 mt-1"
//               checked={form.consent}
//               required
//               onChange={(e) => setForm({ ...form, consent: e.target.checked })}
//             />
//             <label className="text-sm text-[#6AAAD6]">
//               Marketing permission: I consent to be in contact via email using
//               the information I have provided in this form for the purpose of
//               news, updates, and marketing.
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-2 bg-[#6AAAD6] text-white font-semibold tracking-wider hover:opacity-90 active:opacity-100 cursor-pointer"
//           >
//             SIGN UP
//           </button>
//         </form>
//       </div>
//       <ToastContainer />
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { toast } from "react-toastify";

export default function NewsletterSignup() {
  const url =
    "https://tristannettles.us6.list-manage.com/subscribe/post?u=3b4d67cc62297380c8173019b&id=b48a3744f0";
  const formRef = useRef(null);

  return (
    <section
      className="w-full min-h-screen bg-[url('/portal.jpg')] bg-center bg-no-repeat bg-[length:200%_auto] sm:bg-[length:150%_auto] md:bg-cover text-white py-16 px-6 sm:px-10 md:px-20"
      id="newsletter"
    >
      <div className="bg-[#6AAAD6] p-2 sm:bg-transparent sm:p-0 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-3xl sm:text-4xl md:text-5xl font-extralight font-serif leading-tight sm:leading-15">
          <p>Get all the latest</p>
          <p>Tristan Nettles news and</p>
          <p>info sent to your inbox.</p>
        </div>

        <div className="bg-white text-black p-8 rounded-lg shadow-md space-y-6 max-w-lg mx-auto md:mx-0">
          <h2 className="text-2xl font-semibold text-[#6AAAD6] text-center">
            Join the Fight to #FreeAshley – Get Exclusive Book Teasers!
          </h2>

          <p className="text-center text-sm text-gray-600">
            Sign up for updates on Ashley&apos;s story, petition progress, and a
            free 5-page excerpt from False Positive. Every subscriber helps
            amplify her voice!
          </p>

          <div className="indicates-required text-sm text-red-600">
            <span className="asterisk">*</span> indicates required
          </div>

          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <div>
                {/* Show status-based messages */}
                {status === "sending" && (
                  <div className="text-blue-600 text-center">Submitting...</div>
                )}
                {status === "error" && (
                  <div
                    className="text-red-600 text-center"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === "success" && (
                  <div
                    className="text-green-600 text-center"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}

                {/* Form – remove action/method/target */}
                <form
                  ref={formRef}
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = formRef.current;

                    // Basic validation (respects 'required' attributes)
                    if (!form.checkValidity()) {
                      form.reportValidity();
                      return;
                    }

                    // Collect form data
                    const formData = {
                      EMAIL: document.getElementById("mce-EMAIL").value,
                      FNAME: document.getElementById("mce-FNAME").value,
                      COUNTRY: document.getElementById("mce-COUNTRY").value,
                      "gdpr[440]": document.getElementById("gdpr_440").checked
                        ? "Y"
                        : "",
                      b_3b4d67cc62297380c8173019b_b48a3744f0: "", // Honeypot field (empty)
                    };

                    // Submit to Mailchimp
                    subscribe(formData);

                    // Optional: Toast notification (remove if not wanted)
                    toast.info("Submitting your subscription...");
                  }}
                  noValidate // Let browser handle initial validation display
                >
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="mce-EMAIL"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6AAAD6] focus:border-[#6AAAD6]"
                        id="mce-EMAIL"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mce-FNAME"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="FNAME"
                        className="text w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6AAAD6] focus:border-[#6AAAD6]"
                        id="mce-FNAME"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mce-COUNTRY"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Country
                      </label>
                      <select
                        name="COUNTRY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6AAAD6] focus:border-[#6AAAD6]"
                        id="mce-COUNTRY"
                      >
                        <option value="">Select One...</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* GDPR / Marketing Permissions */}
                    <div
                      id="mergeRow-gdpr"
                      className="mergeRow gdpr-mergeRow space-y-2"
                    >
                      <label className="block text-sm font-medium text-gray-700">
                        Marketing Permissions
                      </label>
                      <p className="text-sm text-gray-600">
                        Please select how you&apos;d like to hear from Tristan
                        Nettles:
                      </p>
                      <fieldset className="space-y-2">
                        <label className="flex items-start">
                          <input
                            type="checkbox"
                            id="gdpr_440"
                            name="gdpr[440]"
                            className="gdpr mt-1 mr-2"
                            value="Y"
                            required // Enforces consent
                          />
                          <span className="text-sm text-gray-600">
                            Email me updates on #FreeAshley, book teasers, and
                            advocacy news.
                          </span>
                        </label>
                      </fieldset>
                      <p className="text-xs text-gray-500 mt-2">
                        You can unsubscribe at any time by clicking the link in
                        the footer of our emails. For information about our
                        privacy practices, please visit our website.
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        We use Mailchimp as our marketing platform. By clicking
                        below to subscribe, you acknowledge that your
                        information will be transferred to Mailchimp for
                        processing.{" "}
                        <a
                          href="https://mailchimp.com/legal/terms"
                          className="text-[#6AAAD6] underline"
                        >
                          Learn more
                        </a>{" "}
                        about Mailchimp&apos;s privacy practices.
                      </p>
                    </div>
                  </div>

                  {/* Honeypot field – hidden */}
                  <div aria-hidden="true" className="hidden">
                    <input
                      type="text"
                      name="b_3b4d67cc62297380c8173019b_b48a3744f0"
                      tabIndex={-1}
                    />
                  </div>

                  <button
                    type="submit"
                    name="subscribe"
                    className="w-full py-3 bg-[#6AAAD6] text-white font-semibold tracking-wider rounded-md hover:opacity-90 active:opacity-100 transition-opacity mt-4"
                  >
                    SIGN UP
                  </button>
                </form>
              </div>
            )}
          />
        </div>
      </div>
    </section>
  );
}
