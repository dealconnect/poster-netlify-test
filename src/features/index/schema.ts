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

export const initialSchema: Schema = {
  desired_pickup_date: '2024-09-22',
  desired_pickup_period: 'am',
  number_of_trucks: 2,
  kind_of_truck: '平ボディ',
  site_name: 'OX金属株式会社 本社工場',
  site_address: '東京都千代田区飯田橋3丁目42-1',
  cargo_details: 'ロッカー30個',
  requester_company_name: 'サンプル株式会社',
  requester_name: '山田 太郎',
  requester_phone: '03-1234-5678',
  requester_email: 'sample@example.com',
  comment: '特に留意事項はありません。',
  agree_privacy_policy: false
}


export type Schema = z.infer<typeof schema>
