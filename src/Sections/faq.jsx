import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div
      name="faq"
      className="w-full bg-black text-white text-center px-12 lg:px-20"
    >
      <Fragment>
        <h1>Commonly Asked Questions</h1>
        <br />
        <br />

        <Accordion open={open === 1}>
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="rounded-none mb-[1.7rem]"
          >
            What is Electrothon?
          </AccordionHeader>
          <AccordionBody>
            Electrothon is a student-run hackathon, under the aegis of the
            National Institute of Technology Hamirpur, India. An exceptional
            place for young and dedicated minds.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="rounded-none mb-[1.7rem] "
          >
            Who can apply?
          </AccordionHeader>
          <AccordionBody>
            You must be 18 years or above and a student from any designated
            University/College.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="rounded-none mb-[1.7rem]"
          >
            Can a college have multiple teams?
          </AccordionHeader>
          <AccordionBody>
            Yes, there is no restriction here. We also welcome inter-college
            teams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="rounded-none mb-[1.7rem]"
          >
            Do I need Experiance?
          </AccordionHeader>
          <AccordionBody>
            No, you do not require any prior experiance in development. We will
            provide you with mentors to help you figure out tings. of coursse, a
            will to think ,learn, and collaborate will be the cherry of the cake
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader
            onClick={() => handleOpen(5)}
            className="rounded-none mb-[1.7rem]"
          >
            What are the Selection criteria?
          </AccordionHeader>
          <AccordionBody>
            Evaluatin criterial will include novelty of the idea ,
            compexity,alrity and details in the prescribed
            format,feasibility,practicability,sustainability,the scale of
            impact,user experiance and potential for future prospects.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 6}>
          <AccordionHeader
            onClick={() => handleOpen(6)}
            className="rounded-none mb-[1.7rem]"
          >
            What Do I get from the event?
          </AccordionHeader>
          <AccordionBody>
            The winners will be Awarded prizes . The short listed participants
            vwill get certificates ,swags and a platform to show their talents.
            Ther will be special prizes for the best hack built on the API's and
            SDK's of the partner companies
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 7}>
          <AccordionHeader
            onClick={() => handleOpen(7)}
            className="rounded-none mb-[1.7rem]"
          >
            What is the goal of Electrothon?
          </AccordionHeader>
          <AccordionBody>
            To promote active participation of females, we encourage female
            participation via targeted events/workshops. Also, we strictly
            follow our code of conduct to make a welcoming, safe and comfortable
            environment for everyone. To ensure this, we have separate prizes
            worth 10k for the best female-only team.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 8}>
          <AccordionHeader
            onClick={() => handleOpen(8)}
            className="rounded-none mb-[1.7rem]"
          >
            Do we need to apply in teams?
          </AccordionHeader>
          <AccordionBody>
            Yes, the hackathon requires you to register in a team of a minimum
            of 2 and a maximum of 4 participants.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 9}>
          <AccordionHeader
            onClick={() => handleOpen(9)}
            className="rounded-none mb-[1.7rem]"
          >
            Are there any Sponsored challenges and API prizes?
          </AccordionHeader>
          <AccordionBody>
            There will be API prizes from multiple sponsors to build a hack on
            top of their APIs or SDKs. Keep an eye out on the website and social
            media handles, where we'll be adding more ideas to hack on closer to
            the event. Teams are free to pick from them as well.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 10}>
          <AccordionHeader
            onClick={() => handleOpen(10)}
            className="rounded-none mb-[1.7rem]"
          >
            What if I have More queries?
          </AccordionHeader>
          <AccordionBody>
            You can reach out to us any time at spec@nith.ac.in as well as our
            social media platforms
          </AccordionBody>
        </Accordion>
      </Fragment>
      <br />
    </div>
  );
}
