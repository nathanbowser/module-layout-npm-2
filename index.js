var getTeamStream = require('br-team-stream')
getTeamStream(['philadelphia-eagles', 'chicago-bulls', 'los-angeles-lakers'], function (err, res) { 
  if (err) console.log(err)
  res.forEach(function (item) { 
    console.log(item.title)
  })
})
