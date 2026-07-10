const experiences = [
  {
    period: "2022 — Aujourd'hui",
    role: "Ingénieur Frontend Senior",
    company: "Tech Innovators Inc.",
    description:
      "Responsable de l’architecture frontend pour une suite de produits fintech. Mise en place d’une architecture en micro-frontends, réduction de la taille des bundles de 40 % et encadrement d’une équipe de 5 développeurs.",
    technologies: ["React", "TypeScript", "Next.js", "GraphQL"],
    current: true,
  },
  {
    period: "2020 — 2022",
    role: "Ingénieur Frontend",
    company: "Digital Solutions Co.",
    description:
      "Développement et maintenance de plusieurs applications React pour des clients grands comptes. Mise en place de tests automatisés ayant porté la couverture du code à 85 %.",
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  {
    period: "2019 — 2020",
    role: "Développeur Junior",
    company: "StartUp Labs",
    description:
      "Participation au développement d’une plateforme SaaS, de la version MVP jusqu’à la mise en production. Collaboration avec les designers pour créer des interfaces utilisateur fidèles aux maquettes.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    period: "2018 — 2019",
    role: "Développeur Freelance",
    company: "À mon compte",
    description:
      "Réalisation de solutions web sur mesure pour des petites entreprises et des startups. Développement de plus de 15 sites web et applications, de la conception jusqu’au déploiement.",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10"></div>

      <div className="container mx-auto px-6 relative zoom-105">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in ">
            Parcours professionnel
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Une expérience au service de{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              projets concrets.{" "}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fad-in animation-delay-200">
            Une chronologie de mon évolution professionnelle, de mes débuts en
            tant que développeur passionné à la conception d'applications web
            modernes, en développant progressivement mon expertise technique et
            ma capacité à mener des projets de bout en bout.
          </p>
        </div>
        {/* Timeline */}
        <div className="relative">
          <div />
        </div>
      </div>
    </section>
  );
};
