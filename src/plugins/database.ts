import Vue from 'vue'
import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'

import seed from './seed'

const DB = {
  install(myvue: any, options: any) {
    const adapter = new FileSync('db/count.json')
    const db = lowdb(adapter)
    db.defaults(seed).write()
    myvue.prototype.$db = db
  }
}

Vue.use(DB)

export default DB
