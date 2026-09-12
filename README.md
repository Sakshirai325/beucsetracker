# BEU CSE Study Coach Web App

A mobile-first, offline-first web app for first-semester CSE students.

## Included

- Onboarding and editable profile
- Home dashboard
- Local syllabus/topic tracker
- Daily schedule and monthly calendar
- Original sample PYQ quizzes
- 20 C learning lessons
- 8 practice problems
- Self-help journal
- Dark/light theme
- JSON export
- LocalStorage persistence
- PWA manifest and service worker

## Run on a phone

### Easiest: local preview
A web app's service worker usually requires HTTPS or localhost. You can still open `index.html` directly for basic use, but offline caching is best after publishing.

### Publish free
Upload these files to GitHub Pages, Netlify, or another static host. Open the published link in Chrome, then choose:

Chrome menu → Add to Home screen / Install app

### Local server on a computer
If available:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Notes

- Data is stored locally in the browser on the device.
- Clearing browser site data can remove saved data; use Export JSON for backup.
- The BEU syllabus, timetable, and PYQs are sample/editable content and should be checked against the current official curriculum.
- This starter is intentionally dependency-free: plain HTML, CSS, and JavaScript.
