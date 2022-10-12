import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./aboutCard";
import codeImage from "../assets/rocket@4x.png";
import PageSection from "./PageSection";

export default function About() {
  return (
    <div name="about" className="w-full bg-black text-white text-center ">
      <div className="w-full mx-auto px-10 lg:px-20 py-65  mb-[6rem]">
        <div>
          <div className="mt-0 bg-black gap-0 text-white text-center">
            <PageSection
              name="ABOUT US"
              title="ABOUT US"
              subtitle={`"SOCIETY FOR PROMOTION OF ELECTRONICS CULTURE"`}
            >
              <div className=" w-full bg-black text-white text-center flex flex-col lg:flex-row items-center justify-center gap-8  ">
                {/* left */}

                <div className="flex flex-col mb-14 gap-14 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
                  <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
                    Electrothon is a student-run hackathon, under the aegis of
                    the National Institute of Technology Hamirpur, India.
                  </p>
                  <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
                    An exceptional place for young and dedicated minds, a
                    platform for organizations to meet a wide range of talented,
                  </p>
                  <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
                    and with over 1700+ registrations, Electrothon serves as a
                    hub of ingenious ideas, innovation, entrepreneurship and
                    technical skills.
                  </p>
                </div>
                {/* right */}
                <div className="w-full lg:w-1/2 ">
                  <img
                    src={codeImage}
                    alt="code"
                    className="transition-shadow  "
                  />
                </div>
              </div>
            </PageSection>
          </div>
          {/* Card Container */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
            {/* Card */}
            <AboutCard
              icon={<SiHiveBlockchain size={40} />}
              heading="Climate Change"
              text="Lead a brawl against climate change by fabricating an innovative solution to forge a world where the future generations don't have to worry."
            />

            <AboutCard
              icon={<SiFsecure size={40} />}
              heading="Natural Disasters"
              text="Harnessing the power of technology, vouch for innovative solutions to address the uprising challenges caused by natural calamities."
            />
            <AboutCard
              icon={<SiStrapi size={40} />}
              heading="Hunger Eradication"
              text="In order to shape a world where no one has to question the guarantee of a two square meal, devise projects that promise to eradicate hunger."
            />
            <AboutCard
              icon={<VscServerProcess size={40} />}
              heading="Open Innovation"
              text="Let your imagination go haywire as you envision ideas that hold the capability to solve any problem that has been distressing mankind for ages."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// const DevApi = () => {
//   return (
//     <div className="w-full bg-black text-white text-center">
//       <PageSection
//         name="developer API"
//         title="Developer API"
//         subtitle={`Angels that with clasp dreams nepenthe on this of is. Said and a my the.`}
//       >
//         <div className=" w-full bg-black text-white text-center flex flex-col lg:flex-row items-center justify-center gap-8">
//           {/* left */}

//           <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
//             <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
//               Whom madam songs faster get as followed sought many leave.
//             </p>
//             <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
//               Whom madam songs faster get as followed sought many leave.
//             </p>
//             <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
//               Whom madam songs faster get as followed sought many leave.
//             </p>
//             <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
//               Whom madam songs faster get as followed sought many leave.
//             </p>
//           </div>
//           {/* right */}
//           <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0">
//             <img
//               src={codeImage}
//               alt="code"
//               className="rounded-lg shadow-lg shadow-thBlue"
//             />
//           </div>
//         </div>
//       </PageSection>
//     </div>
//   );
// };
