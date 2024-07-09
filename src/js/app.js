export default class Character {
    constructor(name, type) = {
        if typeof (name) != 'string' || name.length < 2 || name.length > 10 {
            throw new Error('Выберите другое имя')
        }
        if (!typeof.includes(type)) {
            throw new Error('Такой тип персонажа не существует')
        }
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    
}