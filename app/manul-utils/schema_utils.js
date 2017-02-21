
import _ from 'lodash';


export const mapOption = ({ _id, name }) => ({ value: _id, label: name });

export const mapOptionsWithChildren = (collection, parentId = null, map = mapOption) =>
  // TODO: mapOptionsWithChildren is not final, you currently can't customize the selector or the sorting

   collection.find({ parentId }).map(doc => ({
     ...map(doc),
     children: mapOptionsWithChildren(collection, doc._id, map),
   }));

export const extendWithOptions = ({ SimpleSchema }, schema, mapping) => {
  const newSchema = new SimpleSchema([
    schema, _.mapValues(mapping, (options, key) => {
      const def = schema.getDefinition(key);
      return {
        ...def,
        uniforms: { ...def.uniforms, options },
      };
    }),
  ]);
  // simple schema does not pass the custom messages. So we do this here:
  newSchema.messages(schema._messages);
  return newSchema;
};

/**
  Ye olde SimpleSchema has some issues with picking fields from subdocs
  https://github.com/aldeed/meteor-simple-schema/issues/514

  this helps with it it
**/

export const getSubFieldKeys = (schema, path) => {
  const allKeys = schema._schemaKeys; // better than schema.objectKeys()
  // get all keys where path is a prefix
  const subKeys = _.filter(allKeys, key => key.indexOf(path) === 0);
  if (subKeys.length === 0) {
    return [path];
  }
  return subKeys;
};
/**
fixes other problems with SimpleSchema.pick like lost translations
**/
export const pick = (schema, paths) => {
  const newSchema = schema.pick(_.flatten(paths.map(path => getSubFieldKeys(schema, path))));
  newSchema.messages(schema._messages);
  return newSchema;
};


export const extendSchemaOptions = ({ Match, SimpleSchema }) => SimpleSchema.extendOptions({
  resolveOptions: Match.Optional(Function),
});

export default ({ SimpleSchema, Match }) => {
  // TODO: move translateSchema here?
  console.warn('using schema_utils as service is deprecated, just import it');

  return {
    getSubFieldKeys,
    pick,
    mapOptionsWithChildren,
    extendWithOptions: (...params) => extendWithOptions({ SimpleSchema }, ...params),
    mapOption,
    extendSchemaOptions: extendSchemaOptions({ SimpleSchema, Match }),
  };
};
