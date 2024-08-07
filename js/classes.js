class Sprite {
  constructor({
    position,
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 }
  }) {
    this.position = position
    this.width = 50
    this.height = 150
    this.image = new Image()
    this.image.src = imageSrc
    this.scale = scale
    this.framesMax = framesMax
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
    this.offset = offset
  }

  draw() {
    c.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale,
      
    )

  }

  animateFrames() {
    this.framesElapsed++

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++
      } else {
        this.framesCurrent = 0
      }
    }
  }

  update() {
    this.draw()
    this.animateFrames()
  }
}

class Fighter extends Sprite {
  constructor({
    position,
    velocity,
    color = 'red',
    imageSrc,
    scale = 1,
    framesMax = 1,
    offset = { x: 0, y: 0 },
    sprites,
    attackBox = { offset: {}, width: undefined, height: undefined }
  }) {
    super({
      position,
      imageSrc,
      scale,
      framesMax,
      offset
    })

    this.velocity = velocity
    this.width = 50
    this.height = 150
    this.lastKey
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height
    }
    this.color = color
    this.isAttacking
    this.health = 100
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.framesHold = 5
    this.sprites = sprites
    this.dead = false

    for (const sprite in this.sprites) {
      sprites[sprite].image = new Image()
      sprites[sprite].image.src = sprites[sprite].imageSrc
    }
  }

  update() {
    this.draw()
    if (!this.dead) this.animateFrames()

    // attack boxes
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y

    if (player.position.x < enemy.position.x)
    {player.attackBox.offset.x = 100
    enemy.attackBox.offset.x = -170}
    else {enemy.attackBox.offset.x = 100
      player.attackBox.offset.x = -170}


    // draw the attack box
    // c.fillRect(
    //   this.attackBox.position.x,
    //   this.attackBox.position.y,
    //   this.attackBox.width,
    //   this.attackBox.height
    // )

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    // gravity function
    if (this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
      this.velocity.y = 0
      this.position.y = 330
      if (enemy.position.y === 330) {jumpTooLongEn = false}
      if (player.position.y === 330) {jumpTooLongPl = false}
    } else this.velocity.y += gravity
  }

  attack() {
    this.switchSprite('attack1')
    this.isAttacking = true
  }
  

  takeHit() {
    this.health -= 10

    if (enemy.health <= 0) {
      enemy.switchSprite('death')}
    if (player.health <= 0) {
        player.switchSprite('death')
    } else this.switchSprite('takeHit')
    splatterCounter ++
      gore.position.x = this.position.x + this.velocity.x
      gore.position.y = this.position.y + this.velocity.y
      goreTimer()
    console.log(splatterCounter)
    switch (splatterCounter) {
      case 1:
        splatter1.position.x = this.position.x - 160
      break;
      case 2:
        splatter2.position.x = this.position.x - 160
      case 3:
          splatter3.position.x = this.position.x - 160
      break;
      case 4:
          splatter4.position.x = this.position.x - 160
          case 5:
            splatter5.position.x = this.position.x - 160
          break;
          case 6:
            splatter6.position.x = this.position.x - 160
          case 7:
              splatter7.position.x = this.position.x - 160
          break;
          case 8:
              splatter8.position.x = this.position.x - 160
            break;
            case 9:
              splatter9.position.x = this.position.x - 160
          break;
          case 10:
              splatter10.position.x = this.position.x - 160
            break;
            case 11:
              splatter11.position.x = this.position.x - 160
            break;
            case 12:
              splatter12.position.x = this.position.x - 160
            case 13:
                splatter13.position.x = this.position.x - 160
            break;
            case 14:
                splatter14.position.x = this.position.x - 160
                case 15:
                  splatter15.position.x = this.position.x - 160
                break;
                case 16:
                  splatter16.position.x = this.position.x - 160
                case 17:
                    splatter17.position.x = this.position.x - 160
                break;
                case 18:
                    splatter18.position.x = this.position.x - 160
                  break;
                  case 19:
                    splatter19.position.x = this.position.x - 160
                break;
                case 20:
                    splatter20.position.x = this.position.x - 160
                  break;
                } 
              
  }

  counter() {
   
    if (enemy.health <= 0) {
      enemy.switchSprite('death')}
      else if (player.health <= 0) {
        player.switchSprite('death')
      
    } else this.switchSprite('counter')
  }



  switchSprite(sprite) {if (player.position.x < enemy.position.x) {
    
    if (this.image === this.sprites.death.image || this.image === this.sprites.deathM.image ) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1 || this.framesCurrent === this.sprites.deathM.framesMax - 1 )
        this.dead = true
      return
    }

    // overriding all other animations with the attack animation
   
    if (
      this.image === this.sprites.attack1.image &&
      this.framesCurrent < this.sprites.attack1.framesMax - 1
    )
      return

    // override when fighter gets hit
    if (
      this.image === this.sprites.takeHit.image &&
      this.framesCurrent < this.sprites.takeHit.framesMax - 1
    )
      return
      //override when countering
      if (
        this.image === this.sprites.counter.image &&
        this.framesCurrent < this.sprites.counter.framesMax - 1
      )
        return

    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image
          this.framesMax = this.sprites.idle.framesMax
          this.framesCurrent = 0
          
        }
        break
          case 'idle2':
            if (this.image !== this.sprites.idle2.image) {
              this.image = this.sprites.idle2.image
              this.framesMax = this.sprites.idle2.framesMax
              this.framesCurrent = 0
            }
            break
            case 'idle3':
              if (this.image !== this.sprites.idle3.image) {
                this.image = this.sprites.idle3.image
                this.framesMax = this.sprites.idle3.framesMax
                this.framesCurrent = 0
              }
              break
      case 'run':
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image
          this.framesMax = this.sprites.run.framesMax
          this.framesCurrent = 0
        }
        break
        case 'run2':
          if (this.image !== this.sprites.run2.image) {
            this.image = this.sprites.run2.image
            this.framesMax = this.sprites.run2.framesMax
            this.framesCurrent = 0
          }
          break
          case 'run3':
            if (this.image !== this.sprites.run3.image) {
              this.image = this.sprites.run3.image
              this.framesMax = this.sprites.run3.framesMax
              this.framesCurrent = 0
            }
            break
      case 'jump':
        if (this.image !== this.sprites.jump.image) {
          this.image = this.sprites.jump.image
          this.framesMax = this.sprites.jump.framesMax
          this.framesCurrent = 0
        }
        break

      case 'fall':
        if (this.image !== this.sprites.fall.image) {
          this.image = this.sprites.fall.image
          this.framesMax = this.sprites.fall.framesMax
          this.framesCurrent = 0
        }
        break

      case 'attack1':
        if (this.image !== this.sprites.attack1.image) {
          this.image = this.sprites.attack1.image
          this.framesMax = this.sprites.attack1.framesMax
          this.framesCurrent = 0
        }
        break

      case 'takeHit':
        if (this.image !== this.sprites.takeHit.image) {
          this.image = this.sprites.takeHit.image
          this.framesMax = this.sprites.takeHit.framesMax
          this.framesCurrent = 0
        }
        break
        case 'counter':
          if (this.image !== this.sprites.counter.image) {
            this.image = this.sprites.counter.image
            this.framesMax = this.sprites.counter.framesMax
            this.framesCurrent = 0
          }
          break

      case 'death':
        if (this.image !== this.sprites.death.image) {
          this.image = this.sprites.death.image
          this.framesMax = this.sprites.death.framesMax
          this.framesCurrent = 0
        }
        break

    
  
    }
  }
  {if (player.position.x > enemy.position.x) {
    
    if (this.image === this.sprites.death.image || this.image === this.sprites.deathM.image ) {
      if (this.framesCurrent === this.sprites.death.framesMax - 1 || this.framesCurrent === this.sprites.deathM.framesMax - 1 )
        this.dead = true
      
      return
    }

    // overriding all other animations with the attack animation
   
    if (
      this.image === this.sprites.attack1M.image &&
      this.framesCurrent < this.sprites.attack1M.framesMax - 1
    )
      return

    // override when fighter gets hit
    if (
      this.image === this.sprites.takeHitM.image &&
      this.framesCurrent < this.sprites.takeHitM.framesMax - 1
    )
      return
      //override when countering
      if (
        this.image === this.sprites.counterM.image &&
        this.framesCurrent < this.sprites.counterM.framesMax - 1
      )
        return

    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idleM.image) {
          this.image = this.sprites.idleM.image
          this.framesMax = this.sprites.idleM.framesMax
          this.framesCurrent = 0
          
        }
        break
          case 'idle2':
            if (this.image !== this.sprites.idle2M.image) {
              this.image = this.sprites.idle2M.image
              this.framesMax = this.sprites.idle2M.framesMax
              this.framesCurrent = 0
            }
            break
            case 'idle3':
              if (this.image !== this.sprites.idle3M.image) {
                this.image = this.sprites.idle3M.image
                this.framesMax = this.sprites.idle3M.framesMax
                this.framesCurrent = 0
              }
              break
      case 'run':
        if (this.image !== this.sprites.runM.image) {
          this.image = this.sprites.runM.image
          this.framesMax = this.sprites.runM.framesMax
          this.framesCurrent = 0
        }
        break
        case 'run2':
          if (this.image !== this.sprites.run2M.image) {
            this.image = this.sprites.run2M.image
            this.framesMax = this.sprites.run2M.framesMax
            this.framesCurrent = 0
          }
          break
          case 'run3':
            if (this.image !== this.sprites.run3M.image) {
              this.image = this.sprites.run3M.image
              this.framesMax = this.sprites.run3M.framesMax
              this.framesCurrent = 0
            }
            break
      case 'jump':
        if (this.image !== this.sprites.jumpM.image) {
          this.image = this.sprites.jumpM.image
          this.framesMax = this.sprites.jumpM.framesMax
          this.framesCurrent = 0
        }
        break

      case 'fall':
        if (this.image !== this.sprites.fallM.image) {
          this.image = this.sprites.fallM.image
          this.framesMax = this.sprites.fallM.framesMax
          this.framesCurrent = 0
        }
        break

      case 'attack1':
        if (this.image !== this.sprites.attack1M.image) {
          this.image = this.sprites.attack1M.image
          this.framesMax = this.sprites.attack1M.framesMax
          this.framesCurrent = 0
        }
        break

      case 'takeHit':
        if (this.image !== this.sprites.takeHitM.image) {
          this.image = this.sprites.takeHitM.image
          this.framesMax = this.sprites.takeHitM.framesMax
          this.framesCurrent = 0
        }
        break
        case 'counter':
          if (this.image !== this.sprites.counterM.image) {
            this.image = this.sprites.counterM.image
            this.framesMax = this.sprites.counterM.framesMax
            this.framesCurrent = 0
          }
          break

      case 'death':
        if (this.image !== this.sprites.deathM.image) {
          this.image = this.sprites.deathM.image
          this.framesMax = this.sprites.deathM.framesMax
          this.framesCurrent = 0
        }
        break

    
  
    }
  }}}
  
}

