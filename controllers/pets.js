// To communicate with the data base we need to do it through the model
import Pet from "../models/pets"

export const createPets = async (req, res) => {
    try {
         const createdPet = await Pet.create(req.body);
         res.status(201).json(createdPet)
    } catch(error) {
        res.status(500).json({ error: error.message})
    }
}

// export const getPets = async (req, res) => {
//     // logic here
// }

// export const getPets = async(req, res) => {
//     // logic here
// }
// export const updatePets = async(req, res) => {
//     // logic here
// }
// export const deletePets = async(req, res) => {
//     // logic here
// }
