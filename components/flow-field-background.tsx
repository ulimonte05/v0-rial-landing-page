"use client"

import { useEffect, useRef } from "react"

export function FlowFieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = container.clientWidth
    let height = container.clientHeight
    let animationFrameId: number
    let particles: Particle[] = []
    let flowField: number[] = []
    const cellSize = 15
    let rows: number
    let cols: number

    // Mouse state
    const mouse = { x: 0, y: 0, isActive: false, radius: 200 }

    class Particle {
      x: number
      y: number
      history: { x: number; y: number }[]
      maxLength: number
      speed: number
      angle: number
      timer: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.history = []
        this.maxLength = Math.floor(Math.random() * 20 + 10)
        this.speed = Math.random() * 2 + 1
        this.angle = 0
        this.timer = this.maxLength * 2

        // Greyscale / White shades for the dark theme
        const shade = Math.floor(Math.random() * 100 + 50)
        this.color = `rgba(${shade}, ${shade}, ${shade}, 0.1)`
      }

      update() {
        this.timer--
        if (this.timer < 1) {
          this.reset()
        }

        // Calculate grid position
        const x = Math.floor(this.x / cellSize)
        const y = Math.floor(this.y / cellSize)
        const index = x + y * cols

        // Base flow angle
        if (flowField[index]) {
          this.angle = flowField[index]
        }

        // Mouse interaction: repel/attract
        if (mouse.isActive) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx)
            const force = (mouse.radius - distance) / mouse.radius
            // Swirl effect around mouse
            this.angle += angle + (Math.PI / 2) * force * 5
          }
        }

        // Move
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        // History for trails
        this.history.push({ x: this.x, y: this.y })
        if (this.history.length > this.maxLength) {
          this.history.shift()
        }

        // Wrap around edges
        if (this.x < 0) this.x = width
        else if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        else if (this.y > height) this.y = 0
      }

      draw(context: CanvasRenderingContext2D) {
        if (this.history.length < 2) return

        context.beginPath()
        context.moveTo(this.history[0].x, this.history[0].y)
        for (let i = 1; i < this.history.length; i++) {
          context.lineTo(this.history[i].x, this.history[i].y)
        }
        context.strokeStyle = this.color
        context.stroke()
      }

      reset() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.history = []
        this.timer = this.maxLength * 2
      }
    }

    const init = () => {
      width = container.clientWidth
      height = container.clientHeight
      canvas.width = width
      canvas.height = height

      rows = Math.floor(height / cellSize) + 1
      cols = Math.floor(width / cellSize) + 1

      flowField = new Array(rows * cols)
      particles = []

      // Create fewer particles for better performance but long trails
      const numberOfParticles = 2000
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      // Create the fading trail effect
      // Instead of clearing, we draw a semi-transparent black rectangle
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, width, height)

      // Update flow field based on time
      let yOff = 0
      const time = Date.now() * 0.0005

      for (let y = 0; y < rows; y++) {
        let xOff = 0
        for (let x = 0; x < cols; x++) {
          const index = x + y * cols
          // Perlin-ish noise
          const angle = (Math.cos(xOff + time) + Math.sin(yOff + time)) * 2
          flowField[index] = angle
          xOff += 0.1
        }
        yOff += 0.1
      }

      particles.forEach((particle) => {
        particle.update()
        particle.draw(ctx)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      init()
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.isActive = true
    }

    const handleMouseLeave = () => {
      mouse.isActive = false
    }

    window.addEventListener("resize", handleResize)
    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("resize", handleResize)
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10 bg-black">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}
