import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import InsightFlow from './components/sections/InsightFlow'
import Dashboard from './components/sections/Dashboard'
import SignatureInteraction from './components/sections/SignatureInteraction'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InsightFlow />
        <Dashboard />
        <SignatureInteraction />
      </main>
      <Footer />
    </>
  )
}

export default App
