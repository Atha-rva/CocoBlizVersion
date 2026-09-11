import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/config/site';

export function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-coco-cream to-coco-sandlight/30">
        <div className="container-coco text-center max-w-3xl mx-auto">
          <div className="mb-6 flex items-center justify-center gap-2.5 animate-fade-in-up">
            <span className="h-px w-8 bg-accent-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent-gold">
              Contact Us
            </span>
            <span className="h-px w-8 bg-accent-gold" />
          </div>
          <h1 className="text-display font-extrabold text-coco-green animate-fade-in-up animate-delay-100">
            Let's start a
            <span className="text-gradient-gold"> conversation.</span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-coco-dark/60 leading-relaxed animate-fade-in-up animate-delay-200">
            Whether you're interested in bulk supply, private label opportunities, or simply want to learn more about our products, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-coco">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Left — Info */}
            <div className="lg:col-span-2">
              <Reveal direction="left">
                <SectionHeading
                  eyebrow="Get in Touch"
                  title="Contact information"
                  align="left"
                />
                <p className="mt-5 text-coco-dark/55 leading-relaxed">
                  Reach out through any of the channels below, or fill out the form and we'll get back to you within one business day.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    { icon: Mail, label: 'Email', value: siteConfig.email },
                    { icon: Phone, label: 'Phone', value: siteConfig.phone },
                    { icon: MapPin, label: 'Address', value: siteConfig.address },
                    { icon: Clock, label: 'Response Time', value: 'Within 1 business day' },
                  ].map((item, i) => (
                    <Reveal key={item.label} delay={i * 80} direction="left">
                      <div className="group flex items-start gap-4 transition-transform duration-300 hover:translate-x-1">
                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-coco-green/8 text-coco-green transition-all duration-500 group-hover:bg-coco-green group-hover:text-coco-cream group-hover:scale-110">
                          <item.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-coco-dark/40 mb-0.5">
                            {item.label}
                          </div>
                          <div className="text-sm font-medium text-coco-green">
                            {item.value}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Highlight card */}
                <div className="mt-10 rounded-2xl bg-coco-green p-6 transition-transform duration-500 hover:scale-[1.02]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gold/20 text-accent-gold mb-4">
                    <MessageSquare className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-coco-cream mb-2">
                    Business Enquiries
                  </h3>
                  <p className="text-sm text-coco-cream/60 leading-relaxed">
                    For bulk orders, private label, or distribution partnerships, please mention your requirements in the form and we'll connect you with the right team.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <Reveal direction="right">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
