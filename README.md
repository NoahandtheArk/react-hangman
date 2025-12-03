# 🎯 React Hangman Game

A classic Hangman word-guessing game built with **React**, featuring an
on-screen keyboard, helpful gameplay messages, and **11 custom hangman
illustration stages**. The goal is simple: guess the hidden word before
the hangman is fully drawn!

![Hangman
Screenshot](https://via.placeholder.com/600x400/f8f9fa/495057?text=React+Hangman+Preview)

## 🎮 How to Play

-   A **random word** is chosen at the start.
-   Use the **letter keyboard** to guess the word.
-   Every **incorrect guess** reveals the next hangman stage.
-   You have **10 chances** before the hangman is completed.
-   You **win** by revealing all letters.
-   You **lose** if the hangman reaches stage 11.
-   Use the **Restart** button to start a new game.
-   Click **Help** for a brief instructions popup.

## 🛠️ Technologies Used

-   **React** (functional components with hooks: `useState`,
    `useEffect`)
-   **Bootstrap** / custom styling
-   **Custom hangman GIF assets** (`state1.gif` → `state11.gif`)
-   Responsive layout for desktop & mobile

## ▶️ Running the Project Locally

### Prerequisites

-   Install **Node.js** (v16+): https://nodejs.org/
-   npm (bundled with Node) or yarn

### Steps

``` bash
git clone https://github.com/NoahandtheArk/react-hangman.git
cd react-hangman/hangman-game
npm install
npm start
```

The app will open at **http://localhost:3000**

## 📁 Project Structure

hangman-game/
│
├── README.md
├── package.json
├── package-lock.json
├── node_modules/
│
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── hangman/
│       ├── state1.gif
│       ├── state2.gif
│       ├── state3.gif
│       ├── state4.gif
│       ├── state5.gif
│       ├── state6.gif
│       ├── state7.gif
│       ├── state8.gif
│       ├── state9.gif
│       ├── state10.gif
│       └── state11.gif
│
└── src/
    ├── App.js
    ├── App.css
    ├── App.test.js
    ├── index.js
    ├── index.css
    ├── logo.svg
    ├── reportWebVitals.js
    ├── setupTests.js
    ├── words.js
    ├── hangman.css
    │
    └── components/
        ├── GameBoard.jsx
        ├── GameStatus.jsx
        ├── HangmanFigure.jsx
        ├── HelpModal.jsx
        ├── Keyboard.jsx
        └── WordDisplay.jsx


## 🚀 Deployment

Deploy easily on: - GitHub Pages - Netlify - Vercel

## 🤝 Contributing

Pull requests are welcome!

## 📜 License

MIT License
