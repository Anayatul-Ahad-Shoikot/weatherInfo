<div align="center">

# 🌤️ WeatherInfo

A beautiful, minimal weather application that provides real-time weather data with a clean and intuitive interface.

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![OpenWeather](https://img.shields.io/badge/OpenWeather_API-orange?style=for-the-badge&logo=openweathermap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [API Setup](#-api-setup) • [Learning Outcomes](#-learning-outcomes)

<img src="screenshot.png" alt="WeatherInfo Preview" width="800"/>

</div>

---

## 📖 About The Project

WeatherInfo is a sleek and modern weather application that delivers real-time weather information at your fingertips. With its soft, minimalist design and intuitive interface, checking the weather has never been more pleasant. Simply search for any city worldwide and get instant access to comprehensive weather data.

The app features a calming mint-green color palette that's easy on the eyes, making it perfect for daily use.

---

## ✨ Features

| Feature                      | Description                              |
| ---------------------------- | ---------------------------------------- |
| 🔍 **City Search**           | Search weather for any city worldwide    |
| 🌡️ **Real-time Temperature** | Current temperature with feels-like data |
| 📅 **Date & Location**       | Current day, date, and location display  |
| 💧 **Humidity**              | Humidity percentage with comfort level   |
| 💨 **Wind Speed**            | Wind speed in KM/H                       |
| ☀️ **UV Index**              | UV radiation level with safety indicator |
| 🌡️ **Pressure**              | Atmospheric pressure in hPa              |
| 🌤️ **Weather Condition**     | Dynamic weather icons and descriptions   |
| 📊 **High/Low Temps**        | Daily temperature range                  |
| 🎨 **Minimal UI**            | Clean, modern, eye-friendly design       |

---

## 🛠️ Tech Stack

### Frontend

| Technology       | Purpose                 |
| ---------------- | ----------------------- |
| **React 19**     | UI library with hooks   |
| **Vite**         | Build tool & dev server |
| **Tailwind CSS** | Utility-first styling   |
| **Lucide React** | Beautiful icons         |
| **Google Fonts** | Typography              |

### API

| Service             | Purpose                |
| ------------------- | ---------------------- |
| **OpenWeather API** | Real-time weather data |

---

## 📁 Project Structure

```
weatherinfo/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Logo & search bar
│   │   ├── MainWeather.jsx    # Temperature & condition
│   │   ├── WeatherCard.jsx    # Info cards (humidity, wind, etc.)
│   │   └── WeatherInfo.jsx    # Main container
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env                        # API key (create this)
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- OpenWeather API key

### Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/weatherinfo.git
    cd weatherinfo
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory:

    ```env
    VITE_OPENWEATHER_API_KEY=your_api_key_here
    ```

4. **Start the development server**

    ```bash
    npm run dev
    ```

5. **Open your browser**

    Navigate to `http://localhost:5173`

---

## 🔑 API Setup

### Getting Your OpenWeather API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/)
2. Click **Sign In** or **Create Account**
3. Go to **API Keys** in your profile
4. Generate a new API key
5. Copy the key to your `.env` file

### API Endpoints Used

| Endpoint    | Description                       |
| ----------- | --------------------------------- |
| `/weather`  | Current weather data              |
| `/forecast` | Weather forecast (if implemented) |

### Example API Call

```javascript
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const city = "Dhaka";

fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
)
    .then((res) => res.json())
    .then((data) => console.log(data));
```

---

## 📖 Usage

### Searching for Weather

1. Enter a city name in the search bar
2. Click the search button or press Enter
3. View real-time weather data for that location

### Understanding the Data

| Metric          | Description                |
| --------------- | -------------------------- |
| **Temperature** | Current temp in Celsius    |
| **Feels Like**  | Perceived temperature      |
| **Humidity**    | Moisture in the air (%)    |
| **Wind Speed**  | Wind velocity (KM/H)       |
| **UV Index**    | UV radiation level (0-11+) |
| **Pressure**    | Atmospheric pressure (hPa) |

### UV Index Scale

| Value | Level     | Recommendation              |
| ----- | --------- | --------------------------- |
| 0-2   | Low       | No protection needed        |
| 3-5   | Moderate  | Some protection recommended |
| 6-7   | High      | Protection essential        |
| 8-10  | Very High | Extra protection needed     |
| 11+   | Extreme   | Avoid sun exposure          |

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

| Skill                         | Description                                  |
| ----------------------------- | -------------------------------------------- |
| ⚛️ **React Fundamentals**     | Components, props, JSX                       |
| 🪝 **React Hooks**            | useState, useEffect for state & side effects |
| 🌐 **API Integration**        | Fetching data from external REST APIs        |
| 🔐 **Environment Variables**  | Securing API keys with .env                  |
| 🎨 **Tailwind CSS**           | Modern utility-first styling                 |
| ⚡ **Async JavaScript**       | Promises, async/await, error handling        |
| 📱 **Responsive Design**      | Mobile-first approach                        |
| 🏗️ **Component Architecture** | Modular, reusable components                 |

---

## 🎨 Design Features

- **Color Palette** — Soft mint green (`#e8f5f0`) with teal accents (`#1a5d4a`)
- **Typography** — Clean Google Fonts for readability
- **Cards** — Subtle shadows with rounded corners
- **Icons** — Weather-appropriate emoji and Lucide icons
- **Layout** — Two-column responsive grid
- **Spacing** — Generous whitespace for clarity

---

## 🔌 API Response Structure

```json
{
    "name": "Dhaka",
    "main": {
        "temp": 26,
        "feels_like": 26,
        "humidity": 28,
        "pressure": 1015,
        "temp_min": 26,
        "temp_max": 26
    },
    "weather": [
        {
            "main": "Haze",
            "description": "haze",
            "icon": "50d"
        }
    ],
    "wind": {
        "speed": 2.57
    }
}
```

---

## 🚧 Future Enhancements

- [ ] 5-day weather forecast
- [ ] Geolocation auto-detect
- [ ] Dark mode toggle
- [ ] Hourly forecast
- [ ] Weather alerts
- [ ] Multiple saved locations
- [ ] Weather maps integration
- [ ] Sunrise/sunset times

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) — Weather data API
- [React](https://react.dev/) — UI library
- [Tailwind CSS](https://tailwindcss.com/) — CSS framework
- [Lucide](https://lucide.dev/) — Icon library
- [Vite](https://vitejs.dev/) — Build tool

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ and React

<img src="https://img.shields.io/badge/Weather-Always%20Beautiful-1a5d4a?style=for-the-badge" alt="Weather Badge"/>

</div>
