export class Locator {
    private static dictionary: Map<string, any> = new Map();
    static getService<T>(token: string): T {
        return this.dictionary.get(token);
    }
    static register(token, instance) {
        this.dictionary.set(token, instance);
    }
}