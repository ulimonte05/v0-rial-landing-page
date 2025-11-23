"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Lock, Activity } from "lucide-react"
import Image from "next/image"

export function ImageVerifier() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Glass Panel */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl">
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-red-500/20" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
            <div className="h-3 w-3 rounded-full bg-green-500/20" />
          </div>
          <div className="flex items-center gap-2 rounded-full bg-black/50 px-3 py-1 text-xs font-mono text-green-400 border border-green-500/30">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            SYSTEM ONLINE
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 p-6">
          {/* Image Preview Area */}
          <div className="lg:col-span-2 relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 group">
            <Image
              src="/cinematic-portrait.jpg"
              alt="Subject for verification"
              width={800}
              height={600}
              className="h-full w-full object-cover opacity-80 grayscale-[20%]"
            />

            {/* Scanning Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent border-t border-green-500/50"
              initial={{ top: "-100%" }}
              animate={{ top: "100%" }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

            {/* Detection Boxes */}
            <motion.div
              className="absolute top-[20%] left-[30%] w-[40%] h-[40%] border border-green-500/50 rounded-lg"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: [0, 1, 0], scale: 1 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 }}
            >
              <div className="absolute -top-5 left-0 text-[10px] font-mono text-green-400 bg-black/50 px-2 py-0.5 rounded">
                FACE_DETECTED_REAL
              </div>
            </motion.div>
          </div>

          {/* Analysis Panel */}
          <div className="space-y-4 font-mono text-sm">
            {/* Status Card */}
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-4">
              <div className="text-xs text-green-400 mb-2 opacity-70">VERIFICATION STATUS</div>
              <div className="flex items-center gap-2 text-lg font-bold text-white">
                <ShieldCheck className="h-5 w-5 text-green-400" />
                AUTHENTIC
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>SENSOR NOISE PATTERN</span>
                  <span className="text-green-400">MATCH</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "98%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>METADATA INTEGRITY</span>
                  <span className="text-green-400">100%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs text-neutral-400">
                  <span>AI PROBABILITY</span>
                  <span className="text-green-400">0.00%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-green-500"
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                  />
                </div>
              </div>
            </div>

            {/* Technical Data */}
            <div className="rounded-lg border border-white/10 bg-black/40 p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                <Activity className="h-3 w-3" />
                LIVE SENSOR DATA
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
                <div>
                  ISO: <span className="text-white">800</span>
                </div>
                <div>
                  APERTURE: <span className="text-white">f/1.8</span>
                </div>
                <div>
                  DEVICE: <span className="text-white">iPhone 15 Pro</span>
                </div>
                <div>
                  LOC: <span className="text-white">35.6°N, 139.6°E</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs text-neutral-500 justify-center border-t border-white/5">
              <Lock className="h-3 w-3" />
              CRYPTOGRAPHICALLY SIGNED
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-green-500/20 blur-3xl -z-10 rounded-[3rem] opacity-20" />
    </div>
  )
}
