import styles from "./stats.module.scss";
import { AiFillCode } from "react-icons/ai";
import { BiBookAlt } from "react-icons/bi"
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Experience In</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">JavaScript</span>
            <span className="chip">Python</span>
            <span className="chip">Java</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React</span>
            <span className="chip">Vite + SWC</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">MongoDB</span>
            <span className="chip">SQL</span>
            <span className="chip">Ajax</span>
            <span className="chip">MERN</span>
            <span className="chip">Flask</span>
            <span className="chip">SpringBoot</span>
            <span className="chip">GitHub</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <BiBookAlt size="2.4rem" color="var(--brand)" />
            <span>Currently Learning</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">NextJS</span>
            <span className="chip">Prisma</span>
            <span className="chip">Postgresql</span>
            <span className="chip">Solidity</span>
            <span className="chip">Svelte</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
