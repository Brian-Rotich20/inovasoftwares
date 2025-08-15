import Image from "next/image";
import { Star, Users, Shield, Award, ArrowRight, Play, Zap, Lock, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-hero leading-tight">
                We Build Fast,{" "}
                <span className="bg-gradient-to-r from-primary via-orange-600 to-orange-400 bg-clip-text text-transparent">
                  Scalable Apps
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-text-muted max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Custom software solutions engineered for{" "}
                <span className="font-mono font-semibold text-orange-500">performance</span>,{" "}
                <span className="font-mono font-semibold text-orange-500">security</span>, and{" "}
                <span className="font-mono font-semibold text-orange-500">scalability</span>. 
                Trusted by businesses worldwide.
              </p>
            </div>

          {/* CTA Buttons - Compact & 2-column on mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex gap-2 sm:gap-3 lg:gap-4 max-w-sm mx-auto lg:max-w-none lg:mx-0">
            <button className="group bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base lg:text-base px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-1.5">
              <span>Get Started</span>
              <ArrowRight className="w-3.5 lg:w-4 h-3.5 lg:h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm sm:text-base lg:text-base px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-1.5">
              <Play className="w-3.5 lg:w-4 h-3.5 lg:h-4" />
              <span>View Work</span>
            </button>
          </div>
          </div>

          {/* Right content - Responsive circular image */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              {/* Gradient border wrapper - responsive sizing */}
              <div className="relative p-1.5 sm:p-2 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-2xl">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-background">
                  <Image
                    src="/team-hero.jpeg"
                    alt="Professional software development team"
                    width={736}
                    height={736}
                    className="w-full h-full object-cover"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
              </div>
              
              {/* Customer Trust Elements - Smaller and responsive */}
              {/* Top-left: Customer Rating */}
              <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl p-2 sm:p-3 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">4.9</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">500+ Reviews</p>
              </div>

              {/* Top-right: Happy Clients */}
              <div className="absolute -top-2 sm:-top-4 -right-8 sm:-right-10 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl p-2 sm:p-3 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Users className="w-4 sm:w-5 h-4 sm:h-5 text-orange-500" />
                  <div>
                    <div className="text-sm sm:text-lg font-bold text-gray-700 dark:text-gray-300">250+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Clients</div>
                  </div>
                </div>
              </div>

                {/* Top-right: Small Client Testimonial */}
                <div className="absolute top-1/4 -right-6 sm:-right-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-1.5 border border-gray-100 dark:border-gray-700 max-w-24 sm:max-w-28">
                  <div className="flex items-start space-x-1">
                    <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src="/client-avatar.jpeg"
                        alt="Client testimonial"
                        width={20}
                        height={20}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400  leading-tight">
                        "Excellent!"
                      </p>
                      <p className="text-[9px] font-semibold text-gray-700 dark:text-gray-300">Sarah J.</p>
                      <p className="text-[8px] text-gray-500 dark:text-gray-500">CEO</p>
                    </div>
                  </div>
                </div>




              
              {/* Floating decorative elements - smaller on mobile */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 -left-3 sm:-left-4 lg:-left-6 w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 bg-red-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 opacity-20 blur-2xl -z-10 scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;