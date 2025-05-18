import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function KerakliDasturlarPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">HTML uchun kerakli dasturlar</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">Dars #2 • Kirish qismi</div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          HTML bilan ishlash uchun sizga maxsus dasturlar kerak bo'ladi. Bu darsda biz HTML kodi yozish va natijani
          ko'rish uchun kerak bo'ladigan asosiy dasturlar haqida gaplashamiz.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Matn muharrirlari</h2>
        <p className="mb-4">
          HTML kodi oddiy matn formatida yoziladi, shuning uchun har qanday matn muharriri bilan ishlash mumkin. Lekin
          maxsus kod muharrirlari ishingizni ancha osonlashtiradi.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Visual Studio Code</h3>
            <div className="aspect-video relative mb-3 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=320"
                alt="Visual Studio Code"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm mb-3">
              Microsoft tomonidan yaratilgan bepul, ochiq kodli va ko'p platformali kod muharriri. Kengaytmalar orqali
              qo'shimcha imkoniyatlarni qo'shish mumkin.
            </p>
            <ul className="text-sm list-disc pl-5 mb-3">
              <li>Sintaksis ajratib ko'rsatish</li>
              <li>Kod to'ldirish</li>
              <li>Kengaytmalar tizimi</li>
              <li>Terminal integratsiyasi</li>
            </ul>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                Yuklab olish
              </a>
            </Button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Sublime Text</h3>
            <div className="aspect-video relative mb-3 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=320" alt="Sublime Text" fill className="object-cover" />
            </div>
            <p className="text-sm mb-3">
              Tezkor va yengil kod muharriri. Bepul versiyasi mavjud, lekin to'liq versiyasi pullik.
            </p>
            <ul className="text-sm list-disc pl-5 mb-3">
              <li>Tezkor ishlash</li>
              <li>Ko'p kursorli tahrirlash</li>
              <li>Kuchli qidiruv imkoniyatlari</li>
              <li>Plaginlar tizimi</li>
            </ul>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">
                Yuklab olish
              </a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Atom</h3>
            <div className="aspect-video relative mb-3 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=320" alt="Atom" fill className="object-cover" />
            </div>
            <p className="text-sm mb-3">
              GitHub tomonidan yaratilgan bepul va ochiq kodli muharrir. Kengaytmalar orqali moslashtiriladi.
            </p>
            <ul className="text-sm list-disc pl-5 mb-3">
              <li>Moslashtirilishi oson</li>
              <li>Git integratsiyasi</li>
              <li>Kengaytmalar tizimi</li>
              <li>Ko'p platformali</li>
            </ul>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://atom.io/" target="_blank" rel="noopener noreferrer">
                Yuklab olish
              </a>
            </Button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Notepad++</h3>
            <div className="aspect-video relative mb-3 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=320" alt="Notepad++" fill className="object-cover" />
            </div>
            <p className="text-sm mb-3">Windows uchun bepul, yengil va tezkor matn muharriri.</p>
            <ul className="text-sm list-disc pl-5 mb-3">
              <li>Yengil va tezkor</li>
              <li>Ko'plab dasturlash tillari uchun sintaksis ajratish</li>
              <li>Plaginlar tizimi</li>
              <li>Faqat Windows uchun</li>
            </ul>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://notepad-plus-plus.org/" target="_blank" rel="noopener noreferrer">
                Yuklab olish
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <p>
            <strong>Tavsiya:</strong> Biz Visual Studio Code (VS Code) ni tavsiya qilamiz, chunki u bepul, ko'p
            platformali va HTML, CSS, JavaScript bilan ishlash uchun ko'plab foydali kengaytmalarga ega.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Brauzerlar</h2>
        <p className="mb-4">
          HTML kodini yozgandan so'ng, uni brauzerda ko'rish kerak bo'ladi. Quyidagi zamonaviy brauzerlardan birini
          ishlatishingiz mumkin:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded-lg p-4 text-center">
            <div className="aspect-square relative mb-3 w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=64&width=64" alt="Google Chrome" fill className="object-cover" />
            </div>
            <h3 className="text-base font-medium mb-1">Google Chrome</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Eng mashhur va keng tarqalgan brauzer</p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">
                Yuklab olish
              </a>
            </Button>
          </div>

          <div className="border rounded-lg p-4 text-center">
            <div className="aspect-square relative mb-3 w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=64&width=64" alt="Mozilla Firefox" fill className="object-cover" />
            </div>
            <h3 className="text-base font-medium mb-1">Mozilla Firefox</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Ochiq kodli va xavfsiz brauzer</p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://www.mozilla.org/firefox/" target="_blank" rel="noopener noreferrer">
                Yuklab olish
              </a>
            </Button>
          </div>

          <div className="border rounded-lg p-4 text-center">
            <div className="aspect-square relative mb-3 w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=64&width=64" alt="Microsoft Edge" fill className="object-cover" />
            </div>
            <h3 className="text-base font-medium mb-1">Microsoft Edge</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Windows uchun standart brauzer</p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://www.microsoft.com/edge" target="_blank" rel="noopener noreferrer">
                Yuklab olish
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <p>
            <strong>Tavsiya:</strong> Veb-dasturlash uchun Google Chrome yoki Mozilla Firefox tavsiya etiladi, chunki
            ular zamonaviy veb-texnologiyalarni yaxshi qo'llab-quvvatlaydi va kuchli dasturchi vositalariga ega.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Dasturchi vositalari (Developer Tools)</h2>
        <p className="mb-4">
          Zamonaviy brauzerlar o'rnatilgan dasturchi vositalariga ega. Bu vositalar HTML, CSS va JavaScript kodini
          tekshirish va xatolarni tuzatish uchun juda foydali.
        </p>

        <div className="border rounded-lg p-6 mb-6">
          <h3 className="text-lg font-medium mb-3">Dasturchi vositalarini ochish:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Chrome/Edge:</strong> F12 tugmasini bosing yoki Ctrl+Shift+I (Windows/Linux) yoki Cmd+Option+I
              (Mac)
            </li>
            <li>
              <strong>Firefox:</strong> F12 tugmasini bosing yoki Ctrl+Shift+I (Windows/Linux) yoki Cmd+Option+I (Mac)
            </li>
            <li>
              <strong>Safari:</strong> Avval Preferences &gt; Advanced bo'limida "Show Develop menu in menu bar" ni
              yoqing, keyin Develop &gt; Show Web Inspector ni tanlang
            </li>
          </ul>
        </div>

        <div className="aspect-video relative mb-4 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Brauzer dasturchi vositalari"
            fill
            className="object-cover"
          />
        </div>

        <p>Dasturchi vositalari quyidagi imkoniyatlarni beradi:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>HTML elementlarini ko'rish va tahrirlash</li>
          <li>CSS stillarini ko'rish va o'zgartirish</li>
          <li>JavaScript xatolarini aniqlash</li>
          <li>Tarmoq so'rovlarini kuzatish</li>
          <li>Sahifa ishlashini tahlil qilish</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Onlayn muhitlar</h2>
        <p className="mb-4">
          Agar dastur o'rnatishni xohlamasangiz, quyidagi onlayn muhitlardan foydalanishingiz mumkin:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">CodePen</h3>
            <div className="aspect-video relative mb-3 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=320" alt="CodePen" fill className="object-cover" />
            </div>
            <p className="text-sm mb-3">HTML, CSS va JavaScript uchun onlayn muhit. Natijani darhol ko'rish mumkin.</p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">
                Ochish
              </a>
            </Button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">JSFiddle</h3>
            <div className="aspect-video relative mb-3 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=320" alt="JSFiddle" fill className="object-cover" />
            </div>
            <p className="text-sm mb-3">
              Veb-dasturlash uchun onlayn muhit. Kodingizni saqlash va boshqalar bilan ulashish mumkin.
            </p>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://jsfiddle.net/" target="_blank" rel="noopener noreferrer">
                Ochish
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Xulosa</h2>
        <p className="mb-4">
          Bu darsda biz HTML bilan ishlash uchun kerakli dasturlar va vositalar haqida gaplashdik. Quyidagi dasturlarni
          o'rnatishni tavsiya qilamiz:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Kod muharriri:</strong> Visual Studio Code
          </li>
          <li>
            <strong>Brauzer:</strong> Google Chrome yoki Mozilla Firefox
          </li>
        </ul>
        <p>Keyingi darsda biz birinchi HTML faylimizni yaratishni va uni brauzerda ochishni o'rganamiz.</p>
      </section>

      <div className="flex justify-between mt-12 pt-6 border-t">
        <Button variant="outline" className="gap-2" asChild>
          <Link href="/darslar/kirish">
            <ChevronLeft className="h-4 w-4" />
            <span>Oldingi dars</span>
          </Link>
        </Button>
        <Button className="gap-2" asChild>
          <Link href="/darslar/birinchi-html-fayl">
            <span>Keyingi dars</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
