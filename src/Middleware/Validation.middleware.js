const isStringsArray = arr => arr.every(i => typeof i === "string")

const Validation = (req, res, next) =>{
    const {id, Name,rating, des, genre, cast } = req.body;
    console.log(req.body);
    // try{
       if(typeof(id) === "number" && typeof(Name) === "string" && typeof(rating) === "number" &&
       typeof(des) === "string" && typeof(genre) === "string" && isStringsArray(cast)  ) {
        next();
       }else{
       console.log("hello")
       res.status(400).send("Data is missing or incorrect")
       }
       // }

    // catch(e){
    // }
}

module.exports = Validation;