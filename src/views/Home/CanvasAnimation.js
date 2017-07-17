import React from 'react';
import './CanvasAnimation.css';

class CanvasAnimation extends React.Component {
    componentDidMount() {
        this.updateCanvas();
    }
    updateCanvas() {
    	const ctx = this.refs.canvas.getContext('2d');
    	let w = window.innerWidth;
    	let h = window.innerHeight;
		ctx.canvas.width  = w;
		ctx.canvas.height = h;

    	const num = 10;
    	let particles = Array.apply(null, {length: num}).map(() => {
    		return new createParticle();
    	});

    	function createParticle() {
    		this.x = Math.random()*w;
    		this.y = Math.random()*h;

    		this.vx = Math.random()*10;
    		this.vy = Math.random()*10;

    		this.color = "rbga(255,255,255,1)";
			this.radius = Math.random()*4;
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
				if (p.x<0 || p.x > w)
					p.vx = -p.vx;

				if (p.y < 0 || p.y > h)
					p.vy = -p.vy;
	    	});
    	}
    	/*
    	function attraction() {
    		// logic for attraction to text
    	}
    	function collisionDetetion() {

    	}
    	*/
    	setInterval(draw, 60);
    }
    render() {
        return (
            <canvas className="CanvasAnimation" ref="canvas" />
        );
    }
}
export default CanvasAnimation;