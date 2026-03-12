# Golbarg & Fajjad Wedding Invitation 💍

An elegant, modern wedding invitation website built with React, featuring glassmorphism design, smooth animations, and interactive elements.

## ✨ Features

- **Glassmorphism Design** - Beautiful frosted glass effects with backdrop blur
- **Smooth Animations** - Powered by Framer Motion for elegant transitions
- **Weather Widget** - Real-time weather display for the event location
- **Interactive Elements**:
  - 📍 Location mapping (Google Maps integration)
  - 📤 Social sharing capabilities
  - 📅 Add to calendar functionality
  - 💌 RSVP form with modal
- **Mobile-First** - Optimized for iPhone and mobile devices
- **Atmospheric Background** - Stunning garden mansion imagery with animated particles

## 🚀 Getting Started

### Development

```bash
# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Server will run at http://localhost:5173/
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library (Ionicons 5)
- **date-fns** - Date utility library

## 📁 Project Structure

```
party/
├── public/
│   └── bg-design.png          # Background image
├── src/
│   ├── components/
│   │   ├── Background.jsx     # Animated background component
│   │   ├── InvitationCard.jsx # Main invitation card
│   │   ├── Weather.jsx        # Weather widget
│   │   └── RSVPModal.jsx      # RSVP form modal
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles + Tailwind
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
└── package.json               # Dependencies
```

## 🎨 Customization

### Event Details

Edit `src/components/InvitationCard.jsx` to update:
- Names (lines 60-80)
- Event date and time
- Location information
- Calendar event details

### Weather

Edit `src/components/Weather.jsx` to:
- Add OpenWeatherMap API key for live weather
- Change location or temperature units
- Customize weather icons

### Styling

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Color scheme uses amber/gold tones for warmth

### Background Image

Replace `public/bg-design.png` with your own image for a different look.

## 📱 Features Detail

### RSVP Form
- Name and email collection
- Attendance confirmation
- Guest count selection
- Optional message/dietary requirements
- Success animation on submission

### Interactive Icons
- **Location** - Opens Google Maps to event location
- **Share** - Native share API or clipboard fallback
- **Calendar** - Google Calendar integration

### Weather Widget
- Shows current temperature
- Weather condition with icon
- Location name
- Easily extensible to real API

## 🌟 Design Highlights

- **Glassmorphism** - Frosted glass with 20-30px backdrop blur
- **Typography** - Playfair Display (script) + Inter (body)
- **Color Palette** - White/amber with transparency layers
- **Animations** - Fade-ins, scales, floating particles
- **Mobile Optimized** - Touch-friendly, responsive design

## 📄 License

This project is created for personal use. Feel free to customize for your own event!

---

Built with ❤️ using React + Vite
