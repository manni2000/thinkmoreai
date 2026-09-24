import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Blocks, Braces, ScanSearch, TrendingUp } from "lucide-react";

const steps = [
  { number: "01", title: "Understand", icon: ScanSearch, description: "We map the goals, users, current workflow, constraints, and what success needs to look like.", deliverables: "Goals / users / workflows / constraints" },
  { number: "02", title: "Design", icon: Blocks, description: "We shape the experience, system architecture, information flow, and a prototype you can react to.", deliverables: "UX / architecture / prototype" },
  { number: "03", title: "Build", icon: Braces, description: "We implement, integrate, test, and demonstrate progress through practical delivery milestones.", deliverables: "Implementation / integration / validation" },
  { number: "04", title: "Improve", icon: TrendingUp, description: "We deploy, monitor, document, and iterate as real users and operational data reveal the next priority.", deliverables: "Deployment / monitoring / iteration" },
];

const Step = ({ index, onActive }: { index: number; onActive: (index: number) => void }) => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-38% 0px -38% 0px" });
  useEffect(() => { if (inView) onActive(index); }, [inView, index, onActive]);
  const step = steps[index];
  return <article ref={ref} className="flex min-h-[58vh] flex-col justify-center border-t border-white/10 py-16 first:border-t-0 lg:min-h-[54vh]"><span className="font-mono text-[10px] uppercase tracking-[.2em] text-accent">{step.number} / {step.title}</span><h3 className="mt-5 text-4xl font-medium tracking-[-.045em] text-white md:text-5xl">{step.title}</h3><p className="mt-5 max-w-lg text-base leading-8 text-white/56">{step.description}</p><p className="mt-7 font-mono text-[10px] uppercase leading-5 tracking-[.15em] text-white/32">Deliverable — {step.deliverables}</p></article>;
};

const SystemStage = ({ active }: { active: number }) => (
  <div className="relative aspect-square w-full max-w-[540px] overflow-hidden border border-white/10 bg-[#0c121a]">
    <div className="surface-grid absolute inset-0 opacity-60" />
    <div className="absolute inset-x-5 top-5 flex items-center justify-between"><span className="tech-label">System assembly</span><span className="font-mono text-[10px] text-accent">0{active+1} / 04</span></div>
    <div className="absolute inset-[17%]">
      {[0,1,2,3].map((item) => {
        const positions = ["left-0 top-[12%]","right-0 top-[12%]","left-0 bottom-[12%]","right-0 bottom-[12%]"];
        const connected = item <= active;
        return <motion.div key={item} animate={{ opacity: connected ? 1 : .22, scale: connected ? 1 : .84, x: active >= 2 ? (item%2===0?18:-18) : 0, y: active >= 2 ? (item<2?18:-18) : 0 }} transition={{ duration: .55, ease: [0.22,1,0.36,1] }} className={`absolute ${positions[item]} h-[28%] w-[28%] rounded-[25%] border ${connected?"border-accent/40 bg-accent/[.06]":"border-white/14 bg-white/[.02]"}`}><span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70"/></motion.div>;
      })}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true"><motion.path d="M20 25 L50 50 L80 25 M20 75 L50 50 L80 75" fill="none" stroke="#77e5ff" strokeWidth=".45" initial={false} animate={{ pathLength: active >= 1 ? 1 : .15, opacity: active >= 1 ? .65 : .16 }} transition={{ duration: .7 }}/></svg>
      <motion.div animate={{ scale: active >= 2 ? 1.16 : .72, opacity: active >= 1 ? 1 : .3, rotate: active >= 3 ? 45 : 0 }} transition={{ duration: .65 }} className="absolute left-1/2 top-1/2 h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 rounded-[28%] border border-accent/45 bg-[radial-gradient(circle,#77e5ff_0%,#477987_18%,#141b27_70%)] shadow-[0_0_45px_rgba(119,229,255,.22)]" />
    </div>
    <div className="absolute inset-x-5 bottom-5 h-1 overflow-hidden bg-white/5"><motion.div className="h-full bg-gradient-to-r from-accent to-violet-400" animate={{ width: `${(active+1)*25}%` }} transition={{ duration: .5 }}/></div>
  </div>
);

const Process = () => {
  const [active, setActive] = useState(0);
  return <section id="process" className="relative bg-[#080b10] py-20 md:py-28">
    <div className="container-custom">
      <div className="grid gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-20">
        <div className="lg:sticky lg:top-24 lg:flex lg:h-[calc(100vh-7rem)] lg:flex-col lg:justify-center">
          <span className="section-eyebrow">Process / from idea to system</span>
          <h2 className="mt-6 max-w-xl text-[clamp(2.3rem,4vw,4.5rem)] font-medium leading-[1.02] tracking-[-.055em] text-white">Clarity before code. Momentum after launch.</h2>
          <div className="mt-10 hidden lg:block"><SystemStage active={active}/></div>
        </div>
        <div>{steps.map((_,index)=><Step key={index} index={index} onActive={setActive}/>)}</div>
      </div>
      <div className="mt-8 lg:hidden"><SystemStage active={3}/></div>
    </div>
  </section>;
};

export default Process;
