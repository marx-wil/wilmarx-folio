import HeroSectionWithSocialLinks from "../../components/heroSection";
const About = () => {
  return (
    <HeroSectionWithSocialLinks
      heroText="About Me"
      footerHead="Projects I've "
      footerBody="Worked on"
      footerSub="Click to view"
      navigateTo="/projects"
    />
  );
};

export default About;
