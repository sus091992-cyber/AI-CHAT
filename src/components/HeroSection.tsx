"use client"

import { Suspense, lazy } from "react"
import { cn } from "@/lib/utils"

const SplineScene = lazy(() => import("@splinetool/react-spline").then((mod) => ({ default: mod.default || mod })))

const SplineFallback = () => (
  <div className="absolute inset-0 bg-hero-bg" />
)

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Suspense fallback={<SplineFallback />}>
          <SplineScene
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
            className="w-full h-full"
          />
        </Suspense>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      {/* Gradient overlay for smooth content transition */}
      <div className="absolute inset-0 bg-gradient-to-t from-hero-bg via-transparent to-transparent z-[1] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-10 pt-32">
        {/* Heading - Staggered fade-up animations */}
        <h1
          className="opacity-0 animate-fade-up text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-2 md:mb-4 uppercase"
          style={{ animationDelay: "0.2s" }}
        >
          S1 <span className="text-primary">CHAT</span>
        </h1>

        <p
          className="opacity-0 animate-fade-up text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6"
          style={{ animationDelay: "0.4s" }}
        >
          Your AI pair programmer for modern development.
        </p>

        <p
          className="opacity-0 animate-fade-up text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8 max-w-xl"
          style={{ animationDelay: "0.55s" }}
        >
          Understand your entire codebase with AI. Get instant PR reviews, generate tests, debug complex issues, and refactor code—all through natural conversation. Built for teams who ship quality code, faster.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 font-bold" style={{ animationDelay: "0.7s" }}>
          <button
            className={cn(
              "opacity-0 animate-fade-up pointer-events-auto bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] font-bold"
            )}
            style={{ animationDelay: "0.7s" }}
          >
            Start Free Trial
          </button>
          <button
            className={cn(
              "opacity-0 animate-fade-up pointer-events-auto bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97] font-bold"
            )}
            style={{ animationDelay: "0.75s" }}
          >
            View Demo
          </button>
        </div>

        {/* Trust line */}
        <p
          className="opacity-0 animate-fade-up text-muted-foreground/60 text-xs font-light mt-4 md:mt-6 tracking-wider"
          style={{ animationDelay: "0.85s" }}
        >
          Trusted by 5,000+ developers. 1,200+ teams. 15M+ lines of code analyzed daily.
        </p>
      </div>

      {/* Optional Chat Preview - Floating element */}
      <div
        className="pointer-events-auto fixed bottom-10 right-10 hidden lg:block z-20"
        style={{ animationDelay: "1s" }}
      >
        <div className="opacity-0 animate-fade-up bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 w-72">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary/30" />
            <span className="text-xs text-muted-foreground ml-2">S1 CHAT</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="bg-white/10 rounded-lg px-3 py-2 max-w-[80%]">
                <p className="text-foreground">Hey! I can help you review that PR, write tests, or debug that nasty bug. What are you working on?</p>
              </div>
            </div>
            <div className="flex items-start gap-2 justify-end">
              <div className="bg-primary/20 rounded-lg px-3 py-2 max-w-[80%]">
                <p className="text-primary-foreground">Can you review my latest PR?</p>
              </div>
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground/60 animate-pulse">
              <span className="text-xs">AI is typing</span>
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}