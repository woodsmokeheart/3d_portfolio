import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import css from "./Home.module.scss";

import Land from "../models/Land";
import Plane from "../models/Plane";
import Skybox from "../models/Skybox";

import Navbar from "../components/Navbar/Navbar";
import AboutMe from "../components/Modals/AboutMe/AboutMe";
import Projects from "../components/Modals/Projects/Projects";
import Contacts from "../components/Modals/Contacts/Contacts";

import CurvedTextComponent from "../components/CurvedTextComponent/CurvedTextComponent";

const Home = () => {
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustLandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [landScale, landPosition] = adjustLandForScreenSize();

  // MODALS
  const [isAboutMe, setIsAboutMe] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isContacts, setIsContacts] = useState(false);
  return (
    <section className={css.wrapper}>
      <CurvedTextComponent />
      <Canvas className={css.canvas} camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={"Loading..."}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Skybox />
          <Land
            position={landPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={landScale}
          />
          <Plane
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>
      <Navbar
        isAboutMe={isAboutMe}
        setIsAboutMe={() => setIsAboutMe(true)}
        isProjects={isProjects}
        setIsProjects={() => setIsProjects(true)}
        isContacts={isContacts}
        setIsContacts={() => setIsContacts(true)}
      />

      {Boolean(isAboutMe) && (
        <AboutMe isAboutMe={isAboutMe} onClose={() => setIsAboutMe(false)} />
      )}
      {Boolean(isProjects) && (
        <Projects
          isProjects={isProjects}
          onClose={() => setIsProjects(false)}
        />
      )}
      {Boolean(isContacts) && (
        <Contacts
          isContacts={isContacts}
          onClose={() => setIsContacts(false)}
        />
      )}
    </section>
  );
};

export default Home;
