"use client";

import { useState } from "react";
import SectionWrapper from "@/components/common/SectionWrapper";
import Image from "next/image";

export default function ContactPage() {
  const [formValues, setFormValues] = useState({
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError("");
    setSubmitSuccess(false);

    if (!formValues.subject.trim() || !formValues.message.trim()) {
      setSubmitError("Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSubmitSuccess(true);
      setFormValues({ subject: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError(error.message || "Something went wrong while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SectionWrapper id="contact" className="pt-24 sm:pt-32 md:pt-40 lg:pt-48 bg-[rgba(11,11,11,1)]">
        <div className="relative overflow-hidden">
          {/* Background pattern */}
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/images/home/bg-pattern-2.png"
              alt=""
              fill
              priority
              className="object-cover opacity-80"
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 py-12 sm:py-16 md:py-20">
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-[-1px] text-white mb-6 sm:mb-8">
              Contact <span className="text-[#cb3f24]">Us</span>
            </h1>

            {/* Description */}
            <p
              className="max-w-2xl text-sm sm:text-[14px] md:text-[16px] leading-[1.7] tracking-tight text-[rgba(255, 255, 255, 0.8)] mb-8 sm:mb-12"
              style={{ fontFamily: "Courier New", fontWeight: 400, letterSpacing: "-0.1em" }}
            >
              Have questions about our quantum sensing solutions? Want to explore partnership opportunities? 
              We'd love to hear from you. Get in touch with our team.
            </p>

            {/* Two Column Layout: Contact Information and Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium text-slate-200 mb-2" style={{ fontFamily: '"Courier Prime", monospace' }}>
                    Email
                  </h3>
                  <a 
                    href="mailto:info@qubeats.com" 
                    className="text-sm text-[rgba(255, 255, 255, 0.8)] hover:text-[#cb3f24] transition-colors"
                    style={{ fontFamily: "Courier New", letterSpacing: "-0.05em" }}
                  >
                    info@qubeats.com
                  </a>
                </div>

                {/* Research Lab Address */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium text-slate-200 mb-2" style={{ fontFamily: '"Courier Prime", monospace' }}>
                    Research Lab
                  </h3>
                  <p 
                    className="text-sm text-[rgba(255, 255, 255, 0.8)] leading-relaxed"
                    style={{ fontFamily: "Courier New", letterSpacing: "-0.05em" }}
                  >
                    Institution of Eminence (IoE),<br />
                    Ground Floor, Room No. CWC-A-003,<br />
                    University of Hyderabad, Prof. C R Rao Road, Gachibowli,<br />
                    Hyderabad – 500046, Telangana
                  </p>
                </div>

                {/* Company Address */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium text-slate-200 mb-2" style={{ fontFamily: '"Courier Prime", monospace' }}>
                    M/s. Nostradamus Technologies Private Limited
                  </h3>
                  <p 
                    className="text-sm text-[rgba(255, 255, 255, 0.8)] leading-relaxed"
                    style={{ fontFamily: "Courier New", letterSpacing: "-0.05em" }}
                  >
                    Cabin 79, 7th Floor C/o T-Hub Foundation,<br />
                    1/C, 83/1, Raidurg Panmaktha,<br />
                    Near Hitech City, Ranga Reddy,<br />
                    Hyderabad, Telangana, India, 500081
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
              {submitSuccess && (
                <div className="rounded-lg border border-green-500/60 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitError && (
                <div className="rounded-lg border border-red-500/60 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {submitError}
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-slate-200"
                  style={{ fontFamily: '"Courier Prime", monospace' }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formValues.subject}
                  onChange={handleInputChange}
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40"
                  placeholder="Enter subject..."
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-200"
                  style={{ fontFamily: '"Courier Prime", monospace' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="rounded-lg border border-slate-800 bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#CB3F24] focus:ring-2 focus:ring-[#CB3F24]/40 resize-none"
                  placeholder="Enter your message..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-sm sm:text-base transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                style={{
                  fontFamily: '"Courier Prime", monospace',
                  fontWeight: 700,
                  letterSpacing: "0.07em",
                  background: "linear-gradient(90deg,#CB3F24 0%,#BE3B22 100%)",
                  color: "#FFFFFF",
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

