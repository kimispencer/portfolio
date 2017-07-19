import React from 'react';
import Particle from './Particle';
import Attractor from './Attractor';

class ParticleType extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
    	let w = window.innerWidth;
    	let h = window.innerHeight;

    	// setup canvas
    	const canvas = this.refs.canvas;
    	const ctx = canvas.getContext('2d');
		ctx.canvas.width  = w;
		ctx.canvas.height = h;

    	const particle_num = 1;
    	let particles = Array.apply(null, {length: particle_num}).map(() => {
    		let x = Math.random()*10;
    		let y = Math.random()*10;
    		return new Particle(canvas, x, y);
    	});
    	let a = new Attractor(canvas);


    	function draw() {
			ctx.fillStyle = "rgba(0, 0, 0, .1)";
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	    	// run animation
	    	a._update();
	    	a._display();
	    	for (let p of particles) {
		    	let f = a._attract(p);
		    	p._applyForce(f);
	    		p._update();
	    		p._display();
	    	}
			requestAnimationFrame(draw);
    	}
		requestAnimationFrame(draw);
    }
    render() {
        return (
            <canvas className="ParticleType" ref="canvas" />
        );
    }
}
export default ParticleType;