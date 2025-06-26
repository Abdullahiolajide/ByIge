const Blog = require('../Model/blogs')

const createBlog = async (req, res)=>{

   try{
    const {title, content, userId} = req.body
    const imageUrl = req.file?.path || '';
    const blog = await Blog.create({
        title,
        content,
        imageUrl,
        userId
    })
    console.log(blog)
    res.status(201).json({
        message:"Blog created Successfully",
        blog
    })
   }
   catch(error){
    console.log("Error creating Blog", error.message)
    res.status(500).json({messsage: "Error Creating Blog", error:error.message})
   }

}

const getBlogs = async (req, res)=>{
    try{
        const blogs = await Blog.find({}).populate('userId');
        res.status(200).json({messsage:"success", data:blogs})
    }
    catch(error){
         console.log("Error fetching Blog", error.message)
         res.status(500).json({messsage: "Error fetching Blog", error:error.message})
    }


}

const myBlogs = async (req, res)=>{
   try{
        const blogs = await Blog.find({userId:req.params.id}).populate('userId');
        res.status(200).json({messsage:"success", data:blogs})
    }catch(error){
        console.log("Error fetching Blog", error.message)
         res.status(500).json({messsage: "Error fetching Blog", error:error.message})
    }


}

const getBlog = async (req, res)=>{
    try{
        const blogs = await Blog.findOne({_id:req.params.id}).populate('userId');
        res.status(200).json({messsage:"success", data:blogs})
    }catch(error){
        console.log("Error fetching Blog", error.message)
         res.status(500).json({messsage: "Error fetching Blog", error:error.message})
    }
}

const editBlog = async (req, res)=>{
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },   // only update fields passed in req.body
        { new: true }
        );

        res.status(200).json({ message: 'Blog updated', data: updatedBlog });
    } catch (err) {
        res.status(500).json({ message: 'Update failed', error: err.message });
    }
}

const deleteBlog = async (req, res)=>{
    try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
}

module.exports = {
    createBlog,
    getBlogs,
    getBlog,
    myBlogs,
    editBlog,
    deleteBlog
}