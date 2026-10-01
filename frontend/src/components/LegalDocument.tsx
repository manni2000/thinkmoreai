import { ArrowUpRight, FileText, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import "@/legal.css";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

type Props = {
  kind: "privacy" | "terms";
  title: string;
  introduction: string;
  summary: readonly string[];
  sections: readonly LegalSection[];
};

export default function LegalDocument({ kind, title, introduction, summary, sections }: Props) {
  const other = kind === "privacy" ? { to: "/terms-of-service", label: "Terms of Service" } : { to: "/privacy-policy", label: "Privacy Policy" };
  return <main className="legal-page">
    <header className="legal-hero"><div className="studio-container"><div className="legal-hero__top"><span>THINKMOREAI / LEGAL</span><span>DOCUMENT 0{kind === "privacy" ? "1" : "2"} OF 02</span></div><div className="legal-hero__body"><span className="legal-eyebrow">{kind === "privacy" ? <ShieldCheck size={15}/> : <FileText size={15}/>} CLEAR TERMS. OPEN COMMUNICATION.</span><h1>{title}</h1><p>{introduction}</p><div className="legal-hero__meta"><span>Last updated <strong>1 October 2026</strong></span><span>Questions? <a href="mailto:info@thinkmoreai.com">info@thinkmoreai.com <ArrowUpRight size={13}/></a></span></div></div></div></header>
    <section className="legal-overview"><div className="studio-container legal-overview__grid"><div><span className="legal-label">AT A GLANCE / 00</span><h2>The essentials,<br/><em>up front.</em></h2></div><div className="legal-overview__items">{summary.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></div></section>
    <section className="legal-body"><div className="studio-container legal-body__grid"><aside className="legal-toc" aria-label={`${title} contents`}><span className="legal-label">IN THIS DOCUMENT</span><nav>{sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><span>{String(index + 1).padStart(2, "0")}</span>{section.title}</a>)}</nav><div className="legal-toc__help">Need a clarification?<a href="mailto:info@thinkmoreai.com">Contact us <ArrowUpRight size={15}/></a></div></aside><div className="legal-sections">{sections.map((section, index) => <section id={section.id} className="legal-section" key={section.id} aria-labelledby={`${section.id}-title`}><span className="legal-section__number">{String(index + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}</span><div><h2 id={`${section.id}-title`}>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</div></section>)}</div></div></section>
    <section className="legal-end"><div className="studio-container legal-end__grid"><div><span className="legal-label">STILL HAVE A QUESTION?</span><h2>Let's make it clear.</h2><p>For questions about this document or a specific project agreement, write to our team.</p></div><div><a className="legal-end__email" href="mailto:info@thinkmoreai.com">info@thinkmoreai.com <ArrowUpRight size={22}/></a><Link className="legal-end__other" to={other.to}>Read our {other.label} <ArrowUpRight size={16}/></Link></div></div></section>
  </main>;
}
