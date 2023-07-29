"use client";

import BriefProjOne from "../components/BriefProjOne";
import BriefProjTwo from "../components/BriefProjTwo";
import LineAnim from "../components/LineAnim";

const MyProjects = () => {
  const campusFeatures = [
    "Tools & technologies used: ViteJS, ReactJS, NodeJs, ExpressJs, MongoDB, TailWind CSS",
    "Full-stack web app having authorization/registration/posting/ordering, and ordering API, wrapped in a responsive frontend.",
  ];
  const rokkadFeatures = [
    "Tools & technologies used: ReactJS, NodeJs, ExpressJs, MongoDB, TailWind CSS, AntDesign",
    "Visualizing data in line and bar graphs using javascript and charting library.",
  ];
  const MLFeatures = [
    "Developed an avant-garde machine learning model harnessing Python, TensorFlow, Similarity Measures, LSTM,and Federated Learning.",
    "Awaiting publication approval from IEEE, highlighting the project’s significant research contributions and potential impact.",
  ];
  const solrideeFeatures = [
    "Tools & technologies used: HTML, CSS, PHP, SQL, Bootstrap",
    "Full Stack Web App with user and admin side, creating an online environment to rent and book cycles.",
  ];
  return (
    <>
      <LineAnim />

      <BriefProjTwo
        projTitle="Campus"
        featuresPoints={campusFeatures}
        imgClip="/Campus.png"
        ID="proj-1"
        Links={[
          {
            img: "/github.png",
            url: "#",
            title: "Github Link",
          },
        ]}
      />

      <LineAnim />
      <BriefProjOne
        projTitle="Rokkad"
        featuresPoints={rokkadFeatures}
        imgClip="/rokkad.png"
        ID="proj-2"
        Links={[
          {
            img: "/github.png",
            url: "#",
            title: "Github Link",
          },
          {
            img: "/live.svg",
            url: "#",
            title: "Live Demo",
          },
        ]}
      />
      <LineAnim />
      <BriefProjTwo
        projTitle="Cold Start WQi"
        featuresPoints={MLFeatures}
        imgClip="/machine_learning.png"
        ID="proj-3"
        Links={[
          {
            img: "/github.png",
            url: "#",
            title: "Github Link",
          },
        ]}
      />
      <LineAnim />
      <BriefProjTwo
        projTitle="Solridee - Solution to your ride"
        featuresPoints={solrideeFeatures}
        imgClip="/solridee.png"
        ID="proj-4"
        Links={[
          {
            img: "/github.png",
            url: "#",
            title: "Github Link",
          },
        ]}
      />
      <div className="gradient-03 z-0" />
      <LineAnim />
    </>
  );
};

export default MyProjects;
