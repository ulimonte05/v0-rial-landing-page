import { Zap, ShieldCheck, Check, Camera, MapPin, Smartphone } from "lucide-react"
import Image from "next/image"

export function DualPhoneShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-12">
      {/* Phone 1: Scanner */}
      <div className="relative w-[280px] h-[580px] bg-black rounded-[45px] border-[8px] border-neutral-800 shadow-2xl ring-1 ring-white/20 overflow-hidden select-none z-10 transform md:-rotate-3 transition-transform hover:rotate-0 duration-500">
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[100px] bg-black rounded-b-[18px] z-50">
          <div className="absolute top-[8px] right-[18px] h-1.5 w-1.5 rounded-full bg-[#1c1c1e] ring-1 ring-[#3a3a3c]" />
        </div>

        {/* Screen Content */}
        <div className="relative h-full w-full bg-black flex flex-col">
          {/* Top Bar */}
          <div className="h-12 w-full flex justify-between items-center px-6 pt-3 z-40">
            <Zap className="h-4 w-4 text-white fill-white" />
            <span className="text-xs font-medium text-white">Scanner</span>
            <div className="h-4 w-4 rounded-full border-2 border-white/30" />
          </div>

          {/* Viewfinder */}
          <div className="flex-1 relative m-2 rounded-2xl overflow-hidden bg-neutral-900">
            {/* Image being scanned */}
            <Image src="/hyper-realistic-portrait.jpg" alt="Subject" fill className="object-cover opacity-80" />

            {/* Scanning Overlay */}
            <div className="absolute inset-0 border-2 border-yellow-400/50 m-4 rounded-lg">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-yellow-400 rounded text-[10px] font-bold text-black uppercase tracking-wider">
                Analyzing Sensor
              </div>
              {/* Corner Markers */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-400" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-400" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400" />
            </div>

            {/* Scan Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent h-[20%] translate-y-[-100%] animate-[scan_3s_ease-in-out_infinite]" />
          </div>

          {/* Bottom Controls */}
          <div className="h-32 w-full bg-black z-40 flex flex-col items-center justify-end pb-6">
            <div className="flex items-center gap-8 mb-4">
              <div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <div className="h-16 w-16 rounded-full border-4 border-white flex items-center justify-center">
                <div className="h-14 w-14 rounded-full bg-white" />
              </div>
              <div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex gap-6 text-[10px] font-bold tracking-widest text-white/50">
              <span>PHOTO</span>
              <span className="text-yellow-400 bg-yellow-400/10 px-2 rounded">VERIFY</span>
              <span>VIDEO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow Connection */}
      <div className="hidden md:block relative w-24 h-24 shrink-0">
        <svg className="w-full h-full text-white/50" viewBox="0 0 100 100" fill="none">
          <path
            d="M10,50 C30,50 30,80 50,80 C70,80 70,50 90,50"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path d="M85,45 L95,50 L85,55" fill="currentColor" />
        </svg>
      </div>

      {/* Phone 2: Result */}
      <div className="relative w-[280px] h-[580px] bg-black rounded-[45px] border-[8px] border-neutral-800 shadow-2xl ring-1 ring-white/20 overflow-hidden select-none z-10 transform md:rotate-3 transition-transform hover:rotate-0 duration-500">
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[100px] bg-black rounded-b-[18px] z-50">
          <div className="absolute top-[8px] right-[18px] h-1.5 w-1.5 rounded-full bg-[#1c1c1e] ring-1 ring-[#3a3a3c]" />
        </div>

        {/* Screen Content */}
        <div className="relative h-full w-full bg-white text-black flex flex-col font-sans">
          {/* Header */}
          <div className="h-24 w-full bg-neutral-50 border-b flex flex-col justify-end px-6 pb-3 z-40">
            <h2 className="text-xl font-bold">Verified Result</h2>
            <p className="text-xs text-neutral-500">Just now</p>
          </div>

          {/* Main Result Card */}
          <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
            {/* Image Thumbnail */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/hyper-realistic-portrait.jpg" alt="Subject" fill className="object-cover" />
              {/* Tags overlaying image */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold shadow-sm flex items-center gap-1.5">
                <Check className="h-3 w-3 text-blue-500" />
                Authentic
              </div>
            </div>

            {/* Data Cards - like the reference "pancakes/syrup" tags but for verification */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-neutral-50 p-3 rounded-xl border shadow-sm">
                <div className="flex items-center gap-2 mb-1 text-neutral-500 text-xs">
                  <Smartphone className="h-3 w-3" />
                  Device
                </div>
                <div className="font-semibold text-sm">iPhone 15 Pro</div>
              </div>
              <div className="bg-neutral-50 p-3 rounded-xl border shadow-sm">
                <div className="flex items-center gap-2 mb-1 text-neutral-500 text-xs">
                  <MapPin className="h-3 w-3" />
                  Location
                </div>
                <div className="font-semibold text-sm">New York, USA</div>
              </div>
            </div>

            {/* Score Card */}
            <div className="bg-black text-white p-4 rounded-2xl shadow-xl mt-2">
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-medium text-neutral-400">Trust Score</span>
                <span className="text-2xl font-bold text-green-400">100/100</span>
              </div>
              <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-green-500 to-emerald-300" />
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="h-4 w-4" />
                <span>Cryptographically signed by Rial</span>
              </div>
            </div>
          </div>

          {/* Bottom Action */}
          <div className="p-4 border-t bg-neutral-50">
            <button className="w-full py-3 bg-black text-white rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-transform">
              Mint Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
