const teams = [
      {
        "city": "Atlanta",
        "altCityName": "Atlanta",
        "fullName": "Atlanta Hawks",
        "tricode": "ATL",
        "teamId": "1610612737",
        "nickname": "Hawks",
        "urlName": "hawks",
        "confName": "East",
        "divName": "Southeast"
      },
      {
        "city": "Boston",
        "altCityName": "Boston",
        "fullName": "Boston Celtics",
        "tricode": "BOS",
        "teamId": "1610612738",
        "nickname": "Celtics",
        "urlName": "celtics",
        "confName": "East",
        "divName": "Atlantic"
      },
      {
        "city": "Brooklyn",
        "altCityName": "Brooklyn",
        "fullName": "Brooklyn Nets",
        "tricode": "BKN",
        "teamId": "1610612751",
        "nickname": "Nets",
        "urlName": "nets",
        "confName": "East",
        "divName": "Atlantic"
      },

      {
        "city": "Charlotte",
        "altCityName": "Charlotte",
        "fullName": "Charlotte Hornets",
        "tricode": "CHA",
        "teamId": "1610612766",
        "nickname": "Hornets",
        "urlName": "hornets",
        "confName": "East",
        "divName": "Southeast"
      },
      {
        "city": "Chicago",
        "altCityName": "Chicago",
        "fullName": "Chicago Bulls",
        "tricode": "CHI",
        "teamId": "1610612741",
        "nickname": "Bulls",
        "urlName": "bulls",
        "confName": "East",
        "divName": "Central"
      },
      {
        "city": "Cleveland",
        "altCityName": "Cleveland",
        "fullName": "Cleveland Cavaliers",
        "tricode": "CLE",
        "teamId": "1610612739",
        "nickname": "Cavaliers",
        "urlName": "cavaliers",
        "confName": "East",
        "divName": "Central"
      },
      {
        "city": "Dallas",
        "altCityName": "Dallas",
        "fullName": "Dallas Mavericks",
        "tricode": "DAL",
        "teamId": "1610612742",
        "nickname": "Mavericks",
        "urlName": "mavericks",
        "confName": "West",
        "divName": "Southwest"
      },
      {
        "city": "Denver",
        "altCityName": "Denver",
        "fullName": "Denver Nuggets",
        "tricode": "DEN",
        "teamId": "1610612743",
        "nickname": "Nuggets",
        "urlName": "nuggets",
        "confName": "West",
        "divName": "Northwest"
      },
      {
        "city": "Detroit",
        "altCityName": "Detroit",
        "fullName": "Detroit Pistons",
        "tricode": "DET",
        "teamId": "1610612765",
        "nickname": "Pistons",
        "urlName": "pistons",
        "confName": "East",
        "divName": "Central"
      },

      {
        "city": "Golden State",
        "altCityName": "Golden State",
        "fullName": "Golden State Warriors",
        "tricode": "GSW",
        "teamId": "1610612744",
        "nickname": "Warriors",
        "urlName": "warriors",
        "confName": "West",
        "divName": "Pacific"
      },
      {
        "city": "Houston",
        "altCityName": "Houston",
        "fullName": "Houston Rockets",
        "tricode": "HOU",
        "teamId": "1610612745",
        "nickname": "Rockets",
        "urlName": "rockets",
        "confName": "West",
        "divName": "Southwest"
      },
      {
        "city": "Indiana",
        "altCityName": "Indiana",
        "fullName": "Indiana Pacers",
        "tricode": "IND",
        "teamId": "1610612754",
        "nickname": "Pacers",
        "urlName": "pacers",
        "confName": "East",
        "divName": "Central"
      },
      {
        "city": "LA",
        "altCityName": "LA Clippers",
        "fullName": "LA Clippers",
        "tricode": "LAC",
        "teamId": "1610612746",
        "nickname": "Clippers",
        "urlName": "clippers",
        "confName": "West",
        "divName": "Pacific"
      },
      {
        "city": "Los Angeles",
        "altCityName": "L.A. Lakers",
        "fullName": "L.A. Lakers",
        "tricode": "LAL",
        "teamId": "1610612747",
        "nickname": "Lakers",
        "urlName": "lakers",
        "confName": "West",
        "divName": "Pacific"
      },
      {
        "city": "Memphis",
        "altCityName": "Memphis",
        "fullName": "Memphis Grizzlies",
        "tricode": "MEM",
        "teamId": "1610612763",
        "nickname": "Grizzlies",
        "urlName": "grizzlies",
        "confName": "West",
        "divName": "Southwest"
      },
      {
        "city": "Miami",
        "altCityName": "Miami",
        "fullName": "Miami Heat",
        "tricode": "MIA",
        "teamId": "1610612748",
        "nickname": "Heat",
        "urlName": "heat",
        "confName": "East",
        "divName": "Southeast"
      },
      {
        "city": "Milwaukee",
        "altCityName": "Milwaukee",
        "fullName": "Milwaukee Bucks",
        "tricode": "MIL",
        "teamId": "1610612749",
        "nickname": "Bucks",
        "urlName": "bucks",
        "confName": "East",
        "divName": "Central"
      },
      {
        "city": "Minnesota",
        "altCityName": "Minnesota",
        "fullName": "Minnesota Timberwolves",
        "tricode": "MIN",
        "teamId": "1610612750",
        "nickname": "Timberwolves",
        "urlName": "timberwolves",
        "confName": "West",
        "divName": "Northwest"
      },
      {
        "city": "New Orleans",
        "altCityName": "New Orleans",
        "fullName": "New Orleans Pelicans",
        "tricode": "NOP",
        "teamId": "1610612740",
        "nickname": "Pelicans",
        "urlName": "pelicans",
        "confName": "West",
        "divName": "Southwest"
      },
      {
        "city": "New York",
        "altCityName": "New York",
        "fullName": "New York Knicks",
        "tricode": "NYK",
        "teamId": "1610612752",
        "nickname": "Knicks",
        "urlName": "knicks",
        "confName": "East",
        "divName": "Atlantic"
      },
      {
        "city": "Oklahoma City",
        "altCityName": "Oklahoma City",
        "fullName": "Oklahoma City Thunder",
        "tricode": "OKC",
        "teamId": "1610612760",
        "nickname": "Thunder",
        "urlName": "thunder",
        "confName": "West",
        "divName": "Northwest"
      },
      {
        "city": "Orlando",
        "altCityName": "Orlando",
        "fullName": "Orlando Magic",
        "tricode": "ORL",
        "teamId": "1610612753",
        "nickname": "Magic",
        "urlName": "magic",
        "confName": "East",
        "divName": "Southeast"
      },
      {
        "city": "Philadelphia",
        "altCityName": "Philadelphia",
        "fullName": "Philadelphia 76ers",
        "tricode": "PHI",
        "teamId": "1610612755",
        "nickname": "76ers",
        "urlName": "sixers",
        "confName": "East",
        "divName": "Atlantic"
      },
      {
        "city": "Phoenix",
        "altCityName": "Phoenix",
        "fullName": "Phoenix Suns",
        "tricode": "PHX",
        "teamId": "1610612756",
        "nickname": "Suns",
        "urlName": "suns",
        "confName": "West",
        "divName": "Pacific"
      },
      {
        "city": "Portland",
        "altCityName": "Portland",
        "fullName": "Portland Trail Blazers",
        "tricode": "POR",
        "teamId": "1610612757",
        "nickname": "Trail Blazers",
        "urlName": "blazers",
        "confName": "West",
        "divName": "Northwest"
      },
      {
        "city": "Sacramento",
        "altCityName": "Sacramento",
        "fullName": "Sacramento Kings",
        "tricode": "SAC",
        "teamId": "1610612758",
        "nickname": "Kings",
        "urlName": "kings",
        "confName": "West",
        "divName": "Pacific"
      },
      {
        "city": "San Antonio",
        "altCityName": "San Antonio",
        "fullName": "San Antonio Spurs",
        "tricode": "SAS",
        "teamId": "1610612759",
        "nickname": "Spurs",
        "urlName": "spurs",
        "confName": "West",
        "divName": "Southwest"
      },
      {
        "city": "Toronto",
        "altCityName": "Toronto",
        "fullName": "Toronto Raptors",
        "tricode": "TOR",
        "teamId": "1610612761",
        "nickname": "Raptors",
        "urlName": "raptors",
        "confName": "East",
        "divName": "Atlantic"
      },
      {
        "city": "Utah",
        "altCityName": "Utah",
        "fullName": "Utah Jazz",
        "tricode": "UTA",
        "teamId": "1610612762",
        "nickname": "Jazz",
        "urlName": "jazz",
        "confName": "West",
        "divName": "Northwest"
      },
      {
        "city": "Washington",
        "altCityName": "Washington",
        "fullName": "Washington Wizards",
        "tricode": "WAS",
        "teamId": "1610612764",
        "nickname": "Wizards",
        "urlName": "wizards",
        "confName": "East",
        "divName": "Southeast"
      }
    ]

export default teams;
