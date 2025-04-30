import React from "react";
import { Button } from "../components/Button.jsx";

export function Introduction2({ next }) {
  return (
    <div className="mt-3 sm:mt-5 p-20">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Detailed Instructions
      </h3>
      <div className="mt-2 mb-6">
      <h1>Stage 1</h1><br /><br />
         <p> You are paired with another participant and you can trade your monetary endowment for voting power.  
            For each 0.10 euros you give up, you will gain a percentage point of voting power. <br /><br />
            For example, if you trade 1 euro, you will gain 10% voting power.
            If you trade all 10 euros, you will gain 100% voting power. 
            <br /><br />
            Therefore, in Stage 1 you decide how of your endowment you want to keep and how much you want to trade for voting power.
            <br />
            In Stage 2, you will get to keep the money you kepts from your endowment in Stage 1, and voting power will determine who gets to choose how to allocate an additional monetary reward. 
          </p>
          
          <h1>Stage 2</h1><br /><br />

          <p>In Stage 2, there is an additional monetary reward of 20 euros to be divided between you and the other participant you are paired with. </p>           
          <br /><br />
          <ul className="list-disc list-inside">
            <li>
              If the other participant has more voting power than you, they will decide how to
              allocate the additional monetary reward.
            </li>
            <li>
              If you have more voting power than the other participant, you will decide how to allocate the additional monetary reward.
            </li>
            <li>
              If you both have the same amount of voting power, then the computer will randomly decide 
              who gets to allocate the additional monetary reward.
            </li>
          </ul>
          <br /><br />
          <p> Your total monetary bonus for a given round will be the sum of the endowment money that you kept in Stage 1 and the money you allocated to yourself or was allocated to you in Stage 2. 
            <br /><br />
            Voting power determines who allocates the additional reward in Stage 2, but it does not provide any direct monetary benefits at the end of the game. 
            <br /><br />
            Only one round is selected to determine your actual monetary bonuse at the end of the study, so treat each round as if it will be the one that counts separately from the others. 
            </p>

      </div>
      <Button handleClick={next} autoFocus>
        <p>Next</p>
      </Button>
    </div>
  );
}
