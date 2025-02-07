import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
    {
      title: "Virtual Try on - Google extension",
      date: "Dec 2024 - Jan 2025",
      description: "User can try on the product in their cart. Upload an image and press try on to try that product.",
      slug: "1",
      fullDescription:
        "This Google Chrome extension allows users to virtually try on products from their shopping cart. By uploading an image of themselves, users can see how items like clothing or accessories would look on them before making a purchase. This innovative tool enhances the online shopping experience and helps reduce returns due to sizing or style mismatches.",
      technologies: ["JavaScript", "Chrome Extension API", "Image Processing", "WebGL"],
      image: "/placeholder.svg",
    },
    {
      title: "Enchanted Events",
      date: "Jan 2024 - Jun 2024",
      description: "To act as a mediator between the customers and event managers.",
      slug: "2",
      fullDescription:
        "Enchanted Events is a platform that bridges the gap between customers and event managers. It allows users to book, manage, and organize events efficiently, ensuring smooth communication and coordination between both parties.",
      technologies: ["Flutter", "Firebase", "Node.js", "UI/UX Design"],
      image: "/placeholder.svg",
    },
    {
      title: "Meloverse - Entertainment App",
      date: "Jun 2023 - Aug 2023",
      description: "To view videos, songs, and your favorite artists.",
      slug: "3",
      fullDescription:
        "Meloverse is an entertainment application where users can explore a vast collection of videos, songs, and artist profiles. The app provides a seamless experience for music and video lovers.",
      technologies: ["Flutter", "ReactJS", "Firebase", "Django"],
      image: "/placeholder.svg",
    },
    {
      title: "Medicare - Blockchain-based Medicine Expiration Tracker",
      date: "Jul 2024 - Present",
      description: "To track expired medicines using MongoDB, Node.js, blockchain, and Flutter UI.",
      slug: "4",
      fullDescription:
        "Medicare is a blockchain-based system that helps track expired medicines, ensuring safety and reducing pharmaceutical waste. The system leverages MongoDB, Node.js, and blockchain technology to maintain transparency and reliability.",
      technologies: ["Blockchain", "Flutter", "Node.js", "MongoDB", "Web3.js"],
      image: "/placeholder.svg",
    },
    {
      title: "Sportsblog",
      date: "Jan 2024 - Present",
      description: "To view your favorite sports blogs.",
      slug: "5",
      fullDescription:
        "Sportsblog is a platform where sports enthusiasts can read and share their thoughts on various sports events. It offers curated content and expert analysis on trending sports topics.",
      technologies: ["ReactJS", "MongoDB", "Node.js", "Express.js"],
      image: "/placeholder.svg",
    },
  ]
  

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-primary mb-4">{project.title}</h1>
        <p className="text-muted-foreground mb-8">{project.date}</p>
        {project.slug === '1' && (
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <Image 
              src="/images/projects/p1a.jpg" 
              alt="Project 1 Image 1" 
              width={500} 
              height={300} 
              className="w-full h-auto object-cover"
            />
            <Image 
              src="/images/projects/p1b.jpg" 
              alt="Project 1 Image 2" 
              width={500} 
              height={300} 
              className="w-full h-auto object-cover"
            />
            <Image 
              src="/images/projects/p1c.jpg" 
              alt="Project 1 Image 3" 
              width={500} 
              height={300} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        {project.slug !== '1' && (
          <div className="mb-8">
            <Image
              src={project.image || "/profile.jpg"}
              alt={project.title}
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
        <div className="prose prose-lg max-w-none">
          <p>{project.fullDescription}</p>
          <h2 className="text-2xl font-semibold text-secondary mt-8 mb-4">Technologies Used</h2>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
