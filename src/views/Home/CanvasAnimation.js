import React from 'react';
import './CanvasAnimation.css';

class CanvasAnimation extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
    	const ctx = this.refs.canvas.getContext('2d');
    	const w = 500;
    	const h = 500;

    	const N = 10;
    	let particles = Array.apply(null, {length: N}).map(() => {
    		return new createParticle();
    	});

    	function createParticle() {
    		this.x = Math.random()*w;
    		this.y = Math.random()*h;

    		this.vx = Math.random()*10;
    		this.vy = Math.random()*10;

    		this.color = "rbga(255,255,255,1)";
    		this.radius = 1;
    	}
    	function draw() {
    		ctx.fillStyle = "rgba(0, 0, 0, .1)";
    		ctx.fillRect(0, 0, w, h);
	    	particles.map((p, i) => {
	    		ctx.beginPath();
	    		ctx.arc(p.x, p.y, p.radius, Math.PI*2, false);
	    		ctx.fillStyle = "rgba(255,255,255,1)";
				ctx.fill();

				p.x += p.vx;
				p.y += p.vy;

				//To prevent the balls from moving out of the canvas
				if(p.x < -p.radius) p.x = w+p.radius;
				if(p.y < -p.radius) p.y = h+p.radius;
				if(p.x > w+p.radius) p.x = -p.radius;
				if(p.y > h+p.radius) p.y =  -p.radius;

	    	});
    	}
    	setInterval(draw, 60);
    }
    render() {
        return (
            <canvas className="CanvasAnimation" ref="canvas" />
        );
    }
}
export default CanvasAnimation;