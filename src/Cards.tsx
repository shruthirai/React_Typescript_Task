import { useEffect, useState } from "react";
import "./App.css";

const url = "https://avatars.dicebear.com/api";

export default function Card() {
  let [revealedCard, setRevealedCard] = useState<any>([]);
  let [matched, setMatched] = useState<Array<string>>([]);
  let [startTimer, setStartTimer] = useState<boolean>(false);
  let initialSeconds = 30;
  let [seconds, setSeconds ] =  useState<number>(initialSeconds);
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

  //pairing the 8 avatars
  const pairOfAvatars = [...avatars, ...avatars];

  // called when the card is revealed
  useEffect(() => {
    const firstMatchedCard = pairOfAvatars[revealedCard[0]];
    const secondMatchedCard = pairOfAvatars[revealedCard[1]];
    if (revealedCard < 2) return;

    if (secondMatchedCard && firstMatchedCard.name === secondMatchedCard.name) {
      setMatched([...matched, firstMatchedCard.name]);
    }

    if (revealedCard.length === 2) setTimeout(() => setRevealedCard([]), 500);
  },[revealedCard]);// eslint-disable-line react-hooks/exhaustive-deps

  // set the timer
  useEffect(()=>{
    if (startTimer) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        // alert popup when the time runs out
        if (seconds === 0) {
          alert("Your time is up!!!");
          setMatched([]);
          setRevealedCard([]);
          setSeconds(30);
          setStartTimer(false)
        }
      }, 500)
      return ()=> {
        clearInterval(myInterval);
      };
    }
  });

  // called on click upon card
  function revealCard(index: any) {
    if (!startTimer) {
      setStartTimer(true);
    }
    setRevealedCard((revealed) => [...revealed, index]);
  }

  // called on click of restart button
  const handleRestart = () => {
    setMatched([]);
    setRevealedCard([]);
    setSeconds(30);
    setStartTimer(false)
  };

  return (
    <div>
      <h2>Your time starts now: {seconds}</h2>
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
      <button type="button" onClick={handleRestart}>
        <h3>Restart</h3>
      </button>
    </div>
  );
}
