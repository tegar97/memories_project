import PostMessage from "../models/postMessage.js"


export const getPost = async (req,res) =>{
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(
            postMessages
        )
    } catch (error) {
        res.status(404).json({message: error})
    }
}

export const createPost = async (req,res) =>{
    const post = req.body
    console.log(post)
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(
            newPost
        )
    } catch (error) {
        res.status(409).json({message: error})
        
    }
}
export const updatePost = async (req,res) =>{


   console.log( req.params.id)
    try {
        const post = await PostMessage.findByIdAndUpdate({_id :  req.params.id},req.body)
        res.status(200).json({
            success: true
        })

    } catch (error) {
        res.status(409).json({message: error})
        
    }
}