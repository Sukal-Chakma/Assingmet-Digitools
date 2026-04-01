# Digitools Assignment React

A modern React-based web application built using **Vite, React, Tailwind CSS, and DaisyUI**.
This project includes multiple UI sections like Header, Hero, Status, Toggle Section, Subscription, Explore, and Footer with cart functionality and dynamic data loading.

---

## 🚀 Live Features

* Responsive Header Section
* Hero Section
* Status Section
* Toggle Section with Dynamic Data
* Cart System
* Subscription Section
* Explore Section
* Footer
* Loading Spinner using Suspense
* API/Data fetching from JSON
* Tailwind CSS + DaisyUI UI components
* Lucide React Icons
* React Toastify Notifications

---

## 🛠️ Technologies Used

* React
* Vite
* Tailwind CSS
* DaisyUI
* Lucide React
* React Toastify
* JavaScript (ES6+)
* CSS

---

## 📂 Project Structure

```
digitools-assignment-react
│
├── public
│   └── data.json
│
├── src
│   ├── assets
│   ├── components
│   │   ├── header
│   │   ├── herosection
│   │   ├── StatusSection
│   │   ├── toogleSection
│   │   ├── GetStarted
│   │   ├── subscription
│   │   ├── Explore
│   │   └── footer
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 📦 Installation

Clone the project:

```bash
git clone https://github.com/your-username/digitools-assignment-react.git
```

Go to project folder:

```bash
cd digitools-assignment-react
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

---

## 🌐 Run Locally

After running:

```
http://localhost:5173
```

Open this in your browser.

---

## 📊 Data Fetching

The project fetches data from:

```
public/data.json
```

Used in:

```
ToogleSection Component
```

Using:

```js
const res = await fetch('/data.json');
```

---

## 🛒 Cart System

* Add to cart
* Store cart data in state
* Calculate total
* Pass data to Header

```js
const [cartData, setCartData] = useState([]);
const [total, setTotal] = useState(0);
```

---

## ⏳ Suspense Loading

```jsx
<Suspense fallback={<LoadingSpinner />}>
  <ToogleSection />
</Suspense>
```

---

## 📄 Dependencies

```json
react
vite
tailwindcss
daisyui
lucide-react
react-toastify
```

---

## 👨‍💻 Author

**Your Name**

GitHub: https://github.com/your-username

---

## 📜 License

This project is for educational and assignment purposes.
