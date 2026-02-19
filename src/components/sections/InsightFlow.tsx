import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

const stages = [
  {
    title: 'Precision Ingestion',
    subtitle: 'Stage 01',
    description: 'Autonomous pipelines that normalize and synthesize raw data streams from global edge nodes with zero latency.',
    metrics: [
      { label: 'Reliability', value: '99.9%' },
      { label: 'Throughput', value: '2.4 GB/s' },
      { label: 'Node Count', value: '1,200+' }
    ],
    color: '#008cff'
  },
  {
    title: 'Neural Synthesis',
    subtitle: 'Stage 02',
    description: 'Transforming unstructured inputs into high-dimensional intelligence using adaptive transformer architectures.',
    metrics: [
      { label: 'Latency', value: '12ms' },
      { label: 'Accuracy', value: '98.4%' },
      { label: 'Model Depth', value: '128' }
    ],
    color: '#5d46ff'
  },
  {
    title: 'Actionable Intelligence',
    subtitle: 'Stage 03',
    description: 'Surfacing probabilistic insights that drive high-stakes decision making and autonomous workflows.',
    metrics: [
      { label: 'Confidence', value: '94%' },
      { label: 'Time Saved', value: '42h/wk' },
      { label: 'Signal/Noise', value: '12.4x' }
    ],
    color: '#8c46ff'
  }
]

function StageLogo({ index, color }: { index: number; color: string }) {
  return (
    <div className="stage-logo-wrapper">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        {index === 0 && (
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="30" cy="30" r="28" stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <path d="M30 10V20M30 40V50M10 30H20M40 30H50" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <circle cx="30" cy="30" r="4" fill={color} />
          </motion.g>
        )}
        {index === 1 && (
          <motion.g
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M30 5L55 20V40L30 55L5 40V20L30 5Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="30" cy="30" r="10" stroke={color} strokeWidth="1" opacity="0.4" />
            <circle cx="30" cy="30" r="3" fill={color} />
          </motion.g>
        )}
        {index === 2 && (
          <motion.g
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M30 5L35 25L55 30L35 35L30 55L25 35L5 30L25 25L30 5Z" fill={color} />
            <path d="M30 15L32 28L45 30L32 32L30 45L28 32L15 30L28 28L30 15Z" fill="#ffffff" opacity="0.5" />
          </motion.g>
        )}
      </svg>
    </div>
  )
}

export default function InsightFlow() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const introOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 1])
  const introY = useTransform(scrollYProgress, [0, 0.05], [0, 0])

  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "-66.6%"])
  const springX = useSpring(x, { stiffness: 80, damping: 25, restDelta: 0.001 })

  // Individual card animations based on scroll
  const card1Opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1])
  const card1Y = useTransform(scrollYProgress, [0.1, 0.25], [50, 0])
  const card1Scale = useTransform(scrollYProgress, [0.1, 0.25], [0.8, 1])

  const card2Opacity = useTransform(scrollYProgress, [0.3, 0.45], [0, 1])
  const card2Y = useTransform(scrollYProgress, [0.3, 0.45], [50, 0])
  const card2Scale = useTransform(scrollYProgress, [0.3, 0.45], [0.8, 1])

  const card3Opacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1])
  const card3Y = useTransform(scrollYProgress, [0.5, 0.65], [50, 0])
  const card3Scale = useTransform(scrollYProgress, [0.5, 0.65], [0.8, 1])

  const cardAnimations = [
    { opacity: card1Opacity, y: card1Y, scale: card1Scale },
    { opacity: card2Opacity, y: card2Y, scale: card2Scale },
    { opacity: card3Opacity, y: card3Y, scale: card3Scale }
  ]

  return (
    <section ref={containerRef} className="insight-flow-horizontal">
      <div className="sticky-wrapper">
        <motion.div
          style={{ opacity: introOpacity, y: introY }}
          className="flow-intro"
        >
          <span className="section-label">Capabilities</span>
          <h2>Data <span>Architecture</span></h2>
          <p>A multi-layered ecosystem designed for continuous synthesis and high-dimensional reasoning.</p>
        </motion.div>

        <div className="track-container">
          <motion.div style={{ x: springX }} className="horizontal-track">
            {stages.map((stage, index) => (
              <motion.div 
                key={index} 
                className="card-outer"
                style={{
                  opacity: cardAnimations[index].opacity,
                  y: cardAnimations[index].y,
                  scale: cardAnimations[index].scale
                }}
              >
                <div className="insight-card">
                  <div className="card-header">
                    <div className="stage-info">
                      <span className="stage-tag" style={{ color: stage.color }}>{stage.subtitle}</span>
                      <h3>{stage.title}</h3>
                    </div>
                    <StageLogo index={index} color={stage.color} />
                  </div>

                  <p className="description">{stage.description}</p>

                  <div className="metrics">
                    {stage.metrics.map((m: any, i: number) => (
                      <div key={i} className="metric-item">
                        <span className="metric-val">{m.value}</span>
                        <span className="metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-footer">
                    <div className="footer-line" style={{ background: `linear-gradient(to right, ${stage.color}, transparent)` }} />
                    <div className="status-badge">
                      <span className="pulse-dot" style={{ backgroundColor: stage.color }} />
                      Active
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .insight-flow-horizontal {
          position: relative;
          height: 450vh; /* Scrubbing length */
          background: #000000;
        }

        .sticky-wrapper {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          padding: 8vh 0;
        }
        
        .flow-intro {
          padding: 0 4rem;
          margin-bottom: 2rem;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
          z-index: 10;
        }

        .flow-intro h2 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 350;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
        }

        .flow-intro h2 span {
          color: var(--text-tertiary);
        }

        .flow-intro p {
          color: var(--text-secondary);
          max-width: 500px;
          font-size: 1.1rem;
          font-weight: 350;
        }

        .track-container {
          width: 100%;
          display: flex;
          align-items: center;
        }

        .horizontal-track {
          display: flex;
          padding-left: 4rem;
          gap: 2rem;
          width: fit-content;
          align-items: center;
        }

        .card-outer {
          width: 28vw;
          max-width: 450px;
          flex-shrink: 0;
        }

        .insight-card {
          background: rgba(255, 255, 255, 0.012);
          backdrop-filter: blur(40px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 2rem;
          position: relative;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5);
          transition: all 0.4s ease;
        }

        .insight-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 50px 120px rgba(0, 0, 0, 0.6);
          background: rgba(255, 255, 255, 0.025);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .stage-tag {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: block;
        }

        .insight-card h3 {
          font-size: 1.35rem;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: var(--text-primary);
        }

        .description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-weight: 350;
          max-width: 90%;
        }

        .metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .metric-val {
          font-size: 1.5rem;
          font-weight: 350;
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.25rem;
        }

        .metric-label {
          font-size: 0.7rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        .card-footer {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .footer-line {
          flex: 1;
          height: 1px;
          opacity: 0.2;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }

        .section-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: var(--text-tertiary);
          margin-bottom: 1.5rem;
        }
      `}</style>
    </section>
  )
}
