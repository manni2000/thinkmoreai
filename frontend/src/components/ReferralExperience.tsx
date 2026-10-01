import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react";

const referralEmail = "info@thinkmoreai.com";
const whatsappNumber = "919608826629";
const whatsappMessage = encodeURIComponent("Hi ThinkMoreAI, I would like to introduce a project for your referral program. Here is what the client needs:");
const emailSubject = encodeURIComponent("Project introduction for the ThinkMoreAI referral program");
const emailBody = encodeURIComponent("Hi ThinkMoreAI,\n\nI would like to introduce a project.\n\nClient or company:\nWhat they need:\nEstimated project value (if known):\nMy name and contact details:\n\nThank you.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const emailUrl = `mailto:${referralEmail}?subject=${emailSubject}&body=${emailBody}`;

const money = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
const exampleValues = [50000, 100000, 500000];

const steps = [
  { number: "01", title: "Make the introduction", description: "Share the project and a way to contact you. A useful introduction is enough to start the conversation." },
  { number: "02", title: "We scope the work", description: "Our team discusses the requirements, agrees the project scope, and handles design and delivery." },
  { number: "03", title: "Receive your share", description: "If the project goes ahead, your referral commission is 10% of its value, paid after the first client payment." },
];

const projectTypes = [
  ["AI PRODUCTS", "Assistants, intelligent features, and applied AI workflows"],
  ["SAAS & APPS", "Web platforms, mobile products, and customer experiences"],
  ["AUTOMATION", "Connected tools, operations, and integration projects"],
  ["DIGITAL BUILDS", "Websites, commerce experiences, and custom software"],
] as const;

export default function ReferralExperience() {
  const [projectValue, setProjectValue] = useState(100000);
  const safeValue = Math.max(0, Number.isFinite(projectValue) ? projectValue : 0);
  const commission = Math.round(safeValue * .1);

  return <main className="referral-page">
    <section className="referral-hero" aria-labelledby="referral-title">
      <div className="referral-hero__grid" aria-hidden="true" />
      <div className="studio-container referral-hero__inner">
        <div className="referral-hero__top"><span className="studio-kicker"><span className="signal-dot" /> THINKMOREAI / REFERRAL PROGRAM</span><span>PARTNERSHIPS / 001</span></div>
        <div className="referral-hero__layout">
          <div className="referral-hero__copy">
            <span className="referral-overline">A GOOD CONNECTION CAN START SOMETHING BIG</span>
            <h1 id="referral-title">THE RIGHT<br/>INTRODUCTION<br/><em>HAS VALUE.</em></h1>
            <p>Know someone planning an AI product, SaaS platform, app, or automation project? Introduce them to ThinkMoreAI. If the project moves ahead, you earn a 10% referral commission.</p>
            <div className="referral-hero__actions"><a className="studio-button studio-button--light" href="#refer">Make an introduction <ArrowUpRight size={18}/></a><a className="studio-text-link" href="#how-it-works">How it works <ArrowDown size={16}/></a></div>
          </div>
          <div className="referral-hero__visual" aria-label="10 percent referral commission">
            <div className="referral-hero__visual-top"><span>PARTNER EQUATION</span><span>001 — 003</span></div>
            <div className="referral-hero__rate"><span>10</span><sup>%</sup></div>
            <div className="referral-hero__visual-bottom"><strong>YOUR SHARE OF A<br/>PROJECT YOU INTRODUCE.</strong><span>INTRODUCTION<br/>→ PROJECT<br/>→ COMMISSION</span></div>
            <span className="referral-hero__visual-corner referral-hero__visual-corner--one" aria-hidden="true"/><span className="referral-hero__visual-corner referral-hero__visual-corner--two" aria-hidden="true"/>
          </div>
        </div>
        <div className="referral-hero__rail"><span>01 / SHARE THE OPPORTUNITY</span><span>02 / WE BUILD THE PROJECT</span><span>03 / YOU EARN 10%</span></div>
      </div>
    </section>

    <section className="referral-calculator" aria-labelledby="referral-calculator-title">
      <div className="studio-container referral-calculator__layout">
        <div className="referral-calculator__intro"><span className="studio-kicker studio-kicker--dark">01 / THE OPPORTUNITY</span><h2 id="referral-calculator-title">See what one<br/><em>introduction</em><br/>could be worth.</h2><p>Use a project value to see an illustration of the 10% referral commission.</p><div className="referral-calculator__examples" aria-label="Example project values">{exampleValues.map(value=><button type="button" key={value} className={safeValue===value?"is-active":""} onClick={()=>setProjectValue(value)} aria-pressed={safeValue===value}>{money.format(value)}</button>)}</div></div>
        <div className="referral-calculator__panel"><div className="referral-calculator__panel-top"><span>COMMISSION ESTIMATE</span><span>10% / PROJECT VALUE</span></div><label htmlFor="referral-project-value">Estimated project value</label><div className="referral-calculator__input"><span aria-hidden="true">₹</span><input id="referral-project-value" type="number" min="0" inputMode="numeric" value={projectValue} onChange={event=>setProjectValue(event.target.value===""?0:Number(event.target.value))} /><span>INR</span></div><div className="referral-calculator__equation"><span>PROJECT VALUE</span><ArrowRight size={17} aria-hidden="true"/><span>YOUR 10% SHARE</span></div><output htmlFor="referral-project-value" aria-live="polite">{money.format(commission)}</output><p>Illustrative amount. We confirm referral eligibility and payment details with you for each opportunity.</p></div>
      </div>
    </section>

    <section id="how-it-works" className="referral-flow" aria-labelledby="referral-flow-title"><div className="studio-container"><div className="referral-flow__head"><div><span className="studio-kicker">02 / HOW IT WORKS</span><h2 id="referral-flow-title">A simple path from<br/><em>connection to commission.</em></h2></div><p>You make the connection. We take responsibility for the client conversation, project scope, and delivery.</p></div><div className="referral-flow__steps">{steps.map(step=><article key={step.number}><span className="referral-flow__number">{step.number}<i/></span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div></div></section>

    <section className="referral-fit" aria-labelledby="referral-fit-title"><div className="studio-container referral-fit__layout"><div className="referral-fit__intro"><span className="studio-kicker studio-kicker--dark">03 / THE RIGHT FIT</span><h2 id="referral-fit-title">Know a problem<br/>worth <em>solving?</em></h2><p>You don't need to sell or deliver the project. If you know someone with a serious product or technology need, start the introduction and we'll discuss fit.</p><div className="referral-fit__note"><Check size={17}/><span>Open to individuals, freelancers, and agency partners.</span></div></div><div className="referral-fit__list">{projectTypes.map(([title,description],index)=><div key={title}><span>0{index+1}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={17} aria-hidden="true"/></div>)}</div></div></section>

    <section id="refer" className="referral-invite" aria-labelledby="referral-invite-title"><div className="studio-container"><div className="referral-invite__frame"><div className="referral-invite__meta"><span>YOUR NEXT INTRODUCTION</span><span>START HERE / 004</span></div><div className="referral-invite__body"><div><span className="studio-kicker"><span className="signal-dot"/> READY WHEN YOU ARE</span><h2 id="referral-invite-title">MAKE THE<br/><em>CONNECTION.</em></h2><p>Tell us who needs help and what they want to build. We'll take it from there.</p></div><div className="referral-invite__actions"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="studio-button studio-button--light"><MessageCircle size={18}/> Refer on WhatsApp <ArrowUpRight size={18}/></a><a href={emailUrl} className="referral-invite__email"><Mail size={18}/> Refer by email <ArrowUpRight size={17}/></a><span>DIRECT CONTACT / {referralEmail}</span></div></div><div className="referral-invite__bottom"><span>10% REFERRAL COMMISSION</span><span>PAID AFTER FIRST CLIENT PAYMENT</span><span>DELIVERY HANDLED BY THINKMOREAI</span></div></div></div></section>
  </main>;
}
