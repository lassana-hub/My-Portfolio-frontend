import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import {
  SiReact,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiPostman,
  SiGraphql,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiVercel,
  SiFigma,
  SiGit,
} from "react-icons/si";

export const Hero = () => {
  const skills = [
    { id: 1, name: "Html5", icon: SiHtml5 },
    { id: 2, name: "Css", icon: SiCss },
    { id: 3, name: "Tailwindcss", icon: SiTailwindcss },
    { id: 4, name: "Javascript", icon: SiJavascript },
    { id: 5, name: "React", icon: SiReact },
    { id: 6, name: "Typescript", icon: SiTypescript },
    { id: 7, name: "Node.js", icon: SiNodedotjs },
    { id: 8, name: "Express", icon: SiExpress },
    { id: 9, name: "MongoDB", icon: SiMongodb },
    { id: 10, name: "Git", icon: SiGit },
    { id: 11, name: "Vercel", icon: SiVercel },
    { id: 12, name: "Docker", icon: SiDocker },
    { id: 13, name: "Figma", icon: SiFigma },
    { id: 14, name: "Redis", icon: SiRedis },
    { id: 15, name: "Postgresql", icon: SiPostgresql },
    { id: 16, name: "Graphql", icon: SiGraphql },
    { id: 17, name: "Postman", icon: SiPostman },
    { id: 18, name: "Prisma", icon: SiPrisma },
  ];
  return (
    <section className="relative min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero-bg-image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                FullStack Developpeur • MERN STACK Specialist
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Je construis des applications <br />
                <span className="text-primary glow-text">
                  web modernes,
                </span>{" "}
                <br />
                <span className="font-serif italic font-normal text-white">
                  rapides et sécurisées.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Bonjour, je suis Lassana BARADJI — développeur web Full Stack
                spécialisé en React, Node.js, Express et MongoDB. Passionné par
                le développement d'applications web modernes, je crée des
                solutions robustes, maintenables et évolutives, capables de
                répondre aux besoins réels des entreprises et de leurs
                utilisateurs.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 py-5">
              <Button>
                Me Contacter <ArrowRight className="w-5 h-5" />
              </Button>

              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </AnimatedBorderButton>
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpeg"
                  alt="Lassana Baradji"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">+2</div>
                  <div className="text-xs ">ans d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies maîtrisées
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              <div className="flex gap-6 text-6xl">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.id} className="shrink-0 px-8 py-4">
                      <div className="flex flex-col items-center font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                        <Icon />
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
