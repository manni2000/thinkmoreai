type ServiceKind = "ai-products" | "web-mobile" | "automation" | "data-growth";

const sceneName: Record<ServiceKind, string> = {
  "ai-products": "CONTEXT / RESPONSE",
  "web-mobile": "INTERFACE / APPLICATION",
  automation: "TRIGGER / OUTCOME",
  "data-growth": "SIGNAL / DECISION",
};

export default function ServiceScene({ kind }: { kind: ServiceKind }) {
  return <div className={`service-scene service-scene--${kind}`} aria-hidden="true">
    <div className="service-scene__grid" />
    <div className="service-scene__top"><span>THINKMOREAI / SYSTEM STUDY</span><span>{sceneName[kind]}</span></div>
    {kind === "ai-products" && <div className="service-ai">
      <div className="service-ai__source"><small>01 / SOURCE</small><strong>KNOWLEDGE</strong><span/><span/><span/></div>
      <div className="service-ai__line service-ai__line--left"/>
      <div className="service-ai__engine"><span className="service-ai__engine-outline"/><small>02 / CONTEXT</small><b>AI</b><em>REASONING LAYER</em></div>
      <div className="service-ai__line service-ai__line--right"/>
      <div className="service-ai__answer"><small>03 / RESPONSE</small><strong>USEFUL ACTION</strong><span>ANSWER</span><span>VERIFY</span><span>HAND OFF</span></div>
    </div>}
    {kind === "web-mobile" && <div className="service-product">
      <div className="service-product__browser"><div className="service-product__chrome"><span/><span/><span/><b>PRODUCT / WEB</b></div><div className="service-product__ui"><aside><i/><i/><i/><i/></aside><div className="service-product__content"><small>YOUR WORKSPACE</small><strong>Clear paths.<br/>Sound systems.</strong><div className="service-product__tiles"><span/><span/><span/></div><div className="service-product__rows"><i/><i/><i/></div></div></div></div>
      <div className="service-product__phone"><div className="service-product__phone-top"/><small>PRODUCT / MOBILE</small><strong>One system.<br/>Every screen.</strong><span/><span/><span/></div>
      <span className="service-product__orbit">DESIGN ↔ ENGINEERING</span>
    </div>}
    {kind === "automation" && <div className="service-automation"><div className="service-automation__flow"><div className="service-automation__wire"/><div className="service-automation__pulse"/>{["TRIGGER", "CHECK", "ROUTE", "DONE"].map((label,index)=><div className="service-automation__node" key={label}><span>0{index+1}</span><i/><strong>{label}</strong></div>)}</div><div className="service-automation__console"><div><span>WORKFLOW / STATUS</span><span>ACTIVE</span></div><div><span>EVENT RECEIVED</span><b>✓</b></div><div><span>RULES VALIDATED</span><b>✓</b></div><div><span>NEXT OWNER NOTIFIED</span><b className="service-automation__blink">→</b></div></div></div>}
    {kind === "data-growth" && <div className="service-data"><div className="service-data__heading"><small>DECISION VIEW / PATTERN STUDY</small><strong>Find the pattern.<br/>Choose the next move.</strong></div><div className="service-data__chart"><div className="service-data__bars">{[38,52,46,64,58,73,67,88].map((height,index)=><span key={index} style={{height:`${height}%`,animationDelay:`${index*95}ms`}}/>)}</div><svg viewBox="0 0 440 160" preserveAspectRatio="none" role="presentation"><path className="service-data__trend" d="M0 130 C42 120 65 108 94 115 S150 68 187 83 S239 67 275 72 S331 30 368 43 S409 18 440 15"/></svg></div><div className="service-data__legend"><span><i/> SIGNAL</span><span><i/> PATTERN</span><span><i/> DECISION</span></div></div>}
    <div className="service-scene__bottom"><span>INPUT → DESIGN → DELIVERY</span><span>0{Object.keys(sceneName).indexOf(kind)+1} / 04</span></div>
  </div>;
}
