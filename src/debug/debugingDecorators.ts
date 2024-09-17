

export function METHOD_LOG(enabled: boolean) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        // Save the original method to call it later
        const originalMethod = descriptor.value;

        // Replace the method with a new function
        descriptor.value = function (...args: any[]) {

            // Check if logging is enabled
            if (enabled) {

                // Log the class name, method name and the arguments passed to the method
                console.log(`Class: ${target.constructor.name}, Method: ${propertyKey}, Arguments: `, args);

                // // Log the arguments passed to the method
                // console.log('Arguments:', args);

            }

            // Call the original method with the provided arguments and save the result
            const result = originalMethod.apply(this, args);

            // If logging is enabled, log the result of the method
            if (enabled && result !== undefined) {
                console.log('Result:', result);
            }

            // Return the result of the original method
            return result;
        };

        // Return the modified descriptor
        return descriptor;
    };

}
