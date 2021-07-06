import { useEffect, useState } from "react";
import "./App.css";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function Card() {
  let [revealedCard, setRevealedCard] = useState<any>([]);
  let [matched, setMatched] = useState<Array<string>>([]);
  let [startTimer, setStartTimer] = useState<boolean>(false);
  let initialSeconds = 30;
  let [seconds, setSeconds ] =  useState<number>(initialSeconds);
  const [show, setShow] = useState(false);
  const avatars = [
    { name: "male"},
    { name: "female"},
    { name: "bottts"},
    { name: "initials"},
    { name: "human"},
    { name: "micah"},
    { name: "identicon"},
    { name: "gridy"}
  ];
  const url = "https://avatars.dicebear.com/api";

  //pairing the 8 avatars
  const pairOfAvatars = [...avatars, ...avatars];

  // called when the card is revealed
  useEffect(() => {
    const firstMatchedCard = pairOfAvatars[revealedCard[0]];
    const secondMatchedCard = pairOfAvatars[revealedCard[1]];
    //if (revealedCard < 2) return;
    // if both the card are same, store the name in matched array
    if (secondMatchedCard && firstMatchedCard.name === secondMatchedCard.name) {
      setMatched([...matched, firstMatchedCard.name]);
    }

    //two cards are turned face down again 0.5 second after the second card was revealed
    if (revealedCard.length === 2) setTimeout(() => setRevealedCard([]), 500);
  },[revealedCard]);// eslint-disable-line react-hooks/exhaustive-deps

  // set the timer
  useEffect(()=>{
    if (startTimer) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        // open modal when the time runs out
        if (seconds === 0) {
          setShow(true) 
        }
      }, 500)
      return ()=> {
        clearInterval(myInterval);
      };
    }
  });

  // called on click upon card
  const revealCard = (index: any) => {
    if (!startTimer) {
      setStartTimer(true);
    }
    setRevealedCard((revealed) => [...revealed, index]);
  }

  // reset everything on click of play again button or restart button
  const resetAll = () => {
    setShow(false)
    setMatched([]);
    setRevealedCard([]);
    setSeconds(30);
    setStartTimer(false)
  }

  return (
    <div>
      <span className="timer">Your time starts now: {seconds}</span>
      <div className="cards">
        {pairOfAvatars.map((avatar, index) => {
          let isRevealed = false;
          if (revealedCard.includes(index)) isRevealed = true; 
          if (matched.includes(avatar.name)) isRevealed = true;
          return (
            <div
              className={`avatar-card ${isRevealed ? "revealed" : ""} `}
              key={index}
              onClick={() => revealCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <img src={`${url}/${avatar.name}/seed-9.svg`} alt="avatar-name" width="100" />
                </div>
                <div className="back"></div>
              </div>
            </div>
          );
        })}
      </div>
      <button type="button" onClick={resetAll}>
        <span className="restartButton">Restart</span>
      </button>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Your time is Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Score:</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetAll}>
            Play Again 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
