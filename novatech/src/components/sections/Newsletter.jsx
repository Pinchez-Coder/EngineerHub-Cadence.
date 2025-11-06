const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="bg-gradient-to-r from-primary via-accent to-secondary text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto text-center animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Connected with NovaTech
        </h2>
        <p className="text-slate-100 mb-8">
          Subscribe to get updates on smart-home innovations, new product
          launches, and exclusive offers — straight to your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-5 py-3 rounded-xl text-dark focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;