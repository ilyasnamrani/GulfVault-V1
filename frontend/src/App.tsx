import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import {
    Shield,
    ChevronRight,
    Globe,
    Lock,
    Zap,
    Users,
    CheckCircle2,
    Menu,
    X,
    ArrowRight,
    Play,
    HelpCircle,
    ChevronDown,
    TrendingUp,
    Activity,
    Building2
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Navbar = () => {
    const { i18n, t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsLangDropdownOpen(false);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 py-6",
            isScrolled ? "bg-navy shadow-2xl py-4" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                    <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">GULF<span className="text-gold">VAULT</span></span>
                </button>

                <div className="hidden md:flex items-center gap-12">
                    <div className="relative">
                        <button
                            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                            className="text-white/60 hover:text-gold flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300"
                        >
                            <img
                                src={i18n.language === 'en' ? "https://flagcdn.com/us.svg" : "https://flagcdn.com/fr.svg"}
                                alt={i18n.language === 'en' ? "US Flag" : "France Flag"}
                                className="w-4 h-auto grayscale opacity-50"
                            />
                            {i18n.language === 'en' ? 'EN' : 'FR'}
                            <ChevronDown className={cn("w-3 h-3 transition-transform duration-500", isLangDropdownOpen && "rotate-180")} />
                        </button>

                        <AnimatePresence>
                            {isLangDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="absolute top-full mt-6 right-0 bg-navy border border-white/5 shadow-2xl min-w-[160px] overflow-hidden py-2"
                                >
                                    <button
                                        onClick={() => changeLanguage('en')}
                                        className={cn(
                                            "w-full text-left px-6 py-3 text-[10px] uppercase tracking-widest flex items-center gap-4 transition-all duration-300 hover:bg-white/5",
                                            i18n.language === 'en' ? "text-gold font-bold" : "text-white/40"
                                        )}
                                    >
                                        <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-4 h-auto grayscale" />
                                        English
                                    </button>
                                    <button
                                        onClick={() => changeLanguage('fr')}
                                        className={cn(
                                            "w-full text-left px-6 py-3 text-[10px] uppercase tracking-widest flex items-center gap-4 transition-all duration-300 hover:bg-white/5",
                                            i18n.language === 'fr' ? "text-gold font-bold" : "text-white/40"
                                        )}
                                    >
                                        <img src="https://flagcdn.com/fr.svg" alt="France Flag" className="w-4 h-auto grayscale" />
                                        Français
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a href="#qualification" className="bg-gold text-white px-8 py-3 rounded-none text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-navy transition-all duration-500">
                        {t('hero.cta')}
                    </a>
                </div>

                <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-navy p-8 flex flex-col gap-10 md:hidden border-t border-white/5 shadow-2xl"
                    >
                        <div className="flex flex-col gap-6">
                            <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Select Language</p>
                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={() => changeLanguage('en')}
                                    className={cn("flex items-center gap-4 text-sm uppercase tracking-widest transition-all duration-300", i18n.language === 'en' ? "text-gold font-bold" : "text-white/40")}
                                >
                                    <img src="https://flagcdn.com/us.svg" alt="US Flag" className="w-5 h-auto grayscale" /> English
                                </button>
                                <button
                                    onClick={() => changeLanguage('fr')}
                                    className={cn("flex items-center gap-4 text-sm uppercase tracking-widest transition-all duration-300", i18n.language === 'fr' ? "text-gold font-bold" : "text-white/40")}
                                >
                                    <img src="https://flagcdn.com/fr.svg" alt="France Flag" className="w-5 h-auto grayscale" /> Français
                                </button>
                            </div>
                        </div>

                        <a href="#qualification" onClick={() => setIsMobileMenuOpen(false)} className="bg-gold text-white text-center py-5 rounded-none font-bold uppercase tracking-[0.2em] text-xs">
                            {t('hero.cta')}
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy pt-20">
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-block text-gold text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-12"
                    >
                        {t('hero.badge')}
                    </motion.span>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
                        {t('hero.title')}
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-white/60 mb-16 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
                        {t('hero.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <a href="#qualification" className="group w-full sm:w-auto bg-gold text-white px-12 py-6 rounded-none text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-navy transition-all duration-500 flex items-center justify-center gap-4">
                            {t('hero.cta')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
                    <p className="text-[10px] text-white/30 mt-10 font-light tracking-[0.3em] uppercase">
                        {t('hero.underButton')}
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 60 }}
                    transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                    className="w-px bg-gold/30"
                />
            </div>
        </section>
    );
};

const VSL = () => {
    const { t } = useTranslation();
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-24 md:py-48 bg-white px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-navy mb-8 tracking-tight">{t('vsl.title')}</h2>
                    <p className="text-lg md:text-xl text-navy/60 mb-12 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
                        {t('vsl.intro')}
                    </p>
                    <div className="w-24 h-px bg-gold/30 mx-auto" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="aspect-video bg-navy/5 rounded-none border border-navy/5 flex items-center justify-center relative group overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
                >
                    {!isPlaying ? (
                        <div
                            className="absolute inset-0 cursor-pointer flex items-center justify-center"
                            onClick={() => setIsPlaying(true)}
                        >
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1280&h=720')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors duration-500" />
                            <div className="relative z-10 text-center px-4">
                                <div className="w-20 h-20 md:w-28 md:h-28 border border-gold/30 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                                    <Play className="w-6 h-6 md:w-8 md:h-8 text-gold group-hover:text-white fill-current ml-1 transition-colors" />
                                </div>
                                <p className="text-white font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">{t('vsl.placeholder')}</p>
                            </div>
                        </div>
                    ) : (
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1"
                            title="GulfVault Explainer"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </motion.div>
                <p className="text-[10px] text-center text-navy/30 mt-10 font-light tracking-[0.3em] uppercase">
                    {t('vsl.belowVideo')}
                </p>
            </div>
        </section>
    );
};

const ProblemSolution = () => {
    const { t } = useTranslation();
    return (
        <section className="py-20 md:py-32 bg-navy text-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h3 className="text-gold font-bold uppercase tracking-[0.2em] text-xs md:text-sm">{t('problem.title')}</h3>
                        <p className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight">
                            {t('problem.desc')}
                        </p>
                        <p className="text-lg md:text-xl text-white/60 leading-relaxed pt-4 font-light">
                            {t('problem.closingLigne')}
                        </p>
                    </div>
                    <div className="h-px bg-white/10 w-full" />
                    <div className="space-y-4">
                        <h3 className="text-gold font-bold uppercase tracking-[0.2em] text-xs md:text-sm">{t('solution.title')}</h3>
                        <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                            {t('solution.desc')}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                    className="relative grid grid-cols-1 gap-8"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="bg-white/5 p-8 rounded-sm border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group flex gap-6"
                    >
                        <div className="shrink-0">
                            <TrendingUp className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <h4 className="font-bold mb-3 text-xl text-gold">{t('features.security.title')}</h4>
                            <p className="text-base text-white/60 leading-relaxed font-light">{t('features.security.desc')}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="bg-white/5 p-8 rounded-sm border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group flex gap-6"
                    >
                        <div className="shrink-0">
                            <Activity className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <h4 className="font-bold mb-3 text-xl text-gold">{t('features.liquidity.title')}</h4>
                            <p className="text-base text-white/60 leading-relaxed font-light">{t('features.liquidity.desc')}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                        }}
                        className="bg-white/5 p-8 rounded-sm border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group flex gap-6"
                    >
                        <div className="shrink-0">
                            <Building2 className="w-12 h-12 text-gold group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                            <h4 className="font-bold mb-3 text-xl text-gold">{t('features.access.title')}</h4>
                            <p className="text-base text-white/60 leading-relaxed font-light">{t('features.access.desc')}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

const Concierge = () => {
    const { t } = useTranslation();
    const conciergeList = t('concierge.list', { returnObjects: true }) as string[];
    return (
        <section className="py-20 md:py-32 bg-white px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full"
                >
                    <img
                        src="https://picsum.photos/seed/concierge/800/1000"
                        alt="Concierge"
                        className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-[4/5] md:aspect-auto"
                        referrerPolicy="no-referrer"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    className="flex-1 space-y-8"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-navy leading-tight">
                        {t('concierge.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-navy/70 leading-relaxed font-light">
                        {t('concierge.desc')}
                    </p>

                    <ul className="space-y-5">
                        {conciergeList.map((item, i) => (
                            <motion.li
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: i * 0.1 }}
                                key={i}
                                className="flex items-start gap-4 text-navy/80 font-medium group"
                            >
                                <div className="mt-1 bg-gold/10 p-1 rounded-full group-hover:bg-gold/20 transition-colors">
                                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                                </div>
                                <span className="text-lg">{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

const Process = () => {
    const { t } = useTranslation();
    const steps = t('process.steps', { returnObjects: true }) as Array<{ title: string, desc: string }>;

    return (
        <section className="py-20 md:py-32 bg-navy text-white px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-serif mb-6">{t('process.title')}</h2>
                    <div className="w-20 h-1 bg-gold mx-auto" />
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: i * 0.1 }}
                            key={i}
                            className="relative group"
                        >
                            <div className="text-7xl md:text-8xl font-serif text-white/5 absolute -top-10 -left-4 group-hover:text-gold/10 transition-all duration-500">
                                0{i + 1}
                            </div>
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-xl font-bold text-gold uppercase tracking-widest">
                                    {step.title}
                                </h3>
                                <p className="text-white/50 leading-relaxed font-light">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const QualificationForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        residency: '',
        capital: '',
        objective: '',
        timeline: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', whatsapp: '', residency: '', capital: '', objective: '', timeline: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };


    return (
        <section id="qualification" className="py-20 md:py-32 bg-white px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-serif text-navy mb-6">{t('form.title')}</h2>
                    <p className="text-navy/60 max-w-2xl mx-auto text-lg font-light">{t('form.desc')}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="bg-white border border-navy/10 p-6 md:p-12 shadow-2xl rounded-sm"
                >
                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12 space-y-6"
                        >
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle2 className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-serif text-navy">{t('form.success')}</h3>
                            <p className="text-navy/60">Our institutional team will contact you shortly via WhatsApp.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-navy/40">{t('form.name')}</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full border-b border-navy/10 py-3 focus:border-gold outline-none transition-all duration-300 bg-transparent"
                                    value={formData.name}
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-navy/40">{t('form.email')}</label>
                                <input
                                    required
                                    type="email"
                                    className="w-full border-b border-navy/10 py-3 focus:border-gold outline-none transition-all duration-300 bg-transparent"
                                    value={formData.email}
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-navy/40">{t('form.whatsapp')}</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="+1..."
                                    className="w-full border-b border-navy/10 py-3 focus:border-gold outline-none transition-all duration-300 bg-transparent"
                                    value={formData.whatsapp}
                                    onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-navy/40">{t('form.country')}</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full border-b border-navy/10 py-3 focus:border-gold outline-none transition-all duration-300 bg-transparent"
                                    value={formData.residency}
                                    onChange={e => setFormData({...formData, residency: e.target.value})}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-navy/40">{t('form.capital')}</label>
                                <select
                                    required
                                    className="w-full border-b border-navy/10 py-3 focus:border-gold outline-none transition-all duration-300 bg-transparent appearance-none cursor-pointer"
                                    value={formData.capital}
                                    onChange={e => setFormData({...formData, capital: e.target.value})}
                                >
                                    <option value="">Select Range</option>
                                    <option value="100k-250k">$100k - $250k</option>
                                    <option value="250k-500k">$250k - $500k</option>
                                    <option value="500k-1M">$500k - $1M</option>
                                    <option value="1M+">$1M+</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-navy/40">{t('form.timeline')}</label>
                                <select
                                    required
                                    className="w-full border-b border-navy/10 py-3 focus:border-gold outline-none transition-all duration-300 bg-transparent appearance-none cursor-pointer"
                                    value={formData.timeline}
                                    onChange={e => setFormData({...formData, timeline: e.target.value})}
                                >
                                    <option value="">Select Timeline</option>
                                    <option value="Immediate">Immediate</option>
                                    <option value="1-3 Months">1-3 Months</option>
                                    <option value="3-6 Months">3-6 Months</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-navy/40">{t('form.objective')}</label>
                                <textarea
                                    required
                                    rows={3}
                                    className="w-full border-b border-navy/10 py-3 focus:border-gold outline-none transition-all duration-300 bg-transparent resize-none"
                                    value={formData.objective}
                                    onChange={e => setFormData({...formData, objective: e.target.value})}
                                />
                            </div>
                            <div className="md:col-span-2 pt-8">
                                <button
                                    disabled={status === 'loading'}
                                    className="group w-full bg-navy text-white py-6 font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500 disabled:opacity-50 flex items-center justify-center gap-3"
                                >
                                    {status === 'loading' ? 'Processing...' : (
                                        <>
                                            {t('form.submit')}
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                        </>
                                    )}
                                </button>
                                {status === 'error' && <p className="text-red-500 text-center mt-6 text-xs font-bold uppercase tracking-widest">{t('form.error')}</p>}
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

const FAQ = () => {
    const { t } = useTranslation();
    const faqs = [
        { q: t('faq.q1'), a: t('faq.a1') },
        { q: t('faq.q2'), a: t('faq.a2') },
        { q: t('faq.q3'), a: t('faq.a3') },
        { q: t('faq.q4'), a: t('faq.a4') },
        { q: t('faq.q5'), a: t('faq.a5') },
        { q: t('faq.q6'), a: t('faq.a6') }
    ];

    return (
        <section className="py-20 md:py-32 bg-navy/5 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-serif text-navy mb-6">{t('faq.title')}</h2>
                    <div className="w-20 h-1 bg-gold mx-auto" />
                </motion.div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.details
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: i * 0.05 }}
                            key={i}
                            className="group bg-white p-6 border border-navy/5 rounded-sm cursor-pointer shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <summary className="flex items-center justify-between font-bold text-navy list-none gap-4">
                                <span className="text-lg">{faq.q}</span>
                                <ChevronRight className="w-5 h-5 group-open:rotate-90 transition-transform shrink-0 text-gold" />
                            </summary>
                            <p className="mt-6 text-navy/60 leading-relaxed font-light border-t border-navy/5 pt-6">{faq.a}</p>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="py-16 bg-navy text-white px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-2">
                        <Shield className="w-6 h-6 text-gold" />
                        <span className="text-2xl font-bold tracking-tighter">GULF<span className="text-gold">VAULT</span></span>
                    </div>
                    <p className="text-xs text-white/40 max-w-xs text-center md:text-left font-light leading-relaxed">
                        Institutional wealth preservation through proprietary algorithmic infrastructure.
                    </p>
                </div>
                <div className="text-center md:text-right space-y-4">
                    <p className="text-sm text-white/50">{t('footer.rights')}</p>
                    <p className="text-[10px] text-white/20 max-w-md uppercase tracking-[0.2em] leading-relaxed mx-auto md:ml-auto">
                        {t('footer.disclaimer')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default function App() {
    return (
        <div className="min-h-screen selection:bg-gold selection:text-white bg-white">
            <Navbar />
            <main>
                <Hero />
                <VSL />
                <ProblemSolution />
                <Concierge />
                <Process />
                <QualificationForm />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
