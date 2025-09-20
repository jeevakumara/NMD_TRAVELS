import React from "react";
import Card from "../components/Card";

const servicesData = [
  {
    image: "https://source.unsplash.com/400x300/?flight",
    title: "Flight Booking",
    description: "Book domestic and international flights at the best prices."
  },
  {
    image: "https://source.unsplash.com/400x300/?hotel",
    title: "Hotel Stays",
    description: "Find and book comfortable hotels worldwide with ease."
  },
  {
    image: "https://source.unsplash.com/400x300/?tour",
    title: "Tour Packages",
    description: "Explore pre-designed tour packages for your favorite destinations."
  }
];

const packagesData = [
  {
    image: "https://source.unsplash.com/400x300/?beach",
    title: "Maldives Beach Getaway",
    description: "Enjoy sun, sand, and sea in a luxury resort.",
    price: "$1,200"
  },
  {
    image: "https://source.unsplash.com/400x300/?mountains",
    title: "Himalayan Adventure",
    description: "Trek the majestic mountains with guided tours.",
    price: "$900"
  },
  {
    image: "https://source.unsplash.com/400x300/?city",
    title: "Paris City Lights",
    description: "Experience romance and culture in the city of love.",
    price: "$1,500"
  }
];

const Home = () => {
  return (
    <main className="pt-24">
      {/* Services Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Featured Packages Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packagesData.map((pkg, index) => (
              <Card
                key={index}
                image={pkg.image}
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="booking" className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Your Next Adventure?</h2>
        <p className="mb-8 text-lg md:text-xl">Book your trip today and explore the world with TravelCo!</p>
        <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Book Now
        </a>
      </section>
    </main>
  );
};

export default Home;
