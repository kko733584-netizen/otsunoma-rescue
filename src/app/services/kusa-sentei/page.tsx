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
    <div className="w-full flex-grow flex flex-col pt-0 font-sans overflow-x-hidden">
      
      {/* --- RECREATED HERO BANNER --- */}
      <section className="relative w-full bg-[#f0f9f0] overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-[60%] text-center lg:text-left">
              {/* Main Headline */}
              <h1 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-black leading-tight mb-2 tracking-tighter drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]">
                <span className="text-[#f97316]" style={{ WebkitTextStroke: '1px white' }}>
                  お庭のトラブル、今すぐ解決！
                </span>
              </h1>
              
              {/* Sub Headline */}
              <p className="text-[#3a7d44] text-[15px] sm:text-[20px] md:text-[24px] font-bold mb-8 drop-shadow-[1px_1px_0px_rgba(255,255,255,0.8)]">
                大変な草刈り・庭の手入れはプロにお任せください。<br className="hidden sm:block"/> 最短即日対応！
              </p>

              {/* Three Round Badges */}
              <div className="flex justify-center lg:justify-start gap-3 sm:gap-6 mb-10">
                {[
                  "地域密着・\n実績多数",
                  "お見積り・\n完全無料",
                  "24時間・\n年中無休"
                ].map((text, idx) => (
                  <div key={idx} className="w-[85px] h-[85px] sm:w-[110px] sm:h-[110px] rounded-full border-[3px] sm:border-[5px] border-[#3a7d44] bg-white flex items-center justify-center text-center shadow-lg transform transition-transform hover:scale-110">
                    <span className="text-[#3a7d44] font-bold text-[11px] sm:text-[14px] leading-tight whitespace-pre-wrap">
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button Box */}
              <div className="inline-block w-full max-w-[420px] bg-[#f97316] p-3 sm:p-5 rounded-[20px] shadow-xl border-[4px] border-white transform hover:scale-105 transition-transform">
                <p className="text-white text-[14px] sm:text-[20px] font-bold mb-1 text-center">お気軽にご相談ください！</p>
                <a href={telLink} className="flex items-center justify-center gap-2 text-white hover:opacity-90 transition-opacity">
                  <span className="text-[20px] sm:text-[32px]">📞</span>
                  <span className="text-[28px] sm:text-[48px] font-black tracking-tighter leading-none">{phoneNumber}</span>
                </a>
              </div>
            </div>

            {/* Right Visual Area */}
            <div className="w-full lg:w-[40%] mt-10 lg:mt-0 relative group">
              {/* Grass Weeding Photo (Existing Asset) */}
              <div className="relative w-full aspect-[4/3] sm:aspect-square rounded-[30px] sm:rounded-full overflow-hidden border-[6px] sm:border-[10px] border-white shadow-2xl z-0">
                <Image 
                  src="/images/hero-main-fixed.jpg" 
                  alt="草刈り作業" 
                  fill 
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#f0f9f0]/40 lg:to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Green Banner */}
        <div className="w-full bg-[#3a7d44] py-3 sm:py-5 border-t border-white/20">
          <p className="text-white text-center font-bold text-[14px] sm:text-[24px] lg:text-[32px] tracking-wider px-4">
            安心・迅速。丁寧な作業で、安心をお届けします♪
          </p>
        </div>

        {/* Background Grass Texture Overlay (Simulated) */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-[#3a7d44]/5 to-transparent pointer-events-none"></div>
      </section>
      {/* --- END RECREATED HERO BANNER --- */}

      {/* Greeting Section - Green */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-green-600 shadow-lg flex-shrink-0">
              <Image 
                src="/images/ceo-portrait.jpg" 
                alt="お茶の間レスキュー隊" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-slate-800">こんにちは、お茶の間レスキュー隊です。</h2>
              <p className="text-lg leading-relaxed mb-4 text-slate-600 font-medium">
                「暑くて作業ができない」「腰が痛くて」「忙しくて手が回らない」など、どんな理由でも構いません。お庭の雑草でお困りの際は、私たちにお任せください！
              </p>
              <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                <p className="font-bold text-green-800">【強み】ガソリンスタンドでの7年間の勤務経験あり</p>
                <p className="text-sm mt-1 text-green-700">手際の良さと丁寧な対応には自信があります！体力仕事もお任せください。</p>
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
            <p className="text-xl font-bold text-orange-600 mb-4">基本作業費（1時間あたり）</p>
            <div className="text-center mb-8">
              <span className="text-6xl md:text-7xl font-black text-slate-800 tracking-tight">4,500<span className="text-3xl font-extrabold">円〜/時</span></span>
            </div>
            <ul className="text-slate-600 space-y-4 text-left max-w-lg mx-auto font-medium">
              <li className="flex items-start gap-3"><span className="text-orange-500 text-xl font-bold">✓</span> 作業時間・面積に応じて事前にお見積り</li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl font-bold">✓</span> 
                <span>
                  出張費無料エリア：新潟市・聖籠町・新発田市<br/>
                  <span className="text-sm text-slate-500">その他の近隣の市はお問い合わせくだされば、無料見積もり致します！</span>
                </span>
              </li>
              <li className="flex items-start gap-3 pt-4 border-t border-slate-100">
                <span className="text-slate-800 font-bold">詳しいお見積りは担当者より説明いたします！</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Videos Section - Green (Alternating) */}
      <section className="py-20 bg-[#3a7d44] text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">作業風景を動画でチェック</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video rounded-3xl overflow-hidden bg-white/10 shadow-lg border-4 border-white/20">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/ExU65iPx7TU" 
                title="作業例1" 
                frameBorder="0" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video rounded-3xl overflow-hidden bg-white/10 shadow-lg border-4 border-white/20">
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

      {/* Reviews Section - Orange (Alternating) */}
      <section className="py-20 bg-orange-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-12">お客様の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-left shadow-md flex flex-col hover:-translate-y-1 transition-transform">
                <div className="text-yellow-400 mb-2">★★★★★</div>
                <p className="font-bold mb-2 text-slate-800">{review.name}</p>
                <p className="text-slate-600 text-sm flex-grow mb-4 leading-relaxed">"{review.text}"</p>
                <p className="text-[10px] text-slate-400 mt-auto border-t pt-2 uppercase tracking-widest">Googleマップの口コミより引用</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Final Push */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-[#3a7d44]">まずはお気軽にお電話ください！</h2>
          <div className="bg-[#f97316] p-6 sm:p-10 rounded-[40px] shadow-2xl mb-12 transform hover:scale-105 transition-transform border-[6px] border-orange-50">
            <a href={telLink} className="text-white hover:opacity-90 transition-opacity flex flex-col items-center">
              <p className="text-[18px] sm:text-[24px] font-bold mb-2 opacity-90">タップで今すぐ発信できます</p>
              <div className="flex items-center gap-4">
                <span className="text-[32px] sm:text-[56px]">📞</span>
                <span className="text-[36px] sm:text-[72px] font-black tracking-tighter leading-none">{phoneNumber}</span>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white text-xl py-8 px-12 rounded-2xl shadow-xl font-bold h-auto" asChild>
              <Link href="/contact">メールでお問い合わせ</Link>
            </Button>
            <Button size="lg" className="bg-[#06C755] hover:bg-[#05b34c] text-white text-xl py-8 px-12 rounded-2xl shadow-xl font-bold h-auto" asChild>
              <a href="https://line.me/R/ti/p/@271paqpi" target="_blank" rel="noopener noreferrer">LINEで相談する</a>
            </Button>
          </div>
          <p className="mt-12 text-slate-400 italic">「お茶の間レスキューのページを見た」とお伝えいただくとスムーズです。</p>
        </div>
      </section>

    </div>
  );
}
