import { Router } from "express";
import * as controllers from "../controllers/pets.js";

const router = Router();

// SEE ALL PETS
router.get('/', controllers.getPets);
// // SEE ONE PET
// router.get('/:petId', controllers.getPets);
// CREATE A NEW PET
router.post('/', controllers.createPets);
// // UPDATE A PET
// router.put('/:petId', controllers.updatePets);
// // DELETE A PET 
// router.delete('/:petId', controllers.deletePets);

export default router;

