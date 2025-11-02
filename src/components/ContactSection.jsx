import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Let's discuss your matter
          </h2>
          <p className="mt-3 text-zinc-600">
            Share a brief overview and we'll schedule a consultation. Students can also reach out for
            mentoring and workshop requests.
          </p>

          <div className="mt-8 space-y-4 text-zinc-700">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-amber-600 mt-0.5" />
              <a href="mailto:contact@lexprochambers.com" className="hover:underline">
                contact@lexprochambers.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-amber-600 mt-0.5" />
              <a href="tel:+10000000000" className="hover:underline">+1 (000) 000-0000</a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-amber-600 mt-0.5" />
              <span>Downtown, Your City</span>
            </div>
          </div>
        </div>

        <div className="md:pl-8">
          <form className="rounded-xl border border-zinc-200 p-6 bg-zinc-50">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-600 mb-1">Full Name</label>
                <input type="text" className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-zinc-600 mb-1">Email</label>
                <input type="email" className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" placeholder="jane@email.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-zinc-600 mb-1">Subject</label>
              <input type="text" className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" placeholder="Consultation / Workshop / Other" />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-zinc-600 mb-1">Message</label>
              <textarea className="w-full min-h-[120px] rounded-md border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500" placeholder="Tell me a little about your needs..." />
            </div>
            <button type="button" className="mt-5 inline-flex rounded-md bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 font-medium transition">
              Send Message
            </button>
            <p className="mt-2 text-xs text-zinc-500">This demo form does not send emails. Connect your preferred form backend to enable submissions.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
