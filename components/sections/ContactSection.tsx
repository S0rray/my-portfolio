import ScrollReveal from '@/components/ui/ScrollReveal';

const CONTACT_EMAIL = 'contact@o-code.fr';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative flex flex-col justify-center items-center min-h-[70vh] px-6 py-24"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <ScrollReveal className="w-full max-w-5xl flex flex-col items-center text-center gap-6">
        <p
          className="text-3xl sm:text-4xl md:text-5xl leading-tight"
          style={{ color: 'var(--text)', fontFamily: 'var(--font-display)' }}
        >
          Votre projet commence ici.
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="contact-email text-base sm:text-lg underline underline-offset-4"
          style={{ fontFamily: 'var(--font-ui)' }}
        >
          {CONTACT_EMAIL}
        </a>
      </ScrollReveal>
    </section>
  );
}
