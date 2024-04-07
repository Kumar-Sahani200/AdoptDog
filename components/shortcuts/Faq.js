import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Adopt Paw?",
    a: "Adopt Paw is an online platform dedicated to facilitating pet adoption by connecting users with animals in need of loving homes, including dogs, cats, squirrels, cows, and more.",
  },

  {
    q: "How does Adopt Paw work?",
    a: "Users can browse profiles of animals available for adoption, posted by individuals, shelters, and NGOs. They can also create posts for animals they have found or are fostering, following guidelines provided on the website.",
  },
  {
    q: "What kind of animals can I adopt through Adopt Paw?",
    a: "You can find a variety of animals for adoption on Adopt Paw, including dogs, cats, squirrels, cows, and more. The availability may vary based on postings from individuals and participating shelters/NGOs.",
  },
  {
    q: "Are the animals on Adopt Paw vaccinated and sterilized?",
    a: "In most cases, animals available for adoption through shelters and NGOs on Adopt Paw are sterilized (in the case of females) and vaccinated with essential vaccines like DHPPIL + ARV, althought we do not held responsible for any vacination or sterilization of pets that were from street, shelters or NGOs",
  },
  {
    q: "Can I post animals for adoption on Adopt Paw?",
    a: "Yes, users can create posts for animals they are fostering or have found. It's important to provide accurate information about the animal, including its description, location, and your contact details.",
  },
  {
    q: "Can shelters and NGOs use Adopt Paw to promote their animals for adoption?",
    a: "Absolutely! Shelters and NGOs are encouraged to create profiles on Adopt Paw to showcase animals available for adoption. They can also share their organization's donation link to support their efforts.",
  },
  {
    q: "What if I encounter illegal activities, such as pet selling, on Adopt Paw?",
    a: "We strictly demotivate pet selling and illegal actions on our platform. If you encounter any such activities, please report them to us immediately. We take these reports seriously and will take appropriate action.",
  },
  {
    q: "What are the responsibilities of adopting from a shelter/NGO through Adopt Paw?",
    a: "When adopting from a shelter/NGO through Adopt Paw, it's important to follow their adoption guidelines and norms. This may include post-adoption care, vaccinations, filling necessary details on their site and sterilization as per the shelter's policies.",
  },
  {
    q: "Can I get more information about the animal's background before adopting?",
    a: "Yes, you can often find information about how the animal was rescued or its family history usnig the phone number provided by Individual, shelters and NGOs. Feel free to inquire for more details if needed.",
  },
  {
    q: "Is Adopt Paw responsible for any legal issues arising from adoptions?",
    a: "Adopt Paw promotes responsible pet adoption practices and provides guidelines to users and shelters/NGOs. However, we cannot be held responsible for any illegal activities conducted outside of our platform or pet’s behaviour. We encourage users to adopt responsibly and within legal frameworks.",
  },
];

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full mt-24 text-primary">
      <h1 className="m-0 max-w-[80ch] text-4xl font-bubblegum_sans text-secondary-foreground mb-5">
        Frequently Asked Questions
      </h1>
      {faqs.map((faq, index) => (
        <AccordionItem
          value={index + 1}
          key={index}
          className="border-[#b38944] border-b-2 border-opacity-30"
        >
          <AccordionTrigger className="font-nova_slim text-xl">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="font-nova_slim text-lg max-w-4xl">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
