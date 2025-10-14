import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// CORS da HTML može da pristupi
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Ruta za test
app.get("/", (req, res) => {
  res.send("✅ Server radi! Koristi /getImages?artist=Madonna");
});

// Glavna ruta
app.get("/getImages", async (req, res) => {
  const artist = req.query.artist;
  if (!artist) return res.status(400).send("Nema imena artista.");

  const url = `https://www.last.fm/music/${encodeURIComponent(artist)}/+images`;

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "Accept": "text/html,application/xhtml+xml",
        "Accept-Language": "en-US,en;q=0.9",
      },
    });

    const html = await response.text();

    // Vrati ceo HTML (da vidimo šta vraća)
    res.send(html);
  } catch (err) {
    res.status(500).send("Greška: " + err.message);
  }
});

app.listen(PORT, () => console.log(`Server pokrenut na portu ${PORT}`));
