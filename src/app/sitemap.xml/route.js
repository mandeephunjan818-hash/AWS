import { getBusinessCategory } from "@/actions/businessCategory.actions";
import { getBusinessFunding } from "@/actions/businessFunding.actions";
import { getCaseStudies } from "@/actions/caseStudy.actions";
import { getCommercialFinances } from "@/actions/commercialFinance.actions";
import { getInsurance } from "@/actions/insurance.actions";
import { getMortage } from "@/actions/mortgage.actions";
import { getNewsStudies } from "@/actions/newStudy.actions";
import { getSubInsurance } from "@/actions/subInsurance.actions";
import { getSubMortgage } from "@/actions/subMortgage.actions";

// app/api/sitemap/route.js
export async function GET() {

  try {

    const BussinessCatagory = await getBusinessCategory();
    const BussinessFunding = await getBusinessFunding();
    const CaseStudy = await getCaseStudies();
    const CommercialFinanace = await getCommercialFinances();
    const Insurance = await getInsurance();
    const Mortagage = await getMortage();
    const NewsStudy = await getNewsStudies();
    const SubInsurance = await getSubInsurance();
    const SubMortgage = await getSubMortgage();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://aws-privatefinance.co.uk/</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/mortgages</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/commercial-finance</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/insurance</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/business-finance</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/news</loc>
  <lastmod>2026-02-06T06:05:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/case-studies</loc>
  <lastmod>2026-02-05T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/about-us</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/contact-us</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
${Array.isArray(Mortagage?.data) && Mortagage?.data.map(Mortagage => `
  <url>
    <loc>https://aws-privatefinance.co.uk/mortgages/${Mortagage.slug}</loc>
    <lastmod>2026-02-06T15:45:52.480Z</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
  `).join('')}
${Array.isArray(CaseStudy?.studies) && CaseStudy?.studies.map(CaseStudy => `
  <url>
    <loc>https://aws-privatefinance.co.uk/case-studies/${CaseStudy.slug}</loc>
    <lastmod>${CaseStudy.updatedAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
  `).join('')}
${Array.isArray(NewsStudy?.studies) && NewsStudy.studies?.map(NewsStudy => `
  <url>
    <loc>https://aws-privatefinance.co.uk/news/${NewsStudy.slug}</loc>
    <lastmod>${NewsStudy.updatedAt}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>
  `).join('')}
<url>
  <loc>https://aws-privatefinance.co.uk/stamp-duty-calculator</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/AWS-Financial-Services-The-How-to-All-you-need-to-know-to-own-a-property.pdf</loc>
  <lastmod>2026-02-06T06:03:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/About-AWS-Financial-Services.pdf</loc>
  <lastmod>2026-02-06T06:03:47+00:00</lastmod>
  <priority>0.80</priority>
</url>
${Array.isArray(SubMortgage?.data) && SubMortgage.data?.map(SubMortgage => `
  <url>
    <loc>https://aws-privatefinance.co.uk/mortgages/${SubMortgage.category}/${SubMortgage.slug}</loc>
    <lastmod>${SubMortgage.updatedAt ? new Date(SubMortgage.updatedAt).toISOString().replace(/\.\d{3}Z$/, '+00:00') : ''}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
<url>
  <loc>https://aws-privatefinance.co.uk/services</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://aws-privatefinance.co.uk/your-rights</loc>
  <lastmod>2026-02-06T06:04:21+00:00</lastmod>
  <priority>0.80</priority>
</url>
${Array.isArray(CommercialFinanace?.data) && CommercialFinanace.data?.map(CommercialFinanace => `
  <url>
    <loc>https://aws-privatefinance.co.uk/commercial-finance/${CommercialFinanace.slug}</loc>
    <lastmod>2026-02-06T06:04:21+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.64</priority>
  </url>
  `).join('')}
${Array.isArray(Insurance.data) && Insurance.data?.map(Insurance => `
  <url>
    <loc>https://aws-privatefinance.co.uk/insurance/${Insurance.slug}</loc>
    <lastmod>2026-02-06T06:04:21+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.64</priority>
  </url>
  `).join('')}
  ${Array.isArray(SubInsurance?.data) && SubInsurance.data?.map(SubInsurance => `
  <url>
    <loc>https://aws-privatefinance.co.uk/insurance/${SubInsurance.category}/${SubInsurance.slug}</loc>
    <lastmod>2026-02-06T06:04:21+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.51</priority>
  </url>
  `).join('')}
  ${Array.isArray(BussinessCatagory?.data) && BussinessCatagory.data?.map(BussinessCatagory => `
  <url>
    <loc>https://aws-privatefinance.co.uk/business-finance/${BussinessCatagory.slug}</loc>
    <lastmod>2026-02-06T06:04:21+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('')}
${Array.isArray(BussinessFunding?.data) && BussinessFunding.data?.map(BussinessFunding => `
  <url>
    <loc>https://aws-privatefinance.co.uk/business-finance/${BussinessFunding.cate === "67f7a130bb68239130acb53a" ? "healthcare-finance" : "business-funding"}/${BussinessFunding.slug}</loc>
    <lastmod>2026-02-06T06:04:21+00:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.64</priority>
  </url>
  `).join('')}
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
      }
    });

  } catch (error) {
    console.error('Sitemap generation error:', error);

    // Return error in XML format
    const errorSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<error>
  <message>Failed to generate sitemap [ ${error}  ] </message>
  <timestamp>${new Date().toISOString()}</timestamp>
</error>`;

    return new Response(errorSitemap, {
      status: 500,
      headers: {
        'Content-Type': 'application/xml'
      }
    });
  }
}
