import express from "express";
import { getDabbawala, getDabbawalas, updateDabbawala, addReview } from "../controllers/dabbawala.js";
import multer from 'multer';

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      // Specify the destination directory where files will be stored
      cb(null, 'uploads/'); // Change 'uploads/' to your desired directory
   },
   filename: function (req, file, cb) {
      // Define how the file should be named
      cb(null, file.originalname); // You can customize the file naming logic
   },
});

const upload = multer({ storage: storage });

const router = express.Router();

// update
// router.put("/", updateDabbawala);
router.put("/",upload.single('profilePicture'), updateDabbawala);

router.post("/addreview", addReview);


//get
router.get("/find/:id", getDabbawala);

//get all
router.get("/all", getDabbawalas);


// //delete
// router.delete("/:id", deleteDabbawala);
export default router