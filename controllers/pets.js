// To communicate with the data base we need to do it through the model
import Pet from "../models/pets.js"

// GETS ALL PETS
export const getPets = async (req, res) => {
    try {
        const pets = await Pet.find({});
         res.status(201).json(pets);
    } catch(error) {
        res.status(500).json({ error: error.message});
    }
}

// GETS ONE PET
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

// CREATES A PET
export const createPets = async (req, res) => {
    try {
         const createdPet = await Pet.create(req.body);
         res.status(201).json(createdPet)
    } catch(error) {
        res.status(500).json({ error: error.message})
    }
}

// UPDATES A PET'S INFO
export const updatePet = async (req, res) => {
    try {
      const updatedPet = await Pet.findByIdAndUpdate(req.params.petId, req.body);
  
      if (!updatedPet) {
        res.status(404);
        throw new Error("Pet not found.");
      }
  
      res.status(200).json(updatedPet);
    } catch (error) {
      if (res.statusCode === 404) {
        res.json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  };

// DELETES A SINGLE PET
export const deletePet = async (req, res) => {
    try {
         const deletedPet = await Pet.findByIdAndDelete(req.params.petId);

         if (!deletedPet) {
            res.status(404)
            throw new Error("Pet not found");
         }

         res.status(200).json(deletedPet);
    } catch(error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message});
        } else {
            res.status(500).json({ error: error.message});
        }
    }
}
