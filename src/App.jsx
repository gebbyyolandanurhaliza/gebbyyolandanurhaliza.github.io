import { useEffect, useState } from "react";
import {
  profile, nav, hero, stats, about, projectsSection, projects,
  experienceSection, experience, skillsSection, skills,
  educationSection, education, contact,
} from "./data";

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;
const fullName = `${profile.name.first} ${profile.name.middle} ${profile.name.last}`;

/* ------------------------------ hooks ------------------------------ */
function useTyping(words) {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [text, setText] = useState(reduce ? words[0] : "");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[i % words.length];
    let delay = del ? 35 : 75;
    let next;
    if (!del && text === word) {
      delay = 1600;
      next = () => setDel(true);
    } else if (del && text === "") {
      delay = 300;
      next = () => {
        setDel(false);
        setI((n) => n + 1);
      };
    } else {
      next = () => setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }
    const id = setTimeout(next, delay);
    return () => clearTimeout(id);
  }, [text, del, i, words, reduce]);

  return text;
}

/* --------------------------- small pieces --------------------------- */
function Typed({ words }) {
  const text = useTyping(words);
  return (
    <p className="typed" aria-label={words.join(", ")}>
      <span className="accent">&gt;</span> {text}
      <span className="caret" aria-hidden="true" />
    </p>
  );
}

function WindowBar({ title }) {
  return (
    <div className="window-bar">
      <i /><i /><i />
      <span>{title}</span>
    </div>
  );
}

function SectionHead({ num, eyebrow, title, t }) {
  return (
    <div className="sec-head reveal">
      <p className="eyebrow">// {num}. {t(eyebrow)}</p>
      <h2>{t(title)}</h2>
    </div>
  );
}

/* ------------------------------ sections ------------------------------ */
function Navbar({ t, lang, setLang, scrolled, open, setOpen }) {
  return (
    <nav className={`nav ${scrolled || open ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo">&lt;gyn <span>/&gt;</span></a>
        <ul className={`menu ${open ? "open" : ""}`} id="menu">
          {nav.map((n, i) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)}>
                <em>0{i + 1}.</em>{t(n.label)}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <div className="lang" role="group" aria-label="Language">
            {["id", "en"].map((l) => (
              <button key={l} type="button" className={lang === l ? "active" : ""} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="burger"
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ t }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <header className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="reveal">
            <span className="status"><i />{t(hero.status)}</span>
            <p className="prompt">~/pekanbaru <b>$</b> whoami</p>
            <h1>
              {profile.name.first} <span className="grad">{profile.name.middle}</span> {profile.name.last}
            </h1>
            <Typed words={hero.roles} />
            <p className="lead">{t(hero.lead)}</p>
            <div className="actions">
              <a href="#projects" className="btn btn-primary">{t(hero.ctaProjects)} →</a>
              <a href="#contact" className="btn btn-ghost">{t(hero.ctaContact)}</a>
              <a href={asset(profile.cv)} download className="btn btn-ghost">↓ {t(hero.ctaCv)}</a>
            </div>
            <div className="socials">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
            </div>
          </div>

          <div className="photo-wrap reveal">
            <div className="window">
              <WindowBar title="gebby.jpg" />
              <div className="photo">
                {imgOk ? (
                  <img src={asset(profile.photo)} alt={`Foto ${fullName}`} onError={() => setImgOk(false)} />
                ) : (
                  <span className="initials">GYN</span>
                )}
              </div>
            </div>
            <div className="float f1"><b>4+</b>{t(hero.yearsLabel)}</div>
            <div className="float f2 mono">{"{ web · ai · iot }"}</div>
          </div>
        </div>

        <div className="stats reveal">
          {stats.map((s) => (
            <div className="stat" key={t(s.label)}>
              <b>{t(s.value)}</b>
              <span>{t(s.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

function CodeCard({ t }) {
  const S = (v) => <span className="tk-s">"{v}"</span>;
  const arr = (xs) => (
    <>
      [{xs.map((x, i) => (
        <span key={x}>{S(x)}{i < xs.length - 1 ? ", " : ""}</span>
      ))}]
    </>
  );
  const row = (k, v, last = false) => (
    <div>{"  "}<span className="tk-p">{k}</span>: {v}{last ? "" : ","}</div>
  );
  return (
    <div className="window reveal">
      <WindowBar title="profile.js" />
      <pre className="code">
        <div><span className="tk-c">{t(about.codeComment)}</span></div>
        <div><span className="tk-k">const</span> <span className="tk-v">gebby</span> = {"{"}</div>
        {row("role", S("Programmer & Automation Engineer"))}
        {row("company", S("PT Riau Sakti United Plantations"))}
        {row("location", S(profile.location))}
        {row("focus", arr(["Web", "AI", "IoT"]))}
        {row("stack", arr(["CodeIgniter 3", "React.js", "MySQL", "PostgreSQL"]))}
        {row("education", S(t(about.codeEdu)))}
        {row("openToWork", <span className="tk-b">true</span>, true)}
        <div>{"};"}</div>
      </pre>
    </div>
  );
}

function About({ t }) {
  return (
    <section id="about">
      <div className="container">
        <SectionHead num="01" eyebrow={about.eyebrow} title={about.title} t={t} />
        <div className="about-grid">
          <div className="about-text reveal">
            {about.paragraphs.map((p, i) => <p key={i}>{t(p)}</p>)}
          </div>
          <CodeCard t={t} />
        </div>
      </div>
    </section>
  );
}

function Projects({ t }) {
  return (
    <section id="projects" className="alt">
      <div className="container">
        <SectionHead num="02" eyebrow={projectsSection.eyebrow} title={projectsSection.title} t={t} />
        <div className="proj-grid">
          {projects.map((p) => (
            <article key={p.category} className={`card proj reveal ${p.featured ? "featured" : ""}`}>
              <div className="proj-top">
                <span>{p.category}</span>
                {p.featured && <span className="star">★ {t(projectsSection.featured)}</span>}
              </div>
              <h3>{t(p.title)}</h3>
              <p>{t(p.desc)}</p>
              <div className="tags">
                {p.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ t }) {
  return (
    <section id="experience">
      <div className="container">
        <SectionHead num="03" eyebrow={experienceSection.eyebrow} title={experienceSection.title} t={t} />
        {experience.map((job) => (
          <article className="job" key={job.company}>
            <div className="job-meta reveal">
              <p className="period">{t(job.period)}</p>
              <h3>{t(job.role)}</h3>
              <p>{job.company}</p>
            </div>
            {job.groups ? (
              <div className="groups">
                {job.groups.map((g) => (
                  <div className="card group reveal" key={g.title}>
                    <h4>{g.title}</h4>
                    <ul className="list">
                      {g.items.map((it, i) => <li key={i}>{t(it)}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="job-summary reveal">{t(job.summary)}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills({ t }) {
  return (
    <section id="skills" className="alt">
      <div className="container">
        <SectionHead num="04" eyebrow={skillsSection.eyebrow} title={skillsSection.title} t={t} />
        <div className="skills-grid">
          {skills.map((g) => (
            <div className="card reveal" key={g.title}>
              <h3>{g.title}</h3>
              <div className="tags">
                {g.items.map((s) => <span className="tag" key={t(s)}>{t(s)}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education({ t }) {
  return (
    <section id="education">
      <div className="container">
        <SectionHead num="05" eyebrow={educationSection.eyebrow} title={educationSection.title} t={t} />
        <div className="edu-grid">
          <div className="card reveal">
            <h3>{t(education.degree)}</h3>
            <p className="muted">{t(education.school)}</p>
            <p className="gpa"><span className="grad">{t(education.gpa)}</span> <small>{t(education.gpaOf)}</small></p>
            <p className="label">{t(education.activitiesLabel)}</p>
            <ul className="list">
              {education.activities.map((a, i) => <li key={i}>{t(a)}</li>)}
            </ul>
          </div>
          <div className="edu-side">
            <div className="card reveal">
              <p className="label first">{t(education.publicationLabel)}</p>
              <p className="pub">{education.publication}</p>
            </div>
            <div className="card reveal">
              <p className="label first">{t(education.achievementsLabel)}</p>
              <ul className="list">
                {education.achievements.map((a, i) => <li key={i}>{t(a)}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ t }) {
  const lines = [
    ["--email", `mailto:${profile.email}`, profile.email],
    ["--linkedin", profile.linkedin, profile.linkedinLabel],
    ["--whatsapp", profile.whatsapp, profile.whatsappLabel],
    ["--instagram", profile.instagram, profile.instagramLabel],
  ];
  return (
    <section id="contact" className="contact alt">
      <div className="container">
        <SectionHead num="06" eyebrow={contact.eyebrow} title={contact.title} t={t} />
        <p className="contact-sub reveal">{t(contact.sub)}</p>
        <div className="window terminal reveal">
          <WindowBar title="contact.sh" />
          <div className="term-body">
            {lines.map(([flag, href, label]) => (
              <div key={flag}>
                <p className="cmd"><b>$</b> contact {flag}</p>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {label}
                </a>
              </div>
            ))}
            <p className="cmd"><b>$</b> <span className="caret" aria-hidden="true" /></p>
          </div>
        </div>
        <div className="actions center reveal">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">✉ {t(contact.ctaEmail)}</a>
          <a href={asset(profile.cv)} download className="btn btn-ghost">↓ {t(hero.ctaCv)}</a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- app -------------------------------- */
export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "id");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // teks bisa string biasa atau { id, en }
  const t = (v) => (v && typeof v === "object" && "id" in v ? v[lang] : v);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // animasi muncul saat discroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} scrolled={scrolled} open={open} setOpen={setOpen} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <footer>
        © {new Date().getFullYear()} {fullName} · {t(contact.builtWith)}
      </footer>
    </>
  );
}