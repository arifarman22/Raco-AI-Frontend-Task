import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function SignatureInteraction() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="signature-section">
      <motion.div className="signature-content" style={{ y, opacity }}>
        <motion.div
          className="section-label"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Spatial Intelligence
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          High-Dimensional <br />
          <span className="gradient-text">Neural Structures</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          High-performance neural architectures designed for clarity and speed. Synthesize complex data streams into unified intelligence models.
        </motion.p>

        <motion.div
          className="cta-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="btn-secondary">Explore Architecture</button>
        </motion.div>
      </motion.div>

      <style>{`
        .signature-section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #000000;
        }
        
        .signature-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 800px;
          padding: 0 2rem;
        }

        .section-label {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: var(--text-tertiary);
          margin-bottom: 2.5rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .signature-content h2 {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          margin-bottom: 2.5rem;
          font-weight: 350;
          line-height: 1.1;
          letter-spacing: -0.04em;
          color: var(--text-primary);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-indigo), var(--accent-violet));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .signature-content p {
          font-size: 1.15rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 4rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 400;
        }
        
        .cta-wrapper {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </section>
  )
}
