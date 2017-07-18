import Vector from './Vector';

class Particle {
	constructor(canvas, x,y) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');

		this.location = new Vector(x,y);
		this.velocity = new Vector(Math.random()*10,  Math.random()*10);
		this.acceleration = new Vector(0, 0);

		this.radius = Math.random()*10+2;
		this.mass = this.radius;
	}
	_init() {
	}
	_display() {
		this.ctx.fillStyle = "rgba(0, 0, 0, .1)";
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		this.ctx.beginPath();
		this.ctx.arc(this.location.x, this.location.y, this.radius, Math.PI*2, false);
		this.ctx.fillStyle = "rgba(255,255,255,1)";
		this.ctx.fill();
	}
	_update() {
		// velocity + acceleration
		this.velocity.x += this.acceleration.x;
		this.velocity.y += this.acceleration.y;
		// location + velocity
		this.location.x += this.velocity.x;
		this.location.y += this.velocity.y;		
		// clear acceleration by 0
		this.acceleration.mult(0);
		// edge detection
		this._checkEdges();
	}
	_applyForce(force) {
		// acceleration = force;
		this.acceleration.x += force.x;
		this.acceleration.y += force.y;
	}
	_checkEdges() {
		if (this.location.x<0 || this.location.x > this.ctx.canvas.width)
			this.velocity.x = -this.velocity.x;

		if (this.location.y < 0 || this.location.y > this.ctx.canvas.height)
			this.velocity.y = -this.velocity.y;
	}
	_animate() {
		this._display();
		this._update();
		requestAnimationFrame(this._animate.bind(this), this.ctx);
	}
}
export default Particle;