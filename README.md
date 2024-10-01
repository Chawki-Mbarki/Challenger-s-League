# Challenger's League 🎮

Challenger's League is a competitive gaming platform built using **React** and **Express**. The application enables users to challenge each other in random or draft pick games, connect with friends, and track match history while analyzing champion performance.

## Design 🎨
### This is the design for Challenger's League: [Figma Design](https://www.figma.com/design/lO2VA1lUuwJTqLcp1B7AUn/Challenger's-League?node-id=0-1&t=phkQQot9gve4WveT-1)

## Features ✨

### Account Management 🔐
- **User Registration & Login**
  - Secure registration and login functionality.
  - Manage user accounts and profiles.

### Dashboard 📊
- **Player Statistics**:
  - View champions played percentage, win rate, and player level.
  - Track XP gain through wins and losses.

- **Interactive Player Interface**:
  - **All Players**: Challenge, send friend requests, or block players.
  - **Friends**: Challenge friends, send messages, or unfriend.
  - **Challenges**: Notifications for received challenges.

### Challenge System ⚔️
- **Create and Manage Challenges**:
  - Choose between Blind Pick or Draft Pick game modes.
  - Report match results through self-estimation.

### Messaging 💬
- **Real-time Chat with Socket.io**:
  - Message friends with previous and current conversations displayed.
  - Real-time notifications for incoming messages.

### Match History 📜
- **Detailed History Page**:
  - View past matches with player and champion icons, opponent names, and match dates.

## Technologies Used 🛠️
- **React** for the frontend.
- **Express** for the backend.
- **MongoDB** for database management.
- **Mongoose** for database interactions.
- **Socket.io** for real-time messaging.
- **JWT** for authentication.

## Database Schema 📊
The application uses a NoSQL database with the following main collections:
- **Users**: Stores user information and credentials.
- **Challenges**: Stores details about challenges initiated by users.
- **Matches**: Records match history, including champions used and results.
- **Messages**: Stores user chat history.

## Installation & Setup 🚀

1. Clone the repository:
   ```bash
   git clone https://github.com/Chawki-Mbarki/Challenger-s-League.git
   cd Challenger-s-League
   ```

2. Install dependencies for the server:
   ```bash
   cd server
   npm install
   ```

3. Install dependencies for the client:
   ```bash
   cd client
   npm install
   ```

4. Set up the database connection in the server environment:
   Create a `.env` file in the `server` directory with the following content:
   ```plaintext
    PORT=PortHere
    URI=YOUR URI HERE
    JWT_SECRET=Your Secret Key Here
   ```

5. Run the server:
   ```bash
   cd server
   npm start
   ```

6. Set up the environment file:
   Create a `.env` file in the `server` directory with the following content:
   ```plaintext
    REACT_APP_API_URL=http://localhost:<YOUR SERVER PORT>>/api
   ```

7. Run the client:
   ```bash
   cd client
   npm start
   ```

## Usage 🛠️

- Access the application locally via: `http://localhost:3000` (depends on your machine the port can be diffrent from that)
- Register a new account, challenge friends, and track your gaming statistics.
- Enjoy competitive gaming and analyze your performance!

## License 📄
This project is licensed under the MIT License.

## Contributing 🤝
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---
Made with ❤️ by [Chawki Mbarki](https://github.com/Chawki-Mbarki), [Ahmed Hajji](https://github.com/Ahm3dHa), and [Saber](#)

Designed By [Chawki Mbarki](https://github.com/Chawki-Mbarki) 🎨
