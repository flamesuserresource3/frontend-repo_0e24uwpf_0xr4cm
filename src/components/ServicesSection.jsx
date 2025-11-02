import { Briefcase, Shield, Scale, FileText } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Business & Startup Advisory",
    desc: "Entity structuring, investment documentation, founders' agreements, and risk audits.",
  },
  {
    icon: FileText,
    title: "Contracts & Documentation",
    desc: "Drafting and vetting of MSAs, NDAs, employment, vendor, and service agreements.",
  },
  {
    icon: Scale,
    title: "Disputes & Arbitration",
    desc: "Efficient strategies for negotiation, mediation, and arbitral proceedings.",
  },
  {
    icon: Shield,
    title: "Compliance & Policy",
    desc: "Policy frameworks, data protection, POSH compliance, and regulatory guidance.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Legal Services Tailored to You
          </h2>
          <p className="mt-3 text-zinc-600">
            From early-stage ventures to established enterprises, I deliver practical, outcome-driven counsel.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-zinc-200 bg-white p-5 hover:shadow-lg transition">
              <div className="h-10 w-10 rounded-md bg-amber-100 text-amber-700 grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-zinc-900">{title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
