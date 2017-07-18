var add = require('vectors/add-nd')
var mult = require('vectors/mult-nd');

class Particle {
	constructor(canvas, x,y) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');

		this.location = [x,y];//new Vector(x,y);
		this.velocity = [Math.random()*10,  Math.random()*10]; //new Vector(Math.random()*10,  Math.random()*10);
		this.acceleration = [0,0]; //new Vector(0, 0);

		this.radius = Math.random()*10+2;
		this.mass = this.radius;

		this._init();
	}
	_init() {

	}
	_display() {
		this.ctx.fillStyle = "rgba(0, 0, 0, .1)";
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
		this.ctx.beginPath();
		this.ctx.arc(this.location[0], this.location[1], this.radius, Math.PI*2, false);
		this.ctx.fillStyle = "rgba(255,255,255,1)";
		this.ctx.fill();
	}
	_update() {
		// velocity + acceleration
		// this.velocity.x += this.acceleration.x;
		// this.velocity.y += this.acceleration.y;
		add(this.velocity, this.acceleration);
		// location + velocity
		// this.location.x += this.velocity.x;
		// this.location.y += this.velocity.y;		
		add(this.location, this.velocity);
		// clear acceleration by 0
		// this.acceleration.mult(0);
		mult(this.acceleration, 0);
		// edge detection
		this._checkEdges();
	}
	_applyForce(force) {
		console.log('FORCE, ' + force)
		// acceleration = force;
		// this.acceleration.x += force.x;
		// this.acceleration.y += force.y;
		// let f = [0, 0];
		add(this.acceleration, force);
	}
	_checkEdges() {
		if (this.location[0]<0 || this.location[0] > this.ctx.canvas.width)
			this.velocity[0] = -this.velocity[0];

		if (this.location[1] < 0 || this.location[1] > this.ctx.canvas.height)
			this.velocity[1] = -this.velocity[1];
	}
	_animate() {
		this._display();
		this._update();
		requestAnimationFrame(this._animate.bind(this), this.ctx);
	}
}
export default Particle;