import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    videoLink: "https://www.youtube.com/watch?v=mLcLWm0etCc",
    title: "HIVE",
    imgSrc: "project-imgs/hive.png",
    code: "https://github.com/ChrisCarino1/HIVE-Social-Media",
    projectLink: "https://www.youtube.com/watch?v=mLcLWm0etCc",
    tech: ["MERN", "JavaScript", "React", "Node", "Express", "MongoDB"],
    description:
      "A Full-Stack Social Media app with real time chats.",
    modalContent: (
      <>
        <p>
        A comprehensive social media application featuring real-time chat functionality, developed using the MERN tech stack (MongoDB, Express, React, Node).
        </p>
        <p>
        The messaging feature is powered by socket.io, enabling users to engage in real-time one-on-one and group conversations.
        </p>
        <p>
        Integration of the Cloudinary API facilitates seamless image uploads to the database.
        </p>
        <p>
        The application boasts a wide range of user-centric features, including follow and like capabilities, commenting, personalized 'For You' and 'Following' sections, as well as user profiles.
        </p>
      </>
    ),
  },
  {
    videoLink: "https://www.youtube.com/watch?v=QhgkMzZAhd0",
    title: "Clarity",
    imgSrc: "project-imgs/clarity.png",
    code: "https://github.com/ChrisCarino1/Clarity",
    projectLink: "https://www.youtube.com/watch?v=QhgkMzZAhd0",
    tech: ["Node", "Express", "React + SWC", "Vite", "Tailwind"],
    description:
      "Automated full-stack code comment generator aiding developers in crafting code comments",
    modalContent: (
      <>
        <p>
        Streamline code documentation with an AI-driven full-stack comment generator.
        </p>
        <p>
        Powered by Node.js and Axios for backend communication, and adorned with React Typed and React Icons libraries for improved visual appeal.
        </p>
        <p>
        Utilizes the OpenAI API.
        </p>
      </>
    ),
  },
  {
    videoLink: "https://www.youtube.com/watch?v=wu_IRBFp8gI",
    title: "TaskScheduler",
    imgSrc: "project-imgs/taskscheduler.png",
    code: "https://github.com/ChrisCarino1/Task-Scheduler",
    projectLink: "https://www.youtube.com/watch?v=wu_IRBFp8gI",
    tech: ["MERN", "JavaScript", "NodeJS", "Express", "MongoDB"],
    description:
      "Collaborated with team of developers on full-stack task manager platform to help managers assign tasks to employees",
    modalContent: (
      <>
        <p>
          Using MERN as the foundation we created TaskScheduler to essentially aid employers to assign tasks to employees.
        </p>
        <p>
          We implemented a Refresh Token which is a special key that enables client for an API or service to retrieve new access tokens
          without requiring the user to perform a complete login.
        </p>
      </>
    ),
  },
  {
    videoLink:"https://www.youtube.com/watch?v=rdBhJD8X03U",
    title: "Data App Design",
    imgSrc: "project-imgs/dataappdesign.png",
    code: "https://github.com/ChrisCarino1/Data-App-Design",
    projectLink: "https://www.youtube.com/watch?v=rdBhJD8X03U",
    tech: ["React"],
    description:
      "Website Design made using React",
    modalContent: (
      <>
        <p>Website Design made using React</p>

      </>
    ),
  },
  {
    videoLink: "https://www.youtube.com/watch?v=WIbYTjfWUvA",
    title: "Cloud App Design",
    imgSrc: "project-imgs/cloudappdesign.png",
    code: "https://github.com/ChrisCarino1/Cloud-App-Design",
    projectLink: "https://www.youtube.com/watch?v=WIbYTjfWUvA",
    tech: ["React"],
    description:
      "Website Design made using React",
    modalContent: (
      <>
        <p>Website Design made using React</p>
      </>
    ),
  },
];
