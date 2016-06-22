export default function(obj, cb){
  let res = {};
  Object.keys(obj).forEach(key => res[key] = cb(obj[key]));
  return res;
}