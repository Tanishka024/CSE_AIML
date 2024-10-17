// Importing named exports
import { add, subtract, PI } from "./script.js";

import * as jadoo from "./script.js";

// Importing default export
import multiply from "./script.js";

export { add, subtract, PI, multiply };
console.log("Add: ", jadoo.add(5, 3));
console.log("Subtract: ", jadoo.subtract(5, 3));
console.log("PI: ", jadoo.PI);
console.log("Multiply: ", multiply(5, 3));