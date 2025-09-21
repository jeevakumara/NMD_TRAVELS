// frontend/src/components/home/FeaturedPackages.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function PackageCard({ p }) {
  const img = p.images?.[0] || "/assets/package-placeholder.jpg";
  return (
    <motion.div whileHover={{ y: -6 }} className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={img} alt={p.title} className="h-44 w-full object-cover" />
      <div className="p-4">
        <h3 className="font-semibold">{p.title}</h3>
        <p className="text-sm text-slate-600 mt-1">{p.shortDesc}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-bold">₹{p.price}</div>
          <Link to={`/packages/${p._id || p.id}`} className="text-sm bg-blue-600 text-white px-3 py-1 rounded">View</Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedPackages({ packages = [] }) {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Featured Packages</h2>
        <a href="/packages" className="text-sm text-blue-600">View all</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.length ? packages.map((p) => <PackageCard key={p._id || p.id} p={p} />) : (
          // skeleton placeholders
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="animate-pulse bg-gray-100 h-56 rounded-lg" />
          ))
        )}
      </div>
    </section>
  );
}
