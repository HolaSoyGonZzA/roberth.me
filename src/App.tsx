import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";

const projects = [
  {
    url: "https://tailwind-gradient-generator.vercel.app/",
    name: "tailwind-gradient-generator ",
    description: "Tailwind Gradient Generator",
    keywords: ["tailwind", "tailwindcss", "vue"],
  },
  {
    url: "https://marketplace.visualstudio.com/items?itemName=reliutg.bulma-css-class-completion",
    name: "bulma-css-class-completion ",
    description:
      "Visual Studio Code extension that provides CSS class name completion for the HTML class attribute based on Bulma CSS classes.",
    keywords: ["vscode", "bulma", "css", "class"],
  },
  {
    url: "https://github.com/HolaSoyGonZzA/buzz-notify",
    name: "buzz-notify",
    description: "Small and Clean JavaScript Toast Notifications",
    keywords: ["notification", "toast", "accessible"],
  },
  {
    url: "https://github.com/HolaSoyGonZzA/lsdb",
    name: "lsdb",
    description: "✨Database powered by localStorage",
    keywords: ["database", "localStorage", "storage"],
  },

  {
    url: "https://marketplace.visualstudio.com/items?itemName=reliutg.visual-regex",
    name: "visual-regex",
    description:
      "Visual Studio Code extension to get detailed and visual information about the pattern you make.",
    keywords: ["vscode", "regex", "visual", "detailed"],
  },
  {
    url: "https://color-palette-vert.vercel.app/",
    name: "color-palette",
    description: "Color Palette Generator",
    keywords: ["color", "palette", "generator"],
  },
];

function App() {
  return (
    <>
      <Header />
      <Hero />
      <main className="wrapper">
        <section>
          <h2>Projects</h2>
          <div className="list">
            {projects.map((project) => (
              <Card
                key={project.url}
                url={project.url}
                name={project.name}
                description={project.description}
                keywords={project.keywords}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
