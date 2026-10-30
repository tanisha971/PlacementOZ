
export default function ContactUs() {
  return (
    <section
      id="contactus"
      className="bg-background py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/10 to-placement-blue/10 p-8 transition-colors duration-300 md:p-12 lg:p-16">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Contact information */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Contact Us
              </span>

              <h2 className="mt-3 text-4xl font-bold text-text-primary md:text-5xl">
                Let's build better
                <span className="bg-gradient-to-r from-placement-purple via-placement-pink to-placement-blue bg-clip-text text-transparent">
                  {" "}placements.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-text-secondary">
                Have a question, suggestion or want to collaborate with
                PlacementOZ? We'd love to hear from you.
              </p>
            </div>

            {/* Contact form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-border bg-surface px-5 py-3.5 text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-border bg-surface px-5 py-3.5 text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
              />

              <textarea
                rows="4"
                placeholder="How can we help?"
                className="w-full resize-none rounded-xl border border-border bg-surface px-5 py-3.5 text-text-primary outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/10"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-placement-purple to-placement-blue py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-primary/20"
              >
                Send Message →
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
