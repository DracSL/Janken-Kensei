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
var splatterCounter = 0
jumpTooLongEn = false
jumpTooLongPl = false

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
stage = (getRandomInt(8));
console.log(stage);

song = (getRandomInt(4));
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

const guest = new Sprite({
  position: {
    x: 280,
    y: 90
  },
  imageSrc: './img/shop1.png',
  scale: 0.8,
  framesMax: 4
})

const guest2 = new Sprite({
  position: {
    x: 420,
    y: 110
  },
  imageSrc: './img/shop1.png',
  scale: 0.7,
  framesMax: 4
})

const stance2 = new Sprite({
  position: {
    x: 910,
    y: 60
  },
  imageSrc: './img/1.png',
  scale: 0.4
})

const visitor1 = new Fighter({
  position: {
    x: -300,
    y: 405
  },
  imageSrc: './img/visitor1a.png',
  scale: 0.75,
  framesMax: 4, 
  velocity: {
    x: 0,
    y: 0
  },
})

const visitor2 = new Fighter({
  position: {
    x: -380,
    y: 345
  },
  imageSrc: './img/visitor2a.png',
  scale: 0.75,
  framesMax: 4,
  velocity: {
    x: 0,
    y: 0
  }, 
})


const splatter1 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood.png',
  scale: 2.4,
})

const splatter2 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood2.png',
  scale: 2.4, 
})

const splatter3 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood3.png',
  scale: 2.4,
  
})

const splatter4 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood4.png',
  scale: 2.4, 
})

const splatter5 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood5.png',
  scale: 2.4,
 
})

const splatter6 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood.png',
  scale: 2.4, 
})

const splatter7 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood4.png',
  scale: 2.4,
  
})

const splatter8 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood2.png',
  scale: 2.4,
  
})

const splatter9 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood3.png',
  scale: 2.4,
})

const splatter10 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood5.png',
  scale: 2.4,
  
})

const splatter11 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood.png',
  scale: 2.4,
})

const splatter12 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood2.png',
  scale: 2.4, 
})

const splatter13 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood3.png',
  scale: 2.4,
  
})

const splatter14 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood4.png',
  scale: 2.4, 
})

const splatter15 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood5.png',
  scale: 2.4,
 
})

const splatter16 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood.png',
  scale: 2.4, 
})

const splatter17 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood4.png',
  scale: 2.4,
  
})

const splatter18 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood2.png',
  scale: 2.4,
  
})

const splatter19 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood3.png',
  scale: 2.4,
})

const splatter20 = new Sprite({
  position: {
    x: -300,
    y: 190
  },
  imageSrc: './img/blood5.png',
  scale: 2.4,
  
})

const gore = new Sprite({
  position: {
    x: -300,
    y: 290
  },
  imageSrc: './img/gore.png',
  scale: 2.4,
  framesMax: 6 
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
  scale: 2,
  framesMax: 6
})
const tiger = new Sprite({
  position: {
    x: 65,
    y: 268
  },
  imageSrc: './img/shop1.png',
  scale: 1.35,
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
    }, //// Mirror
    idleM: {
      imageSrc: './img/M/samuraiMack/Idle'+chosenStance+'.png',
      framesMax: 9
    },
    idle2M: {
      imageSrc: './img/M/samuraiMack/Idle2.png',
      framesMax: 9

    
    },
    idle3M: {
      imageSrc: './img/M/samuraiMack/Idle3.png',
      framesMax: 9

    
    },
    runM: {
      imageSrc: './img/M/samuraiMack/Run'+chosenStance+'.png',
      framesMax: 8
    },
    run2M: {
      imageSrc: './img/M/samuraiMack/Run2.png',
      framesMax: 8
    },
    run3M: {
      imageSrc: './img/M/samuraiMack/Run3.png',
      framesMax: 8
    },
    jumpM: {
      imageSrc: './img/M/samuraiMack/Fall.png',
      framesMax: 9
    },
    fallM: {
      imageSrc: './img/M/samuraiMack/Fall.png',
      framesMax: 9
    },
    attack1M: {
      imageSrc: './img/M/samuraiMack/Attack1.png',
      framesMax: 6
    },
    takeHitM: {
      imageSrc: './img/M/samuraiMack/Take Hit - white silhouette.png',
      framesMax: 4
    },
    deathM: {
      imageSrc: './img/M/samuraiMack/Death.png',
      framesMax: 6
    },
    counterM: {
      imageSrc: './img/M/samuraiMack/counter.png',
      framesMax: 4
    },
    
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
    x: 800,
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
  , /// Mirror Sprites
  idleM: {
    imageSrc: './img/M/kenji/Idle1.png',
    framesMax: 9
  },
  idle2M: {
    imageSrc: './img/M/kenji/Idle2.png',
    framesMax: 9
  },
  idle3M: {
    imageSrc: './img/M/kenji/Idle3.png',
    framesMax: 9
  },
  runM: {
    imageSrc: './img/M/kenji/Run.png',
    framesMax: 8
  },
  run2M: {
    imageSrc: './img/M/kenji/Run2.png',
    framesMax: 8
  },
  run3M: {
    imageSrc: './img/M/kenji/Run2.png',
    framesMax: 8
  },
  jumpM: {
    imageSrc: './img/M/kenji/Idle.png',
    framesMax: 9
  },
  fallM: {
    imageSrc: './img/M/kenji/Idle.png',
    framesMax: 9
  },
  attack1M: {
    imageSrc: './img/M/kenji/Attack1.png',
    framesMax: 6
  },
  takeHitM: {
    imageSrc: './img/M/kenji/Take hit.png',
    framesMax: 4
  },
  deathM: {
    imageSrc: './img/M/kenji/Death.png',
    framesMax: 6
  },
  counterM: {
    imageSrc: './img/M/kenji/counter.png',
    framesMax: 4
     
  }},
  attackBox: {
    offset: {
      x: -170,
      y: 50
    },
    width: 170,
    height: 50
  }
})

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
  tiger.update()
  guest.update()
  guest2.update()
  splatter1.update()
  splatter2.update()
  splatter3.update()
  splatter4.update()
  splatter5.update()
  splatter6.update()
  splatter7.update()
  splatter8.update()
  splatter9.update()
  splatter10.update()
  splatter11.update()
  splatter12.update()
  splatter13.update()
  splatter14.update()
  splatter15.update()
  splatter16.update()
  splatter17.update()
  splatter18.update()
  splatter19.update()
  splatter20.update()
  gore.update()
  c.fillStyle = 'rgba(255, 255, 255, 0.15)'
  c.fillRect(0, 0, canvas.width, canvas.height)
visitor1.update()
  player.update()
  enemy.update()
 visitor2.update()
  stance1.update()
  stance2.update()
 
  
  

  player.velocity.x = 0
  enemy.velocity.x = 0

  // player movement

  if (keys.a.pressed && player.lastKey === 'a' && chosenStance === 1 && player.position.x > -30) {
    player.velocity.x = -5
    player.switchSprite('run')
  } else if (keys.a.pressed && player.lastKey === 'a' && chosenStance === 2 && player.position.x > -30) {
      player.velocity.x = -5
      player.switchSprite('run2')
    } else if (keys.a.pressed && player.lastKey === 'a' && chosenStance === 3 && player.position.x > -30) {
      player.velocity.x = -5
      player.switchSprite('run3')
  } else if (keys.d.pressed && player.lastKey === 'd' && chosenStance === 1 && player.position.x < 980) {
    player.velocity.x = 5
    player.switchSprite('run')
  } else if (keys.d.pressed && player.lastKey === 'd' && chosenStance === 2 && player.position.x < 980) {
    player.velocity.x = 5
    player.switchSprite('run2')
  } else if (keys.d.pressed && player.lastKey === 'd' && chosenStance === 3 && player.position.x < 980) {
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
  if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft' && chosenStanceE === 1 && enemy.position.x > -30) {
    enemy.velocity.x = -5
    enemy.switchSprite('run')
  } else if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft' && chosenStanceE === 2 && enemy.position.x > -30) {
    enemy.velocity.x = -5
    enemy.switchSprite('run2')
    } else if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft' && chosenStanceE === 3 && enemy.position.x > -30) {
      enemy.velocity.x = -5
      enemy.switchSprite('run3')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight' && chosenStanceE === 1 && enemy.position.x < 980) {
    enemy.velocity.x = 5
    enemy.switchSprite('run')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight' && chosenStanceE === 2 && enemy.position.x < 980) {
    enemy.velocity.x = 5
    enemy.switchSprite('run2')
  } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight' && chosenStanceE === 3 && enemy.position.x < 980) {
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
    player.framesCurrent === 4 && !enemy.dead
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
    hitHurt()
    player.isAttacking = false

    gsap.to('#enemyHealth', {
      width: enemy.health + '%'
    })}
    else if (chosenStance === 2 && chosenStanceE === 3)
    {
      enemy.takeHit()
      var audioHit = new Audio('audio/clean.mp3');
      audioHit.play();
      hitHurt()
      player.isAttacking = false
  
      gsap.to('#enemyHealth', {
        width: enemy.health + '%'
      })}
      else if (chosenStance === 3 && chosenStanceE === 1)
      {
        enemy.takeHit()
        var audioHit = new Audio('audio/clean.mp3');
        audioHit.play();
        hitHurt()
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
    enemy.framesCurrent === 2 && !player.dead
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
      hitHurt();
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
          hitHurt()
          audioHit.play();
          enemy.isAttacking = false
      
          gsap.to('#playerHealth', {
            width: player.health + '%'
          })}
          else { {
            player.counter();
            var audioHit = new Audio('audio/Sword2.mp3');
          audioHit.play();
          hitHurt()
            enemy.takeHit()
            enemy.isAttacking = false
          
        
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
        if (player.position.y > 100 && jumpTooLongPl === false){
        player.velocity.y = -20
        JumpTooLongP()}
        break
      case ' ':
        player.attack()
        console.log(player.health)
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
else if (start === true && song === 2) {   
  var audio = new Audio('audio/taiko.mp3');
audio.play();
start = false}
else if (start === true && song === 3) {   
  var audio = new Audio('audio/emperor.mp3');
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
      case 'ArrowUp': if (enemy.position.y > 100 && jumpTooLongEn === false){
        enemy.velocity.y = -20
      JumpTooLongE()}
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
if (stage === 7) 
{  guest2.image = new Image()
  guest2.image.src = './img/kabuki.png'}
if (stage === 6) 
  {  guest.image = new Image()
    guest.image.src = './img/monkeya.png'}
if (stage != 0){
  shop.image = new Image()
shop.image.src = './img/shop1.png'
} if (stage === 5){
  tiger.image = new Image()
tiger.image.src = './img/shop4.png'}

//// Death
if (enemy.health <= 0) {
  enemy.isAttacking = false
  enemy.switchSprite('death')
  if (enemy.image === enemy.sprites.death.image || enemy.image === enemy.sprites.deathM.image ) {
    if (enemy.framesCurrent === enemy.sprites.death.framesMax - 1 || enemy.framesCurrent === enemy.sprites.deathM.framesMax - 1 )
      enemy.dead = true}}
  else {}
if (player.health <= 0) {
  player.switchSprite('death')
  if (player.image === player.sprites.death.image || player.image === player.sprites.deathM.image ) {
    if (player.framesCurrent === player.sprites.death.framesMax - 1 || player.framesCurrent === player.sprites.deathM.framesMax - 1 )
      player.dead = true}}
  else {}

}
/// Determining the sound when hit by opponent:
function hitHurt() {
  var hitScream = 1
  hitScream = (getRandomInt(60))
  if (player.dead === false && enemy.dead === false) {
  if (hitScream === 50) {
  var audioYo = new Audio('audio/wilhelm.mp3');
  audioYo.play()}
 else if (hitScream > 30) {
console.log("Null")}
  else if (hitScream < 20) {
    var audioYo = new Audio('audio/hurt.mp3');
    audioYo.play()}
    else if (hitScream > 20) {
      var audioYo = new Audio('audio/hurt2.mp3');
      audioYo.play()}}
      else {}
}

function goreTimer() {
setTimeout(() => {
  gore.position.y = -300;
}, 500);}


if (stage === 1) {
  visitor1.position.x = 300
  visitor2.position.x = 380
  setTimeout(() => {
  
  visitor1.velocity.x -=5
  visitor1.image = new Image()
  visitor1.image.src = './img/visitor1b.png'}, 2200);
  setTimeout(() => {
    
    visitor2.velocity.x +=4
    visitor2.image = new Image()
    visitor2.image.src = './img/visitor2.png'}, 2340);

if (visitor1.position.x === 0)
visitor1.velocity.x = 0
visitor1.image = new Image()
visitor1.image.src = './img/visitor1a.png'}
  
function JumpTooLongE()
{
  setTimeout(() => {
    
    jumpTooLongEn = true, 3000})
}

function JumpTooLongP()
{
  setTimeout(() => {
    
    jumpTooLongPl = true, 3000})
}


//* if (visitor1.position.x >= player.position.x + 10 && visitor1.position.x <= player.position.x + 20) {
//*  visitor1.position.x = visitor1.velocity.x
//*  visitor1.velocity.x =+1
//* console.log(visitor1.position.x)} 