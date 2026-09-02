import "@/App.css";
import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  CloudCog,
  Database,
  FileText,
  Menu,
  Network,
  Route,
  Sparkles,
  TrendingUp,
  Truck,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const solutions = [
  {
    icon: Route,
    number: "01",
    title: "Route Optimization",
    text: "AI-powered routing that adapts to demand, capacity, schedules and real-world constraints.",
  },
  {
    icon: TrendingUp,
    number: "02",
    title: "Demand Forecasting",
    text: "Turn historical and operational data into forecasts that help teams plan with confidence.",
  },
  {
    icon: BrainCircuit,
    number: "03",
    title: "Freight Intelligence",
    text: "Connect rates, shipments, customers and operations to expose the decisions that matter.",
  },
  {
    icon: FileText,
    number: "04",
    title: "Document Automation",
    text: "Reduce repetitive work by extracting, validating and moving information automatically.",
  },
  {
    icon: Database,
    number: "05",
    title: "Supply Chain Analytics",
    text: "Give management a single view of performance, exceptions, costs and opportunities.",
  },
  {
    icon: Zap,
    number: "06",
    title: "AI Agents",
    text: "Deploy practical AI agents that work across workflows instead of living in a chat window.",
  },
];

const capabilities = [
  ["AI Strategy", "Identify high-value use cases and build a practical roadmap."],
  ["Digital Transformation", "Modernize legacy workflows without disrupting operations."],
  ["Enterprise Applications", "Build connected applications around the way your teams work."],
  ["Cloud & Infrastructure", "Create secure, scalable foundations for data and AI."],
];

function NetworkVisual() {
  return (
    <div className="network-card" aria-hidden="true">
      <div className="network-glow" />
      <div className="network-label network-label-top">GLOBAL OPERATIONS</div>
      <svg className="network-lines" viewBox="0 0 640 560" preserveAspectRatio="none">
        <path d="M70 410 C180 300 210 360 300 250 S430 160 570 90" />
        <path d="M95 130 C190 190 245 150 330 290 S475 390 585 330" />
        <path d="M80 470 C200 440 245 300 365 350 S490 475 590 425" />
        <path d="M130 85 C250 120 285 230 390 205 S500 130 555 185" />
      </svg>
      <div className="node node-a"><span /><small>SINGAPORE</small></div>
      <div className="node node-b"><span /><small>ROTTERDAM</small></div>
      <div className="node node-c"><span /><small>DUBAI</small></div>
      <div className="node node-d"><span /><small>LOS ANGELES</small></div>
      <div className="node node-e"><span /><small>SHANGHAI</small></div>
      <div className="network-center">
        <Network size={23} />
        <strong>AI CORE</strong>
        <span>CONNECTED</span>
      </div>
      <div className="metric metric-one"><b>+24.8%</b><span>EFFICIENCY</span></div>
      <div className="metric metric-two"><b>18.4k</b><span>SHIPMENTS</span></div>
      <div className="network-footer"><span className="status-dot" /> AI systems monitoring operations in real time</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top" onClick={closeMenu}>
            <span className="brand-mark"><span>e</span></span>
            <span className="brand-copy"><strong>efrontier</strong><small>AI & DIGITAL SYSTEMS</small></span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#solutions" onClick={closeMenu}>Solutions</a>
            <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
            <a href="#approach" onClick={closeMenu}>Approach</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>Talk to us <ArrowRight size={16} /></a>
          </div>

          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> AI FOR THE REAL WORLD</div>
            <h1>AI that moves <em>global commerce.</em></h1>
            <p className="hero-text">Intelligent logistics and digital systems for shipping, freight and supply-chain businesses — turning complex operations into faster, smarter decisions.</p>
            <div className="hero-actions">
              <a href="#solutions" className="button button-primary">Explore solutions <ArrowRight size={18} /></a>
              <a href="#contact" className="button button-ghost">Talk to an expert</a>
            </div>
            <div className="hero-proof">
              <span><Sparkles size={15} /> AI-first</span>
              <span><CloudCog size={15} /> Cloud ready</span>
              <span><Truck size={15} /> Logistics focused</span>
            </div>
          </div>
          <NetworkVisual />
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span>BUILT FOR COMPLEX OPERATIONS</span>
            <div><b>SHIPPING</b><b>FREIGHT</b><b>WAREHOUSING</b><b>DISTRIBUTION</b><b>SUPPLY CHAIN</b></div>
          </div>
        </section>

        <section id="solutions" className="section container">
          <div className="section-heading">
            <div><div className="section-kicker">01 / AI SOLUTIONS</div><h2>Technology that understands <em>your operation.</em></h2></div>
            <p>We combine AI, data and modern software to solve the operational problems that slow growing businesses down.</p>
          </div>
          <div className="solution-grid">
            {solutions.map(({ icon: Icon, number, title, text }) => (
              <article className="solution-card" key={number}>
                <div className="card-top"><span>{number}</span><Icon size={21} /></div>
                <h3>{title}</h3><p>{text}</p><a href="#contact">Learn more <ArrowRight size={15} /></a>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" className="dark-section">
          <div className="container capability-layout">
            <div className="capability-intro">
              <div className="section-kicker">02 / DIGITAL SYSTEMS</div>
              <h2>From AI idea to <em>operational advantage.</em></h2>
              <p>Good technology should disappear into the workflow. We design systems that make teams faster, information clearer and decisions easier.</p>
              <a href="#contact" className="text-link">Start a conversation <ArrowRight size={16} /></a>
            </div>
            <div className="capability-list">
              {capabilities.map(([title, text], index) => (
                <div className="capability-row" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><ChevronDown size={18} /></div>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="section approach-section container">
          <div className="section-heading compact"><div><div className="section-kicker">03 / OUR APPROACH</div><h2>Start practical. <em>Scale intelligently.</em></h2></div></div>
          <div className="approach-grid">
            <div className="approach-step"><span>01</span><h3>Discover</h3><p>Map the workflow, data and bottlenecks before choosing technology.</p></div>
            <div className="approach-step"><span>02</span><h3>Build</h3><p>Prototype the highest-value use case and prove it with real operational data.</p></div>
            <div className="approach-step"><span>03</span><h3>Integrate</h3><p>Connect AI to the systems your people already depend on.</p></div>
            <div className="approach-step"><span>04</span><h3>Scale</h3><p>Turn proven solutions into secure, measurable enterprise capabilities.</p></div>
          </div>
        </section>

        <section id="contact" className="cta-section container">
          <div className="cta-glow" />
          <div className="cta-content"><div className="section-kicker">READY WHEN YOU ARE</div><h2>Let's build a smarter <em>frontier.</em></h2><p>Tell us where your operation is today. We'll help you identify where AI can create measurable value next.</p><a href="mailto:hello@efrontier.com.sg" className="button button-primary">Start a conversation <ArrowRight size={18} /></a></div>
        </section>
      </main>

      <footer className="footer"><div className="container footer-inner"><div className="brand"><span className="brand-mark"><span>e</span></span><span className="brand-copy"><strong>efrontier</strong><small>AI & DIGITAL SYSTEMS</small></span></div><div className="footer-right"><span>AI Logistics · Digital Transformation · Enterprise Systems</span><span>© {new Date().getFullYear()} Efrontier Solutions</span></div></div></footer>
    </div>
  );
}

export default App;
