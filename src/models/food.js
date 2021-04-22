'use strict'

class Food {
    constructor() {
        this.id = 0;
        this.db = [];
    }
    create(obj) {
        let record = {
            id: ++this.id,
            record: obj
        }
        this.db.push(record);
        return record;
    }

    read(id) {
        if (id) {
            return this.db.find(record => record.id === id);
        } else {
            return this.db;
        }
    }
    update(id, obj) {
        let index = this.db.indexOf(this.read(id));
        this.db[index].record = obj
        return this.db[index];
    }

    delete(id) {
        let index = this.db.indexOf(this.read(id));
        delete this.db[index]
            return null;
        }
    
}

module.exports = Food;