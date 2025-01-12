//製作簡單的密碼強度檢查器
function validatePassword(password) {
    const lengthRegex = /.{8,}/; // At least 8 characters long
    const uppercaseRegex = /[A-Z]/; // At least one uppercase letter
    const lowercaseRegex = /[a-z]/; // At least one lowercase letter
    const digitRegex = /\d/; // At least one digit
    const specialCharRegex = /[!@#$%~`^&*{}\[\]\(\)_+\-=:<>,.\/\?;'"]+/; // At least one special character
    let specialChars = `\`~!@#$%^&*()-_=+[{]};:'",<.>/?]`

    // if (password.split('').forEach(char => specialChars.includes(char))) {
    //     // x
    // }
    password.split('').forEach(char=>{
        if (specialChars.includes(char)){
            // x
        }
    })

    if (!password.match(lengthRegex)) {
        return 'Password: "' + password + '" should have at least 8 characters!';
    }
    if (!password.match(uppercaseRegex)) {
        return 'Password: "' + password + '" should include at least one uppercase letter!';
    }
    if (!password.match(lowercaseRegex)) {
        return 'Password: "' + password + '" should include at least one lowercase letter!';
    }
    if (!password.match(digitRegex)) {
        return 'Password: "' + password + '" should include at least one digit!';
    }
    if (!password.match(specialCharRegex)) {
        return 'Password: "' + password + '" should include at least one special character (!@#$%^&*).';
    }

    return "Password is valid!";
}

// Example usage:
const password1 = "123";
console.log(validatePassword(password1)); // Outputs: Password: "123" should have at least 8 characters!

const password2 = "homework";
console.log(validatePassword(password2)); // Outputs: Password: "homework" should include at least one uppercase letter!

const password3 = "Homework";
console.log(validatePassword(password3)); // Outputs: Password: "Homework" should include at least one digit!

const password4 = "Homework1";
console.log(validatePassword(password4)); // Outputs: Password: "Homework1" should include at least one special character (!@#$%^&*).

const password5 = "Home1!";
console.log(validatePassword(password5)); // Outputs: Password: "Home1!" should have at least 8 characters!

const password6 = "Valid123!";
console.log(validatePassword(password6)); // Outputs: Password is valid!

//製作電子郵件驗證器

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailRegex)) {
        return 'Invalid email format: "' + email + '"';
    }

    return "Email is valid!";
}

// Example usage:
const email1 = "example@domain.com";
console.log(validateEmail(email1)); // Outputs: Email is valid!

const email2 = "invalid-email";
console.log(validateEmail(email2)); // Outputs: Invalid email format: "invalid-email"

const email3 = "user@.com";
console.log(validateEmail(email3)); // Outputs: Invalid email format: "user@.com"

const email4 = "user@domain.c";
console.log(validateEmail(email4)); // Outputs: Email is valid!

//英文字串統計工具
function stringStatistics(input) {
    // Calculate total characters
    const totalCharacters = input.length;

    // Calculate total words (split by whitespace)
    const words = input.trim().split(" ");
    console.log(input)
    console.log(words)
    // const totalWords = words.filter(word => word.length > 0).length;
    let totalWords = []

    console.log(totalWords)


    for(word of words){
        if(word.length > 0){
            totalWords.push(word)
        }
    }

    console.log(totalWords)


    // Calculate total Chinese characters
    const chineseCharacters = input.match(/[\u4e00-\u9fa5]/g);
    console.log(chineseCharacters)
    const totalChineseCharacters = chineseCharacters ? chineseCharacters.length : 0;

    return {
        totalCharacters,
        totalWords,
        totalChineseCharacters
    };
}

// Example usage:
const inputString = "Hello, 你好! This is a test 字串.";
const stats = stringStatistics(inputString);
console.log(`Total Characters: ${stats.totalCharacters}`);
console.log(`Total Words: ${stats.totalWords}`);
console.log(`Total Chinese Characters: ${stats.totalChineseCharacters}`);