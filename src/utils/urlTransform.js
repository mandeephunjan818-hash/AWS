// utils/urlTransform.js
export function getCustomUrl(cloudinaryUrl) {
  if (!cloudinaryUrl) return '';
  
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dsttrodog';
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://aws-privatefinance.co.uk';
  
  // Already a custom URL? Return as is
  if (cloudinaryUrl.includes(appUrl)) {
    return cloudinaryUrl;
  }
  
  // Transform: res.cloudinary.com/dsttrodog/ → yourdomain.com/media/
  return cloudinaryUrl.replace(
    `https://res.cloudinary.com/${cloudName}/`,
    `${appUrl}/media/`
  );
}