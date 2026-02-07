import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BarChart3, Globe, Phone, Mail, Instagram, ArrowRight } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Logo } from './components/Logo';
import { ServiceCard } from './components/ServiceCard';

const App: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col md:flex-row pt-20 md:pt-0">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 lg:px-32 py-12 md:py-0 order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <Logo size="lg" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-medium leading-tight mb-6">
              Optimiser votre <br />
              <span className="font-light italic">entreprise</span> <br />
              commence ici
            </h1>
            <p className="text-lg mb-10 text-gray-600">L. Marketing Group</p>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border border-black px-8 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 w-fit"
            >
              En savoir plus
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 h-[50vh] md:h-screen order-1 md:order-2">
          <div className="w-full h-full overflow-hidden">
            <img 
              src="https://picsum.photos/id/486/1200/1600" 
              alt="Architecture Moderne" 
              className="w-full h-full object-cover image-grayscale"
            />
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 px-6 bg-[#EBE5DE]">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex justify-center mb-10">
            <Logo size="md" />
          </div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif mb-8"
          >
            Qui sommes-nous ?
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg leading-relaxed text-gray-800 space-y-6"
          >
            <p>
              L Marketing Group est une agence de marketing stratégique, branding et communication digitale qui accompagne les entreprises, commerces, marques et entrepreneurs dans le développement de leur visibilité, la structuration de leur image de marque et la croissance de leur activité, en ligne comme hors ligne.
            </p>
            <p>
              Nous proposons une approche globale et personnalisée, combinant stratégie, créativité, design et performance digitale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-center mb-16"
          >
            Ce que nous faisons
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="BRANDING & DESIGN"
              icon={<Briefcase size={24} />}
              delay={0.1}
              items={[
                "Création de logos & identité visuelle",
                "Cartes de visite, flyers, supports de communication",
                "Création de CV professionnels & profils de marque",
                "Mini charte graphique"
              ]}
            />
            <ServiceCard 
              title="STRATÉGIE & CONSEIL"
              icon={<BarChart3 size={24} />}
              delay={0.3}
              items={[
                "Stratégie marketing & positionnement de marque",
                "Audit de communication",
                "Accompagnement au lancement de projet",
                "Conseil en développement de visibilité"
              ]}
            />
            <ServiceCard 
              title="MARKETING DIGITAL"
              icon={<Globe size={24} />}
              delay={0.5}
              items={[
                "Gestion des réseaux sociaux (Instagram, TikTok, Facebook)",
                "Création de contenu (visuels, vidéos, textes)",
                "Publicité digitale (Meta Ads)",
                "Optimisation de présence en ligne"
              ]}
            />
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
           <img 
              src="https://picsum.photos/id/24/1600/600" 
              alt="Texture" 
              className="w-full h-full object-cover grayscale"
            />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-serif font-medium leading-snug"
          >
            "Le succès arrive à ceux qui y travaillent."
          </motion.h2>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <div className="w-full h-64 md:h-96 overflow-hidden">
         <img 
            src="https://picsum.photos/id/193/1600/800" 
            alt="Architecture lines" 
            className="w-full h-full object-cover image-grayscale"
          />
      </div>

      {/* CONTACT / FOOTER SECTION */}
      <section id="contact" className="py-20 px-6 bg-[#EBE5DE] relative">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-stretch shadow-2xl bg-white overflow-hidden">
          
          {/* Left: Image Overlay */}
          <div className="w-full md:w-5/12 relative min-h-[400px]">
             <img 
                src="https://picsum.photos/id/238/800/1200" 
                alt="Architecture" 
                className="absolute inset-0 w-full h-full object-cover image-grayscale"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                 <Logo className="bg-white/80 backdrop-blur-sm" size="lg" />
              </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-7/12 p-10 md:p-16 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">
                Faisons les <br/>
                choses <br/>
                ensemble.
              </h2>

              <div className="mb-10">
                <h3 className="text-sm font-bold tracking-widest uppercase mb-1">HALIMA MINT SIDALY</h3>
                <p className="text-gray-600 font-light italic">Fondatrice & Directrice Stratégie</p>
                <p className="text-gray-900 font-medium mt-1">L Marketing Group</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold tracking-widest uppercase text-sm border-b border-gray-200 pb-2 mb-4 w-fit">Coordonnées</h4>
                
                <a href="tel:+22372340580" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors group">
                  <span className="p-2 bg-gray-100 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </span>
                  <span>+223 72 34 05 80</span>
                </a>

                <a href="mailto:contact@lmarketingpartners.com" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors group">
                   <span className="p-2 bg-gray-100 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </span>
                  <span>contact@lmarketingpartners.com</span>
                </a>

                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-700 hover:text-black transition-colors group">
                   <span className="p-2 bg-gray-100 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                    <Instagram size={18} />
                  </span>
                  <span>@l.marketing_group</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="text-center mt-12 text-xs text-gray-500 uppercase tracking-widest">
          © {new Date().getFullYear()} L. Marketing Group. Tous droits réservés.
        </div>
      </section>
    </div>
  );
};

export default App;