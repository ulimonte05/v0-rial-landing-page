import { Button } from "@/components/ui/button"
import { Globe, CheckCircle2, Fingerprint } from "lucide-react"
import Link from "next/link"
import { DualPhoneShowcase } from "@/components/dual-phone-showcase"

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.45-1.62 4.37-1.62 1.03.06 2.2.45 3 1.38-3 1.78-2.37 5.3.23 6.43-.62 1.92-1.68 3.96-2.68 6.04zm-4.14-13.3c.55-1.88 2.41-3.09 4.22-3.12.24 2.21-1.93 4.34-4.22 3.12z" />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md supports-[backdrop-filter]:bg-black/20">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 via-white to-cyan-500" />
            <span className="text-xl font-bold tracking-tighter">rial.</span>
          </div>
          <Link
            href="#"
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-medium text-black transition-all hover:bg-white/90 hover:scale-105"
          >
            <AppleLogo className="h-4 w-4" />
            <span>Get the app</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-24 flex flex-col items-center text-center">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur-sm mb-4">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Available now on iOS
          </div>

          <h1 className="text-5xl font-bold text-white md:text-7xl tracking-tighter drop-shadow-lg">
            By Humans for Humans
          </h1>

          <p className="mx-auto max-w-2xl text-xl font-medium text-white/80 leading-relaxed">
            The Global Image Verifier. Authenticity verified at the sensor level. Protecting reality in the age of AI.
          </p>

          <div className="flex flex-col items-center space-y-12 w-full pt-4">
            <Link
              href="#"
              className="inline-flex h-14 items-center gap-3 rounded-full bg-white px-8 text-black transition-all hover:bg-white/90 hover:scale-105 font-medium text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              <AppleLogo className="h-6 w-6" />
              <span>Download on the App Store</span>
            </Link>

            <div className="relative w-full max-w-5xl mx-auto mt-12 flex justify-center">
              {/* Glow effect behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[700px] bg-white/5 blur-[80px] rounded-full pointer-events-none" />
              <DualPhoneShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section id="mission" className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-10 rounded-2xl border border-white/10 bg-black/40 p-8 backdrop-blur-md">
          <h2 className="text-3xl font-bold">Quit the Social Network. Join the Truth.</h2>
          <p className="text-xl font-medium text-white/80">Worldwide Real & No-AI Photos.</p>

          <p className="max-w-3xl text-lg leading-relaxed text-neutral-200 drop-shadow-md">
            Rial isn't about likes, follows, or influencers. It's about one thing: is it real? We provide the
            infrastructure to verify reality in a world of synthetic media.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-4xl font-bold tracking-tight">How Rial Works</h2>
            <p className="text-lg text-neutral-400">
              Advanced verification technology that guarantees image authenticity from capture to display.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Feature 1: Sensor-Level Authentication */}
            <div className="group space-y-4 rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-md transition-all hover:bg-black/60 hover:border-pink-500/30">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/5 p-3 ring-1 ring-white/10">
                  <Fingerprint className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold">Deep Sensor Authentication</h3>
              </div>
              <p className="text-neutral-200 leading-relaxed">
                We verify images at the deepest level—directly from the camera sensor. Our proprietary technology
                analyzes sensor signatures to prove the photo is REAL and not a PC photo.
              </p>
              <div className="pt-2 space-y-2 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Hardware-level verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Detects PC-generated fakes instantly</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Immutable cryptographic proof</span>
                </div>
              </div>
            </div>
            {/* Feature 2: Global Verification */}
            <div className="group space-y-4 rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-md transition-all hover:bg-black/60 hover:border-yellow-300/30">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/5 p-3 ring-1 ring-white/10">
                  <Globe className="h-6 w-6 text-yellow-300" />
                </div>
                <h3 className="text-xl font-semibold">Worldwide Verification Network</h3>
              </div>
              <p className="text-neutral-200 leading-relaxed">
                You can verify worldwide photos. Whether it's a breaking news event or a remote landscape, Rial confirms
                its authenticity in seconds, creating a global trust layer for visual content.
              </p>
              <div className="pt-2 space-y-2 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Universal camera compatibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Instant global verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span>Cross-border trust infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-5xl space-y-10">
          <h2 className="text-3xl font-bold">Who Needs Rial?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-4 rounded-lg border border-white/5 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-pink-400">Journalism & News</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Restore trust in photojournalism. Verify sources and combat misinformation with cryptographic proof.
              </p>
            </div>
            <div className="space-y-4 rounded-lg border border-white/5 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-yellow-300">Legal & Insurance</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Admissible evidence that stands up in court. Verify accident scenes, property damage, and claims.
              </p>
            </div>
            <div className="space-y-4 rounded-lg border border-white/5 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <h3 className="text-lg font-semibold text-purple-400">Research & Science</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Document discoveries and field work with immutable proof of time, location, and authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 rounded-2xl border border-white/10 bg-black/40 p-10 backdrop-blur-md md:grid-cols-3 shadow-2xl">
            <div className="text-center">
              <div className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">99.9%</div>
              <div className="mt-3 text-sm font-medium text-neutral-400 uppercase tracking-wider">
                Detection Accuracy
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{"<2s"}</div>
              <div className="mt-3 text-sm font-medium text-neutral-400 uppercase tracking-wider">
                Verification Time
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">195+</div>
              <div className="mt-3 text-sm font-medium text-neutral-400 uppercase tracking-wider">
                Countries Supported
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-8 text-center md:text-left">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            Join the Movement Against Misinformation
          </h2>
          <div className="space-y-6 text-lg text-neutral-200 leading-relaxed">
            <p className="text-lg">
              We're building more than a verification platform—we're creating a movement. Every fake image erodes public
              trust. Every deepfake threatens democracy. Every synthetic face undermines human connection.
            </p>
            <p className="text-lg">
              Rial is the antidote. A global network where authenticity is guaranteed, truth is verifiable, and reality
              is protected. Join us in preserving what's real in an increasingly synthetic world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-4xl space-y-10 text-center">
          <h2 className="text-5xl font-bold text-balance drop-shadow-xl">Get Early Access to the Truth</h2>
          <p className="text-xl text-neutral-300 text-balance">
            Be among the first to join the verified image revolution. Limited beta spots available.
          </p>
          <div className="flex justify-center">
            <Button
              size="lg"
              className="h-16 px-10 text-xl font-bold text-black rounded-full bg-gradient-to-r from-pink-400 via-yellow-300 to-purple-400 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(244,114,182,0.6)] border-2 border-white/20"
            >
              [ Sign Up for the Beta ]
            </Button>
          </div>
          <p className="text-sm text-neutral-500">(Limited slots available. Launching Q2 2026.)</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/80 py-12 backdrop-blur-xl">
        <div className="container mx-auto px-6 text-center text-sm text-neutral-500">
          rial. | AI Safety. Human Focus.
        </div>
      </footer>
    </div>
  )
}
