import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: '新潟市の草刈り・草むしりは「お茶の間レスキュー隊」へ！最短即日・お見積り無料',
  description: '新潟市の草刈り、草取りなどはお茶の間レスキュー隊にお任せください！最短即日対応、無料見積り、明朗会計で安心の実績。',
};

export default function KSPage() {
  const phoneNumber = '080-9972-2393';
  const telLink = 'tel:08099722393';
  const greeting = 'こんにちは、お茶の間レスキュー隊伊藤です。';

  const reviews = [
    {
      name: 'トシ 様',
      text: '急ですがタイヤ交換をお願いしました。前の大雪時にも雪かきが間に合わず困っていたところ、本当に助けていただきました。スピーディーなのに丁寧で、仕上がりも大満足です。'
    },
    {
      name: '田口岬 様',
      text: 'お話を聞かせて頂き、活気あふれる心温まる大変良い方で、街の人々のお困り事のために県内どこまでも東奔西走されています。応援しています。'
    },
    {
      name: '市毛幸喜 様',
      text: '部屋の片付けを頼みました。事前にYoutubeなどでお顔を拝見してたので安心して依頼できました。仕事も会話もテキパキとした好青年という印象でした。'
    },
    {
      name: 'たか 様',
      text: '車のタイヤ交換をお願いしました。ガソリンスタンド勤務ということもありとても手際のいい作業でした。'
    },
    {
      name: '小武樹 様',
      text: 'パンクした為、急遽連絡して対応していただけたので、大変助かりました！作業も早く最後の仕上げも一緒に確認してもらえたので安心です！'
    }
  ];

  return (
    <div className="w-full flex-grow flex flex-col pt-0 font-sans">
      
      {/* Hero Section - Orange */}
      <section className="w-full bg-orange-500 py-16 md:py-24 text-center text-white">
        <div className="container mx-auto px-4">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white text-orange-600 font-bold shadow-sm">
            新潟市・聖籠町・新発田市 出張費無料！
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
            お庭の草刈りはお任せください！
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-medium">
            最短即日対応。お見積り無料です。
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl inline-block mb-8">
            <a href={telLink} className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-3xl">📞</span> {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      {/* Greeting Section - Green */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
              <Image 
                src="/images/ceo-portrait.jpg" 
                alt="お茶の間レスキュー隊 伊藤" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">{greeting}</h2>
              <p className="text-lg leading-relaxed mb-4">
                お庭の雑草でお困りではありませんか？「暑くて作業ができない」「腰が痛くて」「忙しくて手が回らない」など、どんな理由でも構いません。私たちが責任を持って、あなたのお庭をスッキリ綺麗に仕上げます！
              </p>
              <div className="bg-white/20 p-4 rounded-xl border border-white/30">
                <p className="font-bold">【強み】ガソリンスタンドでの7年間の勤務経験あり</p>
                <p className="text-sm mt-1 opacity-90">手際の良さと丁寧な対応には自信があります！体力仕事もお任せください。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Orange */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-12">
            分かりやすい料金設定
          </h2>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-orange-200">
            <p className="text-xl font-bold text-orange-600 mb-4">基本作業費（1名あたり）</p>
            <div className="text-center mb-8">
              <span className="text-6xl md:text-7xl font-black text-slate-800 tracking-tight">4,500<span className="text-3xl font-extrabold">円〜/時</span></span>
            </div>
            <ul className="text-slate-600 space-y-4 text-left max-w-md mx-auto font-medium">
              <li className="flex items-start gap-3"><span className="text-orange-500 text-xl">✓</span> 作業時間・面積に応じて事前にお見積り</li>
              <li className="flex items-start gap-3"><span className="text-orange-500 text-xl">✓</span> 草の処分費は別途（持ち帰りご希望の場合）</li>
              <li className="flex items-start gap-3"><span className="text-orange-500 text-xl">✓</span> 出張費無料エリア：新潟市・聖籠町・新発田市</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Videos Section - Green */}
      <section className="py-20 bg-green-700 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">作業風景を動画でチェック</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-3xl overflow-hidden bg-white/10 shadow-lg">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/ExU65iPx7TU" 
                title="作業例1" 
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden bg-white/10 shadow-lg">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/6W2P_mogFjk" 
                title="作業例2" 
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - Orange */}
      <section className="py-20 bg-orange-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-12">お客様の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-left shadow-md flex flex-col">
                <div className="text-yellow-400 mb-2">★★★★★</div>
                <p className="font-bold mb-2">{review.name}</p>
                <p className="text-slate-600 text-sm flex-grow mb-4 leading-relaxed">"{review.text}"</p>
                <p className="text-[10px] text-slate-400 mt-auto border-t pt-2">Googleマップの口コミより引用</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Green background for the final push */}
      <section className="py-24 bg-green-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">まずはお気軽にお電話ください！</h2>
          <a href={telLink} className="text-2xl md:text-4xl font-black mb-12 bg-white text-green-700 py-6 rounded-3xl shadow-2xl inline-block px-10 hover:bg-green-50 transition-colors">
            📞 {phoneNumber}
          </a>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl py-8 px-12 rounded-2xl shadow-xl font-bold" asChild>
              <Link href="/contact">メールでお問い合わせ</Link>
            </Button>
            <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-xl py-8 px-12 rounded-2xl shadow-xl font-bold" asChild>
              <a href="https://line.me/R/ti/p/@271paqpi" target="_blank" rel="noopener noreferrer">LINEで相談する</a>
            </Button>
          </div>
          <p className="mt-12 text-green-100 italic">「お茶の間レスキューのページを見た」とお伝えいただくとスムーズです。</p>
        </div>
      </section>

    </div>
  );
}
