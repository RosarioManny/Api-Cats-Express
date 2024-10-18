import db from '../db/connection.js'
import pet from '../models/pets.js'

const insertData = async () => {
    await db.dropDatabase()

    const pets = [ 
        {
            name: "Go",
            age: 2,
            breed: "Lizard",
        }, 
        {
            name: "Lucky",
            age: 23,
            breed: "Parrot",
        },
        {
            name: "Cookie",
            age: 6,
            breed: "Hamster",
        }
    ];

    await pet.create(pets);

    console.log("Pets have enterd the Database!!")

    await db.close()
}

insertData()