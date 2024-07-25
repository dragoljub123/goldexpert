import { type SchemaTypeDefinition } from 'sanity'
import { post } from './schemas/post'
import { tag } from './schemas/tag'
import { formSubmission } from './schemas/formSubmission'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,tag,formSubmission],
}
