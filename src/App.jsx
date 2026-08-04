import React from "react";
import admin from "./assets/admin.webp";
import alluvie from "./assets/alluvie.webp";
import chim from "./assets/chim.jpg";
import elcami from "./assets/elcami.webp";
import logisticsMobile from "./assets/logistics-mobile.webp";
import maltaWeather from "./assets/malta-weather.webp";
import novel from "./assets/novel.webp";
import novelAdmin from "./assets/novel_admin.webp";
import resume from "./assets/somdotta-sarkar-resume.pdf";
import shahier from "./assets/shahier.jpg";
import somdotta from "./assets/somdotta.jpg";
import streamfog from "./assets/streamfog.webp";
import vista from "./assets/vista.webp";

const projects = [
  {
    title: "Malta Weather",
    type: "Mobile product",
    description:
      "A subscription-based weather app with live forecasts, jellyfish maps, webcam streams, push notifications, and Stripe-powered plan access.",
    image: maltaWeather,
    accent: "project-sky",
    tags: ["React Native", "Expo", "Node.js", "Stripe"],
    status: "Private client project",
  },
  {
    title: "Sales & Operations Suite",
    type: "Business platform",
    description:
      "A role-based system connecting production, printing, order review, sales performance, stock visibility, and management reporting.",
    image: admin,
    accent: "project-amber",
    tags: ["React", "Node.js", "Prisma", "PostgreSQL"],
    status: "Private client project",
  },
  {
    title: "QR Billing & Vehicle Inventory",
    type: "Mobile operations app",
    description:
      "A mobile workflow for scanning stock, loading vehicles, creating invoices, updating inventory, and tracking salesperson performance.",
    accent: "project-acid",
    tags: ["React Native", "QR", "REST API", "Inventory"],
    status: "Private client project",
    flow: ["scan stock", "load vehicle", "create invoice"],
  },
  {
    title: "Field Logistics Mobile App",
    type: "Location-based mobile app",
    description:
      "A mobile logistics experience connecting user authentication, live location, maps, and field activity in a clear device-first workflow.",
    image: logisticsMobile,
    accent: "project-ink",
    tags: ["React Native", "Maps", "Geolocation", "Node.js"],
    status: "Private client project",
    mobile: true,
  },
  {
    title: "AI Website Factory",
    type: "Automation system",
    description:
      "A Python and LLM-powered content pipeline designed to turn structured inputs into distinct, SEO-ready micro-sites at scale.",
    accent: "project-acid",
    tags: ["Python", "OpenAI", "Automation", "SEO"],
    status: "In development",
    flow: ["structured data", "AI workflow", "live sites"],
  },
  {
    title: "Vistacloud",
    type: "Full-stack web platform",
    description:
      "A production web experience delivered from interface architecture through API integration, with a focus on clarity and performance.",
    image: vista,
    href: "https://vistacloud.in/",
    accent: "project-cream",
    tags: ["React", "API Integration", "Responsive UI"],
  },
  {
    title: "Novel Aquatech",
    type: "Business website",
    description:
      "A responsive company platform supported by operational tools for content, users, administration, and logistics workflows.",
    image: novel,
    href: "https://novelaquatech.com/",
    accent: "project-mint",
    tags: ["React", "Node.js", "Admin Tools"],
  },
  {
    title: "Streamfog",
    type: "Product website",
    description:
      "A polished, responsive product site that makes a technical offering easy to understand and explore across screen sizes.",
    image: streamfog,
    href: "https://streamfog.com/",
    accent: "project-lilac",
    tags: ["React", "UX", "Responsive Design"],
  },
  {
    title: "Logistics Locator",
    type: "Operations tool",
    description:
      "A logistics-focused interface built to make user and delivery information easier for teams to locate and manage.",
    image: novelAdmin,
    href: "https://novelaquatech.com/logistics/",
    accent: "project-blue",
    tags: ["React", "Maps", "Operations"],
  },
  {
    title: "Alluvie",
    type: "Brand website",
    description:
      "A clean, accessible web presence developed to communicate the organization’s work with warmth and visual clarity.",
    image: alluvie,
    href: "https://alluvie.com/",
    accent: "project-rose",
    tags: ["Frontend", "CMS", "Responsive UI"],
  },
  {
    title: "El Camí de la Solidaritat",
    type: "Community platform",
    description:
      "A responsive site supporting a community-led initiative, with clear content hierarchy and accessible navigation.",
    image: elcami,
    href: "https://elcamidelasolidaritat.org/",
    accent: "project-teal",
    tags: ["Frontend", "WordPress", "Accessibility"],
  },
];

const skills = [
  {
    number: "01",
    title: "Frontend & mobile",
    body: "Responsive products that stay clear across devices, with interaction and accessibility considered from the first component.",
    items: ["React", "TypeScript", "React Native", "Expo", "Redux", "HTML / CSS"],
  },
  {
    number: "02",
    title: "Backend & data",
    body: "Reliable APIs and data flows for authentication, payments, inventory, dashboards, and day-to-day business operations.",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "REST APIs"],
  },
  {
    number: "03",
    title: "Delivery & automation",
    body: "Practical delivery from requirements to deployment, including testing, cloud workflows, and AI-assisted product features.",
    items: ["Git / GitHub", "TDD", "Docker", "Azure / AWS", "Python", "OpenAI APIs"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Somdotta Sarkar — home">
          SS<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="mailto:somdottas07@gmail.com">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </a>
      </header>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Berlin-based · Available for opportunities</p>
          <h1>
            I build digital products that feel <em>clear, capable,</em> and human.
          </h1>
          <p className="hero-intro">
            I&apos;m Somdotta Sarkar, a full-stack and mobile developer working across React,
            React Native, Node.js, and product-focused AI automation.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <span>↓</span></a>
            <a className="text-link" href={resume} target="_blank" rel="noreferrer">
              View résumé <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="portrait-wrap" aria-label="Portrait of Somdotta Sarkar">
          <div className="portrait-halo" />
          <img src={somdotta} alt="Somdotta Sarkar" />
          <div className="portrait-note">
            <strong>10+ years</strong>
            <span>across technology &amp; education</span>
          </div>
        </div>
      </section>

      <section className="ticker" aria-label="Core skills">
        <div className="ticker-track">
          <div className="ticker-group">
            <span>React</span><i>✦</i><span>React Native</span><i>✦</i><span>TypeScript</span>
            <i>✦</i><span>Node.js</span><i>✦</i><span>PostgreSQL</span><i>✦</i>
            <span>Product Development</span><i>✦</i>
          </div>
          <div className="ticker-group" aria-hidden="true">
            <span>React</span><i>✦</i><span>React Native</span><i>✦</i><span>TypeScript</span>
            <i>✦</i><span>Node.js</span><i>✦</i><span>PostgreSQL</span><i>✦</i>
            <span>Product Development</span><i>✦</i>
          </div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div>
            <p className="kicker">Selected work · 11 projects</p>
            <h2>Products built for the <em>real world.</em></h2>
          </div>
          <p>
            Mobile apps, business platforms, and customer-facing experiences—built from
            responsive interface through backend integration.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.accent}`} key={project.title}>
              <div className={`project-image ${project.mobile ? "project-mobile" : ""}`}>
                {project.image ? (
                  <img src={project.image} alt={`${project.title} interface`} loading={index > 1 ? "lazy" : "eager"} />
                ) : project.flow ? (
                  <div className="factory-visual" aria-label="Automation pipeline illustration">
                    <span>{project.flow[0]}</span><b>→</b><span>{project.flow[1]}</span><b>→</b><span>{project.flow[2]}</span>
                  </div>
                ) : (
                  <span />
                )}
              </div>
              <div className="project-body">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <span className="project-description">{project.description}</span>
                <ul className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Visit project <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="case-label">{project.status}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div className="about-title">
            <p className="kicker">About me</p>
            <h2>A developer who brings an educator&apos;s clarity to complex products.</h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              I build full-stack web and mobile products—from responsive interfaces to APIs,
              authentication, payments, and data models.
            </p>
            <p>
              Before moving fully into software, I spent years teaching. That experience still
              shapes how I work: I ask careful questions, explain decisions clearly, and stay
              patient when a difficult problem needs to be untangled.
            </p>
            <p>
              Today I work mainly with React, React Native, Node.js, PostgreSQL, MongoDB, and
              practical AI automation. I&apos;m based in Berlin and open to frontend, full-stack,
              mobile, and product-focused collaborations.
            </p>
            <div className="about-links">
              <a href="mailto:somdottas07@gmail.com">Email me ↗</a>
              <a href="https://www.linkedin.com/in/somdottasarkar/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href="https://github.com/Somdotta07" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
          <div className="about-stats">
            <article><strong>4+</strong><span>years building software</span></article>
            <article><strong>8+</strong><span>years teaching &amp; mentoring</span></article>
            <article><strong>11</strong><span>featured product builds</span></article>
          </div>
        </div>
      </section>

      <section className="section shell" id="skills">
        <div className="section-heading skills-heading">
          <div>
            <p className="kicker">Capabilities</p>
            <h2>From idea to a product people can <em>use.</em></h2>
          </div>
          <p>I contribute across the stack while keeping the user experience and business goal in view.</p>
        </div>
        <div className="skills-list">
          {skills.map((skill) => (
            <article className="skill-row" key={skill.number}>
              <span className="skill-number">{skill.number}</span>
              <div>
                <h3>{skill.title}</h3>
                <p>{skill.body}</p>
              </div>
              <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="shell">
          <div className="section-heading process-heading">
            <div><p className="kicker">How I work</p><h2>Practical, collaborative, and accountable.</h2></div>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Understand</h3><p>Clarify the user, the business need, and what success should look like.</p></article>
            <article><span>02</span><h3>Shape</h3><p>Turn requirements into a simple product flow and a maintainable technical plan.</p></article>
            <article><span>03</span><h3>Build</h3><p>Deliver in visible increments, test the risky paths, and communicate trade-offs early.</p></article>
            <article><span>04</span><h3>Improve</h3><p>Use feedback and real behavior to refine performance, usability, and reliability.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell recommendations" aria-labelledby="recommendations-title">
        <div className="section-heading">
          <div><p className="kicker">Kind words</p><h2 id="recommendations-title">Trusted by the people I build with.</h2></div>
        </div>
        <div className="quote-grid">
          <blockquote>
            <p>“Somdotta is one of the best teammates I have worked with. She is a thoughtful listener, a fast learner, generous with help, and deeply committed to her responsibilities.”</p>
            <footer><img src={shahier} alt="Shahier Nashaat" /><span><strong>Shahier Nashaat</strong>Teammate</span></footer>
          </blockquote>
          <blockquote>
            <p>“Her technical skills and problem-solving always impressed me. She brings creativity to her code and a consistently positive, professional attitude to the team.”</p>
            <footer><img src={chim} alt="Chimwewme Sinyinza" /><span><strong>Chimwewme Sinyinza</strong>Collaborator</span></footer>
          </blockquote>
        </div>
      </section>

      <footer className="contact-footer" id="contact">
        <div className="shell footer-inner">
          <p>Have a product idea or a role that fits?</p>
          <a href="mailto:somdottas07@gmail.com">Let&apos;s build something useful. <span>↗</span></a>
          <div className="contact-card">
            <span>For roles, collaborations, and freelance projects</span>
            <a href="mailto:somdottas07@gmail.com">somdottas07@gmail.com</a>
          </div>
          <div className="footer-meta">
            <span>© 2026 Somdotta Sarkar · Berlin, Germany</span>
            <div>
              <a href="https://www.linkedin.com/in/somdottasarkar/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/Somdotta07" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://medium.com/@jhilick.s" target="_blank" rel="noreferrer">Medium</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
