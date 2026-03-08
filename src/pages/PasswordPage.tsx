import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import StarBackground from "../components/StarBackground";

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase().trim() === "babu" || password.toLowerCase().trim() === "lolo") {
      navigate("/world");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center cosmic-gradient relative px-4">
      <StarBackground />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md text-center"
      >
        <div className="card-romantic glow-box p-8 space-y-6">
          <Lock className="w-10 h-10 text-primary mx-auto" />
          <h1 className="text-3xl font-display text-foreground">Private World</h1>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            This place is not for everyone.<br /><br />
            Only one girl in the universe has the key to enter this world.
          </p>
          <p className="text-xs text-primary/70 font-body italic">
            Hint: The name I call you when I miss you the most.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the secret word..."
              className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground font-body text-center focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-muted-foreground/50"
            />
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-destructive text-sm font-body"
              >
                That's not it… try again ❤️
              </motion.p>
            )}
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-medium py-3 rounded-lg hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              🔓 Unlock
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default PasswordPage;
