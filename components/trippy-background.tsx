"use client"

export function TrippyBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-black">
      {/* Noise overlay */}
      <div className="absolute inset-0 z-20 opacity-[0.15] mix-blend-overlay">
        <svg className="h-full w-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Moving gradient blobs */}
      <div className="absolute top-[-20%] left-[-10%] h-[50vh] w-[50vh] rounded-full bg-purple-500/30 blur-[120px] animate-blob mix-blend-screen" />
      <div className="absolute top-[20%] right-[-10%] h-[60vh] w-[60vh] rounded-full bg-pink-500/30 blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
      <div className="absolute bottom-[-20%] left-[20%] h-[70vh] w-[70vh] rounded-full bg-yellow-300/20 blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
      <div className="absolute bottom-[20%] right-[20%] h-[50vh] w-[50vh] rounded-full bg-cyan-500/20 blur-[120px] animate-blob animation-delay-6000 mix-blend-screen" />

      {/* Center chaotic element */}
      <div className="absolute top-1/2 left-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-[100px] animate-spin-slow" />

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
