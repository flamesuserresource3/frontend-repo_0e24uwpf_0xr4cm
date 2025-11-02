import { Shield, GraduationCap } from "lucide-react";

export default function HeroSection() {
  return (
    <header className="relative bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-800 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-amber-400" />
          <span className="font-semibold tracking-wide">LexPro Chambers</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#teaching" className="hover:text-white transition">Teaching</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-md bg-amber-500/90 hover:bg-amber-500 text-zinc-900 px-4 py-2 font-medium transition">
          Book a Consultation
        </a>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-20 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-amber-300/90 text-sm border border-amber-400/30 rounded-full px-3 py-1 mb-4">
            <GraduationCap className="h-4 w-4" /> Visiting Faculty • Legal Strategist
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Trusted Counsel for Complex Matters. Dedicated Mentor for Future Lawyers.
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            I help individuals, startups, and enterprises navigate risk with clarity and confidence while
            empowering students with real-world legal training in the classroom.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center rounded-md bg-amber-500 text-zinc-900 px-5 py-3 font-medium hover:bg-amber-400 transition">
              Schedule a Call
            </a>
            <a href="#services" className="inline-flex justify-center rounded-md border border-zinc-700 px-5 py-3 font-medium text-white hover:bg-zinc-800 transition">
              Explore Services
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-zinc-400">
            <div>
              <span className="block text-white font-semibold">10+ years</span>
              Experience
            </div>
            <div>
              <span className="block text-white font-semibold">200+ cases</span>
              Resolved
            </div>
            <div>
              <span className="block text-white font-semibold">4.9/5</span>
              Client Rating
            </div>
          </div>
        </div>
        <div className="md:pl-8">
          <div className="relative rounded-xl border border-zinc-700 bg-zinc-900/60 p-6 shadow-xl">
            <div className="aspect-[4/3] w-full rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-700 grid place-items-center">
              <Shield className="h-24 w-24 text-amber-400" />
            </div>
            <div className="mt-4 text-sm text-zinc-300">
              Tailored legal solutions with an emphasis on strategy, compliance, and advocacy.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
