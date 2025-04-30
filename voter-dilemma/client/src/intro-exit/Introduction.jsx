import React from "react";
import { Button } from "../components/Button";

export function Introduction({ next }) {
  return (
    <div className="mt-3 sm:mt-5 p-20">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Instruction overview
      </h3>
      <div className="mt-2 mb-6">
      <p>
        In this study, you will be matched with other experiment participants and make decisions in pairs. <br />
        You can earn bonus money based on your decisions and the decisions of other participants. <br /><br />

       Overview of the game: <br /><br />
       Across different rounds, you will be paired with different participants. <br />
       In <strong>each round of the game</strong>, there are two stages.<br />
      </p>
      <li>
        (1) In Stage 1, you and the other participant you are paired with will both receive an endowment of 10 euros and decide how much of this endowment to trade for voting power. 
      </li>
      <li>
        (2) In Stage 2, whoever has more voting power from Stage 1 will decide how to divide an additional monetary bonus of 20 euros.
      </li>
      <li>
        At the end, the money received from both stages of one randomly-selected round will be paid out to you and the other participant you were paired with on that round. 
      </li>

      </div>
      <Button handleClick={next} autoFocus>
        <p>Next</p>
      </Button>
    </div>
  );
}
