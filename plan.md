```md
# Sprint Club — Website Plan (Next.js + Vercel)  
Denver launch · Men-only · Coach-led · Electric Lime brutalist performance aesthetic


---

## 1) Product definition

### What Sprint Club is
**Sprint Club** is a **men-only, coach-led** sprint training group launching in **Denver**. It’s designed for former high school and college athletes (and any man who wants to train speed seriously), leveraging the social/viral energy of run clubs—but focused on **high-performance sprint work**, which is hard to do alone and easier (and safer) with a group and coaches.

### The website’s job
1. **Look incredible** (brutalist, high-performance, visually striking).
2. Explain the concept in **seconds**.
3. Collect signups via a **Waitlist** (name/email/city, etc.).
4. Make sharing easy (post-signup share).
5. Stay fast and clean (high Lighthouse, great mobile).

### MVP deliverable
A single-page, scroll-based landing site with:
- Brutalist/performance visual system
- Coach-led credibility
- Denver-first positioning (without overpromising specifics)
- A functional waitlist system (stored + email confirmations)

---

## 2) Brand & visual identity system

### Brand posture
- **Serious speed** (not casual jogging)
- **Coach-led** (authority)
- **Men-only** (clear positioning)
- **Minimal fluff** (short, punchy copy)

### Look & feel
**“Track-meet brutalism”**: raw grid, bold condensed type, sharp borders, visible seams, electric lime accent, motion lines, timing marks, high contrast.

#### Color tokens (final choice)
- Base Black: `#0B0D10`
- Off-White: `#F5F1E8`
- Electric Lime (accent): `#C6FF00`
- Muted Gray: `#8A8F98`
- Panel Black (elevated): `#11141A`
Use *one accent only* (electric lime). No gradients unless subtle/noisy.

#### Typography (free + buildable now)
Use Next.js `next/font/google` (fast, reliable, no licensing friction):
- Display (condensed): **Bebas Neue** (impact, athletic, condensed)
- Body/UI: **Inter** (clean, modern)
Optional upgrade later (paid/licensed): Druk Condensed / Söhne / Neue Haas Grotesk.

#### Layout language
- 12-column grid on desktop; stacked on mobile.
- **No rounded corners** (or extremely minimal).
- Borders: 1px or 2px. Strong separation.
- Use “panel blocks” with visible seams like industrial signage.

#### Signature motifs (make it feel premium)
- Track lane lines: subtle repeating lines in backgrounds
- Timing ticks on edges of sections
- “Heat-sheet” / scoreboard-style micro UI elements (e.g., small tags like `DENVER`, `MEN ONLY`, `COACH LED`)
- Noise overlay texture (very subtle)

---

## 3) Core site architecture

### Pages (v1)
- `/` Home (single scroll, high impact)
- `/privacy` Privacy Policy
- `/terms` Terms + Liability/Assumption of Risk language (basic, non-legal-advice template)

### No login, no dashboard (v1)
Admin happens in provider UI (Vercel Postgres viewer, or a lightweight table viewer later).

---

## 4) Homepage wireframe + section specs (implementation-ready)

### Global header (minimal)
- Left: `SPRINT CLUB`
- Right: `JOIN WAITLIST` (primary button)
- Optional: small tag under logo: `DENVER · MEN ONLY · COACH LED`

Header behavior:
- Sticky after scroll 80px
- Brutalist border bottom
- Background becomes slightly opaque black on scroll

---

### 4.1 Hero (Above fold) — “hit hard”
**Layout**
- Left: Typographic punch
- Right: Brutalist panel with “Launch intel” and inline form  
On mobile: stack headline → form panel.

**Hero content (copy)**
- Eyebrow tags (small, uppercase, spaced):
  - `DENVER LAUNCH`
  - `MEN ONLY`
  - `COACH LED`
- H1: **SPRINT CLUB**
- Subhead:
  - “Coach-led sprint sessions for men. Built for ex-athletes. Open to any man willing to train.”
- Micro line:
  - “Speed is hard to train alone. We make it structured, social, and legit.”

**Primary CTA**
- Button: `JOIN THE WAITLIST`
- Secondary text link: `SEE WHAT A SESSION LOOKS LIKE ↓`

**Hero background**
- Black base, faint grid overlay, animated motion lines (subtle)
- A “starting blocks” abstract SVG or kinetic stripe graphic (no assets required initially)

**Inline signup form (in hero panel)**
Fields (MVP):
- First name (required)
- Email (required)
- City (required, default value prefilled: `Denver`)
Optional (toggle “More”):
- Instagram handle (optional)
- Athlete background (dropdown): `Ex-HS`, `Ex-College`, `Other`, `Prefer not`
Checkbox:
- “Text me launch updates” (reveals phone input; optional)

Form states:
- Idle → Loading → Success (panel morph)
Success panel includes:
- “You’re on the list.”
- Share row: `Copy link` + `Share on X` + `Share on IG (copy caption)`
- Optional: “Invite 2 friends to get early access” (v2 logic, but can still message it now)

---

### 4.2 Proof strip (credibility in 1 second)
Horizontal strip with 4 brutal tags/cards:
- `COACH-LED SESSIONS`
- `TIMED REPS + FULL RECOVERY`
- `ACCELERATION · TOP SPEED · ENDURANCE`
- `DENVER STARTING FIRST`

Design:
- Each item is a bordered cell in a single row (wrap on mobile)
- Lime accent appears as a small corner notch or tick mark

---

### 4.3 The problem (run club energy, sprint problem)
Split section (left heavy type, right bullets)

Left headline:
- “Sprinting alone feels weird.”
Right bullets:
- “Hard to measure effort without timing.”
- “Hard to stay honest with rest and intensity.”
- “Hard to feel safe going full speed.”
- “Hard to keep showing up.”

End with:
- “Sprint Club fixes all of that.”

---

### 4.4 What Sprint Club is (tight definition)
A brutal “definition panel” like a spec sheet:

- Title: “THE FORMAT”
- Rows:
  - `WHO:` “Men. Former athletes welcome. Anyone willing to train.”
  - `WHAT:` “Coach-led sprint sessions focused on speed development.”
  - `WHERE:` “Denver tracks (announced to members).”
  - `WHEN:` “Weekly sessions (launch schedule announced via waitlist).”
  - `VIBE:` “Performance-first. Supportive. No egos.”

Add small disclaimer line:
- “We progress intelligently. Returning from injury? You can scale.”

---

### 4.5 Session flow (make it concrete)
Use a bold numbered grid.

Heading:
- “WHAT A SESSION LOOKS LIKE”

Steps:
1. Warm-up + tissue prep (10–15 min)
2. Sprint drills + mechanics (10 min)
3. Main sets (accel / top speed / speed endurance)
4. Full recovery (we enforce it)
5. Optional finisher + cooldown

Add a collapsible “Sample Session” (accordion):
- Warm-up: mobility + skips
- Accel: `6×20m` (2–3 min rest)
- Top speed: `4× fly 10` (full recovery)
- Endurance: `2×120m` (6–8 min rest)
- Cooldown: walk + stretch

Design:
- Each step is a bordered panel with huge numerals
- Lime appears on the numerals + divider ticks

---

### 4.6 Coaches (anchor coach-led authority)
Section title:
- “COACH-LED BY SPEED COACHES”

Cards (3 placeholders, easily replaceable later):
- Coach 1: Name, credential highlights, specialty (accel/top speed)
- Coach 2: Name, credential highlights, specialty (mechanics)
- Coach 3 (optional): Name, credential highlights, specialty (return-to-speed)

Card format:
- Big last name (brutalist)
- Two bullet lines for credibility:
  - “Former [role/team]” (placeholder)
  - “Specializes in [X]”
- A short 1-line approach statement:
  - “Technique-first. Intensity earned.”

Note: keep credentials factual once you have them. For MVP, label as “Sprint Club Coaching Team” with placeholders.

---

### 4.7 Who it’s for (men-only clarity + positioning)
Heading:
- “WHO THIS IS FOR”

Three columns:
- “Ex-athletes” — “Train speed like you used to.”
- “Performance-minded men” — “Speed as a skill.”
- “New to sprinting” — “If you respect the work, you’re welcome.”

Men-only line (clear, direct, not apologetic):
- “Sprint Club is **men-only** at launch.”

Optional softer footer:
- “Future expansions may change. Right now we’re building the strongest men’s sprint community in Denver.”

---

### 4.8 Denver launch block (local + hype)
This section should feel like a “drop” announcement without giving details you don’t have.

- Title: “DENVER — FIRST UP”
- Copy:
  - “We’re launching sessions in Denver first. Join the waitlist and you’ll get first access to schedule + location drops.”
- Mini-form (email only) for people who skipped hero
- Add “Drop your neighborhood” optional field (text)

Design:
- Background: lane lines + small coordinate-style decoration (fake coordinates are risky; instead use “DENVER // MILE HIGH” tag)
- Lime line slicing through section

---

### 4.9 FAQ (accordion)
Starter questions:
- “Do I need to be fast already?”
- “Is it really men-only?”
- “What if I’m coming back from injury?”
- “Do you time reps?”
- “Where do you meet?”
- “What should I bring?”
- “Is there a membership cost?”

Tone: direct, confident, coach-led.

---

### 4.10 Final CTA (full-width hammer)
- Big: “READY TO RUN FAST AGAIN?”
- Sub: “Get on the Denver list. We’ll send the first session drop.”
- Full form again (same component)
- Success state encourages sharing

---

### 4.11 Footer
- Sprint Club wordmark text
- Links: Privacy, Terms
- Contact email (placeholder `hello@sprintclub.run` or similar)
- Social: IG handle placeholder

---

## 5) Visual “wow” details (must-have polish)

### 5.1 Grid overlay (subtle)
Add an always-on faint grid overlay (CSS background) at 3–6% opacity.

### 5.2 Noise texture
Add a tiny tiled noise png (or CSS noise) at very low opacity to remove flatness.

### 5.3 Brutalist button behavior
- Default: black background, off-white text, 2px border
- Hover: invert + offset shadow “jumps” down-right
- Active: compress (translate) to feel tactile

### 5.4 Motion (Framer Motion, minimal but sharp)
Entrance:
- Hero headline stagger (fast, 180–240ms per line)
- Panels slide in 8–12px + blur-to-sharp
Scroll:
- Lane line parallax (very subtle)
Respect:
- `prefers-reduced-motion` disables these

---

## 6) Waitlist system (functional spec)

### Required form behavior
- Client validation + server validation
- Success state persists (if user refreshes within session, keep “success” using localStorage)

### Fields (final)
Required:
- `firstName`
- `email`
- `city` (default “Denver”)
Optional:
- `instagram`
- `athleteBackground` enum: `ex_hs | ex_college | other | prefer_not`
- `smsOptIn` boolean
- `phone` (only if smsOptIn checked)
Metadata:
- `source` (hero | denver_block | footer)
- `createdAt`
- `ipHash` (optional)
- `userAgent` (optional)

### Spam protection
- Honeypot hidden field `company` (must be empty)
- Rate limit per IP (Upstash Redis or Vercel KV)
- Optional Turnstile (add if bots become real)

### Data storage (recommended)
- **Vercel Postgres** + **Drizzle ORM**
This keeps it “real product” and clean on Vercel.

### Email (recommended)
- **Resend**
On signup:
- Email to user: “You’re on the Sprint Club Denver list”
- Email to admin: New signup info

---

## 7) Tech stack & implementation choices

### Frontend
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (only as a base; restyle heavily)
- Framer Motion for animations
- `next/font/google` (Bebas Neue + Inter)

### Backend
- Route handler: `POST /api/waitlist`
- Drizzle schema + migrations
- Optional: server actions later

### Analytics (simple + clean)
Pick one:
- Vercel Analytics + Speed Insights (easy)
- Plausible (privacy-friendly)
Track events:
- `waitlist_submit`
- `waitlist_success`
- `waitlist_error`
- `cta_click_join_waitlist`
- `scroll_50`, `scroll_90`

---

## 8) File structure (what the coding agent should generate)

```

app/
layout.tsx
page.tsx
privacy/page.tsx
terms/page.tsx
api/
waitlist/route.ts

components/
nav/Nav.tsx
hero/Hero.tsx
sections/ProofStrip.tsx
sections/ProblemSplit.tsx
sections/FormatSpec.tsx
sections/SessionFlow.tsx
sections/Coaches.tsx
sections/WhoItsFor.tsx
sections/DenverLaunch.tsx
sections/FAQ.tsx
sections/FinalCTA.tsx
footer/Footer.tsx
forms/WaitlistForm.tsx
ui/ (customized shadcn primitives)

content/
copy.ts
faq.ts
coaches.ts

lib/
db/
drizzle.ts
schema.ts
validators/waitlist.ts
email/resend.ts
rateLimit.ts
utils.ts

styles/
globals.css

public/
textures/noise.png
og.png
brand/ (future)

```

---

## 9) Concrete copy pack (ready-to-use)

Create `content/copy.ts` with:

### HERO
- Eyebrow tags: `["DENVER LAUNCH", "MEN ONLY", "COACH LED"]`
- H1: `SPRINT CLUB`
- Subhead: `Coach-led sprint sessions for men. Built for ex-athletes. Open to any man willing to train.`
- Micro: `Speed is hard to train alone. We make it structured, social, and legit.`
- Primary CTA: `Join the waitlist`
- Secondary CTA: `See a session`

### PROOF STRIP
- Items:
  - `Coach-led sessions`
  - `Timed reps + full recovery`
  - `Acceleration · Top speed · Endurance`
  - `Denver starting first`

### PROBLEM
- Title: `Sprinting alone feels weird.`
- Bullets:
  - `Hard to measure effort without timing.`
  - `Hard to stay honest with rest and intensity.`
  - `Hard to feel safe going full speed.`
  - `Hard to keep showing up.`
- Close: `Sprint Club fixes all of that.`

### FORMAT SPEC
- Title: `The format`
- Rows:
  - `WHO:` `Men. Former athletes welcome. Any man willing to train.`
  - `WHAT:` `Coach-led sprint sessions built for real speed development.`
  - `WHERE:` `Denver tracks (announced to members).`
  - `WHEN:` `Weekly sessions (launch schedule drops via waitlist).`
  - `VIBE:` `Performance-first. Supportive. No egos.`

### SESSION
- Title: `What a session looks like`
- Steps: as defined above

### COACHES
- Title: `Coach-led by speed coaches`
- Subtitle: `You’ll get structure, cues, and real sprint intent—without guessing alone.`

### MEN-ONLY
- Callout: `Men-only at launch.`

### DENVER
- Title: `Denver — first up`
- Copy: `Join the waitlist for first access to the session schedule + location drops.`

### FINAL CTA
- Title: `Ready to run fast again?`
- Copy: `Get on the Denver list. First session drop goes to the waitlist first.`

### FORM MICROCOPY
- Consent: `No spam. Only launch and session drops.`
- Success: `You’re on the list.`
- Share line: `Bring two friends. Speed is better together.`

---

## 10) Styling spec (Tailwind + CSS variables)

### CSS variables (in globals.css)
- `--bg`, `--fg`, `--panel`, `--muted`, `--lime`
- Border width: `--bw: 2px`
- Shadow offset: `--off: 4px`

### Core components styling rules
- Buttons: hard borders, offset shadow, invert on hover
- Inputs: 2px border, no rounding, subtle inner shadow
- Panels: 2px border + corner ticks in lime
- Headings: Bebas Neue, tight line-height, aggressive tracking

### Background patterns (CSS)
- Grid overlay using `linear-gradient`
- Lane lines using `repeating-linear-gradient`
- Noise overlay using a tiled png

---

## 11) Backend details (Drizzle schema + validation spec)

### Drizzle table: `waitlist_signups`
Columns:
- `id` uuid primary
- `createdAt` timestamp default now
- `firstName` text not null
- `email` text not null
- `city` text not null
- `instagram` text nullable
- `athleteBackground` text nullable
- `smsOptIn` boolean default false
- `phone` text nullable
- `source` text not null
- `honeypot` text nullable (or omit from DB)
Unique index:
- `email` (optional: allow duplicates but merge logic; recommended to dedupe)

### Zod validation (rules)
- firstName: 1–40 chars
- email: valid email
- city: 2–60 chars
- instagram: optional, strip leading @
- phone: optional; required if smsOptIn true

---

## 12) Deployment plan (Vercel)

1. Create GitHub repo `sprint-club-site`
2. Create Next.js app (App Router, TS, Tailwind)
3. Deploy on Vercel
4. Add Vercel Postgres
5. Add env vars:
   - `DATABASE_URL`
   - `RESEND_API_KEY`
   - `ADMIN_NOTIFY_EMAIL`
   - `UPSTASH_REDIS_REST_URL` (if rate limiting)
   - `UPSTASH_REDIS_REST_TOKEN`
6. Run Drizzle migrations
7. Verify:
   - form submission stored
   - confirmation email sent
   - admin email received
8. Add `/og.png` and confirm link previews

---

## 13) Asset brief (since you have none yet)

### Must-create (optional but highly recommended)
1. **Wordmark SVG**: `SPRINT CLUB` in a bold condensed lockup  
2. **Mark SVG**: minimal “SC” monogram or abstract bolt/wing  
3. **OG image**: 1200×630 with brutal type + lime + track texture  
4. **Noise texture**: tiny tileable png  

### If you want photography
- 6–10 high-contrast sprint shots: blocks, spike detail, lanes, torso crop, motion blur  
- Keep consistent treatment: high contrast, slightly desaturated, grain

---

## 14) Acceptance criteria (definition of done)

### Visual
- Feels like a premium performance brand within 3 seconds
- Brutalist grid/panels/borders are consistent
- Lime accent is disciplined and sharp
- Mobile feels just as designed as desktop

### Functional
- Waitlist submission works end-to-end
- User gets confirmation email (if enabled)
- Admin receives notification
- Share actions work after signup

### Performance
- Lighthouse targets:
  - Performance 90+
  - Accessibility 90+
  - Best Practices 90+
  - SEO 90+
- All animations respect reduced-motion

---

## 15) v2 upgrades (after MVP is live)
- Referral codes + leaderboard (“invite 2 friends → early access”)
- City launch pages
- Events calendar + RSVP
- Stripe membership
- “Session timer” tool page (viral utility)

---

END PLAN
```

