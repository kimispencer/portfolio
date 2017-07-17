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

    	function createParticle(hex) {
    		this.x = Math.random()*w;
    		this.y = Math.random()*h;

    		this.vx = Math.random()*10;
    		this.vy = Math.random()*10;

			this.color = hex ? this.color = hex : this.color = "rbga(255,255,255,1)";
			this.radius = Math.random()*4;
    	}

    	function createAttractor() {
			//draw a circle
			ctx.beginPath();
			ctx.arc(w/2, h/2, 10, 0, Math.PI*2, true); 
			ctx.closePath();
			ctx.fillStyle = "rgba(255,0,0,1)";
			ctx.fill();
    	}

    	function draw() {
    		createAttractor();

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
    	setInterval(draw, 60);
    }
    render() {
        return (
            <canvas className="CanvasAnimation" ref="canvas" />
        );
    }
}
export default CanvasAnimation;