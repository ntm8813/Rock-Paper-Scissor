function computerchoice ()
{
  let choices = ['','rock', 'paper','scissor'];
  let i = Math.trunc(Math.random()*(3))+1;
  return choices[i];
};
let score = 0;
let output;
let dummy;
let highscore = 0;
function Game(hi)
{
 let computer = computerchoice();
 if(computer === hi){message(computer, 'draw'); project(5);}
 else if(computer === 'rock')
 {
  hi === 'paper'? message(computer,'win') : message(computer, 'lose');
 }
else if(computer === 'scissor')
{
  hi === 'rock'? message(computer,'win') : message(computer, 'lose');
}
else if(computer === 'paper')
{
  hi === 'scissor'? message(computer,'win') : message(computer, 'lose');
}
}

//button click choices :

document.querySelector('.rock').addEventListener('click',function()
{
  Game('rock');
})
document.querySelector('.scissor').addEventListener('click',function()
{
  Game('scissor');
})
document.querySelector('.paper').addEventListener('click',function()
{
  Game('paper');
})
function message(x,y)
{ 
  let j = 'computer chose: ' + x;
  let k = 'result: ' + y;
  document.querySelector('.result').textContent = j;
  document.querySelector('.computer').textContent = k;
  if(y === 'win')
  {score++ ;
  output = 'score: ' + score;
  document.querySelector('.score').textContent = output;
  project(5);}
  else if (y === 'lose')
  { 
    score > highscore ? project(4) : project(5);
    score > highscore ? (highscore = score) : (highscore = highscore);
    y === 'lose' ? score = 0 : score = score ;
    output = 'score: ' + score;
    document.querySelector('.score').textContent = output;
    dummy = 'highscore: ' + highscore;
    document.querySelector('.highscore').textContent = dummy;
  }
  
}
function project(y)
{
  if (y === 4)
  {
    document.querySelector('.output').textContent = 'NEW HIGHSCORE';
  }
  else
  {
    document.querySelector('.output').textContent = ' ';
  }
}

