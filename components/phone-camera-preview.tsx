import { Zap, ShieldCheck } from "lucide-react"

export function PhoneCameraPreview() {
  return (
    <div className="relative mx-auto w-[300px] md:w-[320px] h-[600px] md:h-[640px] bg-black rounded-[50px] border-[8px] border-neutral-800 shadow-2xl ring-1 ring-white/20 overflow-hidden select-none">
      {/* Dynamic Island */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[35px] w-[120px] bg-black rounded-b-[20px] z-50">
        <div className="absolute top-[10px] right-[20px] h-2 w-2 rounded-full bg-[#1c1c1e] ring-1 ring-[#3a3a3c]" />
      </div>

      {/* Screen Content */}
      <div className="relative h-full w-full bg-black flex flex-col">
        {/* Top Bar */}
        <div className="h-14 w-full flex justify-between items-center px-8 pt-4 z-40">
          <Zap className="h-5 w-5 text-white fill-white" />
          <div className="h-5 w-5 rounded-full border-2 border-white/30" />
        </div>

        {/* Viewfinder / Main Image */}
        <div className="flex-1 relative m-2 rounded-3xl overflow-hidden bg-neutral-900 group">
          {/* Placeholder for a "Camera View" - using a gradient/abstract for now to simulate a 'scene' */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900">
            <div className="absolute inset-0 opacity-50 bg-[url('/images/image.png')] bg-cover bg-center" />

            {/* Scanning Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent translate-y-[-100%] animate-[scan_3s_ease-in-out_infinite]" />

            {/* Focus/Reticle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-yellow-400/50 rounded-lg opacity-60">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 py-0.5 bg-yellow-400/80 rounded text-[10px] font-bold text-black">
                HUMAN DETECTED
              </div>
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-yellow-400" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-yellow-400" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-yellow-400" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-yellow-400" />
            </div>
          </div>

          {/* AI Safety Indicators */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
            <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
              <ShieldCheck className="h-3 w-3 text-green-400" />
              <span className="text-[10px] font-bold text-green-400 tracking-wide">SENSOR AUTH</span>
            </div>
            <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
              <span className="text-[10px] font-bold text-white tracking-wide">RAW DATA</span>
            </div>
          </div>
        </div>

        {/* Camera Controls */}
        <div className="h-40 w-full bg-black z-40 flex flex-col items-center justify-end pb-8 relative">
          {/* Zoom Levels */}
          <div className="flex gap-6 mb-6">
            <span className="text-xs font-medium text-white/50">.5</span>
            <span className="text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full">1x</span>
            <span className="text-xs font-medium text-white/50">3</span>
          </div>

          {/* Shutter Button */}
          <div className="h-16 w-16 rounded-full border-4 border-white flex items-center justify-center mb-2">
            <div className="h-14 w-14 rounded-full bg-white" />
          </div>

          {/* Bottom Mode Selector */}
          <div className="absolute bottom-2 w-full flex justify-center gap-6 text-[10px] font-bold tracking-widest text-white/50">
            <span>PHOTO</span>
            <span className="text-yellow-400">VERIFY</span>
            <span>VIDEO</span>
          </div>
        </div>
      </div>
    </div>
  )
}
