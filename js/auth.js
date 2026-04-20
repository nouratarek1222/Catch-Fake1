

// ================= LOGIN =================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    // Empty check
    if (!email || !password) {
      errorMsg.textContent = "All fields are required";
      return;
    }

    // Email validation
    if (!validateEmail(email)) {
      errorMsg.textContent = "Invalid email format";
      return;
    }

    // Password length (basic check)
    if (password.length < 6) {
      errorMsg.textContent = "Password must be at least 6 characters";
      return;
    }

    // Success (مؤقت)
    alert("Login successful ✔️");
  });
}

// ================= SIGNUP =================
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    // 1️⃣ Empty check
    if (!name || !email || !password || !confirmPassword) {
      errorMsg.textContent = "All fields are required";
      return;
    }

    // 2️⃣ Email validation
    if (!validateEmail(email)) {
      errorMsg.textContent = "Invalid email format";
      return;
    }

    // 3️⃣ Strong password check
    if (!validateStrongPassword(password)) {
      errorMsg.textContent =
        "Password must contain uppercase, lowercase, number, symbol and be at least 8 characters";
      return;
    }

    // 4️⃣ Confirm password (🔥 أهم حاجة)
    if (password !== confirmPassword) {
      errorMsg.textContent = "Passwords do not match";
      return;
    }

    // Success (مؤقت)
    alert("Account created successfully ✔️");
  });
}

// ================= HELPERS =================

// Email validation
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Strong password validation
function validateStrongPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);
}

