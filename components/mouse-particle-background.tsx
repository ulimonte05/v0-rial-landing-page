"use client"

import { useEffect, useRef } from "react"

export function MouseParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Configuration
    const spacing = 30
    const baseRadius = 1.5
    const hoverRadius = 120
    const growthFactor = 3.5

    let particles: { x: number; y: number; baseX: number; baseY: number }[] = []
    const mouse = { x: -1000, y: -1000 }
    const targetMouse = { x: -1000, y: -1000 }
    let time = 0

    function init() {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      particles = []

      // Create grid of particles
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          particles.push({
            x,
            y,
            baseX: x,
            baseY: y,
          })
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height)

      // Deep black background
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, width, height)

      time += 0.02

      mouse.x += (targetMouse.x - mouse.x) * 0.1
      mouse.y += (targetMouse.y - mouse.y) * 0.1

      particles.forEach((p) => {
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        const waveX = Math.sin(p.baseY * 0.008 + time) * 6
        const waveY = Math.cos(p.baseX * 0.008 + time) * 6

        p.x = p.baseX + waveX
        p.y = p.baseY + waveY

        let radius = baseRadius
        let alpha = 0.2

        if (distance < hoverRadius) {
          // Calculate "magic" relief effect
          // Particles grow and get brighter near mouse
          const force = (hoverRadius - distance) / hoverRadius
          radius = baseRadius + force * growthFactor
          alpha = 0.2 + force * 0.8
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    function handleMouseMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect()
      targetMouse.x = e.clientX - rect.left
      targetMouse.y = e.clientY - rect.top
    }

    function handleResize() {
      init()
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    init()
    animate()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full bg-black" />
}
