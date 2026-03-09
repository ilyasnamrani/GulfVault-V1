import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero: {
        title: "Institutional Wealth Preservation",
        subtitle: "GulfVault provides high-net-worth individuals with access to structured UAE fixed savings\n" +
            "opportunities offering up to 6% annual yield while preserving liquidity, security, and\n" +
            "strategic control.",
        cta: "Apply for Private Consultation",
        badge: "Institutional Grade",
          underButton: "Qualified profiles only.\n"+
              " Application required."
      },
      vsl: {
        title: "A Smarter Way to Position Capital",
        placeholder: "Video Presentation Placeholder",
          intro: "Discover how globally mobile investors are reallocating idle capital into structured UAE\n" +
              "fixed savings frameworks designed for yield, liquidity, and long-term capital efficiency.",
          belowVideo: "Capital remains fully liquid. Structured onboarding required."
      },
      problem: {
        title: "Idle Capital Is Quietly Losing Value",
        desc: "Traditional banking environments often fail to meaningfully offset inflation. Real estate and private assets introduce friction, management burden, and capital lock-in. Volatility exposure does not guarantee proportional yield.",
          closingLigne: "Capital preservation should not require operational complexity — nor should it sacrifice\n" +
              "return."
      },
      solution: {
        title: "A Structured Alternative For Capital Efficiency",
        desc: "We provide the infrastructure to bridge institutional safety with consistent yield, maintaining 100% liquidity at all times."
      },
        features: {
            security: {
                title: "Up To 6% Annual Yield",
                desc: "Access UAE-based fixed savings structures offering up to 6% annually, denominated in\n" +
                    "USD.\n" +
                    "Rates may vary depending on allocation and banking structure."
            },
            liquidity: {
                title: "Fully Liquid Capital",
                desc: "Maintain access to your funds without tenant risk, asset lock-in, or operational friction."
            },
            access: {
                title: " Institutional Framework",
                desc: "Structured onboarding, compliance alignment, and private banking introductions handled\n" +
                    "end-to-end."
            },
            global: {
                title: "Global",
                desc: "Multi-Jurisdiction"
            }
        },
      concierge: {
        title: "Beyond Yield — A Complete Capital Infrastructure",
        desc: "White-glove service combined with tier-1 banking infrastructure. Your capital remains under your control, managed by our proprietary algorithms.",
          list: [
              "Coordinated UAE residency alignment to maintain banking advantages",
              "Travel coordination tied to residency maintenance requirements",
              "Priority banking introductions",
              "Structured capital onboarding",
              "Ongoing strategic review"
          ]
      },
      process: {
        title: "How GulfVault Works",
          steps: [
              {
                  title: "Application Review",
                  desc: "Every profile is assessed for eligibility."
              },
              {
                  title: "Strategic Alignment Call",
                  desc: "Capital objectives and structure clarified."
              },
              {
                  title: "UAE Banking Structuring",
                  desc: "Coordinated execution and onboarding."
              },
              {
                  title: "Ongoing Monitoring",
                  desc: "Yield positioning and structural alignment maintained."
              }
          ]
      },
      form: {
        title: "Apply For Private Consideration",
        desc: "GulfVault operates on a qualification basis.\n" +
            "Submit your profile for review and our team will assess alignment within 24 hours.",
        name: "Full Name",
        email: "Email Address",
        whatsapp: "WhatsApp Number",
        country: "Country of Residence",
        capital: "Capital Range",
          objectiveOptions: {
              yield: "Yield",
              diversification: "Diversification",
              residency: "Residency Alignment",
              other: "Other"
          },
        timeline: "Investment Timeline",
        submit: "Submit for Review",
        success: "Submission Successful / Under Review",
        error: "An error occurred. Please try again."
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: "Is this structure compliant with international banking standards?",
        a1: "Yes. The underlying banking institutions operate under UAE regulatory frameworks. All\n" +
            "structuring is aligned with applicable banking and compliance standards.",
        q2: "Is capital insured?",
        a2: "Insurance and regulatory coverage depend on the specific banking institution and account\n" +
            "structure. Details are clarified during the qualification process.",
          q3: "Is the 6% guaranteed?",
          a3: "Rates are fixed savings rates offered by the banking institution at the time of allocation. Rates may vary depending on structure and allocation size.",
          q4: "What are the risks?",
          a4: "As with any banking product, risks include regulatory changes, banking counterparty\n" +
              "exposure, and jurisdictional considerations. These are addressed transparently during\n" +
              "structuring.",
          q5: "What minimum capital is required?",
          a5: "GulfVault works exclusively with qualified high-net-worth profiles. Minimum thresholds are\n" +
              "disclosed during the application review process.",
          q6: "How quickly can funds be accessed?",
          a6: "Liquidity terms depend on the specific fixed savings structure selected. Certain options allow \n"+
          "capital access at defined intervals."
      },
      footer: {
        rights: "© 2026 GulfVault. All rights reserved.",
        disclaimer: "Institutional wealth management involves risk. Past performance is not indicative of future results."
      }
    }
  },
  fr: {
    translation: {
      hero: {
        title: "Préservation de la Richesse Institutionnelle",
        subtitle: "GulfVault permet aux profils à haut patrimoine d’accéder à des solutions d’épargne\n" +
            "structurées aux Émirats Arabes Unis offrant jusqu’à 6 % par an tout en conservant\n" +
            "liquidité, sécurité et contrôle stratégique.",
        cta: "Soumettre une candidature privée",
        badge: "Grade Institutionnel",
          underButton: "Profils qualifiés uniquement.\n"+
              " Candidature requise."
      },
      vsl: {
        title: "Une approche plus intelligente du positionnement de capital",
        placeholder: "Espace réservé pour la présentation vidéo",
          intro: "Découvrez comment des investisseurs internationaux repositionnent leur capital vers des \n"+
              "structures d’épargne fixes aux Émirats, conçues pour le rendement, la liquidité et l’efficacité \n"+
              "patrimoniale long terme.",
          belowVideo: "Capital pleinement liquide. Processus structuré requis"
      },
      problem: {
        title: "Un capital inactif perd silencieusement en valeur",
        desc: "La banque traditionnelle offre la sécurité sans rendement. Le capital-investissement offre des rendements sans liquidité. Les investisseurs institutionnels doivent choisir entre stagnation et périodes de blocage.",
          closingLigne: "Préserver son capital ne devrait ni impliquer complexité opérationnelle, ni sacrifier le\n" +
              "rendement."
      },
      solution: {
        title: "Une alternative structurée pour optimiser le capital",
        desc: "Les environnements bancaires traditionnels peinent à compenser l’inflation. L’immobilier et les actifs privés introduisent gestion, friction et immobilisation du capital. L’exposition à la volatilité ne garantit pas un rendement proportionnel."
      },
        features: {
            security: {
                title: "Jusqu’à 6 % par an",
                desc: "Accès à des structures d’épargne fixes aux Émirats Arabes Unis offrant jusqu’à 6 % par an,\n" +
                    "libellées en USD.\n" +
                    "Les taux peuvent varier selon l’allocation et la structure bancaire."
            },
            liquidity: {
                title: "Capital pleinement liquide",
                desc: "Accès aux fonds sans gestion locative, sans immobilisation, sans friction opérationnelle."
            },
            access: {
                title: "Cadre institutionnel",
                desc: "Onboarding structuré, conformité alignée et introduction bancaire privée gérés de bout en\n" +
                    "bout."
            }
        },
      concierge: {
        title: "Au-delà du rendement — Une infrastructure complète",
        desc: "Un service personnalisé combiné à une infrastructure bancaire de premier rang. Votre capital reste sous votre contrôle.",
          list: [
              "Alignement de résidence UAE pour maintenir les avantages bancaires",
              "Coordination des déplacements liés aux obligations de maintien",
              "Introductions bancaires prioritaires",
              "Structuration du capital",
              "Suivi stratégique continu"
          ]
      },
      process: {
        title: "Comment fonctionne GulfVault",
          steps: [
              {
                  title: "Analyse de candidature",
                  desc: "Chaque profil est évalué."
              },
              {
                  title: "Appel d’alignement stratégique",
                  desc: "Clarification des objectifs et de la structure."
              },
              {
                  title: "Structuration bancaire UAE",
                  desc: "Exécution et onboarding coordonnés."
              },
              {
                  title: "Suivi continu",
                  desc: "Maintien du positionnement et de l’alignement."
              }
          ]
      },
      form: {
        title: "Candidature privée",
        desc: "GulfVault fonctionne sur sélection.\n" +
            "Soumettez votre profil pour analyse. Réponse sous 24 heures.",
        name: "Nom Complet",
        email: "Adresse Email",
        whatsapp: "Numéro WhatsApp",
        country: "Pays de Résidence",
        capital: "Tranche de Capital",
        objective: "Objectif Principal",
        timeline: "Horizon d'Investissement",
        submit: "Soumettre pour Examen",
        success: "Soumission Réussie / En Cours d'Examen",
        error: "Une erreur est survenue. Veuillez réessayer."
      },
        faq: {
            title: "Frequently Asked Questions",
            q1: "La structure est-elle conforme ?",
            a1: "Oui. Les institutions bancaires opèrent sous cadre réglementaire des Émirats Arabes Unis.",
            q2: "Le capital est-il garanti ?",
            a2: "Les taux proposés sont des taux fixes offerts par les établissements bancaires au moment de\n" +
                "l’allocation. Les modalités exactes sont précisées lors du processus.",
            q3: "Les 6 % sont-ils garantis ?",
            a3: "Les taux sont des taux d'épargne fixes proposés par l'établissement bancaire au moment de l'allocation. Ces taux peuvent varier en fonction de la structure et de la taille de l'allocation.",
            q4: "Quels sont les risques ?",
            a4: "Comme toute structure bancaire, des risques existent (contrepartie bancaire, évolutions\n" +
                "réglementaires, conditions contractuelles). Ils sont détaillés lors de l’alignement stratégique.",
            q5: "Quel est le capital minimum ?",
            a5: "GulfVault travaille exclusivement avec des profils qualifiés. Les seuils sont communiqués\n" +
                "après analyse",
            q6: "Les fonds sont-ils accessibles ?",
            a6: "La liquidité dépend de la structure choisie. Certaines options permettent un accès à intervalles\n" +
                "définis."
        },
      footer: {
        rights: "© 2024 GulfVault. Tous droits réservés.",
        disclaimer: "La gestion de patrimoine institutionnel comporte des risques."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
