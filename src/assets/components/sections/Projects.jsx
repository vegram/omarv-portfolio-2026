import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-16 flex items-start justify-center bg-gradient-to-r from-gray-600 to-gray-800 text-white py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
          <div className="space-y-25">
            <article className="">
              <h3 className="text-2xl font-semibold mb-4">
                Social Media Management
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <img
                  src="/src/assets/project1/awareness.png"
                  alt="Awareness ad for foot health"
                  className="object-cover rounded-lg shadow-md"
                />
                <img
                  src="/src/assets/project1/magnolia-fb-flyer.png"
                  alt="Magnolia foot care FB flyer"
                  className="object-cover rounded-lg shadow-md"
                />
                <img
                  src="/src/assets/project1/draft1.png"
                  alt="Dr. Floyd infographic"
                  className="object-fill rounded-lg shadow-md"
                />
              </div>
              <p className="mb-4">
                Developed and executed a successful social media management
                strategy for Magnolia Foot Clinic on Facebook.
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100083498356871"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Visit our Facebook Page
              </a>
            </article>

            <article>
              <h3 className="text-2xl font-semibold mb-4">Content Creation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <img
                  src="/src/assets/project2/mediacarousel.png"
                  alt="digital media carousel"
                  className="rounded-lg shadow-md"
                />
                <img
                  src="/src/assets/project2/igfeed.png"
                  alt="instagram feed"
                  className="rounded-lg shadow-md"
                />
              </div>
              <p className="mb-4">
                Created engaging content for a variety of platforms, including
                short-form videos, social media updates, and infographics.
              </p>
              <a
                href="https://linktr.ee/vegram_ "
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                My socials are linked here!
              </a>
            </article>

            <article>
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <div className="flex flex-col md:flex-row gap-6 mb-4">
                <img
                  src="/src/assets/project3/quizapp1.png"
                  alt="quiz app screenshot 1"
                  className="w-full md:w-1/2 h-72 md:h-96 object-cover rounded-lg shadow-md"
                />
                <img
                  src="/src/assets/project3/quizapp2.png"
                  alt="quiz app screenshot 2"
                  className="w-full md:w-1/2 h-72 md:h-96 object-cover rounded-lg shadow-md"
                />
              </div>
              <p className="mb-4">
                Designed and developed a quiz application using React.
              </p>
              <p>
                Project link:{" "}
                <a
                  href="https://vegram.github.io/quizapp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  https://vegram.github.io/quizapp/
                </a>
              </p>
            </article>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
