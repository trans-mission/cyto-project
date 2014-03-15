require(['jquery', 'classes/Coords'], function($, Coords) {

  var canvas  = document.getElementById('sketch'),
      ctx     = canvas.getContext('2d'),
      coords  = new Coords(),
      img1    = new Image(),
      img2    = new Image(),

      renderWidth  = 50,
      renderHeight = 800,

      sx = 0, //source x coord, where to start clipping
      sy = 0, //source y coord, where to start clipping
      sw, //width of clipped source image
      sh, //height of clipped source image

      dx, //x coord of where to place image on destination canvas
      dy; //y coord of where to place image on destination canvas

    canvas.width = $(window).width();
    canvas.height = $(window).height();

    window.resize = function() {
      canvas.width = $(window).width();
      canvas.height = $(window).height();
    }

    console.log("sketch loaded");

    img1.src = 'sketches/data/site1.png';
    

    img1.onload = function(e) {

      console.log("image 1 loaded");

      // sw = this.width;
      // sh = this.height;

      // dw = sw/10;
      // dh = sh/10;

      sw = dw = (this.width > renderWidth) ? renderWidth: this.width; 
      sh = dh = (this.height > renderHeight) ? renderHeight: this.height;

      dx = canvas.width/2 - (sw/2); //centering
      dy = canvas.height/2 - (sh/2); 

      //ctx.drawImage(img1,  0, 0);
      //console.log('loaded');
      ctx.drawImage(img1, sx, sy, sw, sh, dx, dy, dw, dh);

      img2.src = 'sketches/data/site2.png';
    }

    img2.onload = function(e) {

      console.log("image 2 loaded");

      // sw = this.width;
      // sh = this.height;

      // dw = sw/10;
      // dh = sh/10;

      sw = dw = (this.width > renderWidth) ? renderWidth: this.width; 
      sh = dh = (this.height > renderHeight) ? renderHeight: this.height;

      dx = dx + renderWidth
      dy = canvas.height/2 - (sh/2); 

      //ctx.drawImage(img1,  0, 0);
      //console.log('loaded');
      ctx.drawImage(img2, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  
});