# 🃏 React Cards App

This is a responsive and interactive React app that displays **random playing cards** and **Pokémon cards** using two public APIs. It includes animations, card flipping, persistent local storage, and reusable custom React hooks.

Built with [Create React App](https://github.com/facebook/create-react-app).

---

## 🚀 Features

- Draw random playing cards from the [Deck of Cards API](https://deckofcardsapi.com/)
- Select Pokémon and view their stats using the [Pokémon API](https://pokeapi.co/)
- Flip cards by clicking on them (front/back)
- Clear cards with a button
- Persist card data using **localStorage** (data survives page refresh)
- Custom React hooks:
  - `useFlip`: handles flipping animation
  - `useAxios`: reusable API request + state logic
  - `useLocalStorage`: syncs state to localStorage

---

## 🛠 Technologies Used

- React (with Create React App)
- Axios
- Custom React Hooks
- HTML/CSS
- UUID (for unique card IDs)

---

## 📦 Getting Started

Clone the repo, install dependencies, and run the app:

```bash
git clone https://github.com/your-username/react-cards-app.git
cd react-cards-app
npm install
npm start