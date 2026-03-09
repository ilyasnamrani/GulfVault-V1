import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Database setup
  const db = new Database("gulfvault.db");
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      whatsapp TEXT NOT NULL,
      country TEXT NOT NULL,
      capital_range TEXT NOT NULL,
      objective TEXT NOT NULL,
      timeline TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  app.use(express.json());

  // Rate limiting for form submission
  const leadLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 submissions per window
    message: { error: "Too many submissions. Please try again later." },
    standardHeaders: true,
    legacyHeaders: false,
  });

  // API Routes
  app.post("/api/leads", leadLimiter, (req, res) => {
    const { name, email, whatsapp, country, capitalRange, objective, timeline } = req.body;

    if (!name || !email || !whatsapp || !country || !capitalRange || !objective || !timeline) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const stmt = db.prepare(`
        INSERT INTO leads (name, email, whatsapp, country, capital_range, objective, timeline)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `);
      stmt.run(name, email, whatsapp, country, capitalRange, objective, timeline);

      // Mock Notification Service
      console.log(`[Notification] New Qualified Lead: ${name} (${email}) - Contact via WhatsApp: ${whatsapp}`);

      res.status(201).json({ message: "Submission Successful / Under Review" });
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`GulfVault Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
