import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();

Empirica.onGameStart(({ game }) => {
  const treatment = game.get("treatment");
  const {roundNum} = treatment;

  for (let i = 0; i < roundNum; i++){
    const round = game.addRound({
      name: `Round ${i}`,
    });
    round.addStage({name: "votingbid", duration:10000});
    round.addStage({name: "choice", duration:10000});
    round.addStage({name: "result", duration:10000});
  }
  
  
});

Empirica.onRoundStart(({ round }) => {});

Empirica.onStageStart(({ stage }) => {});

Empirica.onStageEnded(({ stage }) => {
  console.log("onStageEnded triggered for stage:", stage.get("name"));
  if (stage.get("name") !== "votingbid") return;
  console.log("End of voting stage");
  
  const players = stage.currentGame.players;

  for (const player of players) {
    console.log("compute voting action for player ", player.id)

    const partner = players.filter((p) => p.id !== player.id)[0];
    const playerBid = player.round.get("bid");
    const partnerBid = partner.round.get("bid");

    let votePower;
    let voteAction;
    let voteExplain;
    if (Number(playerBid) > Number(partnerBid)) {
      votePower = "more";
      voteAction = "Dictator";
      voteExplain = "so you will decide how to allocate the reward."
    } else if (Number(playerBid) < Number(partnerBid)) {
      votePower = "less";
      voteAction = "Recipient";
      voteExplain = "so you will receive the other's allocation of the reward."
    } else if (Number(playerBid) === Number(partnerBid)) {
      votePower = "equal";
      voteAction = Math.random() < 0.5 ? "Dictator" : "Recipient";
    } 

    if (votePower === "equal" & voteAction === "Dictator"){
      voteExplain = "and you were randomly selected to decide how to allocation the reward."
    }
    else if (votePower === "equal" & voteAction === "Recipient") {
      "and the other was randomly selected to allocate the reward; you will receive their allocation."
    }
    
    player.round.set("votepower", votePower);
    player.round.set("voteaction", voteAction);
    player.round.set("voteexplain", voteExplain)
    console.log(`Player ${player.id} - votepower: ${votePower}, voteaction: ${voteAction}, voteexplain: ${voteExplain}`);
  }
  
    
});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});


