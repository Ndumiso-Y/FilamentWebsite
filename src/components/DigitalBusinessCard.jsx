import { useEffect } from 'react';
import {
  Download,
  Mail,
  Phone,
  MessageCircle,
  Globe,
  BriefcaseBusiness,
  Building2,
  MapPin,
  ArrowLeft,
} from 'lucide-react';
import Logo from '../assets/Filament-logo.png';
import CardImage from '../assets/images/CardImage.png';
import { digitalCards } from '../data/digitalCards';

const homeUrl = 'https://www.filament-transformation.com';

const normalizePhone = (phone) => phone.replace(/[^\d]/g, '');

const getInitials = (person) =>
  person.initials ||
  person.fullName
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 3)
    .join('')
    .toUpperCase();

const buildVCard = (person) =>
  [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${person.fullName}`,
    `ORG:${person.organisation}`,
    `TITLE:${person.title}`,
    `EMAIL;TYPE=INTERNET:${person.email}`,
    `TEL;TYPE=CELL:${person.phone}`,
    `URL:${person.website}`,
    `ADR;TYPE=WORK:;;${person.address};;;;`,
    'END:VCARD',
  ].join('\r\n');

function PlatformMark({ children }) {
  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-current text-[11px] font-black leading-none"
      aria-hidden="true"
    >
      <span className="text-white">{children}</span>
    </span>
  );
}

function CardButton({ href, icon: Icon, label, onClick, variant = 'secondary', children }) {
  const isExternal = href?.startsWith('http');
  const variants = {
    primary:
      'border-filament-blue bg-filament-blue text-white shadow-lg shadow-filament-blue/20 hover:bg-filament-blue-dark hover:border-filament-blue-dark',
    accent:
      'border-filament-orange bg-filament-orange text-white shadow-lg shadow-orange-500/20 hover:bg-filament-orange-dark hover:border-filament-orange-dark',
    secondary:
      'border-slate-200 bg-white text-filament-blue shadow-sm hover:border-filament-orange hover:text-filament-orange hover:shadow-md',
    soft:
      'border-slate-200 bg-filament-light text-filament-charcoal shadow-sm hover:border-filament-blue hover:text-filament-blue hover:shadow-md',
  };

  return (
    <a
      href={href}
      onClick={onClick}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`flex min-h-12 items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-filament-orange ${variants[variant]}`}
    >
      {Icon ? <Icon className="h-5 w-5 shrink-0" aria-hidden="true" /> : children}
      <span>{label}</span>
    </a>
  );
}

function NotFoundCard() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.22),transparent_28%),linear-gradient(135deg,#0F1E36,#1E293B)] px-4 py-10 text-filament-charcoal">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center justify-center">
        <section className="w-full overflow-hidden rounded-2xl bg-white text-center shadow-2xl ring-1 ring-white/20">
          <div className="h-28 bg-filament-blue">
            <img
              src={CardImage}
              alt=""
              className="h-full w-full object-cover object-[58%_48%] opacity-75"
            />
          </div>
          <div className="p-8">
          <img src={Logo} alt="Filament logo" className="mx-auto h-14 w-auto object-contain" />
          <h1 className="mt-8 text-2xl font-black text-filament-blue">Digital card not found</h1>
          <p className="mt-3 text-sm leading-6 text-filament-slate">
            This direct-access Filament digital business card could not be found.
          </p>
          <a
            href={homeUrl}
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-filament-orange px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-filament-orange-dark focus-visible:ring-white"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            Back to Filament
          </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function DigitalBusinessCard({ slug }) {
  const person = digitalCards.find((card) => card.slug === slug);

  useEffect(() => {
    const robotsMeta =
      document.querySelector('meta[name="robots"]') || document.createElement('meta');
    robotsMeta.setAttribute('name', 'robots');
    robotsMeta.setAttribute('content', 'noindex,nofollow');
    document.head.appendChild(robotsMeta);

    if (person) {
      document.title = `${person.fullName} | Filament Digital Card`;
    } else {
      document.title = 'Digital card not found | Filament';
    }
  }, [person]);

  if (!person) {
    return <NotFoundCard />;
  }

  const whatsappUrl = `https://wa.me/${normalizePhone(person.whatsapp)}`;

  const downloadVCard = (event) => {
    event.preventDefault();
    const blob = new Blob([buildVCard(person)], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${person.slug}.vcf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.22),transparent_28%),linear-gradient(135deg,#0F1E36_0%,#1E293B_54%,#0B1526_100%)] px-4 py-6 text-filament-charcoal sm:py-10">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-xl items-center">
        <section className="w-full overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-950/30 ring-1 ring-white/20">
          <div className="relative h-48 overflow-hidden bg-filament-blue sm:h-60">
            <img
              src={CardImage}
              alt="Operational excellence control room overlooking a mining environment"
              className="absolute inset-0 h-full w-full object-cover object-[56%_46%]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-filament-blue/40 via-filament-blue/8 to-filament-blue/54" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/28 to-transparent" />
            <div className="absolute left-0 top-0 h-full w-1.5 bg-filament-orange" aria-hidden="true" />

            <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-2xl bg-white/92 px-4 py-3 shadow-xl shadow-slate-950/20 ring-1 ring-white/60 backdrop-blur-sm sm:px-5">
                  <img
                    src={Logo}
                    alt="Filament logo"
                    className="h-16 w-auto object-contain sm:h-20"
                  />
                </div>
                <span className="rounded-full border border-white/25 bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  {person.logoType}
                </span>
              </div>

              <div className="max-w-xs pb-2">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-white drop-shadow">
                  Digital Business Card
                </p>
                <div className="mt-2 h-0.5 w-20 rounded-full bg-filament-orange shadow-sm" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="relative z-20 px-6 pb-7 sm:px-8">
            <header className="-mt-10 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-filament-blue text-3xl font-black tracking-normal text-white shadow-2xl ring-4 ring-white sm:h-28 sm:w-28 sm:text-4xl">
                {person.profileImage ? (
                  <img
                    src={person.profileImage}
                    alt={`${person.fullName} profile`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span>{getInitials(person)}</span>
                )}
              </div>

              <h1 className="mt-5 text-3xl font-black leading-tight text-filament-blue sm:text-4xl">
                {person.fullName}
              </h1>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-filament-charcoal">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-filament-orange ring-1 ring-orange-100">
                  <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                  {person.title}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-filament-blue ring-1 ring-slate-200">
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                  {person.organisation}
                </span>
              </div>
              <p className="mx-auto mt-4 max-w-sm text-sm font-semibold leading-6 text-filament-slate">
                {person.tagline}
              </p>
            </header>

            <div className="mt-6 flex items-start justify-center gap-2 rounded-xl border border-slate-200 bg-filament-light px-4 py-3 text-center text-sm font-semibold leading-6 text-filament-charcoal">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-filament-orange" aria-hidden="true" />
              <span>{person.address}</span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <CardButton
                href="#"
                icon={Download}
                label="Save Contact"
                onClick={downloadVCard}
                variant="primary"
              />
              <CardButton href={`mailto:${person.email}`} icon={Mail} label="Email" variant="accent" />
              <CardButton href={`tel:${normalizePhone(person.phone)}`} icon={Phone} label="Call" />
              <CardButton href={whatsappUrl} icon={MessageCircle} label="WhatsApp" />
              <CardButton href={person.website} icon={Globe} label="Visit Website" variant="soft" />
              {person.linkedin ? (
                <CardButton href={person.linkedin} label="LinkedIn" variant="soft">
                  <PlatformMark>in</PlatformMark>
                </CardButton>
              ) : null}
              <CardButton href={person.facebook} label="Facebook" variant="soft">
                <PlatformMark>f</PlatformMark>
              </CardButton>
              <CardButton href={person.instagram} label="Instagram" variant="soft">
                <PlatformMark>ig</PlatformMark>
              </CardButton>
            </div>

            <footer className="mt-7 border-t border-slate-200 pt-5 text-center">
              <p className="text-xs font-medium text-slate-500">
                Digital card powered by{' '}
                <a
                  href="https://www.embarkdigitals.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-600 underline underline-offset-2 transition hover:text-filament-orange"
                >
                  Embark Digitals
                </a>
                .
              </p>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}
