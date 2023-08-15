import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

//params basically carries the dynamic id that we pass using the next file name
export const GET = async (request, {params}) =>{
    try{
        await connectToDB();

        //and we are using that id to populate the data of the only the user that is logged in
        const prompts = await Prompt.find({
            creator : params.id
        }).populate('creator'); 
        //this basically means find all posts and populate that with the creator who created it

        return new Response(JSON.stringify(prompts),{status : 200})
    } catch(error){
        return new Response("Failed to fetch all prompts", {status : 500})
    }
}