import { testimonialImg } from "../../assets/images";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-light text-dark py-20 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto text-center animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Trusted by Thousands Worldwide
        </h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          From smart homes to large enterprises, NovaTech Systems has transformed
          spaces through innovative automation and seamless technology.
        </p>

        {/* Testimonial Card */}
        <div className="bg-white shadow-lg rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <img
            src={testimonialImg}
            alt="Client portrait"
            className="w-32 h-32 rounded-full object-cover border-4 border-primary"
            loading="lazy"
          />

          {/* Quote */}
          <div className="text-left space-y-4">
            <p className="text-lg italic text-slate-700">
              “NovaTech completely changed how we manage our office spaces.
              The automation is seamless, and energy savings have been incredible.”
            </p>
            <div>
              <h4 className="font-semibold text-primary">Sarah Johnson</h4>
              <p className="text-slate-500 text-sm">
                Operations Manager, BrightWave Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;