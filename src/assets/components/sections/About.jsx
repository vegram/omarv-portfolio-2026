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
            src="https://media.licdn.com/dms/image/v2/D4E03AQFoqQoLrQ4r9Q/profile-displayphoto-shrink_800_800/B4EZwgpw6DIkAc-/0/1770074346412?e=1778716800&v=beta&t=UFmR0spVXRwYsT4xhUJ9B9ScA078JwLK-X62IJ7T65c"
            alt="Omar Vega"
            className="w-48 h-48 rounded-full mx-auto mb-6"
          />
          <p className="text-lg mb-4">
            I’m a digital media professional with experience in social media
            management and content creation, currently working within Parks &
            Recreation for the City of Ocoee.
          </p>
          <p className="text-lg">
            My expertise includes social media management, content creation, and
            digital marketing. I thrive in fast-paced environments and am always
            eager to learn new skills and stay ahead of industry trends.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
