// To communicate with the data base we need to do it through the model
import Pet from "../models/pets.js"

export const getPets = async (req, res) => {
    try {
        const pets = await Pet.find({});
         res.status(201).json(pets);
    } catch(error) {
        res.status(500).json({ error: error.message});
    }
}

export const getPet = async (req, res) => {
    try {
         const foundPet = await Pet.findById(req.params.petId);

         // If pet is false (null) it FORCES error
         if (!foundPet) {
            res.status(404)
            throw new Error("Pet not found");
         }

         res.status(200).json(foundPet);
    } catch(error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message});
        } else {
            res.status(500).json({ error: error.message});
        }
    }
}

export const createPets = async (req, res) => {
    try {
         const createdPet = await Pet.create(req.body);
         res.status(201).json(createdPet)
    } catch(error) {
        res.status(500).json({ error: error.message})
    }
}

// export const updatePets = async(req, res) => {
//     // logic here
// }
// export const deletePets = async(req, res) => {
//     // logic here
// }
