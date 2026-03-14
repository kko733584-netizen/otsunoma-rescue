import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  imageUrl?: string;
  highlight?: boolean;
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
  imageUrl,
  highlight = false,
}: ServiceCardProps) {
  return (
    <Link 
      href={href}
      className={`group relative flex flex-col bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
        highlight 
          ? 'border-2 border-orange-400 shadow-orange-200/50 shadow-lg' 
          : 'border border-slate-100 shadow-sm hover:border-orange-200'
      }`}
    >
      {highlight && (
        <div className="absolute top-4 right-4 z-10 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          おすすめ
        </div>
      )}
      
      {/* Image or Icon Area */}
      <div className="h-48 w-full bg-slate-50 relative overflow-hidden flex items-center justify-center">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
            {icon || "🔧"}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto flex items-center text-orange-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          詳細をみてみる
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
