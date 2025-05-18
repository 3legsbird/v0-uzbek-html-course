import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BookOpen, Code, FileText, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900">
      <header className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl font-bold">HTML O'rganish</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/darslar" className="hover:text-blue-600 transition-colors">
              Darslar
            </Link>
            <Link href="/mashqlar" className="hover:text-blue-600 transition-colors">
              Mashqlar
            </Link>
            <Link href="/loyihalar" className="hover:text-blue-600 transition-colors">
              Loyihalar
            </Link>
            <Link href="/yordam" className="hover:text-blue-600 transition-colors">
              Yordam
            </Link>
          </nav>
          <Button variant="outline">
            <Link href="/darslar/kirish">Boshlash</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">O'zbek tilidagi eng to'liq HTML kursi</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Veb-dasturlash asoslarini o'rganing va o'z veb-saytingizni yarating. Boshlang'ich darajadan professional
            darajagacha bo'lgan yo'l.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <BookOpen className="h-5 w-5" />
              <Link href="/darslar/kirish">Kursni boshlash</Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <FileText className="h-5 w-5" />
              <Link href="/kurs-haqida">Kurs haqida</Link>
            </Button>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Kurs tarkibi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Asosiy tushunchalar
                </CardTitle>
                <CardDescription>HTML asoslari, elementlar va atributlar</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>HTML nima va qanday ishlaydi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Veb-sahifa tuzilishi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Elementlar va teglar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Atributlar va ularning qo'llanilishi</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="/darslar/asoslar" className="w-full flex items-center justify-between">
                    <span>Boshlash</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Amaliy qo'llanish
                </CardTitle>
                <CardDescription>Matn, ro'yxatlar, jadvallar va formalar</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Matn formatlash elementlari</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Ro'yxatlar yaratish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Jadvallar bilan ishlash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Formalar va kiritish elementlari</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="/darslar/amaliy" className="w-full flex items-center justify-between">
                    <span>Boshlash</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Ilg'or mavzular
                </CardTitle>
                <CardDescription>Semantik HTML, media va SEO</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Semantik HTML elementlari</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>Audio va video joylashtirish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>SEO uchun HTML optimizatsiyasi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>HTML5 yangi imkoniyatlari</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Link href="/darslar/ilgor" className="w-full flex items-center justify-between">
                    <span>Boshlash</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Nima uchun bizning kurs?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">O'zbek tilidagi to'liq qo'llanma</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Barcha materiallar o'zbek tilida tayyorlangan bo'lib, o'rganish jarayonini osonlashtiradi. Texnik
                atamalar ham o'zbek tiliga moslab tushuntirilgan.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Amaliy mashqlar</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Har bir mavzu bo'yicha amaliy mashqlar va topshiriqlar berilgan. Bu orqali o'rganilgan bilimlarni
                mustahkamlash imkoniyati mavjud.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Bosqichma-bosqich o'rganish</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Kurs oddiy tushunchalardan boshlanib, murakkab mavzularga qadar bosqichma-bosqich tuzilgan. Bu har
                qanday darajadagi o'quvchilar uchun qulay.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Loyihalar asosida o'rganish</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Kurs davomida amaliy loyihalar ustida ishlash orqali haqiqiy tajriba orttirasiz. Bu ish beruvchilar
                uchun ko'rsatish mumkin bo'lgan portfolio yaratishga yordam beradi.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-blue-50 dark:bg-slate-800 p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Hoziroq boshlang!</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              HTML asoslarini o'rganib, o'z veb-saytingizni yaratishni boshlang. Bizning kurs sizga veb-dasturlash
              dunyosiga ilk qadamlarni qo'yishda yordam beradi.
            </p>
            <Button size="lg" className="gap-2">
              <BookOpen className="h-5 w-5" />
              <Link href="/darslar/kirish">Kursni boshlash</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-slate-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-lg font-semibold">HTML O'rganish</span>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/darslar" className="hover:text-blue-600 transition-colors">
                Darslar
              </Link>
              <Link href="/mashqlar" className="hover:text-blue-600 transition-colors">
                Mashqlar
              </Link>
              <Link href="/loyihalar" className="hover:text-blue-600 transition-colors">
                Loyihalar
              </Link>
              <Link href="/yordam" className="hover:text-blue-600 transition-colors">
                Yordam
              </Link>
            </div>
            <div className="mt-4 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} HTML O'rganish Kursi
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
