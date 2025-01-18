import { Router } from "express";
import * as request from './requestHandler.js'
import Auth from "./Middleware/auth.js";

const router=Router()

router.route('/addcountry').post(request.addCountry )
router.route('/getcountry').get(request.getCountry )
router.route('/getdatas/:id').get(request.getData )
router.route('/regester').post(request.userRegester )
router.route('/login').post(request.userLogin )

export default router;