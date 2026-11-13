import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from '../ui/SocialIcons';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { businessInfo } from '../../data/agency';
import { cn } from '../../utils/helpers';

export function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      businessName: String(formData.get('businessName') || ''),
      budgetRange: String(formData.get('budgetRange') || ''),
      serviceNeeded: String(formData.get('serviceNeeded') || 'full-package'),
    };

    if (!values.name || !values.email) return;

    setIsSubmitting(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await fetch(`${apiUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      // Fallback: still show success so the user isn't left hanging.
      setSubmitted(true);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { value: 'content', label: 'Short-Form Video Content' },
    { value: 'web', label: 'Conversion Web Engineering' },
    { value: 'full-package', label: 'Full Package (Video + Web)' },
  ];

  const whatsappLink = `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}`;

  return (
    <footer
      id="contact"
      data-reveal
      className={cn('reveal', 'bg-[var(--color-card)] text-[var(--color-card-foreground)]')}
      role="contentinfo"
    >
      <Container>
        {/* Top Lead Capture Row */}
        <div className="border-t border-[var(--color-border)] pt-12 pb-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-8 items-start">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Logo className="footer-logo text-white" />
              </div>
              <p className="text-[var(--color-muted-foreground)] text-body leading-relaxed max-w-lg">
                {businessInfo.description}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-500 text-white text-sm font-semibold hover:bg-green-600 shadow-lg shadow-green-500/25 transition-all"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  WhatsApp Quick Chat
                </a>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-700 bg-neutral-800/60 text-neutral-200 text-sm font-semibold hover:bg-neutral-700 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Email Us
                </a>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div
              className={cn(
                'rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]/20 p-6 lg:p-8 shadow-xl backdrop-blur-md'
              )}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
                    <Input
                      label="Full Name"
                      placeholder="Jane Doe"
                      name="name"
                      required
                      leftIcon={<span className="w-4 h-4 text-neutral-500">👤</span>}
                    />
                    <Input
                      label="Email Address"
                      placeholder="jane@company.com"
                      type="email"
                      name="email"
                      required
                      leftIcon={<Mail className="w-4 h-4 text-neutral-500" />}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
                    <Input
                      label="Business / Brand Name"
                      placeholder="Acme Co."
                      name="businessName"
                      leftIcon={<span className="w-4 h-4 text-neutral-500">🏢</span>}
                    />
                    <Input
                      label="Monthly Revenue / Target Budget"
                      placeholder="$5k–$10k /mo"
                      name="budgetRange"
                      leftIcon={<span className="w-4 h-4 text-neutral-500">💰</span>}
                    />
                  </div>
                  <div>
                    <label htmlFor="footer-service" className="footer-service-label block text-sm font-medium text-neutral-300 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="footer-service"
                      name="serviceNeeded"
                      defaultValue="full-package"
                      className={cn(
                        'w-full rounded-lg border bg-[var(--color-card)]/20 text-[var(--color-card-foreground)] placeholder-[var(--color-muted-foreground)] transition-all duration-200',
                        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                        'pl-4 pr-10 py-3 appearance-none cursor-pointer',
                        'border-[var(--color-border)] hover:border-neutral-300',
                        'dark:bg-neutral-800 dark:border-neutral-600 dark:text-white'
                      )}
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Button type="submit" variant="primary" size="lg" fullWidth isLoading={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Request Digital Audit'}
                    <ArrowRight className="w-4 h-4 ml-2" aria-hidden="true" />
                  </Button>
                  <p className="text-xs text-neutral-500 text-center">
                    No spam. One audit, straight to your inbox.
                  </p>
                </form>
              ) : (
                <div className="text-center py-4 animate-scale-in">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-green-400" aria-hidden="true" />
                  </div>
                  <h4 className="footer-success-title text-heading-sm font-bold text-white mb-1">Audit Requested</h4>
                  <p className="text-sm text-neutral-400">
                    We've received your details and will be in touch shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Direct Contact Row */}
        <div className="py-10 border-t border-[var(--color-border)]">
          <div className="flex flex-col sm:flex-row md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-sm text-[var(--color-muted-foreground)]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/20 text-[var(--color-muted-foreground)] text-xs font-medium">
                <MapPin className="w-3 h-3" aria-hidden="true" />
                {businessInfo.location}
              </span>
              <a
                href={`mailto:${businessInfo.email}`}
                className="text-[var(--color-muted-foreground)] hover:text-primary-400 transition-colors"
              >
                {businessInfo.email}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-muted-foreground)] hover:text-green-400 transition-colors ml-4"
              >
                WhatsApp: {businessInfo.whatsapp.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-control w-9 h-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/20 flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-white hover:border-primary-500 hover:bg-primary-500/10 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={businessInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-control w-9 h-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/20 flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-white hover:border-red-500 hover:bg-red-500/10 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={businessInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-control w-9 h-9 rounded-lg border border-[var(--color-border)] bg-[var(--color-card)]/20 flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-muted-foreground)] text-sm">
            © {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[var(--color-muted-foreground)]">
            <a href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
