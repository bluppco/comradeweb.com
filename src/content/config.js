import { z, defineCollection } from "astro:content"

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

const footerwRowCollection = defineCollection({

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

export const collections = {

    "footer-column": footerColumnCollection,
    "footer-row": footerwRowCollection,
    "footer-locations": footerLocationCollection,

}