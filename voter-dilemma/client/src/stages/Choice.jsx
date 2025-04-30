import React from "react";
import { Button } from "../components/Button";
import { Slider, usePlayer, usePlayers, useStage, useRound, } from "@empirica/core/player/classic/react";
import "../../node_modules/@empirica/core/dist/player-classic-react.css";

export function Choice() {
    const player = usePlayer();
    const players = usePlayers(); //not sure if I need this
    const stage = useStage(); //not sure if I need this
    const round = useRound(); //not sure if I need this
    const partner = players.filter((p) => p.id !== player.id)[0];
    const votePower = player.round.get("votepower") || "N/A";
    const voteAction = player.round.get("voteaction") || "N/A";
    const voteExplain = player.round.get("voteexplain") || "N/A";

  //console.log("Vote Power:", votePower);
  //console.log("Vote Action:", voteAction);
  //console.log("Vote Explain:", voteExplain);
    
    function handleChange(e) {
      player.round.set("choice", e.target.valueAsNumber); // set allocation choice
    }
  
  function handleSubmit() {
      player.stage.set("submit", true); // submit page 
    }

    return (
        <div className = "md:min-w-96 lg:min-w-128 xl:min-w-192 flex flex-col items-center space-y-5">
          <h1> Stage 2</h1> <br /><br />
          <h2> The reward to be divided is 20 euros.</h2>
            <p className = "flex items-center">
            <br />
             You had voting power: {player.round.get("bid")} %
              <br />
              The other participant had voting power: {partner.round.get("bid")} %
              <br />
              You had {player.round.get("votepower") || "TBD"} voting power compared to your partner,
               <br />
            {player.round.get("voteexplain") || "TBD"}
            </p>
          <br />
          
          {/* Conditionally render the slider and text if voteAction is "Dictator" */}
          {voteAction === "Dictator" && (
          <>
          <p>How much of the reward do you keep for yourself and how much do you allocate to the other participant?</p>
          <div className="flex items-center justify-between w-full max-w-lg">
            <span className="whitespace-nowrap"> You: 0 euros <br /> Other: 20 euros </span>	
                    <Slider
                      value={player.round.get("choice")}
                      valueLabelDisplay="auto"
                      onChange={handleChange}
                      max={20} />
            <span className="whitespace-nowrap"> You: 20 euros <br /> Other: 0 euros </span>	
          </div>
          <div className="flex items-center">
            <p>You: {player.round.get("choice") !== undefined?
              `${player.round.get("choice")} euros` : 
              "? euros"}
              <br /> 
            Other:  {player.round.get("choice") !== undefined?
              `${Math.round((20 - player.round.get("choice")))} euros` : 
              "? euros"}
              </p> 
          </div>
          </>
          )}
                  <Button handleClick={handleSubmit} primary>
                    Continue
                  </Button>
          
          </div>
      );
    
}