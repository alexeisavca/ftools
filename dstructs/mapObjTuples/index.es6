import withTuples from "../withTuples";

export default (obj, cb) => withTuples(obj, tuples => tuples.map(cb));
