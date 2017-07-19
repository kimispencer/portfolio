var add = require('vectors/add-nd')
var mult = require('vectors/mult-nd');

class Particle {
	constructor(canvas, x,y) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');

		this.location = [x,y];
		this.velocity = [Math.random()*10,  Math.random()*10];
		this.acceleration = [0,0];

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
		add(this.velocity, this.acceleration);
		// location + velocity	
		add(this.location, this.velocity);
		mult(this.acceleration, 0);
		// edge detection
		this._checkEdges();
	}
	_applyForce(force) {
		console.log('applying force: ' + force)
		add(this.acceleration, force);
	}
	_checkEdges() {
		if (this.location[0]<0 || this.location[0] > this.ctx.canvas.width)
			this.velocity[0] = -this.velocity[0];

		if (this.location[1] < 0 || this.location[1] > this.ctx.canvas.height)
			this.velocity[1] = -this.velocity[1];
	}
}
export default Particle;