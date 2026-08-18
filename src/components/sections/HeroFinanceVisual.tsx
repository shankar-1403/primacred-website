import { motion, useReducedMotion } from 'motion/react'

export function HeroFinanceVisual() {
  const reduce = useReducedMotion()

  return (
    <div className="relative size-full min-h-[340px] overflow-hidden rounded-3xl bg-navy-900 md:min-h-[480px]">
      <div className="bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-gold/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-10 size-56 rounded-full bg-white/5 blur-2xl" />

      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 560 480"
        fill="none"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hero-line-gold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B8956A" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#D4BC96" />
            <stop offset="100%" stopColor="#B8956A" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B8956A" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#B8956A" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[80, 160, 240, 320, 400].map((y) => (
          <line key={y} x1="40" y1={y} x2="520" y2={y} stroke="white" strokeOpacity="0.06" />
        ))}
        {[80, 180, 280, 380, 480].map((x) => (
          <line key={x} x1={x} y1="60" x2={x} y2="420" stroke="white" strokeOpacity="0.04" />
        ))}

        {/* Area fill under curve */}
        <path
          d="M60 340 L120 300 L200 280 L280 220 L360 200 L440 140 L500 100 L500 420 L60 420 Z"
          fill="url(#hero-area)"
        />

        {/* Main trend line */}
        {reduce ? (
          <path
            d="M60 340 L120 300 L200 280 L280 220 L360 200 L440 140 L500 100"
            stroke="url(#hero-line-gold)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <motion.path
            d="M60 340 L120 300 L200 280 L280 220 L360 200 L440 140 L500 100"
            stroke="url(#hero-line-gold)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          />
        )}

        {/* Data points */}
        {[
          [120, 300],
          [200, 280],
          [280, 220],
          [360, 200],
          [440, 140],
          [500, 100],
        ].map(([cx, cy], i) =>
          reduce ? (
            <circle key={i} cx={cx} cy={cy} r="4" fill="#D4BC96" />
          ) : (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="4"
              fill="#D4BC96"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.35 }}
            />
          ),
        )}

        {/* Risk arc */}
        <path
          d="M380 80 A 90 90 0 0 1 470 170"
          stroke="#B8956A"
          strokeOpacity="0.35"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
      </svg>

      {/* Floating finance labels — conceptual, not statistics */}
      <div className="absolute left-6 top-6 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
        <p className="text-[0.6rem] font-bold uppercase tracking-widest text-gold-soft">
          Finance
        </p>
        <p className="mt-1 text-xs text-white/70">Capital & structure</p>
      </div>

      <div className="absolute right-6 top-20 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
        <p className="text-[0.6rem] font-bold uppercase tracking-widest text-gold-soft">
          Risk
        </p>
        <p className="mt-1 text-xs text-white/70">Exposure & resilience</p>
      </div>

      <div className="absolute bottom-8 left-1/2 w-[calc(100%-3rem)] max-w-xs -translate-x-1/2 rounded-xl border border-gold/30 bg-navy-800/80 px-5 py-4 backdrop-blur-md">
        <p className="text-center font-serif italic font-normal leading-[1.45] text-lg text-white/90">
          Make better decisions. Build stronger businesses.
        </p>
      </div>
    </div>
  )
}
