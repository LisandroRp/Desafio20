import mongoose from 'mongoose'

class UserDao {

    constructor(nombreColeccion, esquema) {
        this.coleccion = mongoose.model(nombreColeccion, esquema, nombreColeccion)
    }

    getById(id) {
        return this.coleccion.find({ '_id': id })
    }

    getByUsername(username) {
        return this.coleccion.find({ 'username': username })
    }

    getAll() {
        return this.coleccion.find({}).lean()
    }

    save(user) {
        return this.coleccion.create(user)
    }

    update(user) {
        return this.coleccion.replaceOne({ '_id': user.id }, user)
    }

    deleteById(id) {
        return this.coleccion.deleteOne({ '_id': id })
    }

    deleteAll() {
        return this.coleccion.deleteMany({})
    }
}
export default UserDao