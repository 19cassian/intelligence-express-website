import React, { useState } from 'react';
import {
  Sun, Moon, Menu, X, ArrowRight, ArrowUp, Zap, Globe2, ShieldCheck,
  Ship, TrainFront, Anchor, Plane, Package, Truck, ClipboardList,
  MapPin, Phone, Mail, Check, ChevronDown, Languages
} from 'lucide-react';

import intelligenceImg from './assets/intelligence.jpg'
import amriImg from './assets/amrisaly.jpg'
import mikeImg from './assets/mike.jpg'
import abasImg from './assets/abas.jpg'
import blissImg from './assets/bliss.jpg'



const translations = {
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', faq: 'FAQ', team: ' Team', contact: 'Contact', track: 'Track Parcel' },
    hero: {
      titleA: 'Powering Bussiness with Logistic Services accross',
      titleB: 'Tanzania & East Africa',
      titleC: 'on time.',
      desc: 'Express door-to-door parcel delivery, seamless regional cross-border freighting, and East Africa & air cargo solutions tailored for reliability and speed.',
      trackLabel: 'Live Shipment Tracking',
      trackPlaceholder: 'Enter Tracking ID (e.g., IE-98402)',
      trackBtn: 'Track Now',
      trackErr: 'Please enter a valid tracking code.',
      trackSuccess: (id) => `Parcel #${id}: In Transit (Arriving Dar es Salaam HQ)`
    },
    metrics: {
      support: '24/7', supportLabel: 'Live Support & Dispatch',
      coverage: '100%', coverageLabel: 'East Africa Regional Coverage',
      customs: 'Customs', customsLabel: 'Seamless Port & Border Clearance'
    },
    ticker: 'Trusted by Global Trade Leaders & Enterprise Retailers',
    about: {
      kicker: 'Our Heritage & Cross-boarder Reach',
      title: 'Connecting Tanzania & East Africa directly as  market hubs.',
      p1: 'Founded with a vision to revolutionize logistics across Tanzania and the broader East African region,',
      p1b: 'Intelligence Express',
      p1c: 'combines deep local ground infrastructure with international air and maritime networks.',
      p2: 'Whether transporting vital business parcels from Dar es Salaam nationwide or to regional capitals like Nairobi and Kampala, or clearing heavy industrial cargo through major maritime ports, our mission is built on speed, security, and absolute transparency.',
      tag1: 'Licensed Customs Clearing',
      tag2: 'End-to-End Warehousing',
      stat1: 'Parcels Delivered', stat1d: 'Annual doorstep fulfilled orders across East Africa.',
      stat2: 'Global Destinations', stat2d: 'Connected sea routes & daily international flights.',
      stat3: 'On-Time Delivery', stat3d: 'Precision dispatch & real-time GPS tracking.',
      stat4: 'Regional Express', stat4d: 'Next-day intra-EAC border customs transit.'
    },
    services: {
      kicker: 'Integrated Logistics Solutions',
      title: 'Engineered for Speed, Precision & Security',
      desc: 'From localized urban parcel deliveries to multi-modal international freighting.',
      items: [
        { title: 'Domestic Express Courier', desc: 'Tanzania-wide express parcel delivery with same-day and next-day options across Dar es Salaam, Arusha, Mwanza, and Dodoma.', Icon: Zap },
        { title: 'East Africa Cross-Border', desc: 'Dedicated regional overland freight services connecting Kenya, Uganda, Rwanda, Burundi, and DRC via optimized highway corridors.', Icon: Truck },
        { title: 'International Air & Sea', desc: 'Full Container Load (FCL), LCL, and scheduled charter air freight solutions connecting Africa with Asia, Europe, and Americas.', Icon: Plane },
        { title: 'Customs & Port Logistics', desc: 'Streamlined tariff compliance, port documentation, and rapid clearance management at Dar port and border checkpoints.', Icon: ClipboardList }
      ]
    },
    faqTitle: { kicker: 'Got Questions?', title: 'Frequently Asked Questions' },
    faqs: [
      { q: 'What areas do you cover within Tanzania and East Africa?', a: 'We offer comprehensive coverage across all major Tanzanian regions (including Dar es Salaam, Dodoma, Arusha, Mwanza, and Mbeya) as well as cross-border transport to Kenya, Uganda, Rwanda, Burundi, and Eastern DRC.' },
      { q: 'How does live shipment tracking work?', a: 'Once your shipment is registered, you receive an automated Tracking ID. Simply input this number into the quick tracking box on our homepage to view real-time location checkpoints and projected arrival times.' },
      { q: 'Do you handle customs clearance for international ocean and air freight?', a: 'Yes. Our in-house customs brokerage team manages all paperwork, duties calculation, regulatory compliance, and clearance processes directly at sea ports and international airports.' },
      { q: 'What types of goods or cargo can be transported?', a: 'We accommodate everything from small confidential documents and e-commerce parcels to heavy industrial equipment, perishable goods, and full container commercial loads.' }
    ],
    testimonialsTitle: {
      kicker: 'Customer Reviews',
      title: 'What Our Business Partners/Customers Say'
    },
    testimonials: [
      {
        quote: 'Intelligence Express transported our school equipment from the Port of Kenya to Arusha ahead of schedule. Their customs clearance handling is unmatched.',
        name: 'Juma Rashidi',
        title: 'Logistics Manager, St. Jude Schools (Arusha)',
        location: 'Arusha, Tanzania'
      },
      {
        quote: 'Real-time tracking and excellent customer service give us absolute peace of mind for our regional shipments.',
        name: 'Sarah Mukotya',
        title: 'Supply Chain Director',
        location: 'Nairobi, Kenya'
      },
      {
        quote: 'Reliable air freight with high security and transparency. They are our main partner for China-Tanzania imports.',
        name: 'David Sports wear',
        title: 'Trader',
        location: 'Dar es Salaam, Tanzania'
      },
      {
        quote: 'They are the leaders in this industry for reliable air freight with high security and transparency. They successfully handled my Dubai-Tanzania phone shipping service.',
        name: 'Zahor Matelephones',
        title: 'Trader',
        location: 'Dar es Salaam, Tanzania'
      }
    ],

    teamTitle: { kicker: 'Leadership', title: 'Meet Our Operations Team', desc: 'Seasoned professionals driving logistics excellence across Africa.' },
    team: [
      { name: 'Amrisaly S. Mkwizu', role: 'Chief Executive Officer' },
      { name: 'Michael Datan', role: 'Head of Operations' },
      { name: 'Ally Mkwizu', role: 'Managing director' },
      { name: 'Bliss Kimaro', role: 'HR & Markerting specialist' }
    ],
    newsletter: {
      title: 'Subscribe to Logistics Insights',
      desc: 'Stay updated on regional customs updates, trade news, and freight rates.',
      placeholder: 'Enter your email address',
      btn: 'Subscribe',
      err: 'Please enter a valid email address.',
      success: 'Thank you for subscribing to Intelligence Express updates!'
    },
    contact: {
      title: 'Send Us a Message',
      desc: 'Request a freight quote or query about specialized logistics solutions or testimonials.',
      name: 'Your Name', namePh: 'e.g. Amrisaly Mkwizu',
      email: 'Email Address', emailPh: 'Amri@gmail.com',
      service: 'Service Required',
      serviceOptions: ['Domestic Courier Express', 'East Africa Cross-Border Freight', 'International Air/Sea Cargo', 'Customs Clearance Services'],
      message: 'Message Detail', messagePh: 'Specify package details, destination, or inquiries...',
      submit: 'Submit Request',
      submittedTitle: 'Message Received!',
      submittedDesc: 'Thank you for reaching out. Our dispatch team will contact you within 2 hours.',
      hq: 'Headquarters',
      address: 'Intelligence Express,Aggrey & Msimbazi St., Dar es Salaam, Tanzania.',
      mapTitle: 'Interactive Map Location',
      mapDesc: 'Dar es Salaam Port & Airport Logistics Hub'
    },
    footer: { rights: 'All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms of Service',insurance:'Developed By Megatechologies' ,top: 'Top' }
  },

  sw: {
    nav: { home: 'Nyumbani', about: 'Kuhusu Sisi', services: 'Huduma', faq: 'Maswali', team: 'Timu Yetu', contact: 'Wasiliana', track: 'Fuatilia Kifurushi' },
    hero: {
      badge: 'Tanzania & East africa cargo leaders',
      titleA: 'Tunatoa huduma za usafirishaji wa Vifurushi',
      titleB: 'Tanzania Afrika Mashariki',
      titleC: 'Hadi Duniani Kote.',
      desc: 'Huduma za haraka za kufikisha vifurushi mlangoni, usafirishaji wa mipakani bila usumbufu, na huduma za mizigo ya baharini na anga kwa uhakika na kasi.',
      trackLabel: 'Fuatilia Mzigo Papo Hapo',
      trackPlaceholder: 'Weka Nambari ya Ufuatiliaji (mfano, IE-98402)',
      trackBtn: 'Fuatilia Sasa',
      trackErr: 'Tafadhali weka nambari sahihi ya ufuatiliaji.',
      trackSuccess: (id) => `Kifurushi #${id}: Kinasafirishwa (Kinaelekea Makao Makuu Dar es Salaam)`
    },
    metrics: {
      support: '24/7', supportLabel: 'Msaada na Usambazaji wa Papo Hapo',
      coverage: '100%', coverageLabel: 'Ufikiaji wa Kanda ya Afrika Mashariki',
      customs: 'Forodha', customsLabel: 'Uhamisho Rahisi wa Bandari na Mipaka'
    },
    ticker: 'Tunaaminiwa na chapa za Biashara Duniani na Wauzaji Wakubwa',
    about: {
      kicker: 'Historia Yetu na Ufikiaji wa Kimataifa',
      title: 'Tunaunganisha Tanzania na Afrika Mashariki moja kwa moja na masoko ya kimataifa.',
      p1: 'Ilianzishwa kwa dhamira ya kuleta mapinduzi katika usafirishaji Tanzania na eneo pana la Afrika Mashariki,',
      p1b: 'Intelligence Express',
      p1c: 'inaunganisha miundombinu ya ndani na mitandao ya kimataifa ya anga na baharini.',
      p2: 'Iwe ni kusafirisha vifurushi muhimu vya biashara kutoka Dar es Salaam hadi miji mikuu ya kikanda kama Nairobi na Kampala, au kupitisha mizigo mizito ya viwandani kwenye bandari kuu, dhamira yetu imejengwa juu ya kasi, usalama, na uwazi kamili.',
      tag1: 'Uhamisho wa Forodha Ulioidhinishwa',
      tag2: 'Uhifadhi Kamili wa Ghala',
      stat1: 'Vifurushi Vilivyofikishwa', stat1d: 'Maagizo ya kila mwaka yaliyofikishwa mlangoni Afrika Mashariki.',
      stat2: 'Maeneo ya Kimataifa', stat2d: 'Njia za baharini zilizounganishwa na safari za kila siku za ndege.',
      stat3: 'Ufikishaji kwa Wakati', stat3d: 'Usambazaji sahihi na ufuatiliaji wa GPS papo hapo.',
      stat4: 'Huduma ya Haraka ya Kikanda', stat4d: 'Uhamisho wa forodha wa siku inayofuata ndani ya EAC.'
    },
    services: {
      kicker: 'Huduma Kamili za Usafirishaji',
      title: 'Zilizoundwa kwa Kasi, Usahihi na Usalama',
      desc: 'Kutoka kufikisha vifurushi mijini hadi usafirishaji wa kimataifa wa njia mbalimbali.',
      items: [
        { title: 'Kusafirisha Haraka Ndani ya Nchi', desc: 'Usambazaji wa haraka wa vifurushi Tanzania nzima, siku hiyo hiyo au siku inayofuata, Dar es Salaam, Arusha, Mwanza na Dodoma.', Icon: Zap },
        { title: 'Usafirishaji wa Mipakani Afrika Mashariki', desc: 'Huduma maalum za mizigo ya barabarani zinazounganisha Kenya, Uganda, Rwanda, Burundi na DRC.', Icon: Truck },
        { title: 'Anga na Bahari za Kimataifa', desc: 'Kontena kamili (FCL), LCL, na huduma za ndege za mizigo zinazounganisha Afrika na Asia, Ulaya na Amerika.', Icon: Plane },
        { title: 'Forodha na Huduma za Bandari', desc: 'Uzingatiaji rahisi wa ushuru, nyaraka za bandari, na uhamisho wa haraka bandarini na mipakani.', Icon: ClipboardList }
      ]
    },
    faqTitle: { kicker: 'Una Maswali?', title: 'Maswali Yanayoulizwa Mara kwa Mara' },
    faqs: [
      { q: 'Ni maeneo gani mnayoyafikia Tanzania na Afrika Mashariki?', a: 'Tunafikia maeneo mengi ya Tanzania (Dar es Salaam, Dodoma, Arusha, Mwanza na Mbeya) pamoja na usafirishaji wa mipakani Kenya, Uganda, Rwanda, Burundi na DRC ya Mashariki.' },
      { q: 'Ufuatiliaji wa mzigo papo hapo unafanya kazije?', a: 'Mara mzigo wako unaposajiliwa, utapokea Nambari ya Ufuatiliaji. Iweke kwenye kisanduku cha ufuatiliaji kwenye tovuti yetu ili kuona maeneo na muda unaotarajiwa kufika.' },
      { q: 'Je, mnashughulikia forodha kwa mizigo ya kimataifa ya baharini na anga?', a: 'Ndiyo. Timu yetu ya forodha inashughulikia nyaraka zote, kodi, uzingatiaji wa sheria, na uhamisho moja kwa moja bandarini na viwanja vya ndege.' },
      { q: 'Ni aina gani za mizigo mnazoweza kusafirisha?', a: 'Tunashughulikia kila kitu kutoka nyaraka ndogo na vifurushi vya biashara mtandaoni hadi vifaa vizito vya viwandani na mizigo mizima ya kontena.' }
    ],
    testimonialsTitle: { kicker: 'Maoni ya Wateja', title: 'Wanachosema Washirika/Wateja Wetu wa Biashara' },
    testimonials: [
      { quote: 'Intelligence Express walisafirisha vifaa vyetu vya Shuleni kutoka Bandari ya Kenya hadi Arusha kabla ya wakati. Ushughulikiaji wao wa forodha hauna kifani.', name: 'Juma Rashidi', title: 'Meneja wa Usafirishaji, St Jude Schools(Arusha)', location: 'Arusha, Tanzania' },
      { quote: 'Huduma ya ufuatiliaji papo hapo na huduma bora kwa wateja hutupa uhakika kamili kwa usafirishaji wetu wa kikanda.', name: 'Sarah Mukotya', title: 'Mkurugenzi wa Ugavi', location: 'Nairobi, Kenya' },
      { quote: 'Usafirishaji wa mizigo ya anga wa kuaminika na usalama mkubwa na uwazi. Ni mshirika wetu mkuu wa uagizaji China-Tanzania.', name: 'David Sports wear', title: 'Mfanyabiashara', location: 'Dar es salaam, Tanzania' },
      { quote: 'Hawa ndio vinara katika sekta hii ya usafirishaji wa mizigo ya anga wa kuaminika na usalama mkubwa na uwazi. Walinifanikishia huduma ya usafirishaji wa simu  Dubai-Tanzania.', name: 'Zahor Matelephones', title: 'Mfanyabiashara', location: 'Dar es salaam, Tanzania' }

    ],
    teamTitle: { kicker: 'Uongozi', title: 'Kutana na Timu Yetu ya Uendeshaji', desc: 'Wataalamu wenye uzoefu wanaoendesha ubora wa usafirishaji Afrika.' },
    team: [
      { name: 'Amrisaly S. Mkwizu', role: 'Afisa Mtendaji mkuu' },
      { name: 'Michael Dastan', role: 'Mkuu wa Oparesheni' },
      { name: 'Ally Mkwizu', role: 'Meneja mkuu' },
      { name: 'Bliss Kimaro', role: 'HR & Mtaalamu wa masoko' }
    ],
    newsletter: {
      title: 'Jiandikishe kwa Taarifa za Usafirishaji',
      desc: 'Pata taarifa za forodha za kikanda, habari za biashara, na bei za mizigo.',
      placeholder: 'Weka anwani yako ya barua pepe',
      btn: 'Jiandikishe',
      err: 'Tafadhali weka anwani sahihi ya barua pepe.',
      success: 'Asante kwa kujiandikisha kwa taarifa za Intelligence Express!'
    },
    contact: {
      title: 'Tutumie Ujumbe',
      desc: 'Omba bei ya mzigo au uliza kuhusu huduma maalum za usafirishaji.',
      name: 'Jina Lako', namePh: 'mfano, Amrisaly Mkwizu',
      email: 'Anwani ya Barua Pepe', emailPh: 'Amrisaly@gmail.com',
      service: 'Huduma Unayohitaji',
      serviceOptions: ['Kusafirisha Haraka Ndani ya Nchi', 'Mizigo ya Mipakani Afrika Mashariki', 'Mizigo ya Kimataifa Anga/Bahari', 'Huduma za Uhamisho wa Forodha'],
      message: 'Maelezo ya Ujumbe', messagePh: 'Eleza maelezo ya kifurushi, marudio, au maswali...',
      submit: 'Tuma Ombi',
      submittedTitle: 'Ujumbe Umepokewa!',
      submittedDesc: 'Asante kwa kuwasiliana nasi. Timu yetu itawasiliana nawe ndani ya masaa 2.',
      hq: 'Makao Makuu',
      address: 'Intelligence Express Ltd , Aggrey & Msimbazi st, Dar es Salaam, Tanzania.',
      mapTitle: 'Mahali kwenye Ramani',
      mapDesc: 'Kituo cha Bandari na Uwanja wa Ndege Dar es Salaam'
    },
    footer: { rights: 'Haki zote zimehifadhiwa.', privacy: 'Sera ya Faragha', terms: 'Masharti ya Huduma', insurance: 'Bima ya Mizigo', top: 'Juu' }
  }
};

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingStatus, setTrackingStatus] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState({ text: '', isError: false });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const t = translations[lang];

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  const toggleLang = () => setLang(prev => (prev === 'en' ? 'sw' : 'en'));

  const handleTrack = (e) => {
    e.preventDefault();
    if (!trackingNumber.trim()) {
      setTrackingStatus({ type: 'error', text: t.hero.trackErr });
      return;
    }
    setTrackingStatus({ type: 'success', text: t.hero.trackSuccess(trackingNumber.toUpperCase()) });
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterMsg({ text: t.newsletter.err, isError: true });
      return;
    }
    setNewsletterMsg({ text: t.newsletter.success, isError: false });
    setNewsletterEmail('');
  };

  const isDark = theme === 'dark';

  const bgMain = isDark ? 'bg-[#0B0F17] text-slate-100' : 'bg-[#F9FAFB] text-slate-900';
  const bgHeader = isDark ? 'bg-[#0B0F17]/95 border-slate-800/80' : 'bg-white/95 border-slate-200/80';
  const bgCard = isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm';
  const bgCardHover = isDark ? 'hover:border-[#FF522B]' : 'hover:border-[#FF522B] hover:shadow-md';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-600';
  const textHeading = isDark ? 'text-white' : 'text-slate-900';
  const bgSectionAlt = isDark ? 'bg-slate-900/40' : 'bg-slate-100/70';
  const inputBg = isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-100 border-slate-300 text-slate-900';
  const iconBtnBase = isDark
    ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
    : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200';

  return (
    <div className={`min-h-screen font-serif selection:bg-[#FF522B] selection:text-white scroll-smooth transition-colors duration-300 ${bgMain}`}>

      <style>{`
        .font-stencil {
          font-family: "Saira Stencil", sans-serif;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite { display: flex; width: 200%; animation: marquee 28s linear infinite; }
        .animate-marquee-slow { display: flex; width: 200%; animation: marquee 38s linear infinite; }
        .animate-marquee-infinite:hover, .animate-marquee-slow:hover { animation-play-state: paused; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.35s ease-out; }
      `}</style>

      <div key={lang} className="animate-fadeIn">

        {/* --- A. NAVIGATION HEADER --- */}
        <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${bgHeader}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">

            <a href="#home" className="flex items-center shrink-0 py-2 group">
              <img
                src="logo.png"
                alt="Intelligence Express Logo"
                className="w-40 sm:w-48 lg:w-56 h-auto object-contain max-h-16 transition-transform group-hover:scale-105"
              />
            </a>

            <nav className={`hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide uppercase ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <a href="#home" className="hover:text-[#FF522B] transition-colors">{t.nav.home}</a>
              <a href="#about" className="hover:text-[#FF522B] transition-colors">{t.nav.about}</a>
              <a href="#services" className="hover:text-[#FF522B] transition-colors">{t.nav.services}</a>
              <a href="#faq" className="hover:text-[#FF522B] transition-colors">{t.nav.faq}</a>
              <a href="#team" className="hover:text-[#FF522B] transition-colors">{t.nav.team}</a>
              <a href="#contact" className="hover:text-[#FF522B] transition-colors">{t.nav.contact}</a>
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <button
                onClick={toggleLang}
                className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl border text-xs font-bold tracking-wide transition-colors ${iconBtnBase}`}
                title="Switch language / Badilisha lugha"
              >
                <Languages size={18} strokeWidth={2} />
                <span>{lang === 'en' ? 'EN' : 'SW'}</span>
              </button>

              <button
                onClick={toggleTheme}
                className={`p-2.5 rounded-xl border transition-colors ${iconBtnBase}`}
                title="Toggle Light/Dark Theme"
              >
                {isDark ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
              </button>

              <a
                href="#home"
                className="font-stencil uppercase tracking-wider bg-[#FF522B] hover:bg-[#e0431f] text-white px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-lg shadow-[#FF522B]/20 hover:scale-105 active:scale-95"
              >
                {t.nav.track}
              </a>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleLang}
                className={`p-2 rounded-lg border ${iconBtnBase}`}
                title="Switch language"
              >
                <Languages size={18} strokeWidth={2} />
              </button>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg border ${iconBtnBase}`}
              >
                {isDark ? <Sun size={18} strokeWidth={2} /> : <Moon size={18} strokeWidth={2} />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 focus:outline-none ${textHeading}`}
              >
                {mobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className={`md:hidden border-b px-4 pt-4 pb-6 space-y-4 ${isDark ? 'bg-[#0B0F17] border-slate-800' : 'bg-white border-slate-200'}`}>
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block font-semibold">{t.nav.home}</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block font-semibold">{t.nav.about}</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block font-semibold">{t.nav.services}</a>
              <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block font-semibold">{t.nav.faq}</a>
              <a href="#team" onClick={() => setMobileMenuOpen(false)} className="block font-semibold">{t.nav.team}</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block font-semibold">{t.nav.contact}</a>
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-center font-stencil uppercase tracking-widest bg-[#FF522B] text-white py-3 rounded-lg">{t.nav.track}</a>
            </div>
          )}
        </header>

        {/* --- B. HERO SECTION --- */}
        <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="intelligence.jpg"
              alt="Intelligence Express Cargo Background"
              className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000"
            />
            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/90 to-[#0B0F17]/60' : 'bg-gradient-to-r from-white via-white/95 to-white/70'}`} />
            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-[#0B0F17] via-transparent to-[#0B0F17]/40' : 'bg-gradient-to-t from-[#F9FAFB] via-transparent to-white/50'}`} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6 ">
              

              <h1 className={`text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none font-stencil ${textHeading}`}>
                {t.hero.titleA} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF522B] to-orange-400">{t.hero.titleB}</span> {t.hero.titleC}
              </h1>

              <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${textMuted}`}>
                {t.hero.desc}
              </p>

              <div className={`mt-8 p-4 sm:p-6 rounded-2xl border shadow-2xl max-w-xl backdrop-blur-xl ${isDark ? 'bg-slate-900/80 border-slate-700/60' : 'bg-white/90 border-slate-200'}`}>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#FF522B] mb-2 font-stencil">
                  {t.hero.trackLabel}
                </label>
                <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder={t.hero.trackPlaceholder}
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className={`flex-1 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF522B] transition-colors ${inputBg}`}
                  />
                  <button
                    type="submit"
                    className="font-stencil tracking-wider uppercase bg-[#FF522B] hover:bg-[#e0431f] text-white px-6 py-3 rounded-xl text-sm transition-all duration-200 flex items-center justify-center space-x-2 shrink-0 shadow-lg shadow-[#FF522B]/20"
                  >
                    <span>{t.hero.trackBtn}</span>
                    <ArrowRight size={16} strokeWidth={2} />
                  </button>
                </form>

                {trackingStatus && (
                  <div className={`mt-3 text-xs sm:text-sm font-medium p-3 rounded-lg ${trackingStatus.type === 'error' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'}`}>
                    {trackingStatus.text}
                  </div>
                )}
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className={`rounded-3xl p-8 border backdrop-blur-md shadow-2xl space-y-6 ${bgCard}`}>
                <div className="flex items-center justify-between border-b border-slate-700/40 pb-4">
                  <div>
                    <div className={`text-4xl font-stencil ${textHeading}`}>{t.metrics.support}</div>
                    <div className={`text-xs ${textMuted}`}>{t.metrics.supportLabel}</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FF522B]/10 flex items-center justify-center text-[#FF522B]">
                    <Zap size={22} strokeWidth={2} />
                  </div>
                </div>

                <div className="flex items-center justify-between border-b border-slate-700/40 pb-4">
                  <div>
                    <div className={`text-4xl font-stencil ${textHeading}`}>{t.metrics.coverage}</div>
                    <div className={`text-xs ${textMuted}`}>{t.metrics.coverageLabel}</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Globe2 size={22} strokeWidth={2} />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-3xl font-stencil uppercase ${textHeading}`}>{t.metrics.customs}</div>
                    <div className={`text-xs ${textMuted}`}>{t.metrics.customsLabel}</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <ShieldCheck size={22} strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* --- C. PARTNER LOGO TICKER --- */}
        <section className={`py-10 border-y transition-colors ${isDark ? 'border-slate-800 bg-[#0B0F17]' : 'border-slate-200 bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 text-center mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#FF522B] font-stencil">
              {t.ticker}
            </p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className={`absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${isDark ? 'bg-gradient-to-r from-[#0B0F17]' : 'bg-gradient-to-r from-white'}`} />
            <div className={`absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none ${isDark ? 'bg-gradient-to-l from-[#0B0F17]' : 'bg-gradient-to-l from-white'}`} />

            <div className="animate-marquee-infinite flex items-center space-x-12">
              {[
                { name: 'MAERSK LINE', Icon: Ship },
                { name: 'TAZARA FREIGHT', Icon: TrainFront },
                { name: 'DAR PORT LOGISTICS', Icon: Anchor },
                { name: 'EAST AFRICA AIRWAYS', Icon: Plane },
                { name: 'KILIMANJARO CARGO', Icon: Package },
                { name: 'TILISHO SAFARIS', Icon: Truck },
                { name: 'MAERSK LINE', Icon: Ship },
                { name: 'TAZARA FREIGHT', Icon: TrainFront },
                { name: 'DAR PORT LOGISTICS', Icon: Anchor },
                { name: 'EAST AFRICA AIRWAYS', Icon: Plane },
                { name: 'KILIMANJARO CARGO', Icon: Package },
                { name: 'SAFARI COURIER', Icon: Truck },
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className={`shrink-0 flex items-center space-x-3 px-4 py-2 rounded-xl border transition-all hover:scale-105 cursor-pointer ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-800'}`}
                >
                  <partner.Icon size={20} strokeWidth={2} className="text-[#FF522B]" />
                  <span className="font-stencil tracking-wider text-sm uppercase">{partner.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- D. ABOUT US SECTION --- */}
        <section id="about" className={`py-24 ${bgSectionAlt}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className={`p-6 rounded-2xl border transition-colors ${bgCard}`}>
                  <div className="text-4xl font-stencil text-[#FF522B] mb-1">50K+</div>
                  <div className={`text-sm font-semibold ${textHeading}`}>{t.about.stat1}</div>
                  <div className={`text-xs mt-2 ${textMuted}`}>{t.about.stat1d}</div>
                </div>

                <div className={`p-6 rounded-2xl border transition-colors ${bgCard}`}>
                  <div className={`text-4xl font-stencil mb-1 ${textHeading}`}>120+</div>
                  <div className={`text-sm font-semibold ${textHeading}`}>{t.about.stat2}</div>
                  <div className={`text-xs mt-2 ${textMuted}`}>{t.about.stat2d}</div>
                </div>

                <div className={`p-6 rounded-2xl border transition-colors ${bgCard}`}>
                  <div className={`text-4xl font-stencil mb-1 ${textHeading}`}>99.4%</div>
                  <div className={`text-sm font-semibold ${textHeading}`}>{t.about.stat3}</div>
                  <div className={`text-xs mt-2 ${textMuted}`}>{t.about.stat3d}</div>
                </div>

                <div className={`p-6 rounded-2xl border transition-colors ${bgCard}`}>
                  <div className="text-4xl font-stencil text-[#FF522B] mb-1">24h</div>
                  <div className={`text-sm font-semibold ${textHeading}`}>{t.about.stat4}</div>
                  <div className={`text-xs mt-2 ${textMuted}`}>{t.about.stat4d}</div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#FF522B] font-stencil">
                  {t.about.kicker}
                </div>
                <h2 className={`text-3xl sm:text-4xl font-stencil tracking-tight uppercase ${textHeading}`}>
                  {t.about.title}
                </h2>
                <p className={`leading-relaxed text-base ${textMuted}`}>
                  {t.about.p1} <strong className={textHeading}>{t.about.p1b}</strong> {t.about.p1c}
                </p>
                <p className={`leading-relaxed text-sm ${textMuted}`}>
                  {t.about.p2}
                </p>

                <div className="pt-4 flex flex-wrap gap-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#FF522B]/20 flex items-center justify-center text-[#FF522B]">
                      <Check size={16} strokeWidth={2.5} />
                    </div>
                    <span className={`text-sm font-semibold ${textHeading}`}>{t.about.tag1}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#FF522B]/20 flex items-center justify-center text-[#FF522B]">
                      <Check size={16} strokeWidth={2.5} />
                    </div>
                    <span className={`text-sm font-semibold ${textHeading}`}>{t.about.tag2}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- E. CORE SERVICES GRID --- */}
        <section id="services" className={`py-24 ${bgMain}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#FF522B] font-stencil">
                {t.services.kicker}
              </h2>
              <h3 className={`text-3xl sm:text-4xl font-stencil uppercase tracking-tight ${textHeading}`}>
                {t.services.title}
              </h3>
              <p className={`text-sm ${textMuted}`}>
                {t.services.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.services.items.map((service, idx) => (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 group ${bgCard} ${bgCardHover}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF522B]/10 flex items-center justify-center mb-6 text-[#FF522B] group-hover:bg-[#FF522B] group-hover:text-white transition-colors">
                    <service.Icon size={24} strokeWidth={2} />
                  </div>
                  <h4 className={`text-xl font-stencil uppercase mb-3 ${textHeading}`}>{service.title}</h4>
                  <p className={`text-sm leading-relaxed ${textMuted}`}>{service.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* --- F. INTERACTIVE FAQ --- */}
        <section id="faq" className={`py-24 ${bgSectionAlt}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FF522B] font-stencil">{t.faqTitle.kicker}</span>
              <h2 className={`text-3xl sm:text-4xl font-stencil uppercase tracking-tight ${textHeading}`}>{t.faqTitle.title}</h2>
            </div>

            <div className="space-y-4">
              {t.faqs.map((faq, index) => (
                <div key={index} className={`rounded-2xl border overflow-hidden transition-colors ${bgCard}`}>
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full text-left p-6 flex justify-between items-center space-x-4 focus:outline-none"
                  >
                    <span className={`font-semibold text-base sm:text-lg ${textHeading}`}>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      strokeWidth={2}
                      className={`text-[#FF522B] shrink-0 transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {activeFaq === index && (
                    <div className={`px-6 pb-6 text-sm leading-relaxed border-t pt-4 ${isDark ? 'border-slate-800' : 'border-slate-100'} ${textMuted}`}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- G. TESTIMONIALS --- */}
        <section className={`py-24 overflow-hidden relative ${bgMain}`}>
          <div className="max-w-7xl mx-auto px-4 text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FF522B] font-stencil">{t.testimonialsTitle.kicker}</span>
            <h2 className={`text-3xl sm:text-4xl font-stencil uppercase tracking-tight mt-2 ${textHeading}`}>{t.testimonialsTitle.title}</h2>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee-slow flex items-center space-x-6">
              {[...t.testimonials, ...t.testimonials].map((testi, idx) => (
                <div
                  key={idx}
                  className={`w-80 sm:w-96 shrink-0 p-6 rounded-2xl border flex flex-col justify-between ${bgCard}`}
                >
                  <p className={`text-sm italic mb-6 ${textMuted}`}>"{testi.quote}"</p>
                  <div>
                    <h5 className={`font-bold text-sm ${textHeading}`}>{testi.name}</h5>
                    <p className="text-xs text-[#FF522B] font-medium">{testi.title}</p>
                    <p className={`text-xs ${textMuted}`}>{testi.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- H. OUR TEAM --- */}
        <section id="team" className={`py-24 ${bgSectionAlt}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FF522B] font-stencil">{t.teamTitle.kicker}</span>
              <h2 className={`text-3xl sm:text-4xl font-stencil uppercase tracking-tight ${textHeading}`}>{t.teamTitle.title}</h2>
              <p className={`text-sm ${textMuted}`}>{t.teamTitle.desc}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { ...t.team[0], img: amriImg },
                { ...t.team[1], img: mikeImg },
                { ...t.team[2], img: abasImg },
                { ...t.team[3], img: blissImg }
              ].map((member, index) => (
                <div key={index} className={`rounded-2xl border overflow-hidden group transition-all ${bgCard} ${bgCardHover}`}>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-900' : 'from-white'} via-transparent to-transparent opacity-60`} />
                  </div>
                  <div className="p-4">
                    <h4 className={`font-bold text-base ${textHeading}`}>{member.name}</h4>
                    <p className="text-xs text-[#FF522B] mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- I. NEWSLETTER BANNER --- */}
        <section className="py-16 bg-gradient-to-r from-[#FF522B]/20 via-slate-900 to-[#0B0F17] border-y border-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center lg:text-left">
                <h3 className="text-2xl font-stencil uppercase tracking-wider">{t.newsletter.title}</h3>
                <p className="text-slate-300 text-sm">{t.newsletter.desc}</p>
              </div>

              <form onSubmit={handleNewsletter} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={t.newsletter.placeholder}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FF522B]"
                />
                <button
                  type="submit"
                  className="font-stencil tracking-wider uppercase bg-[#FF522B] hover:bg-[#e0431f] text-white px-6 py-3 rounded-xl text-sm transition-all duration-200 shrink-0"
                >
                  {t.newsletter.btn}
                </button>
              </form>
            </div>

            {newsletterMsg.text && (
              <div className={`mt-4 text-center lg:text-right text-xs font-semibold ${newsletterMsg.isError ? 'text-red-400' : 'text-emerald-400'}`}>
                {newsletterMsg.text}
              </div>
            )}
          </div>
        </section>

        {/* --- J. CONTACT US & FOOTER --- */}
        <section id="contact" className={`py-24 ${bgMain}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              <div className={`lg:col-span-7 p-8 rounded-3xl border ${bgCard}`}>
                <h3 className={`text-2xl font-stencil uppercase mb-2 ${textHeading}`}>{t.contact.title}</h3>
                <p className={`text-sm mb-6 ${textMuted}`}>{t.contact.desc}</p>

                {contactSubmitted ? (
                  <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-500 text-center space-y-2">
                    <div className="flex justify-center">
                      <Check size={28} strokeWidth={2.5} />
                    </div>
                    <h4 className="font-bold text-lg">{t.contact.submittedTitle}</h4>
                    <p className="text-xs">{t.contact.submittedDesc}</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-semibold mb-1 ${textMuted}`}>{t.contact.name}</label>
                        <input
                          required
                          type="text"
                          placeholder={t.contact.namePh}
                          className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF522B] ${inputBg}`}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-semibold mb-1 ${textMuted}`}>{t.contact.email}</label>
                        <input
                          required
                          type="email"
                          placeholder={t.contact.emailPh}
                          className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF522B] ${inputBg}`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${textMuted}`}>{t.contact.service}</label>
                      <select className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF522B] ${inputBg}`}>
                        {t.contact.serviceOptions.map((opt, i) => <option key={i}>{opt}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${textMuted}`}>{t.contact.message}</label>
                      <textarea
                        required
                        rows={4}
                        placeholder={t.contact.messagePh}
                        className={`w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#FF522B] ${inputBg}`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="font-stencil tracking-wider uppercase w-full bg-[#FF522B] hover:bg-[#e0431f] text-white py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg shadow-[#FF522B]/20"
                    >
                      {t.contact.submit}
                    </button>
                  </form>
                )}
              </div>

              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h3 className={`text-2xl font-stencil uppercase mb-4 ${textHeading}`}>{t.contact.hq}</h3>
                  <div className={`space-y-4 text-sm ${textMuted}`}>
                    <div className="flex items-start space-x-3">
                      <MapPin size={20} strokeWidth={2} className="text-[#FF522B] shrink-0" />
                      <p>{t.contact.address}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={18} strokeWidth={2} className="text-[#FF522B] shrink-0" />
                      <p>+255 (0) 700 000 000 / +255 (0) 222 000 000</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail size={18} strokeWidth={2} className="text-[#FF522B] shrink-0" />
                      <p>dispatch@intelligenceexpress.com</p>
                    </div>
                  </div>
                </div>

                {/* --- Fixed Map Block ---
                    1) Uses a real Google Maps EMBED url (output=embed), not the
                       google.com homepage, which blocks framing via X-Frame-Options.
                    2) The iframe is now a direct child of the relative/overflow-hidden
                       wrapper, so absolute+w-full+h-full actually fills the box,
                       instead of being nested inside a 48px icon circle.
                    3) Every div below has a matching closing tag. */}
                <div className={`h-56 rounded-2xl border overflow-hidden relative ${bgCard}`}>
                  <iframe
                    src="https://www.google.com/maps?q=Aggrey+St+%26+Msimbazi+St,+Dar+es+Salaam,+Tanzania&output=embed"
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Office Location Map on Aggrey St"
                  ></iframe>

                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white px-4 py-3 text-center pointer-events-none">
                    <p className="font-semibold text-sm">{t.contact.mapTitle}</p>
                    <p className="text-xs text-slate-200">{t.contact.mapDesc}</p>
                  </div>
                </div>

              </div>

            </div>
{/*--------*/}

            <div className={`mt-20 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs ${isDark ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-500'}`}>
              <div>
                (c) {new Date().getFullYear()} Intelligence Express Ltd. {t.footer.rights}
              </div>

              <div className="flex space-x-6">
                <a href="#home" className="hover:text-[#FF522B]">{t.footer.privacy}</a>
                <a href="#home" className="hover:text-[#FF522B]">{t.footer.terms}</a>
                <a href="#home" className="hover:text-[#FF522B]">{t.footer.insurance}</a>

              </div>

              <a
                href="#home"
                className={`flex items-center gap-1.5 p-2 rounded-lg border transition-colors ${iconBtnBase}`}
                aria-label="Back to top"
              >
                <ArrowUp size={16} strokeWidth={2} />
                <span>{t.footer.top}</span>
              </a>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}