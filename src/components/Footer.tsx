import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-card mt-32 animate-fade-in-up">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold text-primary">Bikrant Bidyut Kakati</p>
            <p className="text-secondary">bikrantbidyut12@gmail.com • +91 7399320608</p>
          </div>
          <div className="flex space-x-4">
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
        <div className="text-center mt-4">
          <p className="text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

