import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  designation: {
    type: String,
    required: [true, "Designation is required"],
  },
  image: {
    type: String,
    required: [true, "Image is required"],
  },
  imageAlt: {
    type: String,
    required: [true, "Image alt is required"],
  },
  team: {
    type: String,
    required: true,
    trim: true,
    minlength: [1, "Team cannot be empty"],
  },
  order: {
    type: Number,
    default: 0,
  }, // this person's position within their team
  teamOrder: {
    type: Number,
    default: 0,
  }, // this team's position on the page (set the same value across all members of a team)
});

const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);
export default Team;