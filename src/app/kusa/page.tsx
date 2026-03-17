import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: '新潟市の草刈り・草むしり最短即日対応！お茶の間レスキュー隊【見積無料】',
  description: '新潟市で草刈り・草取り・庭の手入れならお茶の間レスキュー隊にお任せください！最短即日対応、1時間4,500円〜の明朗会計。熟練スタッフが丁寧に対応。お見積り・ご相談は無料です。',
  keywords: '新潟市, 草刈り, 草取り, 草むしり, 最短即日, 庭の手入れ, 便利屋, お茶の間レスキュー隊',
};

const reviews = [
  {
    name: '新潟市中央区 A様',
    rating: 5,
    text: '手際よく作業していただき、荒れていた庭が一日で見違えるほど綺麗になりました。料金も事前に提示された通りで安心しました。',
  },
  {
    name: '新潟市西区 B様',
    rating: 5,
    text: '急な依頼にも関わらず、即日で対応してくれました。スタッフの方も感じが良く、またお願いしたいです。',
  },
  {
    name: '新潟市東区 C様',
    rating: 5,
    text: '高齢の母の家をお願いしました。丁寧な仕事ぶりで母も喜んでいました。ありがとうございました。',
  },
];

const faqs = [
  {
    q: '即日対応は可能ですか？',
    a: 'はい、予約状況や天候にもよりますが、可能な限り調整いたします。お急ぎの場合はお電話でご連絡ください。',
  },
  {
    q: '作業時間はいつまでですか？',
    a: '基本は9:00〜18:00ですが、可能な限りご依頼をお受けしております。まずは一度ご相談ください。',
  },
  {
    q: '立ち会いは必要ですか？',
    a: '事前に作業内容が決まっていれば、立ち会いなしでも対応可能です。ご不在時も安心してお任せください。',
  },
  {
    q: '追加費用は発生しますか？',
    a: '基本的にはありません。お見積り金額と異なる料金を後から請求することはありませんのでご安心ください。',
  },
];

export default function AdvancedGrassCuttingLP() {
  return (
    <div className="w-full flex-grow flex flex-col bg-white">
      
      {/* 1. Professional Hero Section */}
      <section className="relative w-full bg-slate-50 border-b border-slate-100 py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="bg-orange-500 text-white px-4 py-1 rounded text-sm font-bold mb-4">
            新潟県内どこでもお伺いいたします！
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 text-center leading-tight mb-6">
            新潟市の「草刈り・草むしり」<br />
            <span className="text-orange-500">最短即日</span>で解決します！
          </h1>
          <p className="text-slate-600 text-lg md:text-xl text-center max-w-2xl mb-10 leading-relaxed font-medium">
            草刈りは、時間もかかるし、体にも負担がかかりがち。<br className="hidden md:block"/>
            無理をする前に、お茶の間レスキュー隊にお手伝いさせてください！
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
            <Button size="lg" className="w-full md:w-64 py-8 text-xl font-bold bg-orange-500 hover:bg-orange-600 shadow-xl shadow-orange-500/20" asChild>
              <Link href="#contact-form">無料見積もりはこちら</Link>
            </Button>
            <a href="tel:080-4355-0110" className="flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-md text-xl font-bold hover:bg-slate-900 transition-all shadow-xl shadow-slate-800/20">
              <span className="text-sm block">お急ぎの方はこちら</span>
              080-4355-0110
            </a>
          </div>
        </div>
      </section>

      {/* 2. Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-12">こんなことでお困りではありませんか？</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              '庭の草刈りが地味にきつい…',
              '毎日の草むしりで、体力が削られる…',
              '家族が高齢で、長い時間作業ができない…',
              '暑くなる前に草を片付けておきたい',
              '自分では草刈りする時間がない',
              '玄関前や通路を安全にしたい'
            ].map((point, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-orange-50 rounded-xl border border-orange-100">
                <span className="text-2xl">⚠️</span>
                <span className="text-slate-700 font-bold">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Benefits: 5 Reasons */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-16">
            お茶の間レスキュー隊が<br className="md:hidden" />選ばれる<span className="text-orange-500">5つの理由</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: '最短即日で対応可能', text: '新潟市を中心に機動力高く活動。お急ぎのご依頼にも柔軟にお応えします。', icon: '⚡' },
              { title: '一つひとつ丁寧な作業', text: '熟練スタッフが、お庭の状況に合わせて最適な道具を使い分け丁寧に仕上げます。', icon: '✨' },
              { title: '365日年中無休対応', text: '土日祝日はもちろん、お盆や年末年始も対応可能です。お気軽にご相談ください。', icon: '📅' },
              { title: '相談・見積もりは無料', text: '現地調査の上でお見積り。内容にご納得いただいてからの作業開始となります。', icon: '💰' },
              { title: 'ついで作業も相談OK', text: '便利屋だから、不用品回収やちょっとした修理などもまとめてレスキュー可能です。', icon: '🤝' }
            ].map((reason, i) => (
              <div key={i} className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative ${i === 4 ? 'lg:col-span-2' : ''}`}>
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">【その{i+1}】{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Representative's Message: Ito-san */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0 bg-orange-100 rounded-full overflow-hidden border-8 border-orange-50 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-8xl">👤</div>
              {/* Note: In a real project, we would use an <img> or <Image> tag with Ito-san's photo */}
            </div>
            <div className="flex-grow">
              <h2 className="text-xl font-bold text-orange-600 mb-2">代表よりご挨拶</h2>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6">こんにちは、「いとうさん」です。</h3>
              <div className="space-y-4 text-slate-700 leading-relaxed font-medium italic">
                <p>「困っている人の力になりたい」その思いから、お茶の間レスキュー隊を立ち上げました。</p>
                <p>子育てやお仕事で時間が取れない方、気候や天候で思うように動けない方。そんな日常の「ちょっと困った」に寄り添いたいと考えています。</p>
                <p>便利屋という枠を超えて、「頼れる存在でありたい」。一人ひとりのお困りごとを、全力でレスキューしていきます。</p>
              </div>
              <p className="mt-8 font-bold text-slate-900 text-right">— 代表 伊藤</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing Table */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">草刈りサービス料金</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-orange-100">
            <div className="bg-orange-500 text-white p-6 text-center text-xl font-bold">
              基本作業費（1名あたり）
            </div>
            <div className="p-10 text-center">
              <div className="flex flex-col items-center mb-10">
                <span className="text-7xl font-black text-slate-900 leading-none">1時間 <span className="text-orange-600">4,500</span><span className="text-2xl">円〜</span></span>
                <span className="text-slate-400 mt-4 text-sm font-bold">※別途、出張費・処分費などがかかる場合があります</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">● 出張費</h4>
                  <p className="text-sm text-slate-600 font-medium">新潟市・聖籠町・新発田市は無料でお伺いいたします。</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-2">● 処分費</h4>
                  <p className="text-sm text-slate-600 font-medium">刈った草の処分が必要な場合は、事前に別途お見積りいたします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Flow Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">ご利用の流れ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {[
              { step: '01', title: 'お問い合わせ', text: 'まずはお電話かフォームで、お気軽にご相談ください。' },
              { step: '02', title: 'お見積り', text: '状況を確認し、事前に料金をお伝えします。ここまでは無料です。' },
              { step: '03', title: '作業開始', text: 'ご指定の日時に伺い、迅速かつ丁寧に作業を行います。' },
              { step: '04', title: 'ご確認・支払い', text: '作業完了後にお客様に確認いただき、お支払いとなります。' }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-2xl mb-6 shadow-lg shadow-orange-500/20">
                  {step.step}
                </div>
                <h3 className="text-lg font-extrabold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{step.text}</p>
                {i < 3 && <div className="hidden md:block absolute top-14 left-[calc(25%*${i+1}-40px)] w-20 h-0.5 bg-orange-100"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">よくある質問</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200">
                <div className="flex gap-4">
                  <span className="text-orange-500 font-black text-xl">Q.</span>
                  <p className="text-lg font-bold text-slate-900">{faq.q}</p>
                </div>
                <div className="flex gap-4 mt-4 pt-4 border-t border-slate-50">
                  <span className="text-slate-400 font-black text-xl">A.</span>
                  <p className="text-slate-600 leading-relaxed font-medium">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final Contact Form Section */}
      <section id="contact-form" className="py-28 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">無料見積もり・ご相談</h2>
            <p className="text-slate-500 text-lg font-medium">小さな疑問でもお気軽にお問い合わせください。</p>
          </div>
          <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-200">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-slate-900 font-bold ml-1">お名前 <span className="text-orange-500 text-xs">(必須)</span></label>
                  <input type="text" required placeholder="新潟 太郎" className="w-full h-14 px-6 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all placeholder:text-slate-300 font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-slate-900 font-bold ml-1">電話番号 <span className="text-orange-500 text-xs">(必須)</span></label>
                  <input type="tel" required placeholder="090-0000-0000" className="w-full h-14 px-6 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all placeholder:text-slate-300 font-medium" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-slate-900 font-bold ml-1">ご住所 <span className="text-orange-500 text-xs">(必須)</span></label>
                <input type="text" required placeholder="新潟市中央区〇〇 1-2-3" className="w-full h-14 px-6 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all placeholder:text-slate-300 font-medium" />
              </div>
              <div className="space-y-3">
                <label className="text-slate-900 font-bold ml-1">お問い合わせ内容</label>
                <textarea rows={5} placeholder="作業内容やご希望の日時などをご記入ください。" className="w-full p-6 rounded-xl bg-white border border-slate-200 focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all placeholder:text-slate-300 font-medium resize-none"></textarea>
              </div>
              <Button size="lg" className="w-full py-10 text-2xl font-black bg-orange-500 hover:bg-orange-600 shadow-2xl shadow-orange-500/30">
                お見積りを依頼する
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Floating Mobile Banner */}
      <div className="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] md:hidden z-[9999] flex gap-2">
        <a href="tel:080-4355-0110" className="flex-1 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-sm shadow-lg">
          📞 電話で相談
        </a>
        <a 
          href="https://line.me/R/ti/p/@271paqpi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex-[1.5] h-14 bg-[#06C755] text-white rounded-xl flex items-center justify-center gap-2 font-bold text-sm shadow-lg transition-transform active:scale-95"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.053 10.366c0-4.329-3.967-7.85-8.847-7.85C8.328 2.516 4.36 6.037 4.36 10.366c0 3.882 2.766 7.159 6.58 7.747.256.054.606.165.694.385.08.199.052.51.025.702l-.183 1.096c-.035.207-.168.826.724.45 8.844-4.896 9.853-7.514 9.853-10.38z" />
          </svg>
          LINEで無料見積もり
        </a>
      </div>

    </div>
  );
}
