# Tic-Tac-Toe – Two Player Game

**Requirements**
- A modern web browser (Chrome, Firefox, Edge, Safari)  
- Basic understanding of HTML and JavaScript to modify or extend the game  
- No internet connection required (runs completely offline)  
- No backend or server setup required (fully client-side application)  

**Technologies Used**
- **HTML** for structuring the Tic-Tac-Toe grid, buttons, and messages  
- **Vanilla JavaScript** for handling game logic, turn switching, and winner detection  
- **DOM APIs** to update the UI dynamically based on user interactions  

**Game Logic Overview**
- The game is designed for **two players**, using symbols **X** and **O**  
- A predefined set of winning combinations is stored in an array  
- After every move, the game checks whether the current player matches any winning pattern  
- Once a winner is detected, the game stops accepting further moves  
- A restart option reloads the game to reset the state  

**Features Implemented**
- Classic 3×3 Tic-Tac-Toe board  
- Turn-based gameplay between two players  
- Automatic switching between players (X ↔ O)  
- Real-time winner detection using predefined win patterns  
- Displays a winning message when a player wins  
- Disables further moves once the game ends  
- Restart button to reset the board and start a new game  

**Application Flow**
- Game starts with Player **X**  
- Players take turns clicking on empty cells  
- After each move:
  - The board updates with the current player’s symbol  
  - The game checks for a winning condition  
- If a player wins:
  - A win message is displayed  
  - The restart button becomes visible  
- Clicking **Restart Game** reloads the page and resets the game  

**Notes**
- The game does not currently handle draw conditions (tie games)  
- Page reload is used for resetting the game state  
- Designed as a beginner-friendly project to practice:
  - Event handling  
  - Conditional logic  
  - DOM manipulation  
  - Game state management  

**Possible Enhancements**
- Add draw (tie) detection  
- Highlight winning cells  
- Add score tracking for multiple rounds  
- Implement AI for single-player mode  
- Improve UI with animations and sound effects  
