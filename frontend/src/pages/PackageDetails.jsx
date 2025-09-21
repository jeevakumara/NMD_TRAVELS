// src/pages/PackageDetails.jsx
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PackageDetails() {
  const { id } = useParams();

  // Dummy data (later replace with backend API)
  const packages = {
    1: {
      title: "Bali Getaway",
      price: "$899",
      duration: "5 Days / 4 Nights",
      image: "https://source.unsplash.com/800x500/?bali,beach",
      description:
        "Enjoy a relaxing Bali escape with beaches, temples, and cultural experiences. This package includes guided tours, luxury stays, and curated local experiences.",
      itinerary: [
        "Day 1: Arrival and welcome dinner",
        "Day 2: Ubud tour & Monkey Forest",
        "Day 3: Beach activities",
        "Day 4: Tanah Lot temple visit",
        "Day 5: Departure",
      ],
    },
    2: {
      title: "Swiss Alps Adventure",
      price: "$1499",
      duration: "7 Days / 6 Nights",
      image: "https://source.unsplash.com/800x500/?switzerland,mountains",
      description:
        "Explore the Swiss Alps with guided hiking tours, scenic train rides, and breathtaking landscapes. Perfect for adventure lovers and nature seekers.",
      itinerary: [
        "Day 1: Arrival in Zurich",
        "Day 2: Glacier Express train ride",
        "Day 3: Jungfrau region hike",
        "Day 4: Lake Geneva cruise",
        "Day 5: Chocolate factory visit",
        "Day 6: Free day for leisure",
        "Day 7: Departure",
      ],
    },
    3: {
      title: "Dubai Luxury Tour",
      price: "$1199",
      duration: "4 Days / 3 Nights",
      image: "https://source.unsplash.com/800x500/?dubai,city",
      description:
        "Experience luxury in Dubai with desert safaris, skyscraper views, and premium shopping. A perfect blend of adventure and relaxation.",
      itinerary: [
        "Day 1: Arrival & city tour",
        "Day 2: Desert safari & BBQ dinner",
        "Day 3: Burj Khalifa & shopping",
        "Day 4: Departure",
      ],
    },
    4: {
      title: "Paris Romantic Escape",
      price: "$999",
      duration: "6 Days / 5 Nights",
      image: "https://source.unsplash.com/800x500/?paris,eiffel",
      description:
        "Discover Paris with a romantic package featuring the Eiffel Tower, Seine cruise, and local gourmet experiences.",
      itinerary: [
        "Day 1: Arrival & Seine river cruise",
        "Day 2: Eiffel Tower & Louvre",
        "Day 3: Versailles Palace",
        "Day 4: Montmartre exploration",
        "Day 5: Free day for leisure",
        "Day 6: Departure",
      ],
    },
  };

  const pkg = packages[id];

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Package not found.
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20 pb-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image */}
        <motion.img
          src={pkg.image}
          alt={pkg.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-96 object-cover"
        />

        {/* Content */}
        <div className="p-8">
          <h1 className="text-4xl font-bold mb-4">{pkg.title}</h1>
          <p className="text-gray-600 mb-6">{pkg.description}</p>

          <div className="flex flex-wrap gap-6 mb-8">
            <p className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">
              Duration: {pkg.duration}
            </p>
            <p className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-semibold">
              Price: {pkg.price}
            </p>
          </div>

          {/* Itinerary */}
          <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
            {pkg.itinerary.map((day, i) => (
              <li key={i}>{day}</li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link to="/booking">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
