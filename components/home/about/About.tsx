import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";
import ReactPlayer from 'react-player'

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Christian, if you haven&apos;t already figured that out already.
              I&apos;m a software engineer, recent graduate from Coding Dojo.
              I have a specialization in frontend development, coupled with proficiency in backend programming. 
              While my primary focus revolves around React, I am actively engaged in expanding my skill set to include Next.js
              and whatever is needed for the job!
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of coding, I am an aspiring day trader. 
              I'm also a passionate reader in all things self-development and fully committed to my fitness at the gym.
              Evidently, my strong commitment to personal growth is driven by my aspiration to become an outstanding individual.
              My ultimate goal is to contribute immense value to the lives of others.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m looking for opportunities that allow me to blend my strong work ethic and passion for coding.
              Now that you've gotten a glimpse of who I am don't hesitate to contact me
              if there's an available opportunity and you're open to considering me, let's connect!
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
