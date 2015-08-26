var Bee = function() {
  //overwriting inherited properties;
  Grub.call(this, arguments)
  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing";
  
};

//bee inherits all the methods on the grub prototype. 

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
