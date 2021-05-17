class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();

    background("yellow")

    fill("blue")
    textSize(18)
    text("RESULT OF THE QUIZ",320,50)

    Contestant.getPlayerInfo();

    if(allContestants !== undefined){
      var ans=200
      textSize(15)
      text("NOTE: CORRECT ANSWER WILL BE HIGHLIGHTED IN GREEN COLOUR!!",100,200)

      for(var plr in allContestants){
        var ca="4"
        
        if(ca===allContestants[plr].answer)
          fill("green")
        else
          fill("red")

        ans+=30
        textSize(15)
        text(allContestants[plr].name+":"+allContestants[plr].answer,250,ans)
      }
    }

  }

}
