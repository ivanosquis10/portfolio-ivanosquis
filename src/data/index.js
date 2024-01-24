export const contact = [
  {
    id: crypto.randomUUID(),
    url: "https://github.com/ivanosquis10",
    icon: "github",
    title: "GitHub | @ivanosquis10",
    subtitle: "View my projects and contributions.",
  },
  {
    id: crypto.randomUUID(),
    url: "https://www.linkedin.com/in/iv%C3%A1n-rodr%C3%ADguez-web/",
    icon: "linkedin",
    title: "LinkedIn | Iván Rodríguez",
    subtitle: "Let's connect and talk about life",
  },
  {
    id: crypto.randomUUID(),
    url: "https://twitter.com/ivanosquis13",
    icon: "twitter",
    title: "Twitter | @ivanosquis13",
    subtitle: "Follow me and I follow you on X",
  },
  {
    id: crypto.randomUUID(),
    url: "mailto:ivanosquis10.12@gmail.com",
    icon: "email",
    title: "Gmail | ivanosquis10.12@gmail",
    subtitle: "Send me an email",
  },
  {
    id: crypto.randomUUID(),
    url: "https://discordapp.com/users/Ivanosquis10#5178",
    icon: "discord",
    title: "Discord | Ivanosquis10#5178",
    subtitle: "Let's play or talk on Discord",
  },
  {
    id: crypto.randomUUID(),
    url: "https://discordapp.com/users/Ivanosquis10#5178",
    icon: "lol",
    title: "LOL | ivanosquisxd_lol",
    subtitle: "Add me and play LOL if you want :)",
  },
]

export const projects = [
  {
    id: 1,
    title: "Bolivarium Conversor",
    description:
      "🚀 Web application to convert rates from dollars to bolivars, and vice versa, a useful tool for Venezuelans. Information brought from an API.",
    image: "/img/bolivar.webp",
    stack: ["react", "typescript", "nextjs", "tailwind", "jest", "testing-library"],
    github: "https://github.com/ivanosquis10/bolivarium-conversor",
    demo: "https://bolivarium-conversor.vercel.app/",
    change: true,
  },
  {
    id: 2,
    title: "Guitarmood",
    description:
      "🎸 Web page in charge of being an ecommerce of guitars and read articles about it, with a shopping cart, database storage.",
    image: "/img/guitarla-home.webp",
    stack: ["react", "nextjs", "supabase", "tailwind"],
    github: "https://github.com/ivanosquis10/guitarmood",
    demo: "https://guitarmood-commerce.vercel.app/",
  },
  {
    id: 3,
    title: "Budget Manager",
    description:
      "💸 Web application that allows you to manage your expenses in a very easy way, filter and edit them. Visualize your expenses depending on your budget.",
    image: "/img/budget.webp",
    stack: ["react", "typescript", "vitejs", "tailwind"],
    github: "https://github.com/ivanosquis10/budget-manager",
    demo: "https://budget-manager-three.vercel.app/",
    change: true,
  },
  {
    id: 4,
    title: "DevQuiz",
    description:
      "🧩 Is an interactive quiz developed with ViteJS, React and Tailwind CSS. It uses Zustand and React Router DOM for navigation and management :)",
    image: "/img/devquiz.webp",
    stack: ["vitejs", "typescript", "tailwind", "react-router-dom"],
    github: "https://github.com/ivanosquis10/js-quiz-zustand",
    demo: "https://frontend-quizz.vercel.app/",
  },
  {
    id: 5,
    title: "YokoCutURL",
    description:
      "📝 Web application that allows you to shorten your URLs, using nextJS with Prisma and PostgreSQL. More details coming soon.",
    stack: ["nextjs", "tailwind", "prisma", "postgresql", "react-hook-form", "zod"],
    github: "https://github.com/ivanosquis10/shortnosquisurl",
    demo: "https://shortnosquisurl.vercel.app/",
  },
]
