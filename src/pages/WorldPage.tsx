import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Smile, Eye, Sparkles, ShieldHalf, Drama } from "lucide-react";
import StarBackground from "../components/StarBackground";
import FloatingHearts from "../components/FloatingHearts";
import LoveCounter from "../components/LoveCounter";
import MoodButtons from "../components/MoodButtons";
import MemoryTimeline from "../components/MemoryTimeline";

const sections = [
  { id: "letter", label: "💌 Letter" },
  { id: "reasons", label: "❤️ Why You" },
  { id: "timeline", label: "🕰 Memories" },
  { id: "mood", label: "💭 Mood" },
  { id: "wishes", label: "✨ Wishes" },
  { id: "warning", label: "😈 Warning" },
];

const reasons = [
  { icon: Smile, title: "Her Smile", text: "The kind of smile that can fix my worst day." },
  { icon: Eye, title: "Her Eyes", text: "They say things words never can." },
  { icon: Drama, title: "Her Drama", text: "A little chaos… but my favorite chaos." },
  { icon: Heart, title: "Her Soft Heart", text: "The side of you only a few people get to see." },
  { icon: ShieldHalf, title: "Her Strength", text: "You handle things most people could never survive." },
];

const wishes = [
  "Random midnight talks",
  "Traveling somewhere beautiful",
  "Teasing you until you get fake angry",
  "Laughing about stupid things",
  "Growing old together with thousands of memories",
];

const WorldPage = () => {
  const [missPopup, setMissPopup] = useState(false);
  const [secretFound, setSecretFound] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      <StarBackground />
      <FloatingHearts />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-xs font-body text-muted-foreground hover:text-primary transition-colors whitespace-nowrap px-3 py-1.5 rounded-full border border-border/50 hover:border-primary/30"
            >
              {s.label}
            </a>
          ))}
          {/* Secret heart */}
          <button
            onClick={() => setSecretFound(true)}
            className="text-xs px-2 py-1.5 text-muted-foreground/30 hover:text-primary transition-colors"
            title="?"
          >
            💜
          </button>
        </div>
      </nav>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12 space-y-24">

        {/* Love Counter */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <LoveCounter startDate="2024-01-01" />
        </motion.div>

        {/* Letter Section */}
        <section id="letter">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-romantic glow-box p-8 space-y-4"
          >
            <h2 className="text-3xl font-display text-gradient">My Strong Girl</h2>
            <div className="text-muted-foreground font-body text-sm leading-relaxed space-y-3">
              <p>My babu,</p>
              <p>That day when I saw tears in your eyes<br />something inside me broke.</p>
              <p>You try to stay strong for everyone.</p>
              <p>You hide your pain.</p>
              <p>You smile even when your heart is heavy.</p>
              <p>But I see everything.</p>
              <p className="text-foreground font-medium">
                And I want you to remember one thing:<br />
                <span className="text-gradient">You don't have to carry the world alone anymore.</span>
              </p>
            </div>
          </motion.div>
        </section>

        {/* Reasons Section */}
        <section id="reasons">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-display text-foreground text-center mb-8"
          >
            Things That Make Me <span className="text-gradient">Fall For You</span>
          </motion.h2>
          <div className="grid gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-romantic flex items-start gap-4"
              >
                <r.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-foreground text-lg">{r.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{r.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Miss Me Button */}
          <div className="mt-8 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMissPopup(true)}
              className="bg-primary/10 border border-primary/30 text-primary font-body px-6 py-3 rounded-full hover:bg-primary/20 transition-all"
            >
              Press if you miss me ❤️
            </motion.button>
            <AnimatePresence>
              {missPopup && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="card-romantic glow-box mt-4 p-6"
                >
                  <p className="text-foreground font-body text-sm leading-relaxed">
                    If you pressed this…<br /><br />
                    it means you were thinking about me.<br /><br />
                    And honestly…<br />
                    <span className="text-gradient font-medium">I was probably thinking about you too.</span>
                  </p>
                  <button
                    onClick={() => setMissPopup(false)}
                    className="mt-4 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    close ✕
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-display text-foreground text-center mb-8"
          >
            Our <span className="text-gradient">Memories</span>
          </motion.h2>
          <MemoryTimeline />
        </section>

        {/* Mood Buttons */}
        <section id="mood">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-display text-foreground text-center mb-8"
          >
            How Are You <span className="text-gradient">Feeling?</span>
          </motion.h2>
          <MoodButtons />
        </section>

        {/* Wishes */}
        <section id="wishes">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-display text-foreground text-center mb-8"
          >
            What I Want <span className="text-gradient">With You</span>
          </motion.h2>
          <div className="space-y-3">
            {wishes.map((w, i) => (
              <motion.label
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-romantic flex items-center gap-3 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-foreground font-body">{w}</span>
              </motion.label>
            ))}
          </div>
        </section>

        {/* Warning Section */}
        <section id="warning">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-romantic glow-box p-8 text-center space-y-4"
          >
            <h2 className="text-3xl font-display text-foreground">
              ⚠️ Warning About <span className="text-gradient">My Girlfriend</span>
            </h2>
            <div className="text-muted-foreground font-body text-sm leading-relaxed space-y-2">
              <p>She looks innocent…<br />but secretly she enjoys teasing me.</p>
              <p>She pretends to be calm…<br />but she can drive me crazy in seconds.</p>
              <p className="text-foreground font-medium">
                And somehow she managed to<br />
                <span className="text-gradient">completely steal my heart.</span>
              </p>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <div className="text-center py-12">
          <p className="text-muted-foreground font-body text-xs">
            Made with all my love ❤️ for my Lolo
          </p>
        </div>
      </div>

      {/* Secret Page Modal */}
      <AnimatePresence>
        {secretFound && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
            onClick={() => setSecretFound(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="card-romantic glow-box p-8 max-w-md text-center space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-display text-gradient">🌙 You Found It</h2>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                If you found this page<br />
                it means you were curious enough to explore my little universe.<br /><br />
                And honestly…<br />
                <span className="text-foreground font-medium text-gradient">that's exactly why I love you.</span>
              </p>
              <button
                onClick={() => setSecretFound(false)}
                className="text-xs text-muted-foreground hover:text-primary transition-colors mt-2"
              >
                close ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorldPage;
