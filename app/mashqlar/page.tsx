import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, FileText, Home } from "lucide-react"

export default function MashqlarPage() {
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
            <Button variant="ghost" size="sm" asChild>
              <Link href="/darslar/kirish">Darslar</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">HTML mashqlari</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            HTML bilimlaringizni mustahkamlash uchun amaliy mashqlar. Har bir mashq o'rganilgan mavzuni amalda
            qo'llashga yordam beradi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle>HTML asoslari mashqlari</CardTitle>
                <CardDescription>HTML tuzilishi, teglar va atributlar bo'yicha mashqlar</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Birinchi HTML sahifa yaratish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Sarlavhalar va paragraflar bilan ishlash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Atributlardan foydalanish</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/mashqlar/asoslar">Mashqlarni boshlash</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ro'yxatlar va havolalar</CardTitle>
                <CardDescription>Turli xil ro'yxatlar va havolalar yaratish bo'yicha mashqlar</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Tartibli va tartibsiz ro'yxatlar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Ichki ro'yxatlar yaratish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Turli xil havolalar yaratish</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/mashqlar/royxatlar">Mashqlarni boshlash</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <Card>
              <CardHeader>
                <CardTitle>Jadvallar bilan ishlash</CardTitle>
                <CardDescription>HTML jadvallar yaratish va ular bilan ishlash</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Oddiy jadval yaratish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Jadval sarlavhasi va qatorlarini formatlash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Murakkab jadvallar yaratish</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/mashqlar/jadvallar">Mashqlarni boshlash</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Formalar</CardTitle>
                <CardDescription>HTML formalar va kiritish elementlari bilan ishlash</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Ro'yxatdan o'tish formasi yaratish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Turli xil kiritish elementlari bilan ishlash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Forma validatsiyasi</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/mashqlar/formalar">Mashqlarni boshlash</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Rasmlar va media</CardTitle>
                <CardDescription>Rasmlar, audio va video bilan ishlash</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Rasmlarni joylashtirish va formatlash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Audio va video joylashtirish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Rasm xaritasi yaratish</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/mashqlar/media">Mashqlarni boshlash</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Semantik HTML</CardTitle>
                <CardDescription>Semantik elementlar bilan ishlash</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Semantik tuzilishli sahifa yaratish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Header, footer va nav elementlari</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span>Article, section va aside elementlari</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/mashqlar/semantik">Mashqlarni boshlash</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Loyiha mashqlari</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              O'rganilgan bilimlarni amalda qo'llash uchun to'liq loyihalar ustida ishlang. Bu loyihalar sizga HTML
              bilimlaringizni mustahkamlashga yordam beradi.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <Link href="/loyihalar">
                <FileText className="h-5 w-5" />
                <span>Loyiha mashqlarini ko'rish</span>
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-slate-900 py-4 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} HTML O'rganish Kursi
        </div>
      </footer>
    </div>
  )
}
