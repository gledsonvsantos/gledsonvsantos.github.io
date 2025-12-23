
export const translations = {
  pt: {
    header: {
      role: "Engenheiro de Backend & Cloud",
      description: "Arquitetando sistemas distribuídos escaláveis na AWS.",
    },
    about: {
      title: "Sobre",
      p1: "Sou um desenvolvedor backend apaixonado por construir sistemas robustos e escaláveis. Expertise profunda em arquitetura de nuvem AWS e desenvolvimento de soluções de alta performance.",
      p2: "Meu foco principal é resolver problemas complexos de engenharia, otimizar custos de infraestrutura e garantir que aplicações críticas funcionem de forma confiável em escala."
    },
    skills: {
      title: "Tecnologias",
      categories: {
        languages: "Linguagens",
        stack: "Stack",
        cloud: "Cloud",
        data: "Dados"
      }
    },
    projects: {
      title: "Projetos Selecionados",
      items: [
        {
          title: "Server-Side Analytics",
          description: "Plataforma de análise de alta performance capaz de processar milhões de eventos diariamente com latência mínima."
        },
        {
          title: "Distributed Event Pipeline",
          description: "Arquitetura orientada a eventos para processamento de transações financeiras em tempo real, garantindo consistência e escalabilidade."
        }
      ]
    },
    contact: {
      title: "Vamos trabalhar juntos",
      description: "Sempre aberto para discutir novos projetos, ideias de arquitetura ou oportunidades de colaboração.",
      email: "Envie um email"
    }
  },
  en: {
    header: {
      role: "Backend & Cloud Engineer",
      description: "Architecting scalable distributed systems on AWS.",
    },
    about: {
      title: "About",
      p1: "I am a backend developer passionate about building robust and scalable systems. Deep expertise in AWS cloud architecture and high-performance solution development.",
      p2: "My main focus is solving complex engineering problems, optimizing infrastructure costs, and ensuring critical applications run reliably at scale."
    },
    skills: {
      title: "Tech Stack",
      categories: {
        languages: "Languages",
        stack: "Stack",
        cloud: "Cloud",
        data: "Data"
      }
    },
    projects: {
      title: "Selected Projects",
      items: [
        {
          title: "Server-Side Analytics",
          description: "High-performance analytics platform capable of processing millions of events daily with minimal latency."
        },
        {
          title: "Distributed Event Pipeline",
          description: "Event-driven architecture for real-time financial transaction processing, ensuring consistency and scalability."
        }
      ]
    },
    contact: {
      title: "Let's work together",
      description: "Always open to discussing new projects, architecture ideas, or collaboration opportunities.",
      email: "Email me"
    }
  }
};

export type Language = keyof typeof translations;
export type Translations = typeof translations.pt;
