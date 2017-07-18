var sub = require('vectors/sub-nd')
var mag = require('vectors/mag-nd')
var mult = require('vectors/mult-nd')
var normalize = require('vectors/normalize-nd')

class Attractor {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');

		this.location = [this.ctx.canvas.width/2, this.ctx.canvas.height/2]; //new Vector(this.ctx.canvas.width/2, this.ctx.canvas.height/2);
		this.radius = 20;
		this.mass = this.radius;
	}
	_init() {
	}
	_display() {
		this.ctx.beginPath();
		this.ctx.arc(this.ctx.canvas.width/2, this.ctx.canvas.height/2, this.radius, Math.PI*2, false);
		this.ctx.fillStyle = "red";
		this.ctx.fill();
// console.log(this.location)

	}
	_update() {

	}
	_attract(particle) {
		// let force = this.location.sub(particle.location);
		let force = sub(this.location, particle.location);
		// let force = new Vector((this.location.x - particle.location.x), (this.location.y - particle.location.y));
		// let dist = force.mag();
		let dist = mag(force);
		normalize(force);
		const G = 0.4;	// gravity
		let strength = (G * this.mass * particle.mass) / (dist * dist);
		mult(force, strength);
		return force;
	}
	_animate() {
		this._display();
		this._update();
		requestAnimationFrame(this._animate.bind(this), this.ctx);
	}
}
export default Attractor;