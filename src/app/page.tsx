import { Github, Linkedin, Mail, ArrowRight, MapPin } from "lucide-react"
import "@/styles/globals.css"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative z-10 space-y-32 py-16">
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center md:text-left space-y-6 flex-1">
              <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Bikrant Bidyut Kakati
              </h1>
              <div className="flex items-center justify-center md:justify-start space-x-4 text-secondary">
                <Mail className="h-5 w-5" />
                <span>bikrantbidyut12@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-4 text-secondary">
                <MapPin className="h-5 w-5" />
                <span>Guwahati, India</span>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Passionate Flutter developer and web enthusiast with a knack for creating innovative mobile and web
                applications. Currently pursuing B.Tech at Assam Don Bosco University, I blend creativity with technical
                skills to build user-centric solutions. Eager to push the boundaries of technology and make a meaningful
                impact in the digital world.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <Link
                  href="mailto:bikrantbidyut12@gmail.com"
                  className="text-secondary hover:text-primary transition-colors duration-200"
                >
                  <Mail className="h-6 w-6" />
                </Link>
                <Link
                  href="https://github.com"
                  className="text-secondary hover:text-primary transition-colors duration-200"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-secondary hover:text-primary transition-colors duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                <Image
                  src="/images/profile.jpg"
                  alt="Bikrant Bidyut Kakati"
                  width={256}
                  height={256}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-primary animate-fade-in-up">Experience</h2>
          <div className="space-y-12">
            <div className="relative border-l-2 border-accent pl-8 animate-fade-in-up">
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-1"></div>
              <h3 className="text-xl font-semibold text-secondary">Android App Development Intern</h3>
              <p className="text-muted-foreground">EdgeNRoots, Virtual</p>
              <p className="text-muted-foreground">Jul 2024 - Nov 2024</p>
              <p className="mt-2">Development of an Android App using Flutter</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-primary animate-fade-in-up">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2 text-secondary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.date}</p>
                <p className="mb-4 text-foreground">{project.description}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-accent hover:text-primary transition-colors animated-underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-primary animate-fade-in-up">Skills</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="bg-card px-4 py-2 rounded-full text-center text-sm text-secondary shadow-md hover:shadow-lg hover:bg-accent hover:text-white transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-primary to-accent text-white py-16 animate-fade-in-up">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
            <p className="mb-8">Let's create something amazing!</p>
            <Link
              href="mailto:bikrantbidyut12@gmail.com"
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

const projects = [
  {
    title: "Virtual Try on - Google extension",
    date: "Dec 2024 - Jan 2025",
    description: "User can try on the product in their cart. Upload an image and press try on to try that product.",
    slug: "1",
  },
  {
    title: "Enchanted Events",
    date: "Jan 2024 - Jun 2024",
    description: "To act as a mediator between the customers and Event managers",
    slug: "2",
  },
  {
    title: "Meloverse - Entertainment App",
    date: "Jun 2023 - Aug 2023",
    description: "To view videos, songs and your favourite artists.",
    slug: "3",
  },
  {
    title: "Medicare - Blockchain based medicine expiration tracker",
    date: "Jul 2024 - Present",
    description: "To track expired medicines using MongoDB, Node.js, blockchain and Flutter UI to interact.",
    slug: "4",
  },
  {
    title: "Sportsblog",
    date: "Jan 2024 - Present",
    description: "To view your favourite sports blogs",
    slug: "5",
  },
]

const skills = [
  "Flutter",
  "Android",
  "Node.js",
  "Java",
  "ReactJS",
  "UI & UX Design",
  "MySQL",
  "Kotlin",
  "HTML",
  "JavaScript",
  "MongoDB",
  "Figma",
  "Wireframing",
  "CSS",
  "C Programming",
  "web3.js",
  "Django",
]
