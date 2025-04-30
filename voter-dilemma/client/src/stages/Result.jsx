import React from "react";
import { usePlayer, usePlayers, useStage, useRound } from "@empirica/core/player/classic/react";
import { Button } from "../components/Button";

export function Result() {
    const player = usePlayer();
    const players = usePlayers();
    const partner = players.filter((p) => p.id !== player.id)[0];
    const stage = useStage(); //not sure if I need this
    const round = useRound(); //not sure if I need this
    const voteBid = player.round.get("bid") || "N/A"
    const votebidPartner = partner.round.get("bid") || "N/A";
    const voteAction = player.round.get("voteaction") || "N/A";

    // Calculate monetary gains
    const playerMoneyGain = Number(((100 - voteBid) * 0.1).toFixed(2));
    const partnerMoneyGain = Number(((100 - votebidPartner) * 0.1).toFixed(2));

    const playerChoice = player.round.get("choice") || 0; // Default to 0 if undefined
    const partnerChoice = partner.round.get("choice") || 0; // Default to 0 if undefined


    return (
        <div>
          <h1> Outcome</h1>

          <p>In Stage 1, You chose to keep €{playerMoneyGain.toFixed(2)} and trade for {voteBid}% voting power. <br />
          The other participant chose to keep €{partnerMoneyGain.toFixed(2)} and tade for {votebidPartner}% voting power.
          </p>

          {voteAction === "Dictator" && (
           <>
          <p> 
          In Stage 2, you chose to keep {playerChoice.toFixed(2)} euros and to give €{(20 - playerChoice).toFixed(2)} to the other participant.
          </p>

          <p>
          In total, your monetary gain on this round is €{(parseFloat(playerMoneyGain) + playerChoice).toFixed(2)}. <br />
          In total, the other participant's monetary gain on this round is €{(parseFloat(partnerMoneyGain) + (20 - playerChoice)).toFixed(2)}.
          </p>
          </>
          )}

          {voteAction === "Recipient" && (
          <>
            <p>
            In Stage 2, the other player chose to keep €{partnerChoice.toFixed(2)} and to give you €{(20 - partnerChoice).toFixed(2)}.
            </p>

            <p>
            In total, your monetary gain on this round is €{(parseFloat(playerMoneyGain) + (20 - partnerChoice)).toFixed(2)}. <br />
            In total, the other participant's monetary gain on this round is €{(parseFloat(partnerMoneyGain) + partnerChoice).toFixed(2)}.
            </p>
          </>
          )}

          
          <Button handleClick={() => player.stage.set("submit", true)}>
            Continue
          </Button>
        </div>
      );
}