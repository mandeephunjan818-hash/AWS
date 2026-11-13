export async function uploadToCloudinary(file, fileType = "image") {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || ""
    );

    const resourceType = fileType === "raw" ? "raw" : "image";
    const uploadUrl = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`;

    const response = await fetch(uploadUrl, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Upload failed");
    }

    return {
      public_id: data.public_id,
      url: data.secure_url,
      width: data.width,
      height: data.height,
      format: data.format,
      size: file.size,
    };
  } catch (error) {
    console.error("Upload Error:", error);
    throw error;
  }
}
