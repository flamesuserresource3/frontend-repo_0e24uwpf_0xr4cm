import { GraduationCap, BookOpen } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Advocate. Educator. Ethical Advisor.
          </h2>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            With a decade of courtroom and advisory experience, I specialize in business law, contracts,
            dispute resolution, and compliance. As a visiting faculty member, I bridge the gap between
            theory and practice, helping students and young professionals develop strong legal reasoning
            and practical advocacy skills.
          </p>
          <div id="teaching" className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="rounded-lg border border-zinc-200 p-4">
              <div className="flex items-center gap-2 text-zinc-900 font-medium">
                <GraduationCap className="h-5 w-5 text-amber-600" /> Visiting Faculty
              </div>
              <p className="text-sm text-zinc-600 mt-2">
                Interactive modules on contract drafting, legal research, and mooting.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 p-4">
              <div className="flex items-center gap-2 text-zinc-900 font-medium">
                <BookOpen className="h-5 w-5 text-amber-600" /> Workshops & Mentoring
              </div>
              <p className="text-sm text-zinc-600 mt-2">
                Case-study driven sessions and one-on-one career guidance for law students.
              </p>
            </div>
          </div>
        </div>
        <div className="md:pl-8">
          <div className="rounded-xl border border-zinc-200 p-6 bg-gradient-to-br from-amber-50 to-white">
            <ul className="space-y-4 text-zinc-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-600" /> Client-first advocacy with clear, actionable guidance
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-600" /> Transparent fees and timely communication
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-600" /> Strong courtroom and negotiation experience
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-600" /> Passionate about building the next generation of lawyers
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
