class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 =  createButton('Washing Hands');
    this.option2 =  createButton('Wearing Mask');
    this.option3 =  createButton('Santizing Surrondings');
    this.option5 = createButton('Exercise');
    this.option4 = createButton('Eating Outside Food');
    this.option6 = createButton('Going Outside Without Emergency');
    this.option7 = createButton('not maintaining social distance');
    this.option8 = createButton('taking medicine without conselting doctor');
    

  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- WHAT ARE THE ACTIVITIES NEEDED TO PROTECT OURSELF FROM COVID-19? " );
    this.question.position(50, 80);
    this.option1.position(445, 120);
    this.option2.position(150,120);
    this.option3.position(445, 210);
    this.option4.position(150, 150);
    this.option5.position(150, 180);
    this.option6.position(445, 180);
    this.option7.position(150, 210);
    this.option8.position(445, 150);


    this.input1.position(200, 280);
    this.button.position(460, 280);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      contestant.answer=Count
      contestant.name = this.input1.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
          this.option1.mousePressed(()=>{
            Count+=1
          })
      this.option2.mousePressed(()=>{
        Count+=1
      })
      this.option3.mousePressed(()=>{
        Count+=1
      })
      this.option5.mousePressed(()=>{
        Count+=1
      })
  }
}
