// src/logic/auth.js

// دالة التحقق من المستخدم (Pure JS)
export const login = (username, password) => {
    const validUser = "admin";
    const validPass = "123";

    if (username === validUser && password === validPass) {
        return { success: true, message: "Welcome Back!" };
    } else {
        return { success: false, message: "Error: Invalid username or password." };
    }
};

// دالة للتحقق من طول كلمة السر (Pure JS)
export const isPasswordStrong = (pass) => {
    return pass.length >= 3;
};