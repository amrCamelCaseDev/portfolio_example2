import { Suspense, useState } from "react";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image1 from "/web-development.png";
import Image2 from "/content-creator.png";
import Image3 from "/game-development.png";
import project1 from "/project 1.jpg";
import project2 from "/project 2.jpg";
import project3 from "/project 3.jpg";
import project4 from "/project 4.jpg";
import project5 from "/project 5.jpg";
import project6 from "/project 6.jpg";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./assets/Model";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return ( 
<div className={darkMode ? "dark" : ""}>
  <div className=" bg-teal-50 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
<section className=" min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-extrabold text-xl">camelCaseDev</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"/>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  CV/Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10 flex flex-col gap-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Amr, camelCaseDev
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              FullStack Dev & Content Creator.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Blending code with creativity, welcome to the digital playground of a full-stack developer and dynamic content creator. 
            Dive in to explore a fusion of technological prowess and imaginative storytelling.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-teal-950 dark:text-gray-400">
              <AiFillLinkedin />
              <AiFillYoutube />
              <AiFillInstagram/>
              <AiFillFacebook/>
              
              
            </div>
            </div>
            <div className="basis-1/3 flex-1 ">
            <div className="mx-auto w-85 h-85  mt-5 md:h-96 md:w-96">
            <Canvas shadows dpr={[1, 2]} camera={{ fov: 50, position: [-11, 4.1, 0] }}>
    <Suspense fallback={null}>
    <ambientLight intensity={0.7} />
    <Environment preset="city" />
    
      <Model scale={4.6} position={[0,-4.1,0]} rotation={[0, - Math.PI / 2, 0]} />
      <ContactShadows position={[0,-4.1,0]} opacity={1} blur={2.5}/>
      </Suspense>
   <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI/2} />
    </Canvas>
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Click and drag My model to interact!
            </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-center text-3xl py-1 dark:text-white ">About Me</h3>
            <p className=" text-center p-10 py-10 text-md  leading-8 text-gray-800 dark:text-gray-200">
            In the intricate web of the digital universe, I've carved out a niche that harmoniously blends the logical with the creative.
             My journey as a full-stack developer, content creator, and game developer has equipped me with a diverse skillset,
              making me adept at turning abstract ideas into tangible realities.
              Let's embark on a journey through the three pillars of my expertise.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gradient-to-r from-slate-300 text- to-slate-500 flex-1">
              <img src={Image1} width={100} height={100} />
              <h3 className="text-lg font-bold pt-8 pb-2  ">
              Developer
              </h3>
              <p className="py-2">
              As a full-stack developer, I've embraced the challenges and rewards that come from crafting seamless digital experiences.
               Every line of code I write is a testament to my commitment to functionality and aesthetics alike.
                Here are the tools I harness to breathe life into my projects:
              </p>
              <h4 className="py-4 font-medium text-teal-600"> Stack</h4>
              <p className="text-gray-800 font-medium py-1">Frontend Web & App:</p>
              <p className="text-gray-800 py-1">React, ReactNative</p>
              <p className="text-gray-800 font-medium py-1">Backend:</p>
              <p className="text-gray-800 py-1">Node.js, Express.js</p>
              <p className="text-gray-800 font-medium py-1">Database:</p>
              <p className="text-gray-800 py-1">MongoDB, PostgreSQL, MySQL</p>
              
            </div>
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-r from-slate-300 text- to-slate-500 flex-1">
              <img src={Image2} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
              Content Creator
              </h3>
              <p className="py-2">
              Storytelling is an art, and with the right medium, its impact can be profound.
               Through content creation, I fuse emotion, narrative, and visuals to connect with diverse audiences.
               Here are the tools that empower me to weave stories:
              </p>
              <h4 className="py-4 font-medium text-teal-600"> Stack</h4>
              <p className="text-gray-800 font-medium py-1">Video:</p>
              <p className="text-gray-800 py-1">Adobe Premiere Pro, Final Cut Pro</p>
              <p className="text-gray-800 font-medium py-1">Graphics:</p>
              <p className="text-gray-800 py-1">Adobe Photoshop, Illustrator</p>
              <p className="text-gray-800 font-medium py-1">Writing:</p>
              <p className="text-gray-800 py-1">WordPress, Medium, Ghost</p>
              
            </div>
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gradient-to-r from-slate-300 text- to-slate-500 flex-1">
              <img src={Image3} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Game Development and 3D</h3>
              <p className="py-2">
              The world of gaming and 3D modeling is a playground of limitless possibilities.
               With a blend of imagination and technical prowess, I create immersive worlds and characters that captivate and inspire.
               My toolkit in this realm includes:
              </p>
              <h4 className="py-4 font-medium text-teal-600"> Stack</h4>
              <p className="text-gray-800 font-medium py-1">Game Engines:</p>
              <p className="text-gray-800 py-1">Unity, Unreal Engine, Gadot</p>
              <p className="text-gray-800 font-medium py-1">3D Modeling:</p>
              <p className="text-gray-800 py-1">Blender, Maya, ZBrush</p>
              
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-center text-3xl py-1 dark:text-white ">Projects</h3>
            <p className="text-center p-10 py-10 text-md leading-8 text-gray-800 dark:text-gray-200">
            Every project I undertake is a step in my ongoing journey of exploration and growth. Thank you for joining me on this adventure.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <img
                className="rounded-lg object-cover shadow-2xl"
                width={"100%"}
                height={"100%"}
               
                src={project1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-2xl"
                width={"100%"}
                height={"100%"}
              
                src={project2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-2xl"
                width={"100%"}
                height={"100%"}
            
                src={project4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-2xl"
                width={"100%"}
                height={"100%"}
               
                src={project6}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-2xl"
                width={"100%"}
                height={"100%"}
             
                src={project3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover shadow-2xl"
                width={"100%"}
                height={"100%"}
            
                src={project5}
              />
            </div>
          </div>
        </section>
        </div>
</div>
   ); 

  
}

export default App
