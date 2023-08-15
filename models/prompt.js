import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId, //this specifies that the creator of a prompt is of type user
    ref: "User", // it will be a one to many relationship, one user can create many prompts
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});

//either get the prompt that already exists or make one using the prompt schema

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
