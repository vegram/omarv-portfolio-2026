import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-16 flex items-center justify-center bg-gradient-to-r from-gray-600 to-blue-500 text-white"
    >
      <RevealOnScroll>
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <img
            src="{`${import.meta.env.BASE_URL}src/assets/linkedinpic.jpeg`}"
            alt="Omar Vega"
            className="w-48 h-48 rounded-full mx-auto mb-6"
          />
          <p className="text-lg mb-4">
            I am currently studying Digital Media at the University of Central
            Florida, expecting to graduate in Spring 2027. I am also working
            within Parks & Recreation for the City of Ocoee. In my spare time, I
            enjoy gaming, golf and watching sports.
          </p>
          <p className="text-lg">
            My expertise includes social media management, content creation, and
            digital marketing. I thrive in technical environments and am always
            eager to learn new skills and stay ahead of industry trends.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
