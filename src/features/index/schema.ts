import * as z from "zod"

export const schema = z.object({
  desired_pickup_date: z.string().min(1),
  desired_pickup_period: z.string().min(1),
  number_of_trucks: z.coerce.number().min(1),
  kind_of_truck: z.string().min(1),
  site_name: z.string().min(1),
  site_address: z.string().min(1),
  cargo_details: z.string().min(1),
  requester_company_name: z.string().min(1),
  requester_name: z.string().min(1),
  requester_phone: z.string().min(1),
  requester_email: z.string().email(),
  comment: z.string().optional(),
  agree_privacy_policy: z.literal(true)
})

export type Schema = z.infer<typeof schema>
