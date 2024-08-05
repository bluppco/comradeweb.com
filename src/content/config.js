import { z, defineCollection } from "astro:content"

const headerCollection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
    
	})
  
})
const headerhoverwhoweserveCollection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
    
	})
  
})
const headerhoverservicescolumn1Collection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
    
	})
  
})
const headerhoverservicescolumn2Collection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
    
	})
  
})
const headerhoverservicescolumn3Collection = defineCollection({
  
	schema: z.object({
		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),
    
	})
  
const footerColumnCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        order: z.number(),
        live : z.boolean(),
        items: z.array(

            z.object({
				title: z.string(),
                live: z.boolean(),
                order: z.number(),
				link: z.string(),
			})

        ),

    })

})

const footerRowCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        order: z.number(),
        link: z.string(),
        live : z.boolean(),

    })

})

const footerLocationCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        order: z.number(),
        link: z.string(),
        live : z.boolean(),
		
	}),
})

const footerSocialCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        order: z.number(),
        link: z.string(),
        logo: z.string(),
        live : z.boolean(),
		
	}),
})

const footerCompanyInfoCollection = defineCollection({

    schema: z.object({

        title: z.string(),
        order: z.number(),
        link: z.string(),
        live : z.boolean(),
		
	}),

})

export const collections = {

    "header": headerCollection,
	  "header-hover-who-we-serve": headerhoverwhoweserveCollection,
    "header-hover-services-column-1": headerhoverservicescolumn1Collection,
    "header-hover-services-column-2": headerhoverservicescolumn2Collection,
    "header-hover-services-column-3": headerhoverservicescolumn3Collection,
    "footer-column": footerColumnCollection,
    "footer-row": footerRowCollection,
    "footer-locations": footerLocationCollection,
    "footer-socials": footerSocialCollection,
    "footer-company-info": footerCompanyInfoCollection,
}
