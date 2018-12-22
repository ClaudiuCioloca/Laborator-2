function animal = function(color,type){
    this.color = color;
    this.type = type;
};

animal.prototype.getColor = function(){
	return this.color;
};

//fish
function fish = function(color,type,fishType){
	animal.call(this.color, type);
	his.fishType = fishType;
};

fish.prototype = Object.create(Animal.prototype);

fish.prototype.constructor = Fish;

fish.prototype.getFishType = function() 
{
    return this.fishType;
};

function dog(color,type,dogType) 
{
    Animal.call(this,color, type);
    this.dogType = dogType;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.getdogType = function() 
{
    return this.dogType;
};


function dogType(typeName,furColor) 
{
	this.furColor = furColor;
    this.typeName = typeName;
    
}

DogType.prototype.getFurColor = function() {
    return this.furColor;
};
