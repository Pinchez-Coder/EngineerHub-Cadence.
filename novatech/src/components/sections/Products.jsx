import Button from "../common/Button";

const products = [
  { 
  description:
    "AI-powered insights and predictive analytics for smarter decision-making.",
  image:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMGFuYWx5dGljcyUyMGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
}, 

  {
    title: "CloudX Platform",
    description:
      "Secure, scalable cloud infrastructure built for enterprise-grade performance.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "EdgeSync IoT",
    description:
      "Real-time data synchronization and device management at the network edge.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-[--color-light] text-[--color-dark] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-[--font-heading] font-bold mb-4">
          Our Products
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore our suite of intelligent solutions powering innovation across
          industries.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-2"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-[--font-heading] mb-2 text-[--color-primary]">
                  {product.title}
                </h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <Button>Learn More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}