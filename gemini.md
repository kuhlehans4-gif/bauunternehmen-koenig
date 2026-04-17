# 📜 gemini.md — Project Constitution

> **Project:** Tim Seite
> **Created:** 2026-04-17
> **Last Updated:** 2026-04-17
> **Status:** 🔴 Awaiting Discovery

---

## 1. Data Schema

### Input Shape (Design Tokens & Content)

```json
{
  "brand": {
    "name": "Bauunternehmen König",
    "tagline": "Premium Bauqualität für höchste Ansprüche",
    "colors": {
      "primary": "#D4AF37", // Gold accent from logo
      "secondary": "#000000", // Black
      "neutral": "#FFFFFF"   // White
    }
  },
  "sections": [
    { "id": "hero", "type": "Hero", "content": "..." },
    { "id": "services", "type": "ServiceGrid", "content": ["Hochbau", "Tiefbau", "Sanierung"] },
    { "id": "projects", "type": "Gallery", "content": "..." },
    { "id": "about", "type": "TextContent", "content": "..." },
    { "id": "contact", "type": "Form", "content": "..." }
  ]
}
```

### Output Shape (Site Structure)

```json
{
  "project_type": "Vite + React + Tailwind CSS",
  "deployment": "Vercel",
  "pages": ["index.html"],
  "components": ["Navbar", "Hero", "Services", "Portfolio", "Contact", "Footer"]
}
```

---

## 2. Behavioral Rules

1.  **Language**: All public content MUST be in German (Deutsch).
2.  **Tone**: Professional, high-end, and reliable (Bau-Vokabular).
3.  **Visuals**: Use the provided logos. Backgrounds should be clean (white/black) with gold accents.
4.  **No Placeholders**: Use `generate_image` for realistic construction project visuals instead of generic placeholders.
5.  **Performance**: Optimize all images and use semantic HTML for SEO.

---

## 3. Architectural Invariants

- **3-Layer Architecture:** Architecture (SOPs) → Navigation (Routing) → Tools (Execution)
- **Data-First:** No code is written before schemas are confirmed
- **Self-Annealing:** Every error triggers Analyze → Patch → Test → Update cycle
- **Deterministic Tools:** Business logic lives in Python scripts, never in LLM reasoning

---

## 4. Integrations

_To be defined after Discovery Question #2 is answered._

---

## 5. Maintenance Log

_Project not yet deployed._
