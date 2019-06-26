class Point{
    constructor(){
        this.s = 'lala'
    }

    toString(){
        console.log(this.s);
    }
}

var point = new Point();
point.toString();

console.log(Object.getPrototypeOf(point) === point.__proto__);

var a = {};
var b = 3000;
Object.defineProperty(a,'pb',{
    get:function(){
        console.log('取值');
        return b;
    },
    set:function(value){
        b = value;
        console.log('设置');
    }
})

var o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, "foo");
console.log(d);


