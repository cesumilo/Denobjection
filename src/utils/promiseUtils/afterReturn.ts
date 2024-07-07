import { isPromise } from './isPromise.ts';

// Return `returnValue` after `obj` has been resolved. Return `returnValue`
// synchronously if `obj` is not a promise for performance reasons.
export function afterReturn<T, U>(obj: T, returnValue: U): U | Promise<U> {
	if (isPromise(obj)) {
		return obj.then(() => returnValue);
	} else {
		return returnValue;
	}
}
