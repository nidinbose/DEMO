import countrySchema from './Modeles/country.model.js'
import pkg from 'jsonwebtoken'

export async function addCountry(req,res) {
    try {
        const { Country, photo, Visitvisa, Studyvisa, Workvisa } = req.body;
        if (!(Country && photo && Visitvisa && Studyvisa && Workvisa)) {
            return res.status(400).json({ error: "Invalid input of data. All fields are required." });
        }
        await countrySchema.create({ Country, photo, Visitvisa, Workvisa, Studyvisa });
        return res.status(200).json({ message: "Country created successfully." });
    } catch (error) {
        console.error("Error in addCountry:", error.message);
        return res.status(500).json({ error: "An error occurred while creating the country." });
    }
}

export async function getCountry(req,res){
    try {
        const data=await countrySchema.find({}).then((data)=>{
            return res.status(200).send(data)
        
        })

        if(!data)
            return res.status(400).send("error in getting country")

    } catch (error) {
        return res.status(500).send("error in getting data")
    }
}

export async function getData(req,res){

    try {
        const {id}=req.params;

        const data=await countrySchema.findOne({_id:id}).then((data)=>{
            return res.status(201).send(data)
        })
    } catch (error) {
        return res.status(500).send("internal server error")
    }
}