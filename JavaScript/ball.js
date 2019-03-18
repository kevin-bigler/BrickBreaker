// The Ball Class contains all the components of the Game Ball
class Ball {
	constructor(x, y) {
		this.position = createVector(x, y);  // stores the balls current position
		this.direction = createVector(0, 1); // is the arrow that points Where the ball is headed
		this.speed = createVector(1, 1);     // is the direction component of velocity
		this.radius = (width * height) * .00002443;
		this.speedMultiplier = (width * height) * .0000062577;
		this.ballLost = false
	}
	contact(Paddle) {
		if (this.position.y > Paddle.position.y - this.radius / 2 &&
			this.position.x > Paddle.position.x - this.radius / 2 &&
			this.position.x < Paddle.position.x + Paddle.width + this.radius) {
			if (this.direction.y > 0) {
				let ballMap = map(this.position.x, Paddle.position.x, Paddle.position.x + Paddle.width, 1, -1);
				this.direction.y *= -1;
				this.direction.x += 1
				// this.speed.x *= ballMap * abs(ballMap)*3;
				this.direction.x *= abs(ballMap) * 3;
			}
		}
	}
	hitsWall(){
			if (this.position.y <= 0) {
				this.direction.y *= -1;
			} else if (this.position.x >= width || this.position.x <= 0) {
				this.direction.x *= -1;
			} else if (this.position.y >= height) {
				this.ballLost = true
			}
	}
	move() {
		this.speed.mult(this.speedMultiplier/3)
		this.position.x += this.direction.x * this.speed.x;
		this.position.y += this.direction.y * this.speed.y;
		this.hitsWall();
	}
	show() {
		let col = frameCount % 255;
		colorMode(HSB);
		fill(col, col, col);
		ellipse(this.position.x, this.position.y, this.radius);
	}
	start() {
		if (game.active) {
			if (!game.over) {
				this.speed.y = this.speedMultiplier
			}
		}
	}
}