let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext("2d");

class Ball {
    constructor() {
        this.r = 30;
        this.x = random(0 + this.r, innerWidth - this.r);
        this.y = random(0 + this.r, innerHeight - this.r);
        this.vx = random(10, 50);
        this.vy = random(10, 50);
        this.yback = this.y
        this.xback = this.x
        this.draw()
    }

    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        c.fillStyle = "red"
        c.fill()
    }

    update(){
        if (this.x + this.r > innerWidth || this.x - this.r < 0) {
            this.vx = -this.vx
        }
        if (this.y + this.r > innerHeight || this.y - this.r < 0) {
            this.vy = -this.vy
        }
        this.x += this.vx
        this.y += this.vy
        this.yback = this.y
        this.xback = this.x
        this.draw()
    }
}
let ball = new Ball()
// let ball = []
// for (let i = 0 ; i < 1;i++){
//     ball.push(new Ball)
// }
function animation() {
    if (ball.x != 0 && ball.y != 0) {
        c.clearRect(0, 0, innerWidth, innerHeight)
        ball.update()
        // ball.forEach(balls => {
        //     balls.update()
        // });
    
        
        // console.log(`y = ${y}`)
        // console.log(`x = ${x}`)
        requestAnimationFrame(animation);
    }

}
animation()
addEventListener("keydown", (e) => {
    if (e.key == " ") {
        if (ball.x != 0 && ball.y != 0) {
            ball.y = 0
            ball.x = 0
        } else {
            ball.y = ball.yback
            ball.x = ball.xback
            animation()
        }
    }
})
addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        ball.vx = random(10, 50);
        ball.vy = random(10, 50);
    }
})
addEventListener("keydown", (e) => {
    if (e.key == "s") {
        if (ball.vx <= 0) {
            ball.vx = 5
        } else if (ball.vy <= 0) {
            ball.vy = 5
        }
        if (ball.vy <= 0) {
            ball.vy = - ball.vy;
        }
        ball.vy -= 5
        ball.vx -= 5;
    } else if (e.key == "w") {
        if (ball.vx <= 0) {
            ball.vx = 5
        } else if (ball.vy <= 0) {
            ball.vy = 5
        }
        if (ball.vy <= 0) {
            ball.vy = - ball.vy;
        }
        ball.vy += 5
        ball.vx += 5;
    }
    //  else if (e.key == "d") {
    //     if (vx <= 0) {
    //         vx = - vx;
    //     }
    //     vx += 5
    // } else if (e.key == "a") {
    //     if (vx <= 0) {
    //         vx = - vx;
    //     }
    //     vx -= 5
    // }
})
function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}