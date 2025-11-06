import { aboutImg } from "../../assets/images";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white text-dark flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 py-20 gap-10"
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img
          src={aboutImg}
          alt="Smart home technology system control panel"
          className="w-full max-w-lg rounded-3xl shadow-lg object-cover"
          loading="lazy"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 space-y-6 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold">
          Shaping the Future of Smart Living
        </h2>
        <p className="text-slate-600 leading-relaxed">
          At <span className="font-semibold text-primary">NovaTech Systems</span>, 
          we believe that technology should simplify life — not complicate it.
          Our mission is to create intelligent environments that adapt to your
          needs, improve energy efficiency, and enhance everyday comfort.
        </p>
        <p className="text-slate-600 leading-relaxed">
          From connected lighting to AI-driven automation, we’re redefining how
          homes and businesses interact with technology — one innovation at a
          time.
        </p>
        <a
          href="#products"
          className="inline-block font-semibold text-primary hover:underline"
        >
          Discover Our Technology →
        </a>
      </div>
    </section>
  );
};

export default About;