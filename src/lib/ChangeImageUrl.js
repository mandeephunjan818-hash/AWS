export default function getLocalImageUrl(fullUrl) {
    // This matches your Cloudinary base URL
    const cloudinaryBase = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/`;

    // If it's a Cloudinary URL, replace the base with /media
    if (fullUrl.startsWith(cloudinaryBase)) {
        return fullUrl.replace(cloudinaryBase, '/media/');
    }

    return fullUrl; // Return as-is if it's not a Cloudinary URL
};