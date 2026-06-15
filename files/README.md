# Solar Punch Studio — Website

Clean static site. Zero backend dependencies. Fully owned.

## Stack
- Pure HTML / CSS / JS
- No build step required
- Hosted on Netlify
- Managed via Claude Code + GitHub

## File Structure
```
solar-punch-studio/
├── index.html        # Home
├── services.html     # Services + pricing
├── contact.html      # Contact form (Netlify Forms)
├── portfolio.html    # Portfolio / audio (add your embeds)
├── store.html        # Store (links to BeatStars)
├── booking.html      # Booking page
├── about.html        # Studio / About
├── style.css         # All styles
├── main.js           # Nav + scroll interactions
└── netlify.toml      # Netlify config
```

## Deploy to Netlify

### First Time
1. Push this folder to a GitHub repo
2. Go to netlify.com → Add new site → Import from GitHub
3. Select the repo
4. Build command: *(leave blank — no build step)*
5. Publish directory: `.`
6. Click Deploy

### Connect Your Domain
1. In Netlify: Site settings → Domain management → Add domain
2. Enter `solarpunchmusic.com`
3. Netlify gives you nameservers (e.g. `dns1.p07.nsone.net`)
4. Log into wherever domain is registered → update nameservers to Netlify's
5. SSL auto-provisions within minutes

## Contact Form
The contact form uses **Netlify Forms** — works automatically with no backend needed.
- Forms appear in Netlify dashboard → Forms
- Set up email notifications in Netlify → Forms → Settings

## Making Changes with Claude Code
```bash
# Clone
git clone https://github.com/YOUR-USERNAME/solar-punch-studio.git
cd solar-punch-studio

# Edit files, then deploy
git add .
git commit -m "Update services pricing"
git push
# Netlify auto-deploys on every push
```

## Pages Still Needed
- `portfolio.html` — add SoundCloud/YouTube embeds of your beats
- `store.html`     — embed BeatStars player or link out
- `booking.html`   — embed Calendly or use contact form
- `about.html`     — studio info, bio, gear list

## Brand Links
- Instagram: https://instagram.com/solarpunchstudio
- BeatStars:  https://beatstars.com/SolarPunchStudio
- Linktree:   https://linktr.ee/SolarPunch
- Email:      SolarPunchStudio@gmail.com
- WhatsApp:   +52 322 201 5968
