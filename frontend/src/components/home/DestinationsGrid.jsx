// frontend/src/components/home/DestinationsGrid.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DestinationsGrid({ packages = [] }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Top Destinations</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {packages.length ? packages.map((p) => (
          <motion.div key={p._id || p.id} whileHover={{ scale: 1.03 }} className="rounded-lg overflow-hidden shadow-sm bg-white">
            <Link to={`/packages/${p._id || p.id}`}>
              <img src={p.images?.[0] || "/assets/dest-placeholder.jpg"} alt={p.title} className="h-28 w-full object-cover" />
              <div className="p-2 text-sm font-medium">{p.title}</div>
            </Link>
          </motion.div>
        )) : Array.from({ length: 6 }).map((_, i) => <div key={i} className="animate-pulse h-28 bg-gray-100 rounded" />)}
      </div>
    </section>
  );
}
