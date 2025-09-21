// frontend/src/components/home/QuickSearch.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuickSearch() {
  const navigate = useNavigate();
  const [dest, setDest] = useState("");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState(2);

  const submit = (e) => {
    e?.preventDefault();
    // send user to packages page with query params (frontend filter)
    const q = new URLSearchParams();
    if (dest) q.set("destination", dest);
    if (date) q.set("date", date);
    if (people) q.set("people", people);
    navigate(`/packages?${q.toString()}`);
  };

  return (
    <form onSubmit={submit} className="bg-white rounded-xl shadow-md p-4 -mt-12 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <input value={dest} onChange={(e) => setDest(e.target.value)} placeholder="Where do you want to go?" className="border rounded px-4 py-2 md:col-span-2" />
        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="border rounded px-4 py-2" />
        <select value={people} onChange={(e) => setPeople(e.target.value)} className="border rounded px-4 py-2">
          {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} people</option>)}
        </select>
        <button type="submit" className="bg-amber-400 text-slate-900 font-semibold px-6 py-2 rounded">Search</button>
      </div>
    </form>
  );
}
