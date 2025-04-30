import React from "react";
import { Button } from "../components/Button";
import { Slider, usePlayer, usePlayers, useStage, } from "@empirica/core/player/classic/react";
import "../../node_modules/@empirica/core/dist/player-classic-react.css";

export function VotingBid() {
    const player = usePlayer();
    const players = usePlayers(); //not sure if I need this
    const stage = useStage(); //not sure if I need this

    function handleChange(e) {
        player.round.set("bid", e.target.valueAsNumber); // set voting bid
      }
    
    function handleSubmit() {
        player.stage.set("submit", true); // submit page 
      }

      return (
        <div className="md:min-w-96 lg:min-w-128 xl:min-w-192 flex flex-col items-center space-y-5">
         <h1>Stage 1</h1> <br /><br />
         <p> In Stage 1, you can trade endowment money for voting power.  <br /><br />
             For each 0.10 euros you give up, you will gain a percentage point of voting power. <br /><br />
             For example, if you trade 1 euro, you will gain 10% voting power.
             If you trade all 10 euros, you will gain 100% voting power.  <br /><br />

            Remember that in Stage 2, whoever has more voting power will choose how to allocate an additional 20 euro monetary reward, <br />
            but you also get to keep any endowment money that you don't trade from Stage 1.<br /><br />
            </p>

          <p>How much of your endowment money do you keep and how much do you trade for voting power?</p>
          

          <div className="flex items-center justify-between w-full max-w-lg">
          <span className="whitespace-nowrap"> Voting power: 0% <br /> Money: 10 euros </span>	
      
            <Slider
              value={player.round.get("bid")}
              valueLabelDisplay="auto"
              onChange={handleChange}
              max={100} 
              className = "flex-grow mx-4"/>

          <span className="whitespace-nowrap"> Voting power: 100% <br /> Money: 0 euros </span>	
          </div>
        
          <div className="flex items-center"> {/* display current values if bid is defined (slider has been moved)*/}
          <p>Voting power: {player.round.get("bid") !== undefined?
           `${player.round.get("bid")} %` : "? %"} <br /> 
          Money: {player.round.get("bid") !== undefined?
          `${Number((100 - player.round.get("bid")) * 0.1).toFixed(2)} euros`: "? euros"}
          </p> 
          </div>
    
          <Button handleClick={handleSubmit} primary>
            Submit
          </Button>
        </div>
      );
    } 
