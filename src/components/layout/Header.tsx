import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="header-container">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Xai
        </motion.div>

        <nav className="nav">
          {['Platform', 'Solutions', 'Developers', 'Pricing'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.div
          className="header-actions"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="btn-login">Sign In</button>
          <button className="btn-cta">Get Started</button>
        </motion.div>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.5rem 2rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border-bottom: 1px solid transparent;
        }

        .header.scrolled {
          padding: 1rem 2rem;
          background: rgba(2, 6, 23, 0.4);
          backdrop-filter: blur(12px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-size: 1.3rem;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          cursor: pointer;
        }

        .nav {
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .nav-link {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 400;
          transition: all 0.3s ease;
          position: relative;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .header-actions {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .btn-login {
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 400;
          transition: all 0.3s ease;
        }

        .btn-login:hover {
          color: var(--text-primary);
        }

        .btn-cta {
          padding: 0.6rem 1.4rem;
          background: var(--text-primary);
          color: var(--bg-primary);
          font-size: 0.75rem;
          font-weight: 600;
          border-radius: 99px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-cta:hover {
          transform: translateY(-1px);
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </motion.header>
  )
}
