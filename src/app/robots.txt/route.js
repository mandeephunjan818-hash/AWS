export async function GET() {
    const robot = `
# Highly Optimized robots.txt for AWS Private Finance 

# Developed by SEO Expert - 2026 Strategy 

User-agent: * 

Disallow: /login/ 

Disallow: /aws-backend/ 

User-agent: *
Disallow: /cdn-cgi/
 
User-agent: * 

Disallow: /?s= 

Disallow: /search/  

Disallow: /refer/ 

Disallow: /goto/ 

Disallow: /cgi-bin/ 

Disallow: /author/ 

Disallow: */feed/ 

Disallow: */trackback/ 

Disallow: */embed/ 

User-agent: Adsbot-Google 

Allow: / 

User-agent: Googlebot-Mobile 

Allow: / 

User-agent: AhrefsBot 

Allow: / 

User-agent: BLEXBot 

Disallow: / 

User-agent: MJ12bot 

Disallow: / 
 
    `

    return new Response(robot, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
        }
    });

}