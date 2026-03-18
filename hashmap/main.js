class HashMap {
    constructor() {
        this.initialCapacity = 16;
        this.capacity = 16;
        this.loadFactor = 0.75;
        this.size = 0;
        this.buckets = [];
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        const MAX_INT = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % MAX_INT;
        }
        return hashCode % this.capacity;
    }



    get(key) {
        const hashed = this.hash(key);
        for (let n in this.buckets[hashed]) {
            if (key === this.buckets[hashed][n].key) {
                return this.buckets[hashed][n].value;
            }
        }
        return null;
    }

    has(key) {
        const hashed = this.hash(key);
        for (let n in this.buckets[hashed]) {
            if (key === this.buckets[hashed][n].key) {
                return true;
            }
        }
        return false;
    }

    shrink() {
        const size = this.size * 2;
        const threshold = test.capacity * test.loadFactor;
        if (size <= threshold) {
            let arrTemp = this.buckets;
            this.buckets = [];
            this.size = 0;
            if (this.capacity > this.initialCapacity) {
                this.capacity /= 2;
            }
            for (let n in arrTemp) {
                for (let i in arrTemp[n]) {
                    this.set(arrTemp[n][i].key, arrTemp[n][i].value)
                }
            }
        }

    }

    remove(key) {
        if (this.size > 0) {
            const hashed = this.hash(key);
            for (let n in this.buckets[hashed]) {
                if (key === this.buckets[hashed][n].key) {
                    this.buckets[hashed].splice(n, n + 1);
                    this.size--;
                    this.shrink();
                    return true;
                }
            }
            return false;
        }
        else {
            return false;
        }
    }

    length() {
        return this.size
    }

    set(key, value) {
        const threshold = this.capacity * this.loadFactor;

        const index = this.hash(key) % this.capacity;
        if (index < 0 || index >= this.capacity) {
            throw new Error("Trying to access index out of bounds");
        }

        if (this.buckets[index] === undefined || this.buckets[index].length === 0) {
            if (this.buckets[index] === undefined) {
                this.buckets[index] = [];
            }
            const bucket = { index, key, value };
            this.buckets[index].push(bucket);
            this.size++;
        }
        else {
            const colision = this.has(key)
            if (!colision) {
                const bucket = { index, key, value };
                this.buckets[index].push(bucket);
                this.size++;
            }
            else {
                this.remove(key);
                const bucket = { index, key, value };
                this.buckets[index].push(bucket);
                this.size++;
            }
        }

        if (this.size > threshold) {
            this.grow();
        }
    }

    grow() {
        let arrTemp = this.buckets;
        this.buckets = [];
        this.size = 0;
        this.capacity *= 2;
        for (let n in arrTemp) {
            for (let i in arrTemp[n]) {
                this.set(arrTemp[n][i].key, arrTemp[n][i].value)
            }
        }
    }

    clear() {
        this.buckets = [];
        this.size = 0;
    }

    keys() {
        let arrTemp = [];
        for (let n in this.buckets) {
            for (let i in this.buckets[n]) {
                arrTemp.push(this.buckets[n][i].key)
            }
        }
        return arrTemp;
    }

    values() {
        let arrTemp = [];
        for (let n in this.buckets) {
            for (let i in this.buckets[n]) {
                arrTemp.push(this.buckets[n][i].value)
            }
        }
        return arrTemp;
    }

    entries() {
        let arrTemp = [];
        for (let n in this.buckets) {
            for (let i in this.buckets[n]) {
                arrTemp.push([this.buckets[n][i].key, this.buckets[n][i].value])
            }
        }
        return arrTemp;
    }
}

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')