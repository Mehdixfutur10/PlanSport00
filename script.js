const matches = [
  {
    league: { name: "La Liga" },
    teams: {
      home: { name: "Real Madrid" },
      away: { name: "Barcelona" }
    },
    goals: {
      home: 2,
      away: 1
    },
    fixture: {
      status: {
        elapsed: 78
      }
    }
  },
  {
    league: { name: "Premier League" },
    teams: {
      home: { name: "Manchester City" },
      away: { name: "Liverpool" }
    },
    goals: {
      home: 1,
      away: 1
    },
    fixture: {
      status: {
        elapsed: 65
      }
    }
  }
];

displayMatches(matches);
