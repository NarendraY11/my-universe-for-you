import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Frown, Smile, HandHeart } from "lucide-react";

const moods = [
  {
    label: "I miss you",
    icon: Heart,
    message: "I miss you too.\nMore than words could ever say.\nEvery second without you feels incomplete.",
  },
  {
    label: "I'm sad",
    icon: Frown,
    message: "Come here.\nEven if I can't fix everything\nI will still sit with you through it.",
  },
  {
    label: "I'm happy",
    icon: Smile,
    message: "Your happiness is literally my favorite thing in the universe.\nKeep smiling, my Lolo. ✨",
  },
  {
    label: "I want a hug",
    icon: HandHeart,
    message: "Consider this a virtual hug\nthat lasts forever.\nI'm wrapping my arms around you right now. 🤗",
  },
];

const MoodButtons = () => {
  const [activeMessage, setActiveMessage] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3">
        {moods.map((mood) => (
          <button
            key={mood.label}
            onClick={() => setActiveMessage(activeMessage === mood.message ? null : mood.message)}
            className="card-romantic flex items-center gap-3 cursor-pointer text-left hover:border-primary/40 transition-all"
          >
            <mood.icon className="w-5 h-5 text-primary shrink-0" />
            <span className="text-sm font-body text-foreground">{mood.label}</span>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {activeMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="card-romantic glow-box text-center"
          >
            <p className="text-foreground font-body whitespace-pre-line leading-relaxed">{activeMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MoodButtons;
