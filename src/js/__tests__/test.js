import Character  from "../app";
import Bowman from "../bowman";
import Daemon from "../daemon";
import Magician from "../magician";
import Swordsman from "../swordsman";
import Undead from "../undead";
import Zombie from "../zombie";

test("testing Character error type", () => {
    expect(() => {
        const testDummy = new Character('Owen', 'Warlord');
    }).toThrowError('Такой тип персонажа не существует');
});

test("testing Character name sring", () => {
    expect(() => {
        const testDummy = new Character(1320, "Swordsman");
    }).toThrowError('Выберите другое имя');
});

test("testing Character long name", () => {
    expect(() => {
        const testDummy = new Character('LordOftheWorld', "Magician");
    }).toThrowError('Выберите другое имя');
});

test("testing Character short name error", () => {
    expect(() => {
        const testDummy = new Character('J', 'Undead');
    }).toThrowError('Выберите другое имя');
});

test("testing Character levelUp function", () => {
    const testDumy = new Zombie('Ross', 'Zombie');
    testDumy.levelUp();
    expect(testDumy).toEqual({
        name: 'Ross',
        type: 'Zombie',
        health: 100,
        level: 2,
        attack: 48,
        defence: 12,
    });
});

test("testing dead Character levelUp function error", () => {
    expect(() => {
        const testDummy = new Zombie('Ross', 'Zombie');
    testDummy.health = 0;
    testDummy.levelUp();
    }).toThrowError("Нельзя повысить левел умершего")
});

test("testing Character damage function", () => {
    const testDummy = new Daemon('Fagot', 'Daemon');
    testDummy.damage(20);
    expect(testDummy.health).toEqual(88);
});

test("testing Character damage error function", () => {
    expect(() => {
        const testDummy = new Daemon('Fagot', 'Daemon');
        testDummy.health = 0;
        testDummy.damage(5);
    }).toThrowError('game over');
});

test("testing Bowman class", () => {
    const testBowman = new Bowman('Jack', 'Bowman');
    expect(testBowman).toEqual({
        name: 'Jack',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
});

test("testing Daemon class", () => {
    const testDeamon = new Daemon('Groot', 'Daemon');
    expect(testDeamon).toEqual({
        name: 'Groot',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
});

test("testing Magician class", () => {
    const testMagician = new Magician('Hendelf', 'Magician');
    expect(testMagician).toEqual({
        name: 'Hendelf',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    })
});

test("testing Swordsman class", () => {
    const testSwordsman = new Swordsman('Arthur', 'Swordsman');
    expect(testSwordsman).toEqual({
        name: 'Arthur',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
});

test("testing Undead class", () => {
    const testUndead = new Undead('Ghost', 'Undead');
    expect(testUndead).toEqual({
        name: 'Ghost',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    })
});

test("testing Zombie class", () => {
    const testZombie = new Zombie('Warm', 'Zombie');
    expect(testZombie).toEqual({
        name: 'Warm',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    })
});