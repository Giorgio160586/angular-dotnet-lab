
// url-storage.ts
export class URLStorage implements Storage {
  constructor(private paramKeyPrefix = 'prime.store') {}

  get length(): number {
    const url = new URL(window.location.href);
    return Array.from(url.searchParams.keys()).filter(k => k.startsWith(`${this.paramKeyPrefix}.`)).length;
  }

  clear(): void {
    const url = new URL(window.location.href);
    Array.from(url.searchParams.keys())
      .filter(k => k.startsWith(`${this.paramKeyPrefix}.`))
      .forEach(k => url.searchParams.delete(k));
    window.history.replaceState({}, '', url.toString());
  }

  getItem(key: string): string | null {
    const url = new URL(window.location.href);
    return url.searchParams.get(`${this.paramKeyPrefix}.${key}`);
  }

  key(index: number): string | null {
    const url = new URL(window.location.href);
    const keys = Array.from(url.searchParams.keys()).filter(k => k.startsWith(`${this.paramKeyPrefix}.`));
    const name = keys[index];
    return name ? name.replace(`${this.paramKeyPrefix}.`, '') : null;
  }

  removeItem(key: string): void {
    const url = new URL(window.location.href);
    url.searchParams.delete(`${this.paramKeyPrefix}.${key}`);
    window.history.replaceState({}, '', url.toString());
  }

  setItem(key: string, value: string): void {
    console.log("[URLStorage] setItem", {key,value})
    const url = new URL(window.location.href);
    url.searchParams.set(`${this.paramKeyPrefix}.${key}`, value);
    window.history.replaceState({}, '', url.toString());
  }

  [name: string]: any;
}
