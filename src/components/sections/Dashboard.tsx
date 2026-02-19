import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tabs = ['Overview', 'Analytics', 'Insights', 'Automations']

const mockData = {
  Overview: {
    metrics: [
      { label: 'Data Sources', value: '24', change: '+12%' },
      { label: 'Active Models', value: '8', change: '+3' },
      { label: 'Insights Generated', value: '1,247', change: '+18%' }
    ]
  },
  Analytics: {
    metrics: [
      { label: 'Processing Rate', value: '2.4M/s', change: '+5%' },
      { label: 'Accuracy', value: '98.7%', change: '+0.3%' },
      { label: 'Latency', value: '12ms', change: '-8%' }
    ]
  },
  Insights: {
    metrics: [
      { label: 'High Priority', value: '14', change: '+2' },
      { label: 'Confidence Score', value: '94%', change: '+1%' },
      { label: 'Actions Taken', value: '89', change: '+23%' }
    ]
  },
  Automations: {
    metrics: [
      { label: 'Active Workflows', value: '32', change: '+8' },
      { label: 'Success Rate', value: '99.2%', change: '+0.5%' },
      { label: 'Time Saved', value: '142h', change: '+34h' }
    ]
  }
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <section className="dashboard-section">
      <div className="dashboard-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Operations</span>
          <h2>Intelligence Dashboard</h2>
          <p>Real-time telemetry and predictive insights from your AI networks</p>
        </motion.div>

        <motion.div
          className="dashboard-ui"
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="sidebar">
            <div className="sidebar-header">
              <div className="logo">Xai</div>
            </div>
            <nav className="sidebar-nav">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`nav-item ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      className="active-indicator"
                      layoutId="activeTab"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </nav>
            <div className="sidebar-footer">
              <div className="status-label">
                <span className="status-dot"></span>
                System Active
              </div>
            </div>
          </div>

          <div className="main-content">
            <div className="content-header">
              <h3>{activeTab} <span className="tab-context">Telemetry</span></h3>
              <div className="header-actions">
                <button className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M11 5V3H5v2H2v2h12V5h-3zM8 13L3 7h10l-5 6z" /></svg>
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="metrics-grid"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {mockData[activeTab as keyof typeof mockData].metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    className="metric-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  >
                    <div className="metric-label">{metric.label}</div>
                    <div className="metric-value">{metric.value}</div>
                    <div className={`metric-change ${metric.change.startsWith('+') ? 'up' : 'down'}`}>
                      {metric.change}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            <motion.div 
              className="chart-container"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="chart-header">
                <span>Signal Performance</span>
                <span className="chart-legend">Live Track</span>
              </div>
              <div className="chart-body">
                <svg width="100%" height="200" viewBox="0 0 800 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 0 150 Q 100 80 200 120 T 400 60 T 600 100 T 800 40"
                    fill="none"
                    stroke="var(--accent-blue)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 0 150 Q 100 80 200 120 T 400 60 T 600 100 T 800 40 L 800 200 L 0 200 Z"
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .dashboard-section {
          min-height: 100vh;
          padding: 10rem 2rem;
          background: #000000;
          position: relative;
        }
        
        .dashboard-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-label {
          display: block;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          color: var(--text-tertiary);
          margin-bottom: 2rem;
        }

        .dashboard-section h2 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 350;
          letter-spacing: -0.03em;
          margin-bottom: 2rem;
          color: var(--text-primary);
        }

        .section-header p {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 600px;
          margin: 0 auto;
          font-weight: 450;
        }
        
        .dashboard-ui {
          display: flex;
          background: rgba(255, 255, 255, 0.015);
          backdrop-filter: blur(40px);
          border-radius: 40px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 
            0 80px 160px rgba(0, 0, 0, 0.8);
          min-height: 700px;
        }
        
        .sidebar {
          width: 260px;
          background: rgba(0, 0, 0, 0.2);
          border-right: 1px solid rgba(255, 255, 255, 0.04);
          display: flex;
          flex-direction: column;
          padding: 3rem 0;
        }
        
        .sidebar-header {
          padding: 0 2.5rem 3rem;
        }
        
        .sidebar-nav {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 0 1rem;
        }
        
        .nav-item {
          position: relative;
          padding: 0.75rem 1.5rem;
          text-align: left;
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 400;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 10px;
          letter-spacing: 0.02em;
        }
        
        .nav-item:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.03);
        }
        
        .nav-item.active {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .active-indicator {
          position: absolute;
          left: 0;
          top: 25%;
          height: 50%;
          width: 2px;
          background: var(--accent-blue);
          border-radius: 0 2px 2px 0;
          box-shadow: 0 0 10px var(--accent-blue);
        }

        .sidebar-footer {
          padding: 0 2.5rem;
        }

        .status-label {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
        }

        .status-dot {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
        }
        
        .main-content {
          flex: 1;
          padding: 4rem;
          display: flex;
          flex-direction: column;
        }
        
        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4rem;
        }
        
        .content-header h3 {
          font-size: 1.6rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--text-primary);
        }

        .tab-context {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-tertiary);
          margin-left: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        
        .metric-card {
          background: rgba(255, 255, 255, 0.02);
          padding: 2.5rem 2rem;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .metric-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(0, 212, 255, 0.3);
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 212, 255, 0.25);
        }
        
        .metric-label {
          font-size: 0.7rem;
          color: var(--text-tertiary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
        }
        
        .metric-value {
          font-size: 2.1rem;
          font-weight: 350;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
          color: var(--text-primary);
        }
        
        .metric-change {
          font-size: 0.8rem;
          font-weight: 700;
        }

        .metric-change.up { color: #10b981; }
        .metric-change.down { color: #ef4444; }
        
        .chart-container {
          flex: 1;
          background: rgba(255, 255, 255, 0.015);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
        }

        .chart-legend {
          color: var(--accent-blue);
        }

        .chart-body {
          flex: 1;
          display: flex;
          align-items: flex-end;
          filter: drop-shadow(0 0 20px rgba(0, 140, 255, 0.1));
        }
      `}</style>
    </section>
  )
}
