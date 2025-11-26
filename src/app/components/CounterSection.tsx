import React, { useState, useEffect, useRef } from "react";
import { Users, Heart, TrendingUp } from "lucide-react";

const CounterSection = () => {
  const [counts, setCounts] = useState({ experts: 0, clients: 0, sales: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = { experts: 200, clients: 300, sales: 150 };
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounts({
        experts: Math.floor(targets.experts * easeOutQuart),
        clients: Math.floor(targets.clients * easeOutQuart),
        sales: Math.floor(targets.sales * easeOutQuart),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  const counterItems = [
    {
      icon: Users,
      count: counts.experts,
      suffix: "+",
      label: "Trusted Experts",
      color: "bg-green-600/10",
      iconColor: "text-green-600",
    },
    {
      icon: Heart,
      count: counts.clients,
      suffix: "+",
      label: "Happy Clients",
      color: "bg-red-600/10",
      iconColor: "text-red-600",
    },
    {
      icon: TrendingUp,
      count: counts.sales,
      suffix: "+",
      label: "Sales Value",
      color: "bg-green-600/10",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div ref={sectionRef} className="w-full max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Delivering excellence and building trust through outstanding results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {counterItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-900/50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-800 hover:border-green-600/50"
                style={{
                  animation: isVisible
                    ? `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                    : "none",
                }}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`${item.color} ${item.iconColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={32} strokeWidth={2} />
                  </div>

                  <div className="text-6xl font-bold text-white mb-2 tabular-nums">
                    {item.count}
                    <span className={item.iconColor}>{item.suffix}</span>
                  </div>

                  <div className="text-lg font-medium text-gray-400 tracking-wide">
                    {item.label}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-600/50 to-transparent group-hover:via-green-600 transition-all duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CounterSection;
