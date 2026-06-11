import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'

const expectItems = [
  {
    icon: 'home' as const,
    title: 'Local service',
    body: 'You work with a Northeast Ohio company that understands the homes, the pace, and the expectations of the communities it serves.',
  },
  {
    icon: 'wrench' as const,
    title: 'Trade-first execution',
    body: 'The job is measured by the finished result, not the sales pitch, which keeps the focus on prep, fit, and long-term performance.',
  },
  {
    icon: 'users' as const,
    title: 'A process built around you',
    body: 'From first conversation to final walkthrough, the goal is to make your project feel clear, responsive, and respectful of your home.',
  },
]

const steps = [
  {
    n: '01',
    title: 'In-home guidance',
    body: 'You get product advice in your actual space, with samples, lighting, and room flow all considered before you make a decision.',
  },
  {
    n: '02',
    title: 'Clear planning',
    body: 'You know what is being installed, what the timeline looks like, and what your home should expect before the work begins.',
  },
  {
    n: '03',
    title: 'Respect for your home',
    body: 'Your project should feel organized, professional, and clean from the first walkthrough to the final details.',
  },
]

const values = [
  {
    title: 'Craftsmanship',
    body: 'You should see the difference in the details, from the prep work underneath to the clean lines and finished feel of the room when the job is complete.',
  },
  {
    title: 'Transparency',
    body: 'You deserve honest answers, clear expectations, and pricing that makes sense before the installation starts.',
  },
  {
    title: 'Community',
    body: 'You are working with a local company that understands Northeast Ohio homes and takes pride in serving families across the region.',
  },
]

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/gallery/carpet-family-room.webp" alt="" />
        </div>
        <div className="container">
          <div className="content">
            <p className="eyebrow">About</p>
            <h1>A better flooring experience starts at home.</h1>
            <p>
              If you want a flooring company that shows up clearly, guides you honestly, and installs
              with care, that is what this business is built around for homeowners across Northeast
              Ohio.
            </p>
          </div>
        </div>
      </div>

      {/* Why homeowners call */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-card-light">
              <p className="eyebrow">Why Homeowners Call</p>
              <h2>Straight answers, skilled work, and a process that feels easier</h2>
              <p>
                When you are replacing flooring, you should not have to sort through vague pricing,
                hard sales pressure, or uncertainty about who is actually doing the job. Benchmark
                Flooring is built to give you a more personal, more direct path from estimate to
                installation.
              </p>
              <p>
                Serving homeowners across Northeast Ohio, the focus stays on what matters most to you:
                choosing the right material for the room, getting clear guidance, and ending up with a
                finished floor that feels right every time you walk into the space.
              </p>
            </div>

            <div className="about-card-dark">
              <p className="eyebrow">What You Can Expect</p>
              {expectItems.map((e) => (
                <div className="expect-item" key={e.title}>
                  <div className="expect-item-header">
                    <div className="expect-icon">
                      <Icon name={e.icon} size={20} />
                    </div>
                    <h3>{e.title}</h3>
                  </div>
                  <p>{e.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">How It Works</p>
            <h2>What your project should feel like</h2>
            <p>
              The experience is designed to keep decisions easier, expectations clearer, and the final
              result more comfortable to live with once the work is done.
            </p>
          </div>
          <div className="about-process-grid">
            {steps.map((s) => (
              <div className="about-process-card" key={s.n}>
                <div className="about-process-card-top">
                  <div>
                    <div className="about-process-num">{s.n}</div>
                    <div className="about-process-sublabel">Customer Process</div>
                  </div>
                </div>
                <div className="about-process-card-body">
                  <p className="eyebrow">Step {Number(s.n)}</p>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">What You Can Count On</p>
            <h2>The standards behind your installation</h2>
            <p>
              These are the expectations that shape how your estimate, communication, installation, and
              follow-through should feel from start to finish.
            </p>
          </div>
          <div className="values-grid">
            {values.map((v) => (
              <div className="value-card" key={v.title}>
                <div className="value-card-header">
                  <div className="value-icon">
                    <Icon name="clipboard" size={20} />
                  </div>
                  <span className="eyebrow">Benchmark Standard</span>
                </div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
