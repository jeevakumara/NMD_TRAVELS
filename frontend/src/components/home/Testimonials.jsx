// frontend/src/components/home/Testimonials.jsx
import { motion } from "framer-motion";

export default function Testimonials({ items = [] }) {
  return (
    <section className="mt-12 mb-12">
      <h2 className="text-2xl font-semibold mb-4">What travellers say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.length ? items.map((t, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} className="bg-white rounded-lg p-5 shadow">
            <div className="flex items-center gap-3">
              <img src={t.avatarUrl || "/assets/avatar-placeholder.png"} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-slate-500">{t.location}</div>
              </div>
            </div>
            <p className="mt-3 text-slate-700">{t.text}</p>
            <div className="mt-3 text-sm text-amber-500">{"★".repeat(Math.round(t.rating || 5))}</div>
          </motion.div>
        )) : Array.from({ length: 3 }).map((_, i) => <div key={i} className="animate-pulse h-36 bg-gray-100 rounded" />)}
      </div>
    </section>
  );
}
