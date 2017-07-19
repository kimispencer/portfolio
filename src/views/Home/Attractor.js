var sub = require('vectors/sub-nd')
var mag = require('vectors/mag-nd')
var mult = require('vectors/mult-nd')
var div = require('vectors/div-nd')
var normalize = require('vectors/normalize-nd')

class Attractor {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');

		this.location = [this.ctx.canvas.width/2, this.ctx.canvas.height/2];
		this.radius = 50;
		this.mass = this.radius*5;

		this.G = 0.4;	// gravity
	}
	_init() {
	}
	_display() {
		this.ctx.beginPath();
		this.ctx.arc(this.ctx.canvas.width/2, this.ctx.canvas.height/2, this.radius, Math.PI*2, false);	// this should use this.location
		this.ctx.fillStyle = "red";
		this.ctx.fill();
	}
	_update() {

	}
	_attract(particle) {
		this.location = [this.ctx.canvas.width/2, this.ctx.canvas.height/2];	// this should be needed, should be set in constructor
		let force = sub(this.location, particle.location);
		// console.log('force START: ' + force)
		let dist = mag(force);
		normalize(force, 1);
		let strength = (this.G * this.mass * particle.mass) / (dist * dist);
		mult(force, strength);
		// console.log('force END: ' + force)
		return force;
	}
}
export default Attractor;