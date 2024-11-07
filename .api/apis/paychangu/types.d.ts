import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type LevelReferenceBodyParam = FromSchema<typeof schemas.LevelReference.body>;
export type LevelReferenceResponse200 = FromSchema<typeof schemas.LevelReference.response['200']>;
export type LevelReferenceResponse400 = FromSchema<typeof schemas.LevelReference.response['400']>;
