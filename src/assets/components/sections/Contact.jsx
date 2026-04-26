import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen scroll-mt-16 flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-800 text-white"
    >
      <RevealOnScroll>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-xl mb-8">Feel free to reach out to me!</p>
          <p>Email: ovega5@live.com </p>
          <p>Phone: (407) 616-7630</p> <br />
          <a
            href="https://www.linkedin.com/in/omar-vega-88972924b
"
            className="text-blue-400 hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>
      </RevealOnScroll>
    </section>
  );
};
