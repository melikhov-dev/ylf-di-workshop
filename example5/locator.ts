export class Locator {
    private static _dictionary: Map<string, any> = new Map();

    static register(token: string, instance: any) {
        this._dictionary.set(token, instance);
    }

    static getService<T>(token: string):T {
        return this._dictionary.get(token);
    }
}