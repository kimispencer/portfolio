import Vector from './Vector';

class Attractor {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');

		this.location = new Vector(this.ctx.canvas.width/2, this.ctx.canvas.height/2);
		this.radius = 20;
		this.mass = this.radius;
	}
	_init() {
	}
	_display() {
		this.ctx.beginPath();
		this.ctx.arc(this.location.x, this.location.y, this.radius, Math.PI*2, false);
		this.ctx.fillStyle = "red";
		this.ctx.fill();
	}
	_update() {

	}
	_attract(particle) {
		let force = this.location.sub(particle.location);
		// let force = new Vector((this.location.x - particle.location.x), (this.location.y - particle.location.y));
		console.log(force)
		// let dist = force.mag();
		// const G = 0.4;	// gravity
		// let strength = (G * this.mass * particle.mass) / (dist * dist);
		return force;
	}
	_animate() {
		this._display();
		this._update();
		requestAnimationFrame(this._animate.bind(this), this.ctx);
	}
}
export default Attractor;