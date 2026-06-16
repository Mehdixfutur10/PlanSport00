const matches = [
{
league:"La Liga",
home:"Real Madrid",
away:"Barcelona",
homeScore:2,
awayScore:1,
minute:78
},
{
league:"Premier League",
home:"Manchester City",
away:"Liverpool",
homeScore:1,
awayScore:1,
minute:65
},
{
league:"Bundesliga",
home:"Bayern Munich",
away:"Dortmund",
homeScore:3,
awayScore:2,
minute:85
},
{
league:"Serie A",
home:"Inter",
away:"Juventus",
homeScore:2,
awayScore:0,
minute:70
},
{
league:"Ligue 1",
home:"PSG",
away:"Marseille",
homeScore:4,
awayScore:1,
minute:88
},
{
league:"Botola Pro",
home:"Wydad",
away:"Raja",
homeScore:1,
awayScore:1,
minute:55
}
];

const matchesContainer =
document.getElementById("matches");

const liveCount =
document.getElementById("liveCount");

function displayMatches(data){

matchesContainer.innerHTML="";

data.forEach(match=>{

matchesContainer.innerHTML += `
<div class="match-card">

<div class="league">
🏆 ${match.league}
</div>

<div class="teams">

<div>
${match.home}
</div>

<div class="score">
${match.homeScore} - ${match.awayScore}
</div>

<div>
${match.away}
</div>

</div>

<div class="minute">
🔴 LIVE ${match.minute}'
</div>

</div>
`;

});

liveCount.textContent=data.length;
}

displayMatches(matches);

document
.getElementById("search")
.addEventListener("keyup",function(){

const value=
this.value.toLowerCase();

document
.querySelectorAll(".match-card")
.forEach(card=>{

card.style.display=
card.innerText
.toLowerCase()
.includes(value)
?"block":"none";

});

});

const toggleBtn =
document.getElementById(
"themeToggle"
);

toggleBtn.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"light-mode"
);

});
matchesContainer.innerHTML += `
<div class="match-card">

<div class="league">
🏆 ${match.league}
</div>

<div class="teams">

<div class="team">

<img src="${match.homeLogo}" class="team-logo">

<p>${match.home}</p>

</div>

<div class="score">
${match.homeScore} - ${match.awayScore}
</div>

<div class="team">

<img src="${match.awayLogo}" class="team-logo">

<p>${match.away}</p>

</div>

</div>

<div class="minute">
🔴 LIVE ${match.minute}'
</div>

</div>
`;
