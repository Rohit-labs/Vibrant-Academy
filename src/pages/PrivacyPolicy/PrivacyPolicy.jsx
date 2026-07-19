import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const lastUpdated = 'July 16, 2026';

  return (
    <div className="policy-page">

      {/* HERO SECTION */}
      <section className="mt-[60px] py-stack_lg md:py-stack_xl hero-pattern border-b border-brand-navy/5">
        <div className="max-w-container_max_width mx-auto px-margin_mobile md:px-gutter text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 mb-4 justify-center">
            <span className="h-px w-8 bg-brand-teal"></span>
            <span className="font-dancing text-brand-teal text-xl">Your Privacy Matters...</span>
            <span className="h-px w-8 bg-brand-teal"></span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">
            Privacy <span className="text-brand-purple">Policy.</span>
          </h1>
          <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-6"></div>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            This Privacy Policy describes how Vibrant Academy collects, uses, and protects the information you provide when using our website.
          </p>
          <p className="text-xs font-semibold text-brand-navy/50 uppercase tracking-widest mt-6">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="py-stack_lg md:py-stack_xl bg-white">
        <div className="max-w-4xl mx-auto px-margin_mobile md:px-gutter">

          <div className="policy-content space-y-12" data-aos="fade-up">

            {/* 1. INTRODUCTION */}
            <PolicyBlock
              number="01"
              title="Introduction"
            >
              <p>
                Welcome to <strong>Vibrant Academy</strong>. We respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains what data we collect, why we collect it, how we use it, and the rights you have over your information.
              </p>
              <p>
                By accessing or using our website, you agree to the terms described in this policy. If you do not agree, please discontinue use of the website.
              </p>
            </PolicyBlock>

            {/* 2. INFORMATION WE COLLECT */}
            <PolicyBlock
              number="02"
              title="Information You Collect"
            >
              <p>
                We only collect the information you voluntarily provide to us through the contact form on our website. This may include:
              </p>
              <ul className="policy-list">
                <li><span className="policy-bullet">•</span><span><strong>Name</strong> &mdash; to address you appropriately in our reply.</span></li>
                <li><span className="policy-bullet">•</span><span><strong>Email address</strong> &mdash; to respond to your enquiry and communicate further.</span></li>
                <li><span className="policy-bullet">•</span><span><strong>Phone number</strong> &mdash; to reach out via call or WhatsApp when requested.</span></li>
                <li><span className="policy-bullet">•</span><span><strong>Message / Enquiry details</strong> &mdash; to understand your requirement and assist you better.</span></li>
              </ul>
              <p>
                We do <strong>not</strong> collect any sensitive personal data such as Aadhaar, financial information, or government IDs through this website.
              </p>
            </PolicyBlock>

            {/* 3. WHY WE COLLECT IT */}
            <PolicyBlock
              number="03"
              title="Why We Collect Your Information"
            >
              <p>
                The information you provide is used solely for the following purposes:
              </p>
              <ul className="policy-list">
                <li><span className="policy-bullet">•</span><span>To respond to your enquiries and answer questions you have submitted.</span></li>
                <li><span className="policy-bullet">•</span><span>To communicate with you about the courses, batches, and academic services you have asked about.</span></li>
                <li><span className="policy-bullet">•</span><span>To provide basic customer support before and during enrolment.</span></li>
                <li><span className="policy-bullet">•</span><span>To maintain a record of communication for internal reference.</span></li>
              </ul>
            </PolicyBlock>

            {/* 4. HOW WE STORE */}
            <PolicyBlock
              number="04"
              title="How Your Information Is Stored"
            >
              <p>
                We do not maintain user accounts, profiles, or login systems on this website. Information submitted through the contact form is delivered to our official email inbox (<a href="mailto:vibrantacademy@gmail.com" className="policy-link">vibrantacademy@gmail.com</a>) and / or our WhatsApp business number (<a href="tel:+919137964830" className="policy-link">+91 91379 64830</a>).
              </p>
              <p>
                We do <strong>not sell, rent, or trade</strong> your personal information with any third party for marketing or commercial purposes. The data stays with authorised members of the academy staff who handle admissions and student communication.
              </p>
            </PolicyBlock>

            {/* 5. THIRD PARTY SERVICES */}
            <PolicyBlock
              number="05"
              title="Third-Party Services We Use"
            >
              <p>
                To operate this website and respond to your messages, we rely on a small set of trusted third-party services. Each of these may process limited visitor data to perform their function:
              </p>
              <ul className="policy-list">
                <li><span className="policy-bullet">•</span><span><strong>Web3Forms / EmailJS</strong> &mdash; to deliver contact form submissions to our email inbox.</span></li>
                <li><span className="policy-bullet">•</span><span><strong>WhatsApp (Meta)</strong> &mdash; to enable quick chat and call buttons for admissions enquiries.</span></li>
                <li><span className="policy-bullet">•</span><span><strong>Google Fonts</strong> &mdash; to render the typography used across the site.</span></li>
                <li><span className="policy-bullet">•</span><span><strong>Hostinger / Netlify / Vercel</strong> &mdash; to host the website and serve pages to your browser.</span></li>
                <li><span className="policy-bullet">•</span><span><strong>Unsplash</strong> &mdash; source of stock imagery used in the gallery section.</span></li>
              </ul>
              <p>
                These services have their own privacy practices. We encourage you to review their respective policies if you wish to understand how they handle data.
              </p>
            </PolicyBlock>

            {/* 6. COOKIES */}
            <PolicyBlock
              number="06"
              title="Cookies & Tracking"
            >
              <p>
                This website does <strong>not</strong> use advertising cookies, marketing trackers, or analytics scripts at the moment. Cookies that may be set are limited to those strictly necessary for the site to function correctly (such as remembering your navigation state).
              </p>
              <p>
                If we introduce analytics, embedded video, or third-party integrations in the future that rely on cookies, this policy will be updated and a consent banner will be added where required.
              </p>
            </PolicyBlock>

            {/* 7. DATA SECURITY */}
            <PolicyBlock
              number="07"
              title="Data Security"
            >
              <p>
                We take reasonable measures to protect the information submitted through our website. Access to communication channels such as our email and WhatsApp is restricted to authorised staff members.
              </p>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
              </p>
            </PolicyBlock>

            {/* 8. USER RIGHTS */}
            <PolicyBlock
              number="08"
              title="Your Rights & Choices"
            >
              <p>You have the right to:</p>
              <ul className="policy-list">
                <li><span className="policy-bullet">•</span><span><strong>Request access</strong> to the personal information you have shared with us.</span></li>
                <li><span className="policy-bullet">•</span><span><strong>Request correction</strong> of any inaccurate or outdated information.</span></li>
                <li><span className="policy-bullet">•</span><span><strong>Request deletion</strong> of your submitted information from our records.</span></li>
                <li><span className="policy-bullet">•</span><span><strong>Opt out</strong> of any future communication from us at any time.</span></li>
              </ul>
              <p>
                To exercise any of these rights, simply reach out to us using the contact details listed below and we will respond within a reasonable time.
              </p>
            </PolicyBlock>

            {/* 9. CHILDREN'S PRIVACY */}
            <PolicyBlock
              number="09"
              title="Children's Privacy"
            >
              <p>
                Our website is intended for parents, guardians, and prospective students (typically above Class 7) seeking academic information. We do not knowingly collect personal information directly from children under the age of 13 without parental consent. If you believe a child has submitted information without consent, please contact us so we can remove it.
              </p>
            </PolicyBlock>

            {/* 10. CHANGES */}
            <PolicyBlock
              number="10"
              title="Changes to This Policy"
            >
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or for legal and regulatory reasons. Any updates will be posted on this page along with a revised "Last Updated" date at the top.
              </p>
              <p>
                We encourage you to review this page periodically to stay informed about how we handle your information.
              </p>
            </PolicyBlock>

            {/* 11. CONTACT */}
            <PolicyBlock
              number="11"
              title="Contact Us"
            >
              <p>
                If you have any questions, concerns, or requests related to this Privacy Policy or your personal information, please reach out to us:
              </p>

              <div className="policy-contact-card">
                <div className="policy-contact-row">
                  <span className="policy-contact-label">Business Name</span>
                  <span className="policy-contact-value">Vibrant Academy</span>
                </div>
                <div className="policy-contact-row">
                  <span className="policy-contact-label">Email</span>
                  <a href="mailto:vibrantacademy@gmail.com" className="policy-contact-value policy-link">vibrantacademy@gmail.com</a>
                </div>
                <div className="policy-contact-row">
                  <span className="policy-contact-label">Phone / WhatsApp</span>
                  <a href="tel:+919137964830" className="policy-contact-value policy-link">+91 91379 64830</a>
                </div>
                <div className="policy-contact-row">
                  <span className="policy-contact-label">Address</span>
                  <span className="policy-contact-value">Shop No. 7, RMMS CHSL, Bldg. A1/A2, C.S. Road, Dahisar (East), Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </PolicyBlock>

          </div>

          {/* CTA */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-3.5 bg-brand-yellow hover:bg-[#E0B000] text-[#1F2937] font-bold rounded-lg shadow-md hover:translate-y-[-2px] active:scale-95 transition-all text-sm uppercase tracking-wider">
                Contact Us
              </Link>
              <Link to="/terms-and-conditions" className="px-8 py-3.5 border-2 border-brand-purple hover:bg-brand-purple hover:text-white text-brand-purple font-bold rounded-lg active:scale-95 transition-all text-sm uppercase tracking-wider">
                View Terms & Conditions
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

// Reusable policy section block
function PolicyBlock({ number, title, children }) {
  return (
    <article className="policy-block">
      <header className="policy-block-head">
        <span className="policy-block-number">{number}</span>
        <h2 className="policy-block-title">{title}</h2>
      </header>
      <div className="policy-block-body">
        {children}
      </div>
    </article>
  );
}

export default PrivacyPolicy;
