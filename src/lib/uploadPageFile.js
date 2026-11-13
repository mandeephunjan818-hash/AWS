import { uploadToCloudinary } from "./uploadImage";

export async function uploadPageFile(file, type) {
  try {
    const result = await uploadToCloudinary(
      file,
      type === "pdf" ? "raw" : "image"
    );
    return {
      success: true,
      url: result.url,
      report: result.report || {
        originalSize: result.originalSize,
        format: result.format,
      },
      type,
    };
  } catch (error) {
    console.error("Upload Error:", error);
    return { success: false, error: error.message };
  }
}
