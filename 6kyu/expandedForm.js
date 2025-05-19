const expandedForm = n => n.toString()// Convert number to string
                            .split("")// Split into individual digits
                            .reverse()// Reverse to start from ones place
                            .map( (a, i) => a * Math.pow(10, i))// Multiply each digit by its place value
                            .filter(a => a > 0)   // Remove zeros
                            .reverse()            // Reverse back to original order
                            .join(" + ");         // Join with " + "