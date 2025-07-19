let addBinary = function(a, b) {
    str1 = a.split("");
    str2 = b.split("");
    let carry = 0;

    // Pad shorter string
    // while (str1.length < str2.length) str1.unshift("0");
    // while (str2.length < str1.length) str2.unshift("0");

    for (let i = str2.length - 1; i >= 0; i--) {
        if (str2[i] == 1 && str1[i] == 0 || str2[i] == 0 && str1[i] == 1) {
            if (carry == 1) {
                str1[i] = "0";
                carry = 1;
            } else {
                str1[i] = "1";
                carry = 0;
            }
        } else if (str2[i] == 0 && str1[i] == 0) {
            if (carry == 1) {
                str1[i] = "1";
                carry = 0;
            } else {
                str1[i] = "0";
            }
        } else if (str2[i] == 1 && str1[i] == 1) {
            if (carry == 1) {
                str1[i] = "1";
                carry = 1;
            } else {
                str1[i] = "0";
                carry = 1;
            }
        }
    }

    if (carry == 1) {
        str1.unshift("1");
    }

    return str1.join("");
}

let a = "1000";
let b = "1111";

console.log(addBinary(a, b));  // ✅ Output: 10111
