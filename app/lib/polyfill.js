// fix for https://github.com/aldeed/node-simple-schema/issues/33
Array.includes = function (first, ...rest) {
  return Array.prototype.includes.apply(first, rest);
};
