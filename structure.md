# pcdii.mn - PC Gaming Center Platform

A comprehensive web platform for discovering and booking PC gaming centers in Ulaanbaatar, Mongolia.

## 🎮 Features

### For Users
- **Browse Gaming Centers** - View all PC gaming centers on an interactive map
- **Search & Filter** - Find gaming centers by name or location
- **Detailed Information** - View specs, prices, amenities, and availability
- **Seat Selection** - Interactive seat booking system (up to 10 seats)
- **User Authentication** - Secure login and registration system
- **Real-time Availability** - See available seats in real-time

### For Gaming Center Owners
- **Business Registration** - 4-step registration process
- **Upload Photos** - Showcase your gaming center
- **Manage Listings** - Update equipment, pricing, and amenities
- **Track Bookings** - Monitor seat reservations

## 📁 Project Structure

```
pcdii-project/
├── index.html                    # Homepage with gaming centers list
├── login.html                    # User login page
├── signup.html                   # User registration page
├── detail.html                   # Gaming center details page
├── seats.html                    # Interactive seat selection
├── register-pc.html              # PC gaming center registration
├── gaming-centers.json           # Gaming centers data
│
├── css/
│   ├── styles.css                # Homepage styles
│   ├── auth.css                  # Authentication pages styles
│   ├── detail.css                # Detail page styles
│   ├── seats.css                 # Seat selection styles
│   └── register.css              # Registration form styles
│
├── js/
│   ├── app.js                    # Homepage functionality
│   ├── auth.js                   # Shared authentication functions
│   ├── login.js                  # Login page logic
│   ├── signup.js                 # Signup page logic
│   ├── detail.js                 # Detail page logic
│   ├── seats.js                  # Seat selection logic
│   └── register.js               # Registration form logic
│
└── images/
    ├── game-on.png
    ├── moon-pc.png
    ├── skol-circus.png
    └── skol-10.png
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (Python, Node.js, or VS Code Live Server)

### Installation

1. **Clone or download the project**
   ```bash
   cd pcdii-project
   ```

2. **Set up folder structure**
   ```bash
   mkdir css js images
   ```

3. **Add your files**
   - Copy HTML files to root directory
   - Copy CSS files to `css/` folder
   - Copy JS files to `js/` folder
   - Add images to `images/` folder
   - Add `gaming-centers.json` to root

4. **Start a local server**

   **Option 1: Python**
   ```bash
   python -m http.server 8000
   ```

   **Option 2: Node.js**
   ```bash
   npx http-server
   ```

   **Option 3: VS Code Live Server**
   - Install "Live Server" extension
   - Right-click `index.html`
   - Select "Open with Live Server"

5. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📊 Data Structure

### gaming-centers.json
```json
[
  {
    "id": 1,
    "name": "Game On Ulaanbaatar",
    "score": 4.2,
    "address": "ХУД, 15-р хороо, Махатма Гандийн гудамж",
    "stars": 5,
    "reviews": 12,
    "status": "Онлайн",
    "lat": 47.9185,
    "lng": 106.9171,
    "image": "images/game-on.png"
  }
]
```

## 🎯 Usage

### For Users

1. **Browse Gaming Centers**
   - Visit homepage to see all gaming centers
   - Use search bar to filter by name or location
   - View locations on interactive map

2. **View Details**
   - Click on any gaming center card
   - See equipment specifications
   - Check pricing and amenities
   - View photos and ratings

3. **Book Seats**
   - Click "Суудал захиалах" button
   - Select available seats (up to 10)
   - Confirm your booking

4. **Create Account**
   - Click "Бүртгүүлэх" to register
   - Or click "Нэвтрэх" to login

### For Gaming Center Owners

1. **Register Your PC**
   - Click "РС-гээ бүртгүүлэх"
   - Complete 4-step registration:
     - Basic information
     - Location & contact
     - Services & equipment
     - Photos & confirmation

2. **Manage Your Listing**
   - Login to your account
   - Update information
   - Track bookings

## 🔧 Configuration

### Adding New Gaming Centers

Edit `gaming-centers.json`:

```json
{
  "id": 5,
  "name": "Your Gaming Center Name",
  "score": 4.5,
  "address": "Your address here",
  "stars": 5,
  "reviews": 25,
  "status": "Онлайн",
  "lat": 47.9200,
  "lng": 106.9200,
  "image": "images/your-image.png"
}
```

### Customizing Unavailable Seats

Edit `js/seats.js`:

### Changing Maximum Seat Selection

Edit `js/seats.js`:

```javascript
const maxSeats = 10;
```

## 🎨 Customization

### Colors
Primary colors are defined in CSS files:
- Purple: `#8e44ad`, `#9c27b0`
- Dark: `#1a1a2e`, `#2d1b4e`
- Green: `#10b981`, `#66bb6a`

### Fonts
Default font stack:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The platform is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1366px - 1920px)
- Tablet (768px - 1366px)
- Mobile (320px - 768px)

## 🔒 Security Features

- Input validation on all forms
- Password strength indicator
- XSS protection (no inline scripts)
- CORS-safe API calls
- LocalStorage for session management

## 🐛 Known Issues

1. LocalStorage is used for demo purposes - implement proper backend authentication for production
2. Seat booking is simulated - needs backend integration
3. Social login buttons are placeholders - require OAuth implementation

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Storage**: JSON files (for demo)
- **Maps**: Google Maps Embed API
- **Icons**: Unicode emoji

## 📝 TODO / Future Enhancements

- [ ] Backend API integration
- [ ] Real-time seat availability
- [ ] Payment gateway integration
- [ ] User dashboard
- [ ] Review and rating system
- [ ] Email notifications
- [ ] Social media login (OAuth)
- [ ] Mobile app version
- [ ] Admin panel for owners
- [ ] Advanced search filters
- [ ] Booking history
- [ ] Loyalty program

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Google Maps for map integration
- Unsplash for placeholder images
- The gaming community in Ulaanbaatar

## 📈 Version History
Made with ❤️ in Ulaanbaatar, Mongolia