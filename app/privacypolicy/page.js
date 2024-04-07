import React from "react";
import Link from "next/link";

const Guidelines = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl mx-auto text-center text-primary font-bold mb-6">
        Privacy Policy
      </h1>
      <p className="my-6 text-center mx-auto mb-16">
        This Privacy Policy outlines how Adopt Paw (&quot;we&quot;,
        &quot;our&quot;, or &quot;us&quot;) collects, uses, discloses, and
        protects personal information obtained from users (&quot;you&quot; or
        &quot;your&quot;) of our website.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Information Collection and Use:
        </h2>
        <ol className="list-decimal pl-4">
          <li>
            Personal Information: We may collect personal information such as
            your name, email address, phone number, and location when you
            register an account, post animals for adoption, or contact us for
            support.
          </li>

          <li>
            Usage Data: We may collect non-personal information about your
            interactions with our website, including the pages visited, time
            spent on each page, browser type, and IP address.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Use of Information:</h2>
        <ol className="list-decimal pl-4">
          <li>
            Improving User Experience: We use collected information to
            personalize your experience, provide customer support, and improve
            our website&apos;s functionality and content.
          </li>
          <li>
            Communication: We may use your email address or phone number to send
            important updates, notifications, or respond to inquiries.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Data Security:</h2>
        <ol className="list-decimal pl-4">
          <li>
            Protection Measures: We implement security measures to safeguard
            your personal information against unauthorized access, alteration,
            disclosure, or destruction.
          </li>
          <li>
            Data Retention: We retain personal information only for as long as
            necessary to fulfill the purposes outlined in this Privacy Policy or
            as required by law.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Rights:</h2>
        <ol className="list-decimal pl-4">
          <li>
            Access and Correction: You have the right to access and correct your
            personal information stored on our website. You can update your
            account details or contact us for assistance.
          </li>
          <li>
            Opt-Out: You may choose to opt-out of receiving promotional
            communications from us by following the unsubscribe instructions
            provided in the emails or contacting us directly.
          </li>
        </ol>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Children&apos;s Privacy:</h2>
        <ol className="list-decimal pl-4">
          <li>
            Our website is not intended for use by individuals under the age of
            13. We do not knowingly collect personal information from children
            under the age of 13. If you believe we have inadvertently collected
            information from a child under 13, please contact us immediately,
            and we will take steps to remove such information from our records.
          </li>
        </ol>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Changes to Privacy Policy:
        </h2>
        <ol className="list-decimal pl-4">
          <li>
            We reserve the right to update or modify this Privacy Policy at any
            time. We will notify you of any changes by posting the revised
            policy on this page. Your continued use of our website following the
            posting of changes constitutes acceptance of those changes.
          </li>
        </ol>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Us:</h2>
        <ol className="list-decimal pl-4">
          <li>
            If you have any questions or concerns about this Privacy Policy or
            our data practices, please contact us at{" "}
            <Link
              href={"mailto:Kumarsahani@gmail.com"}
              className="hover:underline hover:bg-secondary px-1"
              target="_blank"
            >
              Kumarsahani@gmail.com
            </Link>
          </li>
        </ol>
      </div>

      <div>
        <p className="text-sm text-gray-600">Last updated: 07 Apr 2024</p>
      </div>
    </div>
  );
};

export default Guidelines;
