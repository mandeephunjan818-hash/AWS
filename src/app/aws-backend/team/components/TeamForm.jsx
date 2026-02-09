"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import ImageInput from "@/lib/ImageUpload";
import { uploadPageFile } from "@/lib/uploadPageFile";
import { createTeamMember, getDistinctTeams, updateTeamMember } from "@/actions/team.actions";
import toast from "react-hot-toast";

export default function TeamForm({ initialData }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: initialData?.name || "",
        designation: initialData?.designation || "",
        image: initialData?.image || "",
        imageAlt: initialData?.imageAlt || "",
        imageUrl: initialData?.imageUrl || "",
        team: initialData?.team || ""
    });
    const [teams, setTeams] = useState(null);

    const uploadPage = async (file, filetype) => {
        const url = await uploadPageFile(file, filetype);
        setFormData((formData) => ({ ...formData, image: url?.url }));

        return url;
    }

    const handleChange = (field, value) => {
        setFormData((formData) => ({ ...formData, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(formData);
            if (initialData) {
                await updateTeamMember(initialData._id, formData);
                toast.success("Team member updated successfully!");
            } else {
                await createTeamMember(formData);
                toast.success("Team member created successfully!");
            }
            // router.push("/aws-backend/team");
        } catch (error) {
            console.error(error);
            toast.error(error.message || "Something went wrong!");
        }
    }

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const data = await getDistinctTeams();
                setTeams(data);
                console.log(data);
            } catch (err) {
                console.error(err);
                toast.error("Failed to load teams");
            }
        };

        fetchTeams();
    }, []);

    return (
        <form className="form-container grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Enter Name" />

                <label htmlFor="designation">Designation</label>
                <input type="text" id="designation" value={formData.designation} onChange={(e) => handleChange('designation', e.target.value)} placeholder="Enter Designation" />

                <label htmlFor="team">Team</label>

                <input
                    type="text"
                    id="team"
                    value={formData.team}
                    onChange={(e) => handleChange("team", e.target.value)}
                    placeholder="Enter or select a team"
                />

                <label htmlFor="team-select" className="mt-2 block text-sm font-medium">
                    Or select an existing team
                </label>

                <select
                    id="team-select"
                    defaultValue=""
                    onChange={(e) => handleChange("team", e.target.value)}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm
             focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                >
                    <option value="" disabled>
                        Select existing team
                    </option>

                    {teams?.length === 0 ? (
                        <option disabled>Loading teams...</option>
                    ) : (
                        teams?.map((team) => (
                            <option key={team} value={team}>
                                {team}
                            </option>
                        ))
                    )}
                </select>
            </div>
            <div>
                <ImageInput
                    uploadAction={(file) => uploadPage(file, "image")}
                    initialImage={formData.image}
                />
                <label htmlFor="imageAlt">Image Alt</label>
                <input type="text" id="imageAlt" value={formData.imageAlt} onChange={(e) => handleChange('imageAlt', e.target.value)} placeholder="Enter Image Alt" />
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}