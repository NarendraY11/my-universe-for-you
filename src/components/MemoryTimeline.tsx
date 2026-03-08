import { motion } from "framer-motion";

const timeline = [
  { year: "2021", title: "The Beginning", text: "July 3rd — the day everything changed. The moment I realized life feels different with you in it." },
  { year: "First Long Call", title: "5 Minutes?", text: "The call that was supposed to last 5 minutes… but never really ended." },
  { year: "First Fight", title: "The Realization", text: "The fight where I realized losing you would hurt more than anything." },
  { year: "Today", title: "Still Falling", text: "Still falling for you. Every single day." },
];

const MemoryTimeline = () => (
  <div className="relative">
    {/* Vertical line */}
    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

    <div className="space-y-8">
      {timeline.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="flex gap-6 items-start"
        >
          {/* Dot */}
          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center shrink-0 mt-1">
            <div className="w-3 h-3 rounded-full bg-primary" />
          </div>

          <div>
            <p className="text-xs text-primary font-body uppercase tracking-widest mb-1">{item.year}</p>
            <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default MemoryTimeline;
