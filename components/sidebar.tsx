"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const darslar = [
  {
    title: "Kirish",
    items: [
      { title: "HTML nima?", href: "/darslar/kirish" },
      { title: "Kerakli dasturlar", href: "/darslar/kerakli-dasturlar" },
      { title: "Birinchi HTML fayl", href: "/darslar/birinchi-html-fayl" },
    ],
  },
  {
    title: "HTML asoslari",
    items: [
      { title: "HTML tuzilishi", href: "/darslar/html-tuzilishi" },
      { title: "Teglar va elementlar", href: "/darslar/teglar-va-elementlar" },
      { title: "Atributlar", href: "/darslar/atributlar" },
      { title: "Izohlar", href: "/darslar/izohlar" },
    ],
  },
  {
    title: "Matn bilan ishlash",
    items: [
      { title: "Sarlavhalar", href: "/darslar/sarlavhalar" },
      { title: "Paragraflar", href: "/darslar/paragraflar" },
      { title: "Matn formatlash", href: "/darslar/matn-formatlash" },
      { title: "Maxsus belgilar", href: "/darslar/maxsus-belgilar" },
    ],
  },
  {
    title: "Ro'yxatlar va havolalar",
    items: [
      { title: "Tartibli ro'yxatlar", href: "/darslar/tartibli-royxatlar" },
      { title: "Tartibsiz ro'yxatlar", href: "/darslar/tartibsiz-royxatlar" },
      { title: "Tavsif ro'yxatlari", href: "/darslar/tavsif-royxatlari" },
      { title: "Havolalar", href: "/darslar/havolalar" },
    ],
  },
  {
    title: "Rasmlar va media",
    items: [
      { title: "Rasmlar", href: "/darslar/rasmlar" },
      { title: "Audio", href: "/darslar/audio" },
      { title: "Video", href: "/darslar/video" },
    ],
  },
  {
    title: "Jadvallar",
    items: [
      { title: "Jadval yaratish", href: "/darslar/jadval-yaratish" },
      { title: "Jadval qatorlari va kataklar", href: "/darslar/jadval-qatorlari" },
      { title: "Jadval sarlavhasi", href: "/darslar/jadval-sarlavhasi" },
      { title: "Jadval stillar", href: "/darslar/jadval-stillar" },
    ],
  },
  {
    title: "Formalar",
    items: [
      { title: "Forma yaratish", href: "/darslar/forma-yaratish" },
      { title: "Kiritish elementlari", href: "/darslar/kiritish-elementlari" },
      { title: "Tanlash elementlari", href: "/darslar/tanlash-elementlari" },
      { title: "Forma validatsiyasi", href: "/darslar/forma-validatsiyasi" },
    ],
  },
  {
    title: "Semantik HTML",
    items: [
      { title: "Semantik elementlar", href: "/darslar/semantik-elementlar" },
      { title: "Header va Footer", href: "/darslar/header-footer" },
      { title: "Nav va Article", href: "/darslar/nav-article" },
      { title: "Section va Aside", href: "/darslar/section-aside" },
    ],
  },
  {
    title: "Ilg'or mavzular",
    items: [
      { title: "Meta teglar", href: "/darslar/meta-teglar" },
      { title: "SEO asoslari", href: "/darslar/seo-asoslari" },
      { title: "HTML5 yangiliklari", href: "/darslar/html5-yangiliklari" },
      { title: "Keyingi qadamlar", href: "/darslar/keyingi-qadamlar" },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [open, setOpen] = useState(false)

  const sidebar = (
    <ScrollArea className="h-[calc(100vh-8rem)]">
      <div className="px-4 py-2">
        {darslar.map((section) => (
          <div key={section.title} className="mb-6">
            <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400 mb-2">{section.title}</h4>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 rounded-md text-sm transition-colors",
                      pathname === item.href
                        ? "bg-blue-100 text-blue-900 dark:bg-blue-900/20 dark:text-blue-100"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800",
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </ScrollArea>
  )

  if (isMobile) {
    return (
      <>
        <Button
          variant="ghost"
          size="icon"
          className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg bg-white dark:bg-slate-800"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {open && (
          <div className="fixed inset-0 z-50 bg-black/50">
            <div className="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-white dark:bg-slate-950 shadow-xl flex flex-col">
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="font-semibold">Darslar</h2>
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              {sidebar}
            </div>
          </div>
        )}
      </>
    )
  }

  return <div className="w-64 border-r bg-white dark:bg-slate-950 shrink-0">{sidebar}</div>
}
