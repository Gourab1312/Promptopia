import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async(req)=>{
    const { userId, prompt, tag } = await req.json();

    try{
        //we are calling connectToDB everytime since it is a lambda function, it dies once it's job is complete to again establish a connection we gotta call it again
        await connectToDB();
        const newPrompt = new Prompt({
            creator : userId,
            prompt,
            tag
        })

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt),{status:201})
    } catch(error){
        return new Response("Failed to create a new prompt.",{status : 500})
    }
}