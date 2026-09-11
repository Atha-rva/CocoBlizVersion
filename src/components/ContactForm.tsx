import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  product_requirement: string;
  message: string;
  website: string; // honeypot
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product_requirement: '',
  message: '',
  website: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const update = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.trim()) return 'Please enter your email address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email address.';
    if (!form.message.trim()) return 'Please enter a message.';
    if (form.message.length > 2000) return 'Message is too long (max 2000 characters).';
    return null;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot — silently succeed for bots
    if (form.website) {
      setStatus('success');
      setForm(initialState);
      return;
    }

    const error = validate();
    if (error) {
      setStatus('error');
      setErrorMessage(error);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error: dbError } = await supabase.from('contact_submissions').insert({
        name: form.name.trim(),
        company: form.company.trim() || null,
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        product_requirement: form.product_requirement.trim() || null,
        message: form.message.trim(),
      });

      if (dbError) {
        console.error('Submission error:', dbError);
        throw new Error('Something went wrong. Please try again or email us directly.');
      }

      setStatus('success');
      setForm(initialState);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-white p-8 md:p-12 shadow-lg shadow-coco-green/5 text-center animate-scale-in">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-coco-green/10">
          <CheckCircle2 className="h-8 w-8 text-coco-green" />
        </div>
        <h3 className="font-display text-2xl font-bold text-coco-green mb-3">
          Thank you.
        </h3>
        <p className="text-coco-dark/60 leading-relaxed max-w-md mx-auto">
          Your enquiry has been received. We'll get back to you shortly — usually within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm font-semibold text-coco-green hover:text-coco-deep transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-coco-green/15 bg-coco-cream/40 px-4 py-3.5 text-sm text-coco-dark placeholder:text-coco-dark/30 transition-all duration-300 focus:border-coco-green/40 focus:bg-white focus:outline-none focus:ring-2';

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-8 md:p-10 shadow-lg shadow-coco-green/5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-coco-green mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClass}
            placeholder="Jane Doe"
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-coco-green mb-2">
            Company
          </label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            className={inputClass}
            placeholder="Your company (optional)"
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-coco-green mb-2">
            Email *
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass}
            placeholder="jane@example.com"
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-coco-green mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClass}
            placeholder="+94 77 123 4567"
            disabled={status === 'loading'}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="block text-xs font-semibold text-coco-green mb-2">
          Product / Requirement
        </label>
        <input
          type="text"
          value={form.product_requirement}
          onChange={(e) => update('product_requirement', e.target.value)}
          className={inputClass}
          placeholder="e.g. Virgin Coconut Oil — bulk enquiry"
          disabled={status === 'loading'}
        />
      </div>

      <div className="mt-5">
        <label className="block text-xs font-semibold text-coco-green mb-2">
          Message *
        </label>
        <textarea
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your requirements..."
          disabled={status === 'loading'}
        />
      </div>

      {/* Honeypot — hidden from users */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label>
          Website (leave empty)
          <input
            type="text"
            value={form.website}
            onChange={(e) => update('website', e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {status === 'error' && (
        <div className="mt-5 flex items-start gap-3 rounded-xl bg-red-50 border border-red-100 px-4 py-3.5 animate-fade-in">
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary mt-6 w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Enquiry
          </>
        )}
      </button>
    </form>
  );
}
