# React Coding Challenge

## Introduction
This project is a bare-bones React/Typescript template. Candidates who are invited to solve the coding challenge are required to fork this repository and implement any components/hooks/modules/tests they deem necessary for a good design. This challenge is confidential and candidates should keep forked repositories private. Once implemented, candidates are expected to provide private access to their interviewer(s) for code review.

## Challenge Description

The challenge consists in implementing a mini memory game in React and Typescript. These are the game rules:

-	The landing page should display a grid (4x4) of cards initially laid face down. 
-	Each card hides an image that can be revealed by clicking on the card.
-	The grid has unique pairs of distinct images (8 pairs for a 4x4 grid).
-	Images should display avatars provided by [dicebear http API](https://avatars.dicebear.com/docs/http-api). 

    Example:
    ``` html
    <img src="https://avatars.dicebear.com/api/bottts/seed-9.svg" height="auto" width={96} alt="Avatar" />
    ```
-	A countdown timer (30 seconds) is displayed on top of the grid and starts when the first card is revealed.
-	When a user reveals two cards, two outcomes are possible: 
    -   If both card images match, they remain revealed for the rest of the game.
    -   Otherwise, these two cards are turned face down again 0.5 second after the second card was revealed.
-	The game ends when the last pair is revealed or when the time runs out.
-	The remaining seconds is considered to be the user score and should be displayed at the end with a “Play again” button.

Optional extras:

-	Add a "Restart" button for resetting both the grid and the timer at any time during the game.
-	Make the grid size and the timer value configurable from the UI.

Candidates should aim to spend no more than 2 hours on this exercise. Please do
not feel obliged to complete all features or the optional extra requirements. We
emphasize quality over quantity.

## Evaluation Criteria

The finished solution should:

- Be completed using React and Typescript.
- Run from `npm start`.
- Contain documentation of your technical decisions.
- Be tested to the level you would expect in a commercial environment.
- Have tests that run from `npm run test`.

## How to submit your solution

- Include your name in the README.
- If you are new to React and/or Typescript, please mention this in the README.
- Invite your interviewer(s) to your private repo to review your submission as specified in your invitation email.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
