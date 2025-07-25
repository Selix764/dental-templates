import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useScrollAnimation, fadeInUp } from '../hooks/useScrollAnimation';
import { useScrollToTop } from '../hooks/useScrollToTop';

const PoliticaCookies = () => {
  const { ref, isInView } = useScrollAnimation();
  
  // Ensure page scrolls to top
  useScrollToTop();

  const cookieTypes = [
    {
      category: 'Cookie-uri Necesare',
      description: 'Acestea sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate.',
      examples: ['Sesiunea utilizatorului', 'Preferințele de limbă', 'Securitatea site-ului'],
      duration: 'Sesiunea browserului'
    },
    {
      category: 'Cookie-uri de Performanță',
      description: 'Ajută la înțelegerea modului în care interacționați cu site-ul.',
      examples: ['Analiza traficului', 'Timpul de răspuns', 'Erorile de pagină'],
      duration: '2 ani'
    },
    {
      category: 'Cookie-uri Funcționale',
      description: 'Permit site-ului să-și amintească alegerile dumneavoastră.',
      examples: ['Preferințele de afișare', 'Setările de accesibilitate', 'Formularele salvate'],
      duration: '1 an'
    },
    {
      category: 'Cookie-uri de Marketing',
      description: 'Utilizate pentru a vă oferi conținut relevant și publicitate personalizată.',
      examples: ['Publicitate personalizată', 'Analiza comportamentului', 'Rețele sociale'],
      duration: '6 luni'
    }
  ];

  const sections = [
    {
      title: '1. Ce Sunt Cookie-urile',
      content: 'Cookie-urile sunt fișiere text mici plasate pe dispozitivul dumneavoastră când vizitați site-ul nostru. Acestea permit site-ului să-și amintească informații despre vizita dumneavoastră, cum ar fi preferințele de limbă și alte setări.'
    },
    {
      title: '2. Cum Utilizăm Cookie-urile',
      content: 'Utilizăm cookie-urile pentru a îmbunătăți experiența dumneavoastră pe site, pentru a analiza traficul site-ului, pentru a personaliza conținutul și pentru a oferi funcționalități avansate. Cookie-urile ne ajută să înțelegem cum utilizați site-ul nostru.'
    },
    {
      title: '3. Tipuri de Cookie-uri',
      content: 'Site-ul nostru utilizează patru tipuri principale de cookie-uri: necesare (pentru funcționarea site-ului), de performanță (pentru analiză), funcționale (pentru personalizare) și de marketing (pentru publicitate relevantă).'
    },
    {
      title: '4. Cookie-uri de Terți',
      content: 'Unele cookie-uri sunt plasate de partenerii noștri, cum ar fi Google Analytics pentru analiza traficului și rețelele sociale pentru integrarea cu platformele lor. Acești terți au propriile politici de confidențialitate.'
    },
    {
      title: '5. Gestionarea Cookie-urilor',
      content: 'Puteți gestiona preferințele cookie-urilor prin setările browserului dumneavoastră. Majoritatea browserelor permit să blocați cookie-urile sau să ștergeți cele existente. Rețineți că blocarea anumitor cookie-uri poate afecta funcționalitatea site-ului.'
    },
    {
      title: '6. Actualizări ale Politicii',
      content: 'Această politică poate fi actualizată periodic pentru a reflecta schimbările în practicile noastre sau în legislația aplicabilă. Vă vom notifica despre orice modificări semnificative prin intermediul site-ului nostru.'
    }
  ];

  const browserInstructions = [
    {
      browser: 'Google Chrome',
      steps: ['Setări > Confidențialitate și securitate', 'Cookie-uri și alte date de site', 'Blocați cookie-urile de terți']
    },
    {
      browser: 'Mozilla Firefox',
      steps: ['Opțiuni > Confidențialitate și securitate', 'Cookie-uri și date de site', 'Blocați cookie-urile de terți']
    },
    {
      browser: 'Safari',
      steps: ['Preferințe > Confidențialitate', 'Blocați cookie-uri', 'Să blocați cookie-urile de terți']
    },
    {
      browser: 'Microsoft Edge',
      steps: ['Setări > Cookie-uri și permisiuni de site', 'Cookie-uri și date de site', 'Blocați cookie-urile de terți']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-16 pt-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6">
              Politica de Cookie-uri
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Informații despre modul în care utilizăm cookie-urile pe site-ul nostru
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
              <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-text-dark mb-6">
              Introducere
            </h2>
            <p className="text-lg text-text-light leading-relaxed mb-6">
              Această politică explică modul în care Clinica Dentaire utilizează cookie-urile pe site-ul nostru. 
              Cookie-urile sunt importante pentru funcționarea site-ului și pentru a vă oferi cea mai bună experiență.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
            </p>
          </motion.div>

          {/* Cookie Types */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-text-dark mb-8">
              Tipuri de Cookie-uri
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-light-gray rounded-2xl p-6"
                >
                  <h3 className="font-heading text-xl font-semibold text-text-dark mb-4">
                    {type.category}
                  </h3>
                  <p className="text-text-light mb-4">
                    {type.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-text-dark mb-2">Exemple:</h4>
                    <ul className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-text-light flex items-center space-x-2">
                          <CheckIcon className="w-4 h-4 text-primary" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-sm text-primary font-medium">
                    Durată: {type.duration}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Policy Sections */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8 mb-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-light-gray rounded-2xl p-8"
              >
                <h3 className="font-heading text-2xl font-semibold text-text-dark mb-4">
                  {section.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Browser Instructions */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-text-dark mb-8">
              Cum Să Gestionați Cookie-urile în Browser
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {browserInstructions.map((browser, index) => (
                <motion.div
                  key={browser.browser}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-soft"
                >
                  <h3 className="font-heading text-xl font-semibold text-text-dark mb-4">
                    {browser.browser}
                  </h3>
                  <ol className="space-y-2">
                    {browser.steps.map((step, idx) => (
                      <li key={idx} className="text-text-light text-sm flex items-start space-x-2">
                        <span className="text-primary font-medium">{idx + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-primary/10 rounded-2xl p-8 text-center"
          >
            <h3 className="font-heading text-2xl font-semibold text-text-dark mb-4">
              Aveți Întrebări despre Cookie-uri?
            </h3>
            <p className="text-text-light mb-6">
              Dacă aveți întrebări despre modul în care utilizăm cookie-urile sau doriți să vă exercitați 
              drepturile GDPR, nu ezitați să ne contactați.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Contactați-ne
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className="btn-outline"
              >
                Înapoi la Site
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PoliticaCookies; 