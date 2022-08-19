import { getQuotes } from "./getQuotes"


describe("test the get function", ()=> {
    test("Get Single Quote", async () => {
        const data = await getQuotes();
        expect(typeof data).toBe('object');
        expect(data[0]).toHaveProperty('quote');
        expect(data[0]).toHaveProperty('character');
        expect(data[0]).toHaveProperty('image');
    })

    test("Get Quote from character", async () => {
        const data = await getQuotes("homer");
        expect(typeof data).toBe('object');
        expect(data[0]).toHaveProperty('quote');
        expect(data[0]).toHaveProperty('character', 'Homer Simpson');
        expect(data[0]).toHaveProperty('image', 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939');
    })
})