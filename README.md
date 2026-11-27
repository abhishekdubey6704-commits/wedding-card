# Modern Sanskrit Wedding Invitation

A responsive React + Vite wedding invitation website with saffron/red styling, a temple-door intro, Sanskrit verses, live countdown / elapsed-days display, Google Calendar link, couple profiles, event schedule, gallery lightbox, health note, RSVP API integration, and YouTube IFrame Player API integration.

## Run locally

```bash
npm install
npm run dev
```

## Personalize content

Edit `src/config.js`:
- Couple names, profile descriptions and image URLs
- Wedding date/time (`date`) and display date (`dateLabel`)
- Venue, address, Google Maps URL
- Event schedule and gallery images
- Health protocol text
- `youtubeVideoId`

The sample date is 25 January 2027. Replace it if needed. The countdown switches to elapsed married days after the configured date/time passes.

## RSVP API contract

Set `VITE_API_BASE_URL` in `.env` (copy `.env.example`). The form sends a JSON `POST` request to `${VITE_API_BASE_URL}/api/rsvp`:

```json
{
  "name": "Guest Name",
  "email": "guest@example.com",
  "guests": "2",
  "attendance": "yes",
  "note": "Looking forward to it!",
  "event": "Wedding Celebration"
}
```

Expected behaviour: return any 2xx response on success. Configure CORS on the backend to allow your deployed frontend origin. Validate and sanitize all fields server-side, apply rate limiting, and avoid exposing secrets in Vite `VITE_` variables. The current demo mode deliberately does not pretend to save an RSVP when no API URL is configured.

## YouTube music

Add only the YouTube video ID (the part after `v=`) to `youtubeVideoId` in `src/config.js`. Guests must press the music control to start playback. Ensure the video is embeddable and that you have the rights/permission to use it. YouTube controls and availability remain subject to YouTube's platform policies.

## Google Calendar

The "Save the date" link opens a prefilled Google Calendar event. Update the date, title, description and location in `src/config.js`. The sample event duration is four hours.

## Deploy to Netlify

1. Push this folder to a Git repository.
2. In Netlify, import the repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add `VITE_API_BASE_URL` under Site configuration → Environment variables if using the RSVP backend.
6. Deploy. For a custom domain, configure it in Netlify's domain settings.

## Notes

- Images are sample remote Unsplash images; replace them with approved couple/gallery photos.
- The Sanskrit translations are concise general renderings. Have a Sanskrit scholar review any text intended for formal religious use.
- Health protocol copy is editable informational text, not medical advice.
