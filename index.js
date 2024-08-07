const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7
var start = true
var chosenStance = 1
var chosenStanceE = 1
var audioYoYo = 1
var stage = 1
var song = 1

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
stage = (getRandomInt(5));
console.log(stage);

song = (getRandomInt(2));
console.log(song);

const stance1 = new Sprite({
  position: {
    x: 15,
    y: 60
  },
   imageSrc: './img/' + chosenStance +'.png',
  scale: 0.4,
  sprites: {
    idle: {
      imageSrc: './img/' + chosenStance +'.png',
}
    }
})



const stance2 = new Sprite({
  position: {
    x: 910,
    y: 60
  },
  imageSrc: './img/1.png',
  scale: 0.4
})


const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  
  imageSrc: './img/background.png'
  
})

const shop = new Sprite({
  position: {
    x: 600,
    y: 158
  },
  imageSrc: './img/shop3.png',
  scale: 2.85,
  framesMax: 6
})

const player = new Fighter({
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/samuraiMack/Idle.png',
  framesMax: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 154
  },
  sprites: {
    idle: {
      imageSrc: './img/samuraiMack/Idle'+chosenStance+'.png',
      framesMax: 9
    },
    idle2: {
      imageSrc: './img/samuraiMack/Idle2.png',
      framesMax: 9

    
    },
    idle3: {
      imageSrc: './img/samuraiMack/Idle3.png',
      framesMax: 9

    
    },
    run: {
      imageSrc: './img/samuraiMack/Run'+chosenStance+'.png',
      framesMax: 8
    },
    run2: {
      imageSrc: './img/samuraiMack/Run2.png',
      framesMax: 8
    },
    run3: {
      imageSrc: './img/samuraiMack/Run3.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/samuraiMack/Fall.png',
      framesMax: 9
    },
    fall: {
      imageSrc: './img/samuraiMack/Fall.png',
      framesMax: 9
    },
    attack1: {
      imageSrc: './img/samuraiMack/Attack1.png',
      framesMax: 6
    },
    takeHit: {
      imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
      framesMax: 4
    },
    death: {
      imageSrc: './img/samuraiMack/Death.png',
      framesMax: 6
    },
    counter: {
      imageSrc: './img/samuraiMack/counter.png',
      framesMax: 4
    }
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50
    },
    width: 160,
    height: 50
  }
})

const enemy = new Fighter({
  position: {
    x: 400,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  color: 'blue',
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: './img/kenji/Idle.png',
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 215,
    y: 154
  },
  sprites: {
    idle: {
      imageSrc: './img/kenji/Idle1.png',
      framesMax: 9
    },
    idle2: {
      imageSrc: './img/kenji/Idle2.png',
      framesMax: 9
    },
    idle3: {
      imageSrc: './img/kenji/Idle3.png',
      framesMax: 9
    },
    run: {
      imageSrc: './img/kenji/Run.png',
      framesMax: 8
    },
    run2: {
      imageSrc: './img/kenji/Run2.png',
      framesMax: 8
    },
    run3: {
      imageSrc: './img/kenji/Run2.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/kenji/Idle.png',
      framesMax: 9
    },
    fall: {
      imageSrc: './img/kenji/Idle.png',
      framesMax: 9
    },
    attack1: {
      imageSrc: './img/kenji/Attack1.png',
      framesMax: 6
    },
    takeHit: {
      imageSrc: './img/kenji/Take hit.png',
      framesMax: 4
    },
    death: {
      imageSrc: './img/kenji/Death.png',
      framesMax: 6
    },
    counter: {
      imageSrc: './img/kenji/counter.png',
      framesMax: 4
    }
  },
  attackBox: {
    offset: {
      x: -170,
      y: 50
    },
    width: 170,
    height: 50
  }
})

console.log(player)

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}

decreaseTimer()

let msPrev = window.performance.now()
const fps = 60
const msPerFrame = 1000 / fps

function animate() {
  window.requestAnimationFrame(animate)

  const msNow = window.performance.now()
  const msPassed = msNow - msPrev

  if (msPassed < msPerFrame) return

  const excessTime = msPassed % msPerFrame
  msPrev = msNow - excessTime

  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  background.update()
  currentStage()
  shop.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()
  stance1.update()
  stance2.update()

  player.velocity.x = 0
  enemy.velocity.x = 0

  // player movement

  if (keys.a.pressed && player.lastKey === 'a' && chosenStance === 1) {
    player.velocity.x = -5
    player.switchSprite('run')
  } else if (keys.a.pressed && player.lastKey === 'a' && chosenStance === 2) {
      player.velocity.x = -5
      player.switchSprite('run2')
    } else if (keys.a.pressed && player.lastKey === 'a' && chosenStance === 3) {
      player.velocity.x = -5
      player.switchSprite('run3')
  } else if (keys.d.pressed && player.lastKey === 'd' && chosenStance === 1) {
    player.velocity.x = 5
    player.switchSprite('run')
  } else if (keys.d.pressed && player.lastKey === 'd' && chosenStance === 2) {
    player.velocity.x = 5
    player.switchSprite('run2')
  } else if (keys.d.pressed && player.lastKey === 'd' && chosenStance === 3) {
    player.velocity.x = 5
    player.switchSprite('run3')
  } else {
    if (chosenStance === 1) {player.switchSprite('idle')}
    else if (chosenStance === 2) {player.switchSprite('idle2')}
    else {player.switchSprite('idle3')}
  }

  // jumping
  if (player.velocity.y < 0) {
    player.switchSprite('jump')
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall')
  }

  // Enemy movement
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft' && chosenStanceE === 1) {
    enemy.velocity.x = -5
    enemy.switchSprite('run')
  } else if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft' && chosenStanceE === 2) {
    enemy.velocity.x = -5
    enemy.switchSprite('run2')
    } else if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft' && chosenStanceE === 3) {
      enemy.velocity.x = -5
      enemy.switchSprite('run3')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight' && chosenStanceE === 1) {
    enemy.velocity.x = 5
    enemy.switchSprite('run')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight' && chosenStanceE === 2) {
    enemy.velocity.x = 5
    enemy.switchSprite('run2')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight' && chosenStanceE === 3) {
    enemy.velocity.x = 5
    enemy.switchSprite('run3')
  } else {
    if (chosenStanceE === 1) {enemy.switchSprite('idle')}
    else if (chosenStanceE === 2) {enemy.switchSprite('idle2')}
    else {enemy.switchSprite('idle3')}
  }

  // jumping
  if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump')
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall')
  }

  // detect for collision & enemy gets hit
  if (
    rectangularCollision({
      rectangle1: player,
      rectangle2: enemy
    }) &&
    player.isAttacking &&
    player.framesCurrent === 4
  ) {
    if (chosenStance === chosenStanceE)
    {   
      enemy.counter();
      var audioHit = new Audio('audio/hit.mp3');
    audioHit.play();
    player.isAttacking = false}
   else if (chosenStance === 1 && chosenStanceE ===2)
   {
    enemy.takeHit()
    var audioHit = new Audio('audio/clean.mp3');
    audioHit.play();
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })}
    else if (chosenStance === 2 && chosenStanceE === 3)
    {
      enemy.takeHit()
      var audioHit = new Audio('audio/clean.mp3');
      audioHit.play();
      player.isAttacking = false
  
      gsap.to('#enemyHealth', {
        width: enemy.health + '%'
      })}
      else if (chosenStance === 3 && chosenStanceE === 1)
      {
        enemy.takeHit()
        var audioHit = new Audio('audio/clean.mp3');
        audioHit.play();
        player.isAttacking = false
    
        gsap.to('#enemyHealth', {
          width: enemy.health + '%'
        })}
        else { {
          enemy.counter();
          var audioHit = new Audio('audio/Sword2.mp3');
        audioHit.play();
          player.takeHit()
          player.isAttacking = false
          
      
          gsap.to('#playerHealth', {
            width: player.health + '%'
          })
        }}
    
  }

  // if player misses
  if (player.isAttacking && player.framesCurrent === 4) {
    var audioSlice = new Audio('audio/slice.mp3');
    audioSlice.play();
    player.isAttacking = false
  }

  // this is where our player gets hit
  if (
    rectangularCollision({
      rectangle1: enemy,
      rectangle2: player
    }) &&
    enemy.isAttacking &&
    enemy.framesCurrent === 2
    ) {
      if (chosenStanceE === chosenStance)
      {   
        player.counter();
        var audioHit = new Audio('audio/hit.mp3');
      audioHit.play();
      enemy.isAttacking = false}
     else if (chosenStanceE === 1 && chosenStance ===2)
     {
      player.takeHit()
      var audioHit = new Audio('audio/clean.mp3');
      audioHit.play();
      enemy.isAttacking = false
  
      gsap.to('#playerHealth', {
        width: player.health + '%'
      })}
      else if (chosenStanceE === 2 && chosenStance === 3)
      {
        player.takeHit()
        var audioHit = new Audio('audio/clean.mp3');
        audioHit.play();
        enemy.isAttacking = false
    
        gsap.to('#playerHealth', {
          width: player.health + '%'
        })}
        else if (chosenStanceE === 3 && chosenStance === 1)
        {
          player.takeHit()
          var audioHit = new Audio('audio/clean.mp3');
          audioHit.play();
          enemy.isAttacking = false
      
          gsap.to('#playerHealth', {
            width: player.health + '%'
          })}
          else { {
            player.counter();
            var audioHit = new Audio('audio/Sword2.mp3');
          audioHit.play();
            enemy.takeHit()
            enemy.isAttacking = false
            player.isAttacking = false
            
        
            gsap.to('#enemyHealth', {
              width: enemy.health + '%'
            })
          }}
        }

  // if player misses
  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    var audioSlash = new Audio('audio/slash.mp3');
    audioSlash.play();
    enemy.isAttacking = false
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    endSound()
    kabuki()
    determineWinner({ player, enemy, timerId })


  }
}
function endSound()
{if (enemy.health <= 0)
{    audioYoYo -= 1}
else if (player.health <= 0)
{audioYoYo += 1}}

function kabuki() {
  
if (audioYoYo === 0) {

  var audioYo = new Audio('audio/yo.mp3');
  audioYo.play()}
  else if (audioYoYo === 2) 
  {var audioYo = new Audio('audio/koto.mp3');
    audioYo.play()
}}




animate()

window.addEventListener('keydown', (event) => {
  if (!player.dead) {
    switch (event.key) {
      case 'd':
        keys.d.pressed = true
        player.lastKey = 'd'
        break
      case 'a':
        keys.a.pressed = true
        player.lastKey = 'a'
        break
      case 'w':
        player.velocity.y = -20
        break
      case ' ':
        player.attack()
        break
        case 'e': // Stance Player       

        chosenStance += 1
        currentStance()
        console.log(chosenStance)
      break
        case 'q': // Stance Player
        chosenStance -= 1
        currentStance()
        console.log(chosenStance)
        stance1.scr = './img/' + chosenStance +'.png'

      break
    } 
    
    
    if (start === true && song === 0) {
    var audio = new Audio('audio/modernsamurai.mp3');
audio.play();
start = false;
}
else if (start === true && song === 1) {   
  var audio = new Audio('audio/dancinglion.mp3');
audio.play();
start = false}
  }


  if (!enemy.dead) {
    switch (event.key) {
      case 'ArrowRight':
        keys.ArrowRight.pressed = true
        enemy.lastKey = 'ArrowRight'
        break
      case 'ArrowLeft':
        keys.ArrowLeft.pressed = true
        enemy.lastKey = 'ArrowLeft'
        break
      case 'ArrowUp':
        enemy.velocity.y = -20
        break
      case 'ArrowDown':
        enemy.attack()
        break
        case 'End': // Stance Enemy        

          chosenStanceE += 1
          currentStanceE()
          console.log(chosenStance)
        break
          case 'Shift': // Stance Enemy
          chosenStanceE -= 1
          currentStanceE()
          console.log(chosenStance)

        break
    }
  }

})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }

  // enemy keys
  switch (event.key) {
    case 'ArrowRight':
      keys.ArrowRight.pressed = false
      break
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false
      break
  }
})



function currentStance() {

  if (chosenStance < 1) {
  chosenStance = 3
} else if (chosenStance > 3) {
  chosenStance = 1
}
stance1.image = new Image()
stance1.image.src = './img/' + chosenStance +'.png'
}

function currentStanceE() {

  if (chosenStanceE < 1) {
  chosenStanceE = 3
} else if (chosenStanceE > 3) {
  chosenStanceE = 1
}
stance2.image = new Image()
stance2.image.src = './img/' + chosenStanceE +'.png'}

function currentStage() {

background.image = new Image()
background.image.src = './img/background'+stage+'.png'

if (stage != 0){
  shop.image = new Image()
shop.image.src = './img/shop1.png'
}

}


