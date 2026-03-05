import React from "react";
import Header from "../../components/common/UserHeader";
import Footer from "../../components/common/Footer";
function page() {
  return (
    <div>
      <Header />
      <main>
        <div className="bg-[url('@/components/assets/images/Background.svg')]  bg-cover bg-center">
          <div className="max-w-[1200px] mx-auto border-b border-black/16 p-4 pt-25 md:pt-30 pb-12 md:pb-20">
            <div className="max-w-[768px] w-full mx-auto text-center">
              <p className="font-semibold text-main mb-3">
                Current as of 20/01/2025
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-text-1 mb-6">
                Privacy Policy
              </h1>
              <p className="text-text-5 text-lg md:text-xl mx-auto">
                Your privacy is important to us at <strong>LawNest Ltd</strong>.
                We respect your privacy regarding any information we may collect
                from you across our website.s
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[768px] w-full mx-auto py-12 md:py-18 lg:py-24 px-4 text-text-5 text-base md:text-lg leading-relaxed">
          {/* 1. Introduction */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              1. Introduction
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-4">
              <strong className="font-bold">LawNest Ltd.</strong> ("
              <strong className="font-bold">LawNest</strong>", "we", "our", or
              "us") is committed to protecting your privacy and ensuring that
              your experience with our website and related services is secure,
              transparent, and trustworthy.
            </p>
            <p className="text-base md:text-lg text-text-5 mb-4">
              This Privacy Policy explains how we collect, use, store, and
              protect your personal information when you use our website,
              products, and services (collectively, the "Services").
            </p>
            <p className="text-base md:text-lg text-text-5 mb-4">
              By accessing or using our Services, you agree to the terms of this
              Privacy Policy. If you do not agree, please discontinue using our
              Services immediately.
            </p>
            <p className="text-base md:text-lg text-text-5 mb-4">
              If you have any questions about this Privacy Policy or how your
              data is handled, you can contact our Data Protection Officer (DPO)
              at:
            </p>
            <p className="text-base md:text-lg text-text-5 mb-4">
              📧 [Insert DPO Email Address]
            </p>
            <p className="text-base md:text-lg text-text-5 mb-4">
              You may also raise concerns directly with the Information
              Commissioner's Office (ICO), the UK's independent authority for
              data protection:
              <br />
              📞 0303 123 1113 or visit{" "}
              <a href="#" className="underline hover:text-main">
                www.ico.org.uk
              </a>
            </p>
          </section>

          {/* 2. Our Commitment to Data Protection */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              2. Our Commitment to Data Protection
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-4">
              <strong className="font-bold">LawNest Ltd.</strong> operates in
              full compliance with the{" "}
              <strong>UK General Data Protection Regulation (UK GDPR)</strong>{" "}
              and the <strong>Data Protection Act 2018.</strong>
            </p>
            <p className="text-base md:text-lg text-text-5 mb-4">
              We only collect and process personal data when it is lawful,
              necessary, and transparent. Our key principles are:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Lawfulness, fairness, and transparency</strong> – We
                process personal data fairly and explain how we use it.
              </li>
              <li>
                <strong>Purpose limitation</strong> – We use personal data only
                for legitimate business purposes.
              </li>
              <li>
                <strong>Data minimisation</strong> – We collect only what is
                necessary.
              </li>
              <li>
                <strong>Accuracy</strong> – We keep your data accurate and up to
                date.
              </li>
              <li>
                <strong>Storage limitation</strong> – We retain data only for as
                long as necessary.
              </li>
              <li>
                <strong>Integrity and confidentiality</strong> – We protect your
                data with robust security measures.
              </li>
            </ul>
          </section>

          {/* 3. Information We Collect */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              3. Information We Collect
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-4">
              We may collect personal information from you directly,
              automatically through your use of our website, or from third-party
              services used in connection with <strong>LawNest</strong>.
            </p>
            <h3 className="my-7 font-bold text-text-5 text-base md:text-lg">
              3.1. Information You Provide Directly
            </h3>
            <p className="text-base md:text-lg text-text-5 mb-3">
              This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Your first and last name</li>
              <li>Email address and contact number</li>
              <li>Postal address or billing details</li>
              <li>
                Payment information (credit/debit card details processed
                securely)
              </li>
              <li>
                Any details you enter while creating, editing, or storing
                documents through our platform
              </li>
              <li>Communications sent to our support team or DPO</li>
            </ul>

            <h3 className="my-7 font-bold text-text-5 text-base md:text-lg">
              3.2. Information We Collect Automatically
            </h3>
            <p className="text-base md:text-lg text-text-5 mb-3">
              When you visit our website, certain information is automatically
              collected through cookies, web beacons, and analytics tools, such
              as:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>IP address and browser type</li>
              <li>Device type and operating system</li>
              <li>Pages viewed, access times, and referring websites</li>
              <li>Clickstream data and interactions on our site</li>
            </ul>

            <h3 className="my-7 font-bold text-text-5 text-base md:text-lg">
              3.3. Information from Third Parties
            </h3>
            <p className="text-base md:text-lg text-text-5 mb-3">
              We may receive limited personal data from:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Payment processors</strong> for transaction validation
              </li>
              <li>
                <strong>Advertising networks</strong> for performance analytics
              </li>
              <li>
                <strong>Analytics providers</strong> (e.g., Google Analytics)
                for usage statistics
              </li>
            </ul>
            <p className="text-base md:text-lg text-text-5 mb-4">
              We ensure that all such third parties comply with UK GDPR and
              process data only on our behalf and under our instructions.
            </p>
          </section>

          {/* 4. How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              4. How We Use Your Information
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-3">
              We use your personal data only for legitimate purposes, including
              to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Provide and manage services</strong> – to process your
                requests, manage your account, and deliver legal templates or
                products.
              </li>
              <li>
                <strong>Communicate with you</strong> – to send confirmations,
                updates, technical notices, and support messages.
              </li>
              <li>
                <strong>Process payments</strong> – to complete secure
                transactions.
              </li>
              <li>
                <strong>Improve our website</strong> – to understand user
                behaviour and optimize usability.
              </li>
              <li>
                <strong>Marketing (with consent)</strong> – to send information
                about new products or promotions if you opt in.
              </li>
              <li>
                <strong>Compliance and protection</strong> – to meet legal
                obligations and prevent fraud, abuse, or unauthorized access.
              </li>
            </ul>
            <p className="text-base md:text-lg text-text-5 mb-4">
              We may also use aggregated, non-identifiable data for internal
              research, statistics, or reporting purposes.
            </p>
          </section>

          {/* 5. Legal Bases for Processing */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              5. Legal Bases for Processing
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-3">
              Under the UK GDPR, <strong className="font-bold">LawNest</strong>{" "}
              relies on the following legal bases to process personal
              information:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Performance of a contract</strong> – When we provide
                products or services you request.
              </li>
              <li>
                <strong>Consent</strong> – When you voluntarily opt into
                marketing or non-essential cookies.
              </li>
              <li>
                <strong>Legal obligation</strong> – When processing is required
                to comply with law (e.g., financial records).
              </li>
              <li>
                <strong>Legitimate interests</strong> – When processing helps us
                improve our services, provided it does not override your rights.
              </li>
            </ul>
            <p className="text-base md:text-lg text-text-5 mb-4">
              You may withdraw your consent at any time by contacting us at
              [Insert DPO Email].
            </p>
          </section>

          {/* 6. How We Protect Your Information */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              6. How We Protect Your Information
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-4">
              Your privacy and data security are fundamental to our operations.
            </p>
            <h3 className="my-7 font-bold text-text-5 text-base md:text-lg">
              6.1. Encryption and Transmission Security
            </h3>
            <p className="text-base md:text-lg text-text-5 mb-4">
              We use Transport Layer Security (TLS) with 128-bit or higher
              encryption to secure the transmission of sensitive data, including
              login credentials and payment details. This is the same level of
              encryption used by banks and major e-commerce platforms.
            </p>

            <h3 className="my-7 font-bold text-text-5 text-base md:text-lg">
              6.2. Internal Access Controls
            </h3>
            <p className="text-base md:text-lg text-text-5 mb-4">
              Once your information is received, access is strictly limited to
              authorized personnel who require it for their work. Our employees
              are bound by confidentiality obligations, and any breach may
              result in disciplinary or legal action.
            </p>

            <h3 className="my-7 font-bold text-text-5 text-base md:text-lg">
              6.3. Data Storage and Retention
            </h3>
            <p className="text-base md:text-lg text-text-5 mb-3">
              We retain your data only as long as necessary to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Provide services,</li>
              <li>Comply with legal obligations, or</li>
              <li>Resolve disputes.</li>
            </ul>
            <p className="text-base md:text-lg text-text-5 mb-4">
              You may request deletion of your data at any time (see Section
              10).
            </p>

            <h3 className="my-7 font-bold text-text-5 text-base md:text-lg">
              6.4. Incident Management
            </h3>
            <p className="text-base md:text-lg text-text-5 mb-3">
              In the unlikely event of a data breach,{" "}
              <strong className="font-bold">LawNest</strong> will:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Assess the impact immediately,</li>
              <li>Notify the ICO within 72 hours, and</li>
              <li>
                Inform affected individuals where there is a high risk to their
                rights and freedoms.
              </li>
            </ul>
          </section>

          {/* 7. Sharing Your Information */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              7. Sharing Your Information
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-4">
              <strong className="font-bold">LawNest</strong> does not sell,
              rent, or trade personal data with any third parties.
            </p>
            <p className="text-base md:text-lg text-text-5 mb-3">
              We share data only in limited cases, such as:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-3">
              <li>
                <strong>7.1. Service Providers</strong> – Trusted vendors who
                perform functions like payment processing, hosting, analytics,
                or email delivery. These parties act under written agreements
                and may not use your data for their own purposes.
              </li>
              <li>
                <strong>7.2. Legal Requirements</strong> – We may disclose
                information if required by law, court order, or to respond to
                lawful requests by public authorities.
              </li>
              <li>
                <strong>7.3. Business Transfers</strong> – In the event of a
                merger, acquisition, or reorganization, your data may be
                transferred under strict confidentiality safeguards.
              </li>
            </ul>
            <p className="text-base md:text-lg text-text-5 mb-4">
              All third-party partners are vetted for compliance with UK GDPR
              and required to maintain equivalent security standards.
            </p>
          </section>

          {/* 8. Cookies and Tracking Technologies */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              8. Cookies and Tracking Technologies
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-4">
              Our website uses cookies, pixels, and analytics tools to enhance
              user experience, analyse site performance, and support marketing
              efforts.
            </p>
            <p className="text-base md:text-lg text-text-5 mb-4">
              You can control or disable cookies through your browser settings;
              however, doing so may affect certain website functionalities.
            </p>

            <h3 className="my-7 font-bold text-text-5 text-base md:text-lg">
              8.1. Types of Cookies Used
            </h3>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                <strong>Strictly Necessary Cookies:</strong> Essential for
                secure login and navigation.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Measure how users interact
                with our site.
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember your preferences
                and settings.
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Help us deliver relevant
                ads through trusted partners (e.g., Google Ads, Bing Ads).
              </li>
            </ul>

            <h3 className="my-7 font-bold text-text-5 text-base md:text-lg">
              8.2. Opting Out
            </h3>
            <p className="text-base md:text-lg text-text-5 mb-3">
              You may opt out of targeted advertising through:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                <a href="#" className="underline hover:text-main">
                  Google Ads Settings
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:text-main">
                  Bing Ads Opt-Out
                </a>
              </li>
              <li>
                <a href="#" className="underline hover:text-main">
                  Network Advertising Initiative
                </a>
              </li>
            </ul>
            <p className="text-base md:text-lg text-text-5 mb-4 text-sm">
              <strong>Note:</strong> You will still see general (non-targeted)
              ads after opting out.
            </p>
          </section>

          {/* 9. Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              9. Third-Party Services
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-3">
              Our site integrates with third-party tools, including:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Google Maps API</li>
              <li>Google Analytics</li>
              <li>Google Ads</li>
            </ul>
            <p className="text-base md:text-lg text-text-5 mb-4">
              Use of these services is governed by Google's Privacy Policy,
              incorporated here by reference.
              <br />
              To learn how Google handles your data, visit the{" "}
              <a
                href="#"
                className="underline font-bold text-text-5 hover:text-main"
              >
                Google Business Data Responsibility site
              </a>
              .
            </p>
            <p className="text-base md:text-lg text-text-5 mb-4">
              We ensure that no personal identifying data (e.g., document text
              inputs) is shared through these tools.
            </p>
          </section>

          {/* 10. Your Rights Under UK GDPR */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              10. Your Rights Under UK GDPR
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-4">
              As a UK resident, you have specific rights under the{" "}
              <strong>UK GDPR</strong>, including:
            </p>
            <ul className="list-none mb-4 space-y-3">
              <li>
                <strong>1. Right to Access</strong> – Request a copy of the
                personal data we hold about you.
              </li>
              <li>
                <strong>2. Right to Rectification</strong> – Correct inaccurate
                or incomplete data.
              </li>
              <li>
                <strong>3. Right to Erasure (“Right to be Forgotten”)</strong> –
                Request deletion of your data under certain circumstances.
              </li>
              <li>
                <strong>4. Right to Restrict Processing</strong> – Limit how we
                process your data.
              </li>
              <li>
                <strong>5. Right to Data Portability</strong> – Obtain your data
                in a structured, commonly used format.
              </li>
              <li>
                <strong>6. Right to Object</strong> – Object to processing based
                on legitimate interests or direct marketing.
              </li>
              <li>
                <strong>
                  7. Rights in Relation to Automated Decision-Making
                </strong>{" "}
                – Be protected from decisions made solely by automated means.
              </li>
            </ul>
            <p className="text-base md:text-lg text-text-5 mb-4">
              To exercise these rights, contact our{" "}
              <strong>Data Protection Officer</strong> at:
              <br />
              [Insert DPO Email Address]
            </p>
            <p className="text-base md:text-lg text-text-5 mb-4">
              We will respond within <strong>30 days</strong> of receiving your
              request, subject to identity verification.
            </p>
          </section>

          {/* 11. International Data Transfers */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              11. International Data Transfers
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-4">
              Although our primary servers are located in the UK, some
              third-party service providers may process data outside the UK
              (e.g., in the EU or United States).
            </p>
            <p className="text-base md:text-lg text-text-5 mb-3">
              Whenever we transfer data internationally, we ensure that:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>
                The recipient country has an adequate level of data protection
                (as determined by the UK government), or
              </li>
              <li>
                We implement{" "}
                <strong>Standard Contractual Clauses (SCCs)</strong> or
                equivalent safeguards to protect your privacy.
              </li>
            </ul>
          </section>

          {/* 12. Children’s Privacy */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              12. Children’s Privacy
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-4">
              Our Services are not directed toward individuals under the age of
              18.
              <br />
              We do not knowingly collect personal data from children.
              <br />
              If you believe a child has provided personal data to us, please
              contact [Insert DPO Email] and we will promptly delete it.
            </p>
          </section>

          {/* 13. Changes to This Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              13. Changes to This Privacy Policy
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-4">
              We may update this Privacy Policy periodically to reflect changes
              in law, technology, or our practices.
              <br />
              The revised policy will be posted on our website with the new{" "}
              <strong>effective date.</strong>
            </p>
            <p className="text-base md:text-lg text-text-5 mb-4">
              We encourage you to review this page regularly to stay informed of
              how we protect your information.
            </p>
          </section>

          {/* 14. Contact Us */}
          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-text-1 mb-4">
              14. Contact Us
            </h2>
            <p className="text-base md:text-lg text-text-5 mb-4">
              If you have questions, concerns, or complaints regarding this
              Privacy Policy or how your personal data is handled, please
              contact:
            </p>
            <div className="mb-4">
              <strong>Data Protection Officer</strong>
              <br />
              <strong>LawNest Ltd.</strong>
              <br />
              [Insert Full Company Address]
              <br />
              [Insert DPO or Privacy Email]
              <br />
              [Insert Contact Number]
            </div>
            <p className="text-base md:text-lg text-text-5 mb-4 mt-6">
              If you remain unsatisfied with our response, you may contact the
              Information Commissioner's Office (ICO) directly:
            </p>
            <div className="mb-4">
              Website:{" "}
              <a
                href="https://lawnest.co.uk"
                className="underline hover:text-main"
              >
                https://lawnest.co.uk
              </a>
              <br />
              Email: support@lawnest.co.uk
              <br />
              Phone: +44 20 1234 5678
            </div>
            <p className="text-base md:text-lg text-text-5 mb-4">
              Live Chat: Available Monday–Friday, 9am–6pm (GMT)
            </p>
            <p className="text-base md:text-lg text-text-5 mt-8">
              © 2025-26 <strong>LawNest Ltd.</strong> All rights reserved.
              <br />
              This Privacy Policy supersedes all previous versions.
            </p>
          </section>
        </div>
        <div className="bg-main text-center pt-12 md:pt-24 pb-40">
          <div className="max-w-[768px] w-full mx-auto">
            <h1 className="text-center lg:text-[36px] md:text-2xl text-xl font-semibold text-white">
              LawNest by the numbers
            </h1>
            <p className="mt-5 lg:text-xl md:text-lg text-base font-normal text-[#ECF6FF]">
              Real results from users who trust{" "}
              <span className="font-semibold">DocNet Ltd</span> to create,
              customise and manage legal documents quickly and securely.
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto max-[1200px]:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 md:gap-6 gap-4 bg lg:p-14 md:p-10 p-6 translate-y-[-100px]">
            <div className="bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center">
              <h1 className="text-3xl font-bold text-main">25,000+</h1>
              <h2 className="text-lg mt-3 font-semibold text-text-1">
                Legal documents created
              </h2>
              <p className="text-base font-normal text-text-5 mt-2">
                Documents generated across wills, tenancy, business and more.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center">
              <h1 className="text-3xl font-bold text-main">12,300+</h1>
              <h2 className="text-lg mt-3 font-semibold text-text-1">
                Registered users
              </h2>
              <p className="text-base font-normal text-text-5 mt-2">
                Active accounts who've saved drafts or completed documents.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md boder border-white/60 rounded-xl p-4 text-center">
              <h1 className="text-3xl font-bold text-main">4.8/5</h1>
              <h2 className="text-lg mt-3 font-semibold text-text-1">
                Average customer rating
              </h2>
              <p className="text-base font-normal text-text-5 mt-2">
                Based on user reviews for ease, accuracy and support.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default page;
