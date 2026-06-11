export const Schema = z.object({
  世界: z.object({
    当前日期: z.string().prefault('1998-03-15'),
    当前场景: z.string().prefault('豪园餐厅'),
  }).prefault({}),
  梁思申: z.object({
    好感度: z.coerce.number().transform(v => _.clamp(v, 0, 200)).prefault(0),
    关系阶段: z.enum(['初识', '动摇', '越界', '沦陷']).prefault('初识'),
    背德感: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
    是否已越界: z.coerce.boolean().prefault(false),
  }).prefault({}),
  宋运辉: z.object({
    察觉度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(0),
  }).prefault({}),
}).prefault({});
export type Schema = z.output<typeof Schema>;
