import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="w-full flex-grow flex flex-col pt-12">
      <div className="container mx-auto px-4 max-w-3xl pb-24">
        
        <h1 className="text-3xl font-bold text-slate-800 mb-10 pb-4 border-b border-slate-200">
          プライバシーポリシー
        </h1>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-8 animate-fade-in-up">
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">個人情報の利用目的</h2>
            <p>
              当サイトでは、メールでのお問い合わせなどの際に、名前（ハンドルネーム）、メールアドレス等の個人情報をご登録いただく場合がございます。<br/>
              これらの個人情報は、質問に対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">個人情報の第三者への開示</h2>
            <p>
              当サイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>本人のご了解がある場合</li>
              <li>法令等への協力のため、開示が必要となる場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">免責事項</h2>
            <p>
              当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。<br/>
              当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。<br/>
              当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
            </p>
          </section>

          <div className="pt-8 text-center mt-12">
            <Link href="/" className="text-orange-600 hover:text-orange-700 font-semibold transition-colors">
              トップページへ戻る
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
