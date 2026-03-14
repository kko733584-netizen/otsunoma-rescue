import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const faqs = [
    {
      q: "当日でもお願いできますか？",
      a: "もちろん大丈夫です！予約状況や天候にもよりますが、可能な限り調整いたします。お急ぎの場合はお電話でご連絡ください。"
    },
    {
      q: "早朝、夜間でも依頼出来ますか？",
      a: "作業時間は基本9:00～18:00となっておりますが、可能な限りご依頼をお受けしております。まずは一度ご相談ください♪"
    },
    {
      q: "タイヤ交換と一緒にワイパー交換などはできますか？",
      a: "お任せください♪オイル交換・ワイパー交換などもお気軽にお申し付けくださいませ！別途費用を頂戴しますが、別々でのご依頼よりも費用が抑えられます。"
    },
    {
      q: "見積り後に追加費用などが発生しませんか？",
      a: "基本的には追加費用の発生はありません。ただし、お見積もり時と作業時の状況が明らかに違っている場合は、再度お見積もりをさせていただくことがあります。見積もり金額と異なる料金を後から請求することはあませんので、ご安心ください。"
    }
  ];

  const reviews = [
    { name: "トシ 様", text: "急ですがタイヤ交換をお願いしました。前の大雪時にも雪かきが間に合わず困っていたところ、本当に助けていただきました。スピーディーなのに丁寧で、仕上がりも大満足です。知人にも自信を持っておすすめできます。" },
    { name: "田口岬 様", text: "お話を聞かせて頂き、活気あふれる心温まる大変良い方で、街の人々のお困り事のために県内どこまでも東奔西走されています。応援しています。" },
    { name: "市毛幸喜 様", text: "部屋の片付けを頼みました。事前にYoutubeなどでお顔を拝見してたので安心して依頼できました。仕事も会話もテキパキとした好青年という印象でした。料金も近隣の便利屋さんより安いですし、当然仕事もきちんとこなしていただきました。次の依頼の相談にものってもらえて、ぜひまた依頼したいと思います。" },
    { name: "たか 様", text: "車のタイヤ交換をお願いしました。ガソリンスタンド勤務ということもありとても手際のいい作業でした。" },
    { name: "小武樹 様", text: "パンクした為、急遽連絡して対応していただけたので、大変助かりました！作業も早く最後の仕上げも一緒に確認してもらえたので安心です！" }
  ];

  const reasons = [
    { title: "ご依頼は最短当日に可能！", desc: "最短で当日に可能です！自宅で待っている間に終わるので、スキマ時間で作業完了します！" },
    { title: "一つひとつ丁寧な作業！", desc: "スピードだけでなく、丁寧さと安全面を大切にしています。ご自宅・駐車場・敷地内など、大切な場所だからこそ、安心できる作業を心がけています。" },
    { title: "365日年中無休対応可能！", desc: "年中無休365日で営業しております。お盆や年末年始も休まず営業しておりますので、いつでもご相談ください。" },
    { title: "相談・見積もりはすべて無料！", desc: "作業内容や料金は、事前にしっかりご説明します。「とりあえず聞いてみたい」そんなご相談だけでも大歓迎です。" },
    { title: "便利屋だからついで作業も相談できる！", desc: "草刈りだけでなく、庭木の剪定・伐採・抜根、お庭の整理、作業庫やなどの修繕などさまざまなお悩みに対応できます♪お庭周りのお悩み以外にも、車まわり・雪かき・軽作業など、現場やご要望に合わせて臨機応変に対応します。「これも頼めるかな？」も、まずはご相談ください。" }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-orange-100 py-12 md:py-20 pb-24">
        {/* Background Decorative Patterns */}
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-15"></div>
        <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-10 -right-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 relative mt-4 md:mt-8">
          
          {/* Left Side: Text & Actions */}
          <div className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left z-10" style={{ animationDelay: '0.2s' }}>
            
            {/* Badge */}
            <div className="inline-block mb-4 md:mb-6 px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-white border border-orange-200 text-orange-600 font-bold text-xs md:text-sm shadow-sm animate-fade-in-up">
              新潟市・聖籠町・新発田市 出張費無料！
            </div>

            <h1 className="sr-only">新潟 出張便利屋 お茶の間レスキュー隊 - 日常の身近な困り事から専門作業まで</h1>

            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl lg:leading-[1.2] font-extrabold text-slate-800 tracking-tight leading-[1.3] mb-4 md:mb-6 animate-fade-in-up drop-shadow-sm">
              身近な困りごと、<br className="md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-600">
                お茶の間レスキュー！
              </span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-700 mb-8 max-w-xl animate-fade-in-up font-bold md:bg-transparent px-4 md:px-0 rounded-2xl md:rounded-none" style={{ animationDelay: '0.3s' }}>
              こんにちは！お茶の間レスキュー隊のいとうさんです。<br className="hidden sm:block"/>
              日常の小さなお困りごとから、専門的な作業まで丁寧に対応します。
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col xl:flex-row flex-wrap gap-3 md:gap-4 animate-fade-in-up w-full sm:w-auto px-2 sm:px-0 justify-center md:justify-start" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="w-full sm:w-auto text-sm md:text-base py-6 bg-orange-500 hover:bg-orange-600 shadow-orange-500/30" asChild>
                <Link href="/contact">すぐに見積もり・相談する</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm md:text-base py-6 border-2 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700" asChild>
                <Link href="/fee">料金表を見る</Link>
              </Button>
              <a href="https://line.me/R/ti/p/@271paqpi" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 md:px-8 h-12 md:h-[52px] rounded-md bg-[#06C755] hover:bg-[#05b34c] text-white text-sm md:text-base font-medium shadow-md transition-all flex items-center justify-center gap-2">
                 <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M22.053 10.366c0-4.329-3.967-7.85-8.847-7.85C8.328 2.516 4.36 6.037 4.36 10.366c0 3.882 2.766 7.159 6.58 7.747.256.054.606.165.694.385.08.199.052.51.025.702l-.183 1.096c-.035.207-.168.826.724.45 8.844-4.896 9.853-7.514 9.853-10.38z" />
                  </svg>
                  LINEで相談
              </a>
            </div>
          </div>

          {/* Right Side: Main Hero Banner Image */}
          <div className="w-[70%] sm:w-[50%] md:w-[45%] max-w-sm lg:max-w-md mx-auto md:mr-0 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white animate-fade-in-up z-10" style={{ animationDelay: '0.1s' }}>
            <Image 
              src="/images/hero-main-fixed.jpg" 
              alt="お茶の間レスキュー隊 いとうさん" 
              width={1600} 
              height={900} 
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">現在のおすすめメニュー</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              季節や地域事情に合わせた、いとうさん特製のレスキューメニューです。最短で即日対応も可能です！
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <ServiceCard 
              title="タイヤ交換" 
              description="今の時期のおすすめメニュー！お急ぎの方はすぐに駆けつけます♪"
              href="/services/tire-replacement"
              icon="🚗"
              highlight
            />
            <ServiceCard 
              title="雪かき" 
              description="急な雪にも対応！重労働の雪かきはお任せください。"
              href="/services/yukikaki"
              icon="⛄"
              highlight
            />
            <ServiceCard 
              title="オイル交換" 
              description="元ガソリンスタンド主任が丁寧に作業いたします。"
              href="/services/oil-replacement"
              icon="🛢️"
            />
            <ServiceCard 
              title="草刈り・剪定" 
              description="お庭のお手入れ、面倒な草刈りもスッキリきれいに！"
              href="/services/kusa-sentei"
              icon="🌿"
            />
          </div>

          <div className="mt-16 text-center">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/fee" className="group">
                すべての料金メニューを見る
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reasons to Choose Us */}
      <section className="py-24 bg-orange-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">お茶の間レスキュー隊が<br className="md:hidden"/>選ばれる5つの理由</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              おかげさまでたくさんのご依頼をいただいています。「丁寧な対応をしてくれてありがとう」とお声をいただくほど大変ご満足いただいています。
            </p>
          </div>

          <div className="space-y-6">
            {reasons.map((reason, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-4 md:gap-8 items-start border border-orange-100 hover:border-orange-300 transition-colors">
                <div className="bg-orange-500 text-white font-bold text-xl rounded-xl w-14 h-14 flex items-center justify-center flex-shrink-0 shadow-md">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{reason.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">お客様の声</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              たくさんのお客様からご依頼と感謝の声をいただいています。ご参考にしてみてください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col h-full">
                <div className="flex text-yellow-400 mb-4 text-xl">
                  ★★★★★
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed flex-grow">
                  「{review.text}」
                </p>
                <div className="mt-auto border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-800">{review.name}</p>
                  <p className="text-xs text-slate-400 mt-1">Googleマップの口コミより引用</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Basic Pricing Brief */}
      <section className="py-20 bg-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">新潟市内、出張費無料！</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            分かりやすい料金体系で安心です。その他の近隣の市もお見積り無料です！
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center rounded-full font-bold transition-all active:scale-95 h-14 px-8 text-base bg-white text-orange-600 hover:bg-orange-50 shadow-xl w-full sm:w-auto"
            >
              見積もりを依頼する（無料）
            </Link>
            <Link 
              href="/fee"
              className="inline-flex items-center justify-center rounded-full font-bold transition-all active:scale-95 h-14 px-8 text-base border-2 border-orange-300 text-white hover:bg-orange-500 w-full sm:w-auto"
            >
              料金表を確認する
            </Link>
          </div>
        </div>
      </section>

      {/* CEO's Message */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-stretch gap-12 max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100">
            <div className="w-full md:w-5/12 bg-orange-50 flex items-center justify-center p-8 min-h-[300px] relative">
              <div className="relative w-full max-w-[280px] aspect-[4/5] md:aspect-auto md:h-full md:max-h-[400px]">
                <Image
                  src="/images/ceo-portrait.jpg"
                  alt="代表 伊藤"
                  fill
                  className="object-cover rounded-3xl shadow-md border-4 border-white"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6 leading-tight">
                “困っている人の<br/>力になりたい”
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed font-medium">
                <p>
                  その思いから、お茶の間レスキュー隊を立ち上げました。
                </p>
                <p>
                  子育てやお仕事で時間が取れない方、<br/>
                  雪や天候で思うように動けない方、<br/>
                  高齢のご家族の代わりに手を貸してほしい方——
                </p>
                <p>
                  日常の中で起こる「ちょっとした困りごと」に寄り添いたい。<br/>
                  便利屋という枠を超えて、「頼れる存在でありたい」という気持ちで活動しています。
                </p>
                <p>
                  どんな小さなことでも気軽に頼めて、“お願いしてよかった” と感じてもらえるサービスを目指しています。<br/>
                  これからも、一人ひとりのお困りごとを全力でレスキューしていきます。
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-800 text-lg">お茶の間レスキュー隊</p>
                  <p className="text-slate-500 text-sm mt-1">代表</p>
                </div>
                <div className="text-orange-500 text-4xl font-signature px-4">
                  伊藤
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">よくあるご質問</h2>
            <p className="text-slate-600">お客様から寄せられるご質問をまとめました。</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-4 flex items-start gap-3">
                  <span className="text-orange-500 flex-shrink-0">Q.</span>
                  {faq.q}
                </h3>
                <p className="text-slate-600 leading-relaxed flex items-start gap-3 pl-8 md:pl-0 border-t md:border-none border-slate-200 pt-4 md:pt-0">
                  <span className="text-slate-400 font-bold hidden md:inline-block">A.</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <p className="text-slate-600 mb-6">その他ご不明な点がございましたら、お気軽にお問い合わせください。</p>
             <Button variant="outline" size="lg" asChild>
                <Link href="/contact">お問い合わせページへ</Link>
             </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
