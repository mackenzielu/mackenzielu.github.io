(function() {
  const svg = document.querySelector("svg");
  const settings = {
    animation: {
      duration: 7.5,
      circleCount: 10,
      heartCount: 8
    },
    circle: {
      x: 150,
      y: 150, 
      r: 150
    },
  }
  let layers = [];

  draw();
  animate();


  function draw() {
    for(let i = 0; i <= settings.animation.circleCount; i++) {
      let layer = document.createElementNS("http://www.w3.org/2000/svg", "g");
      let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

      circle.setAttribute("cx", settings.circle.x);
      circle.setAttribute("cy", settings.circle.y);
      circle.setAttribute("r", settings.circle.r);

      svg.append(layer);
      layer.append(circle);

      const length = circle.getTotalLength();
      const lengthDelta = circle.getTotalLength() / settings.animation.heartCount;
      let hearts = [];
      let offset = lengthDelta * (i % 2) / 2;

      for(let j = 0; j < settings.animation.heartCount; j++) {
        let point = circle.getPointAtLength(offset + lengthDelta * j);
        let heart = document.createElementNS("http://www.w3.org/2000/svg", "path");

        heart.setAttribute("d", `M ${point.x - 40},${point.y - 20} a 10,-10 0,0,1 40,0 a 10,-10 0,0,1 40,0 q 0,30 -40,60 q -40,-30 -40,-60 z`);

        hearts.push(heart);
        layer.append(heart);
      }

      layers.push({
        group: layer,
        circle: circle,
        hearts: hearts
      });
    }
  }

  function animate() {
    let tl = gsap.timeline();
    
    layers.forEach((layer, i) => {
      let direction = i % 2 ? 1 : -1;

      // Setting things

      gsap.set([layer.group, ...layer.hearts], {
        transformOrigin: "50% 50%",
        scale: 0,
      });

      gsap.set([...layer.hearts], {
        fill: "#ff5252"
      });

      // Animating things

      gsap.set(layer.circle, {
        strokeWidth: 0,
        stroke: "#40407a",
        fill: "none"
      });

      tl.to(layer.group, {
        duration: settings.animation.duration,
        scale: Math.SQRT2,
        delay: -settings.animation.duration / settings.animation.circleCount,
        repeat: -1,
        ease: "Power3.easeIn",
      }, "<");

      tl.to(layer.circle, {
        duration: settings.animation.duration,
        strokeWidth: 30,
        repeat: -1,
        ease: "Power3.easeOut",
      }, "<");

      tl.to([...layer.hearts], {
        keyframes: [
          {
            scale: 1,
            rotation: 360 * direction,
            duration: settings.animation.duration / 2,
            fill: "#ff5252"
          },
          {
            scale: 0,
            rotation: 720 * direction,
            duration: settings.animation.duration / 2,
            fill: "#ffda79"
          }
        ],
        ease: "linear",
        delay: 0,
        repeat: -1
      }, "<");
    });
  }
}());