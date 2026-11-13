export const dynamic = "force-dynamic";

// Temporary diagnostic: true/false only, never values. Delete when login works.
export async function GET() {
  return Response.json({
    MONGODB_URI: Boolean(process.env.MONGODB_URI),
    JWT_SECRET: Boolean(process.env.JWT_SECRET),
  });
}
