// frontend/src/components/home/HeroSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection({ data }) {
  const fallback = {
    title: "Explore the world with TravelCo",
    subtitle: "Handpicked packages · Local experts · Hassle-free travel",
    bg: "/assets/hero-default.jpg",
    cta: { text: "View Packages", href: "/packages" },
    ctaSecondary: { text: "Contact Us", href: "/contact" },
  };

  const content = data || fallback;

  return (
    <section
      className="relative h-[72vh] min-h-[520px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(7,18,45,0.45), rgba(7,18,45,0.45)), url(${content.bg})`,
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            {content.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90">{content.subtitle}</p>

          <div className="mt-8 flex gap-4">
            <Link to={content.cta?.href || "/packages"} className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-[1.02]">
              {content.cta?.text || "View Packages"}
            </Link>
            <Link to={content.ctaSecondary?.href || "/contact"} className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-3 rounded-lg hover:bg-white/5">
              {content.ctaSecondary?.text || "Contact Us"}
            </Link>
          </div>

          <div className="mt-6">
            {/* Mini highlights */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/10 px-3 py-2 rounded-md">Best Price Guarantee</div>
              <div className="bg-white/10 px-3 py-2 rounded-md">Trusted Local Guides</div>
              <div className="bg-white/10 px-3 py-2 rounded-md">Flexible Dates</div>
              <div className="bg-white/10 px-3 py-2 rounded-md">24/7 Support</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* stylized footer card on hero */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-[92%] md:w-[70%]">
        <div className="bg-white rounded-xl shadow-xl p-4">
          <div className="max-w-4xl mx-auto">
            {/* Place Quick Search component here if you want a compact hero search */}
            <p className="text-sm text-slate-500">Quick Booking</p>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
              <input placeholder="Destination" className="border rounded px-3 py-2" />
              <input type="date" className="border rounded px-3 py-2" />
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
