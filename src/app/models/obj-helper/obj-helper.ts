import cloneDeep from "../../../../node_modules/lodash.clonedeep/index.js";

export class ObjHelper
{
	public static CloneDeep<T>(obj: T): T
	{
		return cloneDeep(obj);
	}
}
