import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// 1. SEO Metadata
export const metadata: Metadata = {
  title: '新潟市の草刈り・草むしりは「お茶の間レスキュー隊」へ！最短即日・お見積り無料',
  description: '新潟市の草刈り、草取りなどはお茶の間レスキュー隊にお任せください！1時間4,500円からの分かりやすい料金体系。最短即日対応、無料見積り、明朗会計で安心の実績。',
  keywords: '新潟市, 草刈り, 草取り, 庭の手入れ, お茶の間レスキュー隊, 見積り無料, 便利屋',
};

// Mock Reviews Data
const reviews = [
  {
    name: 'トシ 様',
    rating: 5,
    text: '急ですがタイヤ交換をお願いしました。前の大雪時にも雪かきが間に合わず困っていたところ、本当に助けていただきました。スピーディーなのに丁寧で、仕上がりも大満足です。知人にも自信を持っておすすめできます。',
    source: 'Googleマップの口コミより引用',
  },
  {
    name: '田口岬 様',
    rating: 5,
    text: 'お話を聞かせて頂き、活気あふれる心温まる大変良い方で、街の人々のお困り事のために県内どこまでも東奔西走されています。応援しています。',
    source: 'Googleマップの口コミより引用',
  },
  {
    name: '市毛幸喜 様',
    rating: 5,
    text: '部屋の片付けを頼みました。事前にYoutubeなどでお顔を拝見してたので安心して依頼できました。仕事も会話もテキパキとした好青年という印象でした。料金も近隣の便利屋さんより安いですし、当然仕事もきちんとこなしていただきました。',
    source: 'Googleマップの口コミより引用',
  },
];

export default function GrassCuttingLP() {
  return (
    <div className="w-full flex-grow flex flex-col pt-0 bg-slate-50">
      
      {/* 2. Hero Section */}
      <section className="relative w-full bg-orange-100 py-16 md:py-24 overflow-hidden">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-15"></div>
        <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-10 -right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white border border-orange-200 text-orange-600 font-bold text-sm md:text-base shadow-sm animate-fade-in-up">
            新潟市・聖籠町・新発田市 出張費無料！最短即日対応
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight leading-[1.3] mb-6 animate-fade-in-up drop-shadow-sm">
            お庭の雑草、もう悩まない！<br className="md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
              新潟市の草刈り
            </span>はお任せください
          </h1>
          
          <p className="text-base md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto font-bold leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            「草が伸びすぎて大変…」「忙しくて庭の手入れができない…」<br className="hidden md:block"/>
            お茶の間レスキュー隊が、あなたのお庭をスッキリ綺麗にいたします！
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up w-full sm:w-auto px-4 sm:px-0 justify-center" style={{ animationDelay: '0.4s' }}>
             <Button size="lg" className="w-full sm:w-auto text-lg py-7 bg-orange-500 hover:bg-orange-600 shadow-orange-500/30" asChild>
                <Link href="#booking-form">今すぐ見積もり（無料）</Link>
              </Button>
            <a href="https://line.me/R/ti/p/@271paqpi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-md bg-[#06C755] hover:bg-[#05b34c] text-white text-lg font-bold shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M22.053 10.366c0-4.329-3.967-7.85-8.847-7.85C8.328 2.516 4.36 6.037 4.36 10.366c0 3.882 2.766 7.159 6.58 7.747.256.054.606.165.694.385.08.199.052.51.025.702l-.183 1.096c-.035.207-.168.826.724.45 8.844-4.896 9.853-7.514 9.853-10.38z" />
                </svg>
                LINEで相談する
            </a>
          </div>
        </div>
      </section>

      {/* 3. Pricing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            分かりやすい料金体系
          </h2>
          <p className="text-slate-500 mb-12">お見積りした金額以上をご請求することはありません！</p>
          
          <div className="bg-orange-50 rounded-3xl p-8 md:p-12 shadow-sm border-2 border-orange-100 transform transition hover:-translate-y-1 hover:shadow-md">
            <p className="text-xl font-bold text-orange-600 mb-4">草刈り基本作業費（1名あたり）</p>
            <div className="flex flex-col items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <span className="text-5xl md:text-7xl font-black text-slate-800 tracking-tight">1時間 <span className="text-orange-600">4,500</span><span className="text-2xl md:text-3xl font-extrabold text-orange-600">円〜</span></span>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-left border border-orange-100 shadow-inner">
              <ul className="text-slate-700 space-y-4 font-medium text-lg">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold">●</span> 作業時間・面積に応じて事前にお見積りいたします。</li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold">●</span> 刈った草の処分費は別途お見積りとなります。</li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold">●</span> 【出張費無料】新潟市・聖籠町・新発田市</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. YouTube Videos Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            実際の作業風景
          </h2>
          <p className="text-slate-500 mb-12">プロの丁寧な作業を動画でご確認いただけます。</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/ExU65iPx7TU" 
                  title="草刈り作業例" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <p className="mt-5 font-bold text-slate-800 text-lg text-left ml-2">新潟市のお庭の草刈り（手刈り）</p>
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-200">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/6W2P_mogFjk" 
                  title="剪定作業例" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <p className="mt-5 font-bold text-slate-800 text-lg text-left ml-2">新潟市北区の生垣剪定作業（バリカン）</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Google Reviews Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            お客様の声
          </h2>
          <p className="text-slate-500 mb-16">たくさんのお客様から感謝の声をいただいています。</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 text-left shadow-sm border border-slate-100 flex flex-col h-full relative">
                <div className="flex text-yellow-400 mb-6 text-xl">
                  ★★★★★
                </div>
                <p className="text-slate-700 text-lg mb-8 leading-relaxed flex-grow">
                  「{review.text}」
                </p>
                <div className="mt-auto pt-6 border-t border-slate-200">
                  <p className="font-bold text-slate-800 text-lg">{review.name}</p>
                  <p className="text-sm text-slate-400 mt-1">{review.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Contact Form Section */}
      <section id="booking-form" className="py-24 bg-gradient-to-b from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-xl border border-orange-100 p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                無料見積り・ご予約
              </h2>
              <p className="text-slate-600 font-bold">
                必要事項を入力して送信してください。<br className="md:hidden"/>
                最短即日でご連絡いたします。
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="name">
                    お名前 <span className="text-red-500 text-xs ml-1">必須</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                    placeholder="例：新潟 太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="phone">
                    電話番号 <span className="text-red-500 text-xs ml-1">必須</span>
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                    placeholder="例：090-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="address">
                  ご住所 <span className="text-red-500 text-xs ml-1">必須</span>
                </label>
                <input 
                  type="text" 
                  id="address" 
                  required
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white"
                  placeholder="例：新潟市中央区〇〇 1-2-3"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="content">
                  作業内容・ご希望日など <span className="text-slate-400 text-xs ml-1">任意</span>
                </label>
                <textarea 
                  id="content" 
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white resize-none"
                  placeholder="例：お庭全体の草刈りと、刈った草の処分もお願いしたいです。○月○日の午後を希望します。"
                ></textarea>
              </div>

              <div className="pt-6">
                <Button size="lg" className="w-full text-xl py-8 font-black bg-orange-500 hover:bg-orange-600 shadow-orange-500/30">
                  無料でのお見積り・予約を送信
                </Button>
                <p className="text-center text-sm text-slate-500 mt-6 font-medium">
                  ※送信後、担当者より折り返しご連絡させていただきます。
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Floating CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:hidden z-50 flex gap-4">
        <a href="https://line.me/R/ti/p/@271paqpi" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 rounded-xl bg-[#06C755] text-white text-center font-bold text-sm shadow-sm flex items-center justify-center gap-2">
           <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M22.053 10.366c0-4.329-3.967-7.85-8.847-7.85C8.328 2.516 4.36 6.037 4.36 10.366c0 3.882 2.766 7.159 6.58 7.747.256.054.606.165.694.385.08.199.052.51.025.702l-.183 1.096c-.035.207-.168.826.724.45 8.844-4.896 9.853-7.514 9.853-10.38z" />
            </svg>
          LINE相談
        </a>
        <a href="#booking-form" className="flex-1 py-4 rounded-xl bg-orange-500 text-white text-center font-bold text-sm shadow-sm flex items-center justify-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          WEB予約
        </a>
      </div>

    </div>
  );
}
