import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/getImages", async (req, res) => {
  const artist = req.query.artist;
  if (!artist) return res.status(400).send("Missing artist name");

  const targetUrl = `https://www.last.fm/music/${encodeURIComponent(artist)}/+images`;

  try {
    const response = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });

    const html = await response.text();

    res.set({
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "text/html; charset=UTF-8",
    });

    res.send(html);
  } catch (err) {
    res.status(500).send(`Error fetching artist page: ${err.message}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
