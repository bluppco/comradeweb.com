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
  
})

export const collections = {

    "header": headerCollection,
	"header-hover-who-we-serve": headerhoverwhoweserveCollection,
    "header-hover-services-column-1": headerhoverservicescolumn1Collection,
    "header-hover-services-column-2": headerhoverservicescolumn2Collection,
    "header-hover-services-column-3": headerhoverservicescolumn3Collection,

}
