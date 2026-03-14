import { ContactForm } from "@/components/features/ContactForm";

export default function ContactPage() {
  return (
    <div className="w-full flex-grow flex flex-col pt-0">
      <div className="w-full bg-slate-900 pt-16 pb-12 mb-12 border-b-4 border-orange-500">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            <span className="text-orange-500 mr-2 drop-shadow-[0_0_15px_rgba(249,115,22,1)]">✉️</span>お問い合わせ
          </h1>
          <p className="text-slate-300 text-lg">
            お悩みごと、お見積り、求人へのご応募など、<br className="hidden md:block"/>
            まずはお気軽にご連絡ください！
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl pb-24">

        <ContactForm />

      </div>
    </div>
  );
}
