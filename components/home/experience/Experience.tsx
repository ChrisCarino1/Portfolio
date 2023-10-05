import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Sapporo Sushi",
    position: "Server",
    time: "2020 - 2023",
    location: "Menifee, CA",
    description:
      "As a server in a restaurant with additional responsibilities like bussing tables, running food, and hosting customers, my primary role is to provide excellent customer service. This includes taking orders, serving food and drinks, ensuring tables are clean and set, and greeting and seating guests. I also assist in clearing and cleaning tables, delivering orders to customers, and helping to create a welcoming atmosphere for diners.",
    tech: []
  },
  {
    title: "2in1 KBBQ",
    position: "Software Engineer",
    time: "2020 - 2022",
    location: "San Francisco",
    description:
      "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
    tech: ["React", "Node", "PHP", "GraphQL", "Presto", "Cassandra"],
  },
];
