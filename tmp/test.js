var f = function(arg1, arg2) {
	this.a = arg1;
	this.b = arg2;
};

f.prototype = {
//		constructor: f,
	c: 0,
	good: function() {
		this.c = this.a - this.b;
	}
}

var d = new f(3,1);
var e = new f(2,1);

d.good();
e.good();

f.prototype.c = 100;

var u = new f(2,2);

console.log(f);
console.log(d.c);
console.log(e.c);
console.log(u.c);