import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StarBackground from "../components/StarBackground";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center cosmic-gradient relative px-4">
      <StarBackground />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center max-w-lg space-y-8"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          <Heart className="w-12 h-12 text-primary mx-auto" fill="hsl(330 90% 60%)" />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-display text-foreground leading-tight">
            A tiny universe built for one person…
            <br />
            <span className="text-gradient">My Lolo.</span>
          </h1>
          <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-sm mx-auto">
            Out of billions of people in this world<br />
            somehow the universe decided<br />
            that you should become<br />
            the most important person in my life.
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/enter")}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-medium px-8 py-4 rounded-full animate-pulse-glow transition-all"
        >
          ❤️ Enter Our World
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Landing;
