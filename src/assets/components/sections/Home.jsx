import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen scroll-mt-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-gray-600 text-white"
    >
      <RevealOnScroll>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Omar Vega</h1>
          <p className="text-xl mb-8">Digital Media Specialist</p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
