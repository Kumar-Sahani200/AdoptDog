import React from "react";
import Link from "next/link";

const Guidelines = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-10">
      <h1 className="text-4xl mx-auto text-center text-primary font-bold mb-16">
        Adopt Paw Guidelines
      </h1>

      {/* Using Adopt Paw Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Using Adopt Paw:</h2>
        <ol className="list-decimal pl-4">
          <li>
            Browse and Adopt: Explore profiles of animals available for
            adoption, posted by individuals, shelters, and NGOs. Ensure to
            provide accurate information if posting animals for adoption.
          </li>
          <li>
            Engage Responsibly: Respect community members, share adoption
            success stories, and contribute positively to discussions. Report
            any illegal activities or suspicious behavior to maintain a safe
            environment.
          </li>
          <li>
            Post Adoption: After adopting, please make aware of the adoption to
            the Individual/Shelter/NGO, so that they can mark the pet as adopted
            and finally fill this form, these details will help us in analytics
            and to make our platform better.
            <Link
              href="https://forms.gle/hvg4xPQkWKhg2w9m8"
              target="_blank"
              className="text-primary font-bold underline bg-secondary px-2 py-1 rounded-md mx-2"
            >
              Post Adoption Form
            </Link>
          </li>
        </ol>
      </div>

      {/* Guidelines for Responsible Adoption Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Guidelines for Responsible Adoption:
        </h2>
        <ol className="list-decimal pl-4">
          <li>
            Prioritize Adoption: Choose adoption over purchasing pets to support
            ethical practices and reduce pet overpopulation. Consider adopting
            from shelters, rescues, or reputable sources.
          </li>
          <li>
            Compassionate Care: Provide love, attention, and proper care to your
            adopted pet. Regular veterinary check-ups, vaccinations, and
            spaying/neutering are essential for their well-being.
          </li>
        </ol>
      </div>

      {/* Adoption from Shelters Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Adoption from Shelters:</h2>
        <ol className="list-decimal pl-4">
          <li>
            Shelter Collaboration: When adopting from shelters through Adopt
            Paw, adhere to their guidelines and procedures. This may involve
            filling out forms, following their rules, and providing proof of
            adoption.
          </li>
          <li>
            Transparency and Compliance: Disclose all relevant information about
            the adopted pet and comply with the shelter&apos;s requirements.
            Ensure to fulfill any post-adoption obligations outlined by the
            shelter.
          </li>
        </ol>
      </div>

      {/* Additional Guidelines Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Additional Guidelines:</h2>
        <ol className="list-decimal pl-4">
          <li>
            Prevent Overpopulation: Spay or neuter your pets to prevent
            unplanned litters and contribute to pet population management
            efforts.
          </li>
          <li>
            Educate and Advocate: Learn about responsible pet ownership
            practices and advocate for animal welfare. Share educational
            resources and promote humane treatment of animals.
          </li>
        </ol>
      </div>

      {/* Legal Compliance and Reporting Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Legal Compliance and Reporting:
        </h2>
        <ol className="list-decimal pl-4">
          <li>
            Legal Obligations: Adhere to all applicable laws and regulations
            related to pet ownership and adoption in your region. Respect animal
            rights and act in their best interests.
          </li>
          <li>
            Report Illegal Activities: Report any instances of pet selling,
            abuse, or other illegal activities on Adopt Paw. We take these
            reports seriously and will take appropriate action.
          </li>
        </ol>
      </div>

      <p className="my-6 text-center">
        By following these guidelines, together we can create a compassionate
        and supportive community dedicated to improving the lives of animals in
        need.
      </p>

      {/* Disclaimer Section */}
      <div>
        <p className="text-sm text-center mx-auto text-gray-600">
          Disclaimer: Adopt Paw is not responsible for any legal issues arising
          from adoptions or interactions on the platform.
        </p>
      </div>
    </div>
  );
};

export default Guidelines;
