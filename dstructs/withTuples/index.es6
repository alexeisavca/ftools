import compose from "../../func/compose";
import tuples2obj from "../tuples2obj";
import obj2tuples from "../obj2tuples";

export default (obj, cb) => compose(tuples2obj, cb, obj2tuples)(obj);