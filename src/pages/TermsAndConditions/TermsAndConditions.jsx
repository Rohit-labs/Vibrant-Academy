import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import './TermsAndConditions.css';

function TermsAndConditions() {
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
            <span className="font-dancing text-brand-teal text-xl">Please Read Carefully...</span>
            <span className="h-px w-8 bg-brand-teal"></span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-4 tracking-tight leading-tight">
            Terms &amp; <span className="text-brand-purple">Conditions</span>
          </h1>
          <div className="h-1 w-[40px] bg-brand-purple rounded-full mx-auto mb-6"></div>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            These Terms &amp; Conditions govern your use of the Vibrant Academy website. By accessing or using the site, you agree to be bound by them.
          </p>
          <p className="text-xs font-semibold text-brand-navy/50 uppercase tracking-widest mt-6">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="py-stack_lg md:py-stack_xl bg-white">
        <div className="max-w-4xl mx-auto px-margin_mobile md:px-gutter">

          <div className="policy-content space-y-12" data-aos="fade-up">

            {/* 1. ACCEPTANCE */}
            <PolicyBlock number="01" title="Acceptance of Terms">
              <p>
                By accessing or using the website of <strong>Vibrant Academy</strong> (the "Site"), you confirm that you have read, understood, and agreed to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please refrain from using the Site.
              </p>
              <p>
                These terms apply to all visitors, users, parents, guardians, students, and others who access the Site.
              </p>
            </PolicyBlock>

            {/* 2. USE OF WEBSITE */}
            <PolicyBlock number="02" title="Use of the Website">
              <p>You agree to use this website only for lawful purposes and in a manner that does not:</p>
              <ul className="policy-list">
                <li><span className="policy-bullet">•</span><span>Violate any applicable local, state, national, or international law or regulation.</span></li>
                <li><span className="policy-bullet">•</span><span>Infringe upon the rights of any other person or entity.</span></li>
                <li><span className="policy-bullet">•</span><span>Attempt to gain unauthorised access to any portion or feature of the Site.</span></li>
                <li><span className="policy-bullet">•</span><span>Introduce viruses, malware, or any other harmful code.</span></li>
                <li><span className="policy-bullet">•</span><span>Scrape, crawl, or use automated tools to copy content from the Site without permission.</span></li>
              </ul>
            </PolicyBlock>

            {/* 3. INTELLECTUAL PROPERTY */}
            <PolicyBlock number="03" title="Intellectual Property Rights">
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, photographs, illustrations, designs, audio clips, video clips, course information, and software, is the property of <strong>Vibrant Academy</strong> or its content providers and is protected by Indian and international copyright, trademark, and other intellectual property laws.
              </p>
              <p>You may not, without prior written consent:</p>
              <ul className="policy-list">
                <li><span className="policy-bullet">•</span><span>Reproduce, distribute, modify, or republish any material from this Site for commercial purposes.</span></li>
                <li><span className="policy-bullet">•</span><span>Use our logos, brand name, or trademarks in any way that suggests endorsement or affiliation.</span></li>
                <li><span className="policy-bullet">•</span><span>Remove any copyright, trademark, or other proprietary notices from any content.</span></li>
              </ul>
              <p>
                Limited personal, non-commercial use of the website content (such as sharing the URL with someone who may be interested in admissions) is allowed.
              </p>
            </PolicyBlock>

            {/* 4. ACCURACY OF INFORMATION */}
            <PolicyBlock number="04" title="Accuracy of Information">
              <p>
                We make every effort to keep the information on this website accurate and up to date. However, course schedules, fees, faculty listings, batch timings, and other details may change without prior notice. We reserve the right to modify content at any time.
              </p>
              <p>
                For the most current and authoritative information on admissions, fees, and academic offerings, please contact us directly through the details provided on the <Link to="/contact" className="policy-link">Contact</Link> page.
              </p>
            </PolicyBlock>

            {/* 5. EXTERNAL LINKS */}
            <PolicyBlock number="05" title="Third-Party Links & Services">
              <p>
                This website may contain links to third-party websites, services, or resources (such as WhatsApp, Instagram, or Google Fonts) that are not owned or controlled by Vibrant Academy. These links are provided for your convenience only.
              </p>
              <p>
                We do not endorse and are not responsible for the content, accuracy, or practices of any third-party website. Your use of such websites is at your own risk and subject to their respective terms and policies.
              </p>
            </PolicyBlock>

            {/* 6. ADMISSIONS & ENQUIRIES */}
            <PolicyBlock number="06" title="Admissions & Enquiries">
              <p>
                Submitting the contact form, sending an email, or reaching out via WhatsApp through this website constitutes an enquiry only. It does <strong>not</strong> guarantee admission to any course or batch.
              </p>
              <p>
                Admission to Vibrant Academy is subject to availability of seats, eligibility criteria, completion of enrolment formalities, and payment of applicable fees. All admissions-related decisions rest solely with the academy.
              </p>
            </PolicyBlock>

            {/* 7. LIMITATION OF LIABILITY */}
            <PolicyBlock number="07" title="Limitation of Liability">
              <p>
                To the maximum extent permitted by applicable law, <strong>Vibrant Academy</strong> shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of profits, or business interruption, arising out of or in connection with your use of (or inability to use) this website.
              </p>
              <p>
                We do not warrant that the website will be uninterrupted, error-free, secure, or free of viruses or other harmful components.
              </p>
            </PolicyBlock>

            {/* 8. NO GUARANTEES */}
            <PolicyBlock number="08" title="No Guarantees on Outcomes">
              <p>
                While Vibrant Academy is committed to providing high-quality education and personalised mentorship, we do <strong>not</strong> guarantee specific academic results, ranks, or admission outcomes for any student. Results depend on multiple factors, including student effort, attendance, prior preparation, and individual capability.
              </p>
              <p>
                Testimonials and success results showcased on this website represent individual student experiences and are not a promise of similar outcomes.
              </p>
            </PolicyBlock>

            {/* 9. INDEMNITY */}
            <PolicyBlock number="09" title="Indemnification">
              <p>
                You agree to indemnify, defend, and hold harmless Vibrant Academy, its faculty, staff, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or expenses (including reasonable legal fees) arising from your use of the website, your violation of these terms, or your violation of any third-party right.
              </p>
            </PolicyBlock>

            {/* 10. TERMINATION */}
            <PolicyBlock number="10" title="Termination">
              <p>
                We reserve the right, at our sole discretion, to restrict or terminate your access to this website at any time, without notice, for conduct that we believe violates these Terms &amp; Conditions or is otherwise harmful to other users, the academy, or third parties.
              </p>
            </PolicyBlock>

            {/* 11. GOVERNING LAW */}
            <PolicyBlock number="11" title="Governing Law & Jurisdiction">
              <p>
                These Terms &amp; Conditions shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Mumbai, Maharashtra, India</strong>.
              </p>
            </PolicyBlock>

            {/* 12. CHANGES */}
            <PolicyBlock number="12" title="Changes to These Terms">
              <p>
                We may revise these Terms &amp; Conditions from time to time. The most current version will always be posted on this page with an updated "Last Updated" date. Continued use of the website after changes have been made constitutes your acceptance of the revised terms.
              </p>
            </PolicyBlock>

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

export default TermsAndConditions;
