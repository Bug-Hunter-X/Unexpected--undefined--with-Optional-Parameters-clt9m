# Unexpected 'undefined' with Optional Parameters in TypeScript

This example demonstrates a common issue in TypeScript where optional parameters default to `undefined` if not provided.  This can lead to unexpected behavior if not explicitly handled.

The `printName` function takes an optional string parameter `name`. If the function is called without providing a value for `name`, it will still execute but print 'undefined'.

The solution shows how to provide a default value or perform a null check to prevent this behavior.