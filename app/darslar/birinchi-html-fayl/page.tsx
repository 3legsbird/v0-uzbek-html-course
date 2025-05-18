import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CodeBlock } from "@/components/code-block"
import Image from "next/image"

export default function BirinchiHtmlFaylPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Birinchi HTML fayl</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">Dars #3 • Kirish qismi</div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Bu darsda biz birinchi HTML faylimizni yaratishni va uni brauzerda ochishni o'rganamiz. Siz HTML hujjatning
          asosiy tuzilishini amalda ko'rasiz.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">HTML fayl yaratish</h2>
        <p className="mb-4">HTML fayl yaratish uchun quyidagi qadamlarni bajaring:</p>

        <ol className="list-decimal pl-6 space-y-3 mb-6">
          <li>
            <p className="font-medium">Matn muharririni oching</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Visual Studio Code, Notepad++, yoki boshqa matn muharririni oching.
            </p>
          </li>

          <li>
            <p className="font-medium">Yangi fayl yarating</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              "File" &gt; "New File" yoki Ctrl+N (Windows/Linux) / Cmd+N (Mac) tugmalarini bosing.
            </p>
          </li>

          <li>
            <p className="font-medium">HTML kodini yozing</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Quyidagi HTML kodini kiriting:</p>
            <CodeBlock
              code={`<!DOCTYPE html>
<html>
<head>
  <title>Mening birinchi sahifam</title>
</head>
<body>
  <h1>Salom, dunyo!</h1>
  <p>Bu mening birinchi HTML sahifam.</p>
</body>
</html>`}
              language="html"
            />
          </li>

          <li>
            <p className="font-medium">Faylni saqlang</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              "File" &gt; "Save" yoki Ctrl+S (Windows/Linux) / Cmd+S (Mac) tugmalarini bosing. Faylni ".html"
              kengaytmasi bilan saqlang, masalan "birinchi.html".
            </p>
          </li>

          <li>
            <p className="font-medium">Faylni brauzerda oching</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Saqlangan faylni topib, unga ikki marta bosing yoki faylni brauzerga sudrab olib boring.
            </p>
          </li>
        </ol>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium mb-2 text-blue-800 dark:text-blue-300">Natija</h3>
          <div className="border bg-white dark:bg-slate-800 rounded-lg p-4">
            <h1 className="text-2xl font-bold mb-2">Salom, dunyo!</h1>
            <p>Bu mening birinchi HTML sahifam.</p>
          </div>
        </div>

        <p>Tabriklaymiz! Siz o'zingizning birinchi HTML sahifangizni yaratdingiz va brauzerda ko'rdingiz.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">HTML kod tuzilishini tushunish</h2>
        <p className="mb-4">Keling, yuqoridagi HTML kodining har bir qismini ko'rib chiqaylik:</p>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-medium mb-2">!DOCTYPE html</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Bu deklaratsiya brauzerga hujjat HTML5 formatida ekanligini bildiradi. Har bir HTML hujjat shu
              deklaratsiya bilan boshlanishi kerak.
            </p>
            <CodeBlock code={`<!DOCTYPE html>`} language="html" />
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-medium mb-2">html</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Bu teg butun HTML hujjatni o'rab turadi. Barcha HTML elementlar shu teg ichida joylashadi.
            </p>
            <CodeBlock
              code={`<html>
  <!-- Boshqa HTML elementlar -->
</html>`}
              language="html"
            />
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-medium mb-2">head</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Bu teg hujjat haqidagi meta-ma'lumotlarni o'z ichiga oladi. Bu ma'lumotlar brauzerda ko'rsatilmaydi, lekin
              brauzer uchun muhim.
            </p>
            <CodeBlock
              code={`<head>
  <title>Mening birinchi sahifam</title>
  <!-- Boshqa meta-ma'lumotlar -->
</head>`}
              language="html"
            />
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-medium mb-2">title</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Bu teg brauzer oynasida ko'rsatiladigan sahifa sarlavhasini belgilaydi.
            </p>
            <CodeBlock code={`<title>Mening birinchi sahifam</title>`} language="html" />
            <div className="mt-2">
              <div className="aspect-video relative h-12 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=320"
                  alt="Brauzer sarlavhasi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-medium mb-2">body</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Bu teg brauzerda ko'rsatiladigan barcha mazmunni o'z ichiga oladi: matn, rasmlar, havolalar, jadvallar va
              boshqalar.
            </p>
            <CodeBlock
              code={`<body>
  <h1>Salom, dunyo!</h1>
  <p>Bu mening birinchi HTML sahifam.</p>
  <!-- Boshqa ko'rinadigan elementlar -->
</body>`}
              language="html"
            />
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-medium mb-2">h1</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Bu teg birinchi darajali sarlavhani belgilaydi. HTML h1 dan h6 gacha sarlavha darajalarini
              qo'llab-quvvatlaydi, bunda h1 eng katta va muhim sarlavha hisoblanadi.
            </p>
            <CodeBlock code={`<h1>Salom, dunyo!</h1>`} language="html" />
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-medium mb-2">p</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Bu teg paragrafni belgilaydi. Matnni paragraflarga ajratish o'qish uchun qulay.
            </p>
            <CodeBlock code={`<p>Bu mening birinchi HTML sahifam.</p>`} language="html" />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">HTML faylni tahrirlash</h2>
        <p className="mb-4">HTML faylni tahrirlash uchun quyidagi qadamlarni bajaring:</p>

        <ol className="list-decimal pl-6 space-y-3 mb-6">
          <li>
            <p className="font-medium">HTML faylni matn muharririda oching</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Avval yaratgan "birinchi.html" faylini matn muharririda oching.
            </p>
          </li>

          <li>
            <p className="font-medium">Kodni o'zgartiring</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">Quyidagi o'zgartirishlarni kiriting:</p>
            <CodeBlock
              code={`<!DOCTYPE html>
<html>
<head>
  <title>Mening birinchi sahifam</title>
</head>
<body>
  <h1>Salom, dunyo!</h1>
  <p>Bu mening birinchi HTML sahifam.</p>
  <h2>HTML o'rganish</h2>
  <p>Men HTML o'rganishni boshladim va bu juda qiziqarli!</p>
  <p>HTML veb-sahifalar yaratish uchun ishlatiladigan belgilash tili.</p>
</body>
</html>`}
              language="html"
            />
          </li>

          <li>
            <p className="font-medium">Faylni saqlang</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Ctrl+S (Windows/Linux) / Cmd+S (Mac) tugmalarini bosib, o'zgarishlarni saqlang.
            </p>
          </li>

          <li>
            <p className="font-medium">Brauzerda yangilang</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Brauzerda sahifani yangilash uchun F5 tugmasini bosing yoki yangilash tugmasini bosing.
            </p>
          </li>
        </ol>

        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
          <h3 className="text-lg font-medium mb-2 text-blue-800 dark:text-blue-300">Yangilangan natija</h3>
          <div className="border bg-white dark:bg-slate-800 rounded-lg p-4">
            <h1 className="text-2xl font-bold mb-2">Salom, dunyo!</h1>
            <p className="mb-4">Bu mening birinchi HTML sahifam.</p>
            <h2 className="text-xl font-bold mb-2">HTML o'rganish</h2>
            <p className="mb-2">Men HTML o'rganishni boshladim va bu juda qiziqarli!</p>
            <p>HTML veb-sahifalar yaratish uchun ishlatiladigan belgilash tili.</p>
          </div>
        </div>

        <p>Ko'rib turganingizdek, HTML faylga o'zgartirishlar kiritish va natijani ko'rish juda oson.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Amaliy mashq</h2>
        <p className="mb-4">Quyidagi amaliy mashqni bajaring:</p>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-medium mb-4">Mashq: O'zingiz haqingizda sahifa yarating</h3>
          <p className="mb-4">
            O'zingiz haqingizda qisqacha ma'lumot beruvchi HTML sahifa yarating. Sahifada quyidagilar bo'lishi kerak:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Sahifa sarlavhasi (title)</li>
            <li>Asosiy sarlavha (h1)</li>
            <li>Kichikroq sarlavha (h2)</li>
            <li>Kamida 3 ta paragraf (p)</li>
          </ul>
          <p>Sahifani "men_haqimda.html" nomi bilan saqlang va brauzerda oching.</p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
          <h3 className="text-lg font-medium mb-2 text-green-800 dark:text-green-300">Mashq uchun yechim</h3>
          <CodeBlock
            code={`<!DOCTYPE html>
<html>
<head>
  <title>Men haqimda</title>
</head>
<body>
  <h1>Salom, mening ismim [Ismingiz]</h1>
  <p>Bu sahifada men o'zim haqimda qisqacha ma'lumot beraman.</p>
  
  <h2>Men haqimda</h2>
  <p>Men [yoshingiz] yoshdaman va [shahringiz]da yashayman. Hozirda HTML o'rganishni boshladim.</p>
  
  <h2>Mening qiziqishlarim</h2>
  <p>Men [qiziqishlaringiz] bilan qiziqaman. Bo'sh vaqtimda [hobbiyingiz] bilan shug'ullanishni yaxshi ko'raman.</p>
</body>
</html>`}
            language="html"
          />
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Eslatma: Kvadrat qavslar ichidagi matnni o'zingiz haqingizdagi ma'lumotlar bilan almashtiring.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Xulosa</h2>
        <p className="mb-4">Bu darsda biz:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Birinchi HTML faylimizni yaratishni</li>
          <li>HTML hujjat tuzilishini tushunishni</li>
          <li>HTML faylni tahrirlashni va o'zgarishlarni ko'rishni</li>
          <li>O'zimiz haqimizda oddiy sahifa yaratishni</li>
        </ul>
        <p>
          Keyingi darsda biz HTML tuzilishi haqida batafsil o'rganamiz va HTML elementlar bilan ishlashni davom
          ettiramiz.
        </p>
      </section>

      <div className="flex justify-between mt-12 pt-6 border-t">
        <Button variant="outline" className="gap-2" asChild>
          <Link href="/darslar/kerakli-dasturlar">
            <ChevronLeft className="h-4 w-4" />
            <span>Oldingi dars</span>
          </Link>
        </Button>
        <Button className="gap-2" asChild>
          <Link href="/darslar/html-tuzilishi">
            <span>Keyingi dars</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
