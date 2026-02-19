import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -150])

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity }}
      className="hero"
    >
      <div className="hero-waves">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
      <motion.div className="hero-content" style={{ y }}>
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="badge-dot"></span>
          Platform for Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Intelligence<br />
          <span className="gradient-text">Workspace</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Synthesize complex data into actionable intelligence through a spatial-first AI platform designed for high-performance teams.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <button className="btn-primary">
            Launch Workspace
          </button>
          <button className="btn-secondary">View Showcase</button>
        </motion.div>
      </motion.div>

      <div className="scroll-indicator">
        <motion.div
          className="scroll-track"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <style>{`
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #000000;
        }

        .hero-waves {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.4;
          filter: blur(60px);
        }

        .wave {
          position: absolute;
          width: 250%;
          height: 250%;
          top: -75%;
          left: -75%;
          background: radial-gradient(circle at center, var(--accent-blue) 0%, transparent 50%);
          border-radius: 45%;
          animation: wave-rotate 15s linear infinite;
          opacity: 0.3;
          mix-blend-mode: screen;
        }

        .wave-2 {
          background: radial-gradient(circle at center, var(--accent-indigo) 0%, transparent 50%);
          animation-duration: 20s;
          animation-direction: reverse;
          opacity: 0.2;
          border-radius: 40%;
        }

        .wave-3 {
          background: radial-gradient(circle at center, var(--accent-violet) 0%, transparent 50%);
          animation-duration: 25s;
          opacity: 0.15;
          border-radius: 42%;
        }

        @keyframes wave-rotate {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          to { transform: rotate(360deg) scale(1); }
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 1000px;
          padding: 0 2rem;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.4rem 1.2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 3rem;
          color: var(--text-secondary);
        }
        
        .badge-dot {
          width: 5px;
          height: 5px;
          background: var(--accent-blue);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--accent-blue);
        }
        
        .hero h1 {
          font-size: clamp(3.5rem, 9vw, 6rem);
          font-weight: 350;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
          line-height: 1;
          color: var(--text-primary);
        }
        
        .gradient-text {
          background: linear-gradient(to right, #008cff, #5d46ff, #8c46ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .hero p {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.7;
          max-width: 540px;
          margin: 0 auto 3.5rem;
          font-weight: 450;
        }
        
        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }
        
        .btn-primary {
          padding: 1rem 2.8rem;
          font-size: 0.8rem;
          font-weight: 500;
          border-radius: 50px;
          background: #ffffff;
          color: #000000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.15);
        }
        
        .btn-secondary {
          padding: 1rem 2.8rem;
          font-size: 0.8rem;
          font-weight: 500;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
        }
        
        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .scroll-track {
          width: 20px;
          height: 36px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          display: flex;
          justify-content: center;
          padding-top: 6px;
        }
        
        .scroll-dot {
          width: 2px;
          height: 6px;
          background: var(--text-secondary);
          border-radius: 1px;
        }
      `}</style>
    </motion.section>
  )
}
