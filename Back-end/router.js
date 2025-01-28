import { Router } from "express";
import * as request from './requestHandler.js'
import Auth from "./Middleware/auth.js";

const router=Router()

router.route('/addcountry').post(request.addCountry )
router.route('/getcountry').get(request.getCountry )
router.route('/getdatas/:id').get(request.getData )
router.route('/regester').post(request.userRegister )
router.route('/login').post(request.userLogin )
router.route('/createorder').post(request.createOrder)
router.route('/verify').post(request.verifyPayment)


export default router;