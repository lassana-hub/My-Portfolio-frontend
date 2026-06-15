import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Code propre",
    description:
      "Développement d’applications robustes avec un code clair, maintenable et évolutif.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Conception d’applications rapides, optimisées et centrées sur l’expérience utilisateur.",
  },
  {
    icon: Users,
    title: "Travail d'équipe",
    description:
      "Collaboration efficace avec les développeurs, designers et parties prenantes.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Utilisation des technologies modernes et des meilleures pratiques du développement web.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*Left Column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                À propos de moi
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Construire des applications web modernes,
              <span className="font-serif italic font-normal text-white">
                un projet à la fois..
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Développeur Web Full Stack passionné par les technologies
                JavaScript modernes, je conçois des applications web
                performantes et intuitives. Titulaire d'une licence en
                informatique, je mets mes compétences au service de la création
                de solutions numériques adaptées aux besoins des utilisateurs.
              </p>
              <p>
                Je travaille principalement avec React, Node.js, Express et
                MongoDB pour développer des applications complètes, du frontend
                au backend.
              </p>
              <p>
                Curieux et motivé, je continue d'apprendre de nouvelles
                technologies et d'améliorer mes compétences afin de relever de
                nouveaux défis dans le développement web.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Ma mission est de transformer des idées en solutions numériques
                fiables, en développant des applications web à la fois
                performantes, conviviales et adaptées aux besoins des
                utilisateurs. "
              </p>
            </div>
          </div>
          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
