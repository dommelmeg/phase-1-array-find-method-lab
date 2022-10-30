const superbowlWin = record => {
  const season = record.find(season => season.result === "W")
  if(season) {
    return season.year
  } else {
    return undefined
  }
}

//Use find() to test each object to see if results is "W" & return year when win occurred

//NEED TO LOOP THROUGH ARRAY
//NEED IF ELSE STATEMENT
//USE find() TO FIND A 'W'
//NEED TO RETURN A YEAR OR UNDEFINED