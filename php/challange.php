// Узнать угол между часовой и минутной стрелки

function getTimeAngle($hours, $minutes) {
  $angleInOneMunite = 360/60;
  $angleInOneHours = 360/12;
  
  $angleMinutes = $angleInOneMunite * $minutes;
  $angleHours = $angleInOneHours * $hours;
  
  return $angleHours - $angleMinutes;
}
