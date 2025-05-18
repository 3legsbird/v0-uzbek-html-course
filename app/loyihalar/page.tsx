import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Home, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function LoyihalarPage() {
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
            <Button variant="ghost" size="sm" asChild>
              <Link href="/mashqlar">Mashqlar</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">HTML loyiha mashqlari</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            HTML bilimlaringizni amalda qo'llash uchun to'liq loyihalar. Bu loyihalar sizga haqiqiy veb-saytlar yaratish
            tajribasini beradi va portfolio uchun namunalar bo'lib xizmat qiladi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="aspect-video relative bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Shaxsiy veb-sahifa"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Shaxsiy veb-sahifa</CardTitle>
                <CardDescription>O'zingiz haqingizda ma'lumot beruvchi shaxsiy veb-sahifa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Bu loyihada siz o'zingiz haqingizda ma'lumot beruvchi shaxsiy veb-sahifa yaratishni o'rganasiz.
                  Sahifada quyidagilar bo'lishi kerak:
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1 mb-4">
                  <li>Bosh sahifa</li>
                  <li>Haqimda bo'limi</li>
                  <li>Ko'nikmalar ro'yxati</li>
                  <li>Aloqa ma'lumotlari</li>
                </ul>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                    Boshlang'ich
                  </span>
                  <span>•</span>
                  <span>2-3 soat</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/loyihalar/shaxsiy-sahifa">Loyihani boshlash</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Restoran menyu sahifasi"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Restoran menyu sahifasi</CardTitle>
                <CardDescription>Restoran uchun menyu sahifasi yaratish</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Bu loyihada siz restoran uchun menyu sahifasi yaratishni o'rganasiz. Sahifada quyidagilar bo'lishi
                  kerak:
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1 mb-4">
                  <li>Restoran haqida ma'lumot</li>
                  <li>Taomlar kategoriyalari</li>
                  <li>Taomlar ro'yxati va narxlari</li>
                  <li>Aloqa ma'lumotlari</li>
                </ul>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                    Boshlang'ich
                  </span>
                  <span>•</span>
                  <span>3-4 soat</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/loyihalar/restoran-menyu">Loyihani boshlash</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="aspect-video relative bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Mahsulot sahifasi"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Mahsulot sahifasi</CardTitle>
                <CardDescription>Onlayn do'kon uchun mahsulot sahifasi</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Bu loyihada siz onlayn do'kon uchun mahsulot sahifasi yaratishni o'rganasiz. Sahifada quyidagilar
                  bo'lishi kerak:
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1 mb-4">
                  <li>Mahsulot rasmlari galereyasi</li>
                  <li>Mahsulot tavsifi</li>
                  <li>Narx va mavjudlik ma'lumotlari</li>
                  <li>Xarid qilish formasi</li>
                </ul>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded text-xs">
                    O'rta
                  </span>
                  <span>•</span>
                  <span>4-5 soat</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/loyihalar/mahsulot-sahifasi">Loyihani boshlash</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative bg-gray-100 dark:bg-gray-800">
                <Image src="/placeholder.svg?height=200&width=400" alt="Blog sahifasi" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>Blog sahifasi</CardTitle>
                <CardDescription>Shaxsiy blog sahifasi yaratish</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Bu loyihada siz shaxsiy blog sahifasi yaratishni o'rganasiz. Sahifada quyidagilar bo'lishi kerak:
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1 mb-4">
                  <li>Bosh sahifa maqolalar ro'yxati bilan</li>
                  <li>Maqola sahifasi</li>
                  <li>Muallif haqida ma'lumot</li>
                  <li>Izoh qoldirish formasi</li>
                </ul>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded text-xs">
                    O'rta
                  </span>
                  <span>•</span>
                  <span>5-6 soat</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/loyihalar/blog-sahifasi">Loyihani boshlash</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video relative bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Kompaniya veb-sayti"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Kompaniya veb-sayti</CardTitle>
                <CardDescription>Ko'p sahifali kompaniya veb-sayti</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Bu loyihada siz ko'p sahifali kompaniya veb-saytini yaratishni o'rganasiz. Saytda quyidagilar bo'lishi
                  kerak:
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1 mb-4">
                  <li>Bosh sahifa</li>
                  <li>Kompaniya haqida sahifa</li>
                  <li>Xizmatlar sahifasi</li>
                  <li>Aloqa sahifasi</li>
                </ul>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-2 py-1 rounded text-xs">
                    Murakkab
                  </span>
                  <span>•</span>
                  <span>8-10 soat</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/loyihalar/kompaniya-sayti">Loyihani boshlash</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Portfolio sayti"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Portfolio sayti</CardTitle>
                <CardDescription>Shaxsiy portfolio sayti yaratish</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Bu loyihada siz shaxsiy portfolio saytini yaratishni o'rganasiz. Saytda quyidagilar bo'lishi kerak:
                </p>
                <ul className="text-sm list-disc pl-5 space-y-1 mb-4">
                  <li>Bosh sahifa</li>
                  <li>Loyihalar galereyasi</li>
                  <li>Loyiha tavsifi sahifalari</li>
                  <li>Aloqa sahifasi</li>
                </ul>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 px-2 py-1 rounded text-xs">
                    Murakkab
                  </span>
                  <span>•</span>
                  <span>10-12 soat</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/loyihalar/portfolio-sayti">Loyihani boshlash</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Qo'shimcha resurslar</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              HTML o'rganish uchun qo'shimcha resurslar va qo'llanmalar:
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>MDN Web Docs - HTML</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3schools.com/html/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>W3Schools HTML Tutorial</span>
                </a>
              </li>
              <li>
                <a
                  href="https://htmlreference.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>HTML Reference</span>
                </a>
              </li>
            </ul>
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
