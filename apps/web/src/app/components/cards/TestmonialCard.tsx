import { Testimonial } from "@/app/types";
import { CheckCircle, MapPin, Quote, Star } from "lucide-react";

const TestimonialCard = ({ data, index }: { data: Testimonial; index: number }) => {
  return (
    <div 
      className="group relative h-full bg-white/40 backdrop-blur-xl border border-white/60 p-8 rounded-[2rem] shadow-xl shadow-slate-200/20 transition-all duration-500 hover:-translate-y-2 hover:bg-white/60"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Background Quote Icon decoration */}
      <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote size={80} className="fill-indigo-900 text-indigo-900" />
      </div>

      {/* Header: User Info */}
      <div className="relative z-10 flex items-center gap-4 mb-6">
        <div className="relative">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-[#2EA8FF] to-pink-500">
            <img 
              src={data.image} 
              alt={data.name} 
              className="w-full h-full rounded-full object-cover border-2 border-white"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm text-[#2EA8FF]">
            <CheckCircle size={16} fill="currentColor" className="text-white" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-lg leading-tight">{data.name}</h4>
          <p className="text-slate-500 text-sm">{data.role}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Content */}
      <p className="relative z-10 text-slate-600 leading-relaxed mb-6 italic">
        "{data.content}"
      </p>

      {/* Purchase Badge */}
      <div className="mt-auto pt-6 border-t border-white/40 flex items-center gap-2 text-sm font-medium text-slate-800">
        <div className="p-1.5 rounded-full bg-white/60 text-[#2EA8FF]">
           <MapPin size={14} />
        </div>
        <span>{data.purchase}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
