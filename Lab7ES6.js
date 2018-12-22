class animal 
{
    constructor(color,type) { 
        this.color = color;
        this.type=type;
    }
    
    getColor() { 
        return this.color;
    }
}

class fish extends Animal {
    constructor(color,type,fishType) {
        super(color,type);
        this.fishType=fishType;
    }
    
    getFishType() { 
        return this.fishType;
    }
}


class dogType 
{
    constructor(typeName,furColor) { 
        this.typeName = typeName;
        this.furColor=furColor;
    }
    
    getFurColor() { 
        return this.furColor;
    }
}

class dog extends animal {
    constructor(color,type,dogType) {
        super(color,type);
        this.dogType=dogType;
    }
    
    getDogType() { 
        return this.dogType;
    }
}