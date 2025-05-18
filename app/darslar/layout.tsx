import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Code, Home } from "lucide-react"
import { Sidebar } from "@/components/sidebar"

export default function DarslarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white dark:bg-slate-950">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-xl font-bold">HTML O'rganish</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>Bosh sahifa</span>
              </Link>
            </Button>
            <Button size="sm">
              <Link href="/mashqlar">Mashqlar</Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 max-w-4xl mx-auto">{children}</main>
      </div>
      <footer className="bg-gray-100 dark:bg-slate-900 py-4 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} HTML O'rganish Kursi
        </div>
      </footer>
    </div>
  )
}
