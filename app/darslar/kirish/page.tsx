import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function KirishPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">HTML nima?</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">Dars #1 • Kirish qismi</div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          HTML (HyperText Markup Language) - veb-sahifalarni yaratish uchun ishlatiladigan belgilash tilidir. HTML
          veb-sahifaning tuzilishini belgilaydi va brauzerga qanday ko'rsatish kerakligini aytadi.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">HTML nima uchun kerak?</h2>
        <p className="mb-4">
          HTML veb-sahifalarning asosiy qurilish bloklari hisoblanadi. U quyidagi imkoniyatlarni beradi:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Veb-sahifa tuzilishini yaratish</li>
          <li>Matnlarni formatlash (sarlavhalar, paragraflar)</li>
          <li>Rasmlar, videolar va boshqa media fayllarni joylashtirish</li>
          <li>Havolalar orqali sahifalarni bog'lash</li>
          <li>Formalar yaratish</li>
          <li>Jadvallar yaratish</li>
        </ul>
        <p>
          HTML o'zi yolg'iz veb-sahifaning ko'rinishini to'liq boshqara olmaydi. Odatda u CSS (Cascading Style Sheets)
          bilan birgalikda ishlatiladi, CSS sahifaning dizayni va ko'rinishini boshqaradi. JavaScript esa interaktiv
          elementlarni qo'shish uchun ishlatiladi.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">HTML qanday ishlaydi?</h2>
        <p className="mb-4">
          HTML teglar (tags) va elementlardan iborat. Teglar HTML hujjatning turli qismlarini belgilash uchun
          ishlatiladi. Har bir teg &lt; va &gt; belgilari orasida yoziladi.
        </p>
        <p className="mb-4">Ko'pgina HTML elementlari ochilish va yopilish teglari juftligidan iborat:</p>
        <CodeBlock code={`<teg>Mazmun</teg>`} language="html" />
        <p className="mt-4">Masalan, paragraf elementi quyidagicha yoziladi:</p>
        <CodeBlock code={`<p>Bu paragraf matni.</p>`} language="html" />
        <p className="mt-4">
          Ba'zi elementlar yopilish tegiga ega emas, ular o'z-o'zidan yopiladigan (self-closing) elementlar deyiladi:
        </p>
        <CodeBlock code={`<img src="rasm.jpg" alt="Rasm tavsifi">`} language="html" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">HTML hujjat tuzilishi</h2>
        <p className="mb-4">Har bir HTML hujjati quyidagi asosiy tuzilishga ega:</p>
        <CodeBlock
          code={`<!DOCTYPE html>
<html>
<head>
  <title>Sahifa sarlavhasi</title>
</head>
<body>
  <h1>Salom, dunyo!</h1>
  <p>Bu mening birinchi HTML sahifam.</p>
</body>
</html>`}
          language="html"
        />
        <p className="mt-4">Bu tuzilishning asosiy qismlari:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>!DOCTYPE html</strong> - hujjat turi deklaratsiyasi, brauzerga bu HTML5 hujjati ekanligini bildiradi
          </li>
          <li>
            <strong>html</strong> - butun HTML hujjatni o'rab turadi
          </li>
          <li>
            <strong>head</strong> - meta-ma'lumotlar, sarlavha, stillar va skriptlarni o'z ichiga oladi
          </li>
          <li>
            <strong>title</strong> - brauzer oynasida ko'rsatiladigan sahifa sarlavhasi
          </li>
          <li>
            <strong>body</strong> - sahifada ko'rinadigan barcha mazmun
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">HTML versiyalari</h2>
        <p className="mb-4">
          HTML vaqt o'tishi bilan rivojlanib bordi. Eng so'nggi va keng tarqalgan versiya HTML5 hisoblanadi. HTML5
          ko'plab yangi elementlar va imkoniyatlarni taqdim etdi, jumladan:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            Semantik elementlar (<code>header</code>, <code>footer</code>, <code>nav</code>, <code>section</code>)
          </li>
          <li>Audio va video elementlari</li>
          <li>Canvas elementi</li>
          <li>Geolokatsiya</li>
          <li>Mahalliy saqlash (local storage)</li>
          <li>Va boshqalar</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Amaliy mashq</h2>
        <p className="mb-4">Keling, oddiy HTML hujjat yaratishni mashq qilamiz:</p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>Matn muharriri (Notepad, VS Code, Sublime Text va boshqalar) oching</li>
          <li>Quyidagi kodni kiriting:</li>
        </ol>
        <CodeBlock
          code={`<!DOCTYPE html>
<html>
<head>
  <title>Mening birinchi sahifam</title>
</head>
<body>
  <h1>Salom, HTML dunyosi!</h1>
  <p>Bu mening birinchi HTML sahifam.</p>
  <p>Men HTML o'rganishni boshladim.</p>
</body>
</html>`}
          language="html"
        />
        <ol className="list-decimal pl-6 space-y-2 mb-4" start={3}>
          <li>
            Faylni <code>birinchi.html</code> nomi bilan saqlang
          </li>
          <li>Faylni brauzerda oching</li>
        </ol>
        <p>Tabriklaymiz! Siz o'zingizning birinchi HTML sahifangizni yaratdingiz.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Xulosa</h2>
        <p className="mb-4">
          Bu darsda biz HTML nima ekanligini, uning asosiy tuzilishini va oddiy HTML hujjat qanday yaratilishini
          o'rgandik. HTML veb-dasturlashning asosiy tili bo'lib, uni o'rganish veb-saytlar yaratish yo'lidagi birinchi
          qadam hisoblanadi.
        </p>
        <p>Keyingi darsda biz HTML bilan ishlash uchun kerakli dasturlar va vositalar haqida gaplashamiz.</p>
      </section>

      <div className="flex justify-between mt-12 pt-6 border-t">
        <Button variant="outline" className="gap-2" asChild>
          <Link href="/">
            <ChevronLeft className="h-4 w-4" />
            <span>Bosh sahifa</span>
          </Link>
        </Button>
        <Button className="gap-2" asChild>
          <Link href="/darslar/kerakli-dasturlar">
            <span>Keyingi dars</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
