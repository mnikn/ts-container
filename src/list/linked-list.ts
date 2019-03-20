export class LinkNode<T> {
    public prev: LinkNode<T>
    public next: LinkNode<T>
    public val: T;

    constructor(val?: T, prev?: LinkNode<T>, next?: LinkNode<T>, ) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

export class LinkedList<T> {
    private _head: LinkNode<T> = new LinkNode<T>();
    private _tail: LinkNode<T> = new LinkNode<T>();

    constructor() {
        this._head.next = this._tail;
        this._tail.prev = this._head;
    }

    public get first() {
        return this._head.next;
    }

    public get last() {
        return this._tail.prev;
    }

    public get firstVal() {
        return this.first && this.first.val;
    }

    public get lastVal() {
        return this.last && this.last.val;
    }

    public push(val: T): void {
        const newNode = new LinkNode<T>(val, this._tail.prev, this._tail);
        this._tail.prev.next = newNode;
        this._tail.prev = newNode;
    }

    public remove(fn: (val: T) => boolean): void {
        let node = this.find(fn);
        node.next.prev = node.prev;
        node.prev.next = node.next;
        node = null;
    }

    public find(fn: (val: T) => boolean): LinkNode<T> {
        let cur = this.first;
        while(cur) {
            if (fn(cur.val)) return cur;
            cur = cur.next;
        }
        return null;
    }

    public findVal(fn: (val: T) => boolean): T {
        const node = this.find(fn);
        return node ? node.val : null;
    }

    public forEach(fn: (val: T) => void): void {
        let cur = this.first;
        while(cur.next) {
            fn(cur.val);
            cur = cur.next;
        }
    }

    public filter(fn: (val: T) => boolean): LinkedList<T> {
        const result = new LinkedList<T>();
        this.forEach(val => {
            if (fn(val)) result.push(val);
        });
        return result;
    }

    public map<U>(fn: (val: T) => U): LinkedList<U> {
        const result = new LinkedList<U>();
        this.forEach(val => result.push(fn(val)));
        return result;
    }

    public concat(val: T): LinkedList<T> {
        const result = new LinkedList<T>();
        this.forEach(result.push);
        result.push(val);
        return result;
    }
}