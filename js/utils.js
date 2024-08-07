function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x &&
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width &&
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y &&
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
  )
}

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId)
  document.querySelector('#displayText').style.display = 'flex'
  if (player.health === enemy.health) 
  {
    document.querySelector('#displayText').innerHTML = 'Tie'+ "<br /><br />" + "Press enter to rematch"
    refresh()
  } else if (player.health > enemy.health && player.health === 100) {
    document.querySelector('#displayText').innerHTML = 'Flawless victory!'+ "<br />" + 'Blue Ninja slain' + "<br /><br />" + "Press enter to rematch"
    refresh()
  } else if (player.health < enemy.health && enemy.health === 100) {
    document.querySelector('#displayText').innerHTML = 'Flawless victory!'+ "<br />" + 'Red Ninja slaughtered' + "<br /><br />" + "Press enter to rematch"
    refresh()
  } else if (player.health < enemy.health && enemy.health < 20) {
    document.querySelector('#displayText').innerHTML = 'Close call!'+ "<br />" + 'Blue Ninja survived' + "<br /><br />" + "Press enter to rematch"
    refresh()
  } else if (enemy.health < player.health && player.health < 20) {
    document.querySelector('#displayText').innerHTML = 'Barely alive!'+ "<br />" + 'Red Ninja survived' + "<br /><br />" + "Press enter to rematch"
    refresh()
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Red Ninja wins'+ "<br /><br />" + "Press enter to rematch"
    refresh()
  } else if (player.health < enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Blue Ninja wins'+ "<br /><br />" + "Press enter to rematch"
    refresh()
  }

}
function refresh() {

window.addEventListener('keydown', (event) => {
  setTimeout(() => {
  location.reload();
  }, 15000);
  switch (event.key) {      case 'Enter':
  location.reload()}})}

let timer = 60
let timerId
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
    document.querySelector('#timer').innerHTML = timer
  }

  if (timer === 0) {
    determineWinner({ player, enemy, timerId })
  }
}
