const checkValidateData = (email, password, name) => {
  // Email validation: checks for standard email format (user@domain.com)
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );

  // Password validation: requires at least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // Name validation: checks for proper name format (starts with capital letter)
  // PROBLEM: This will fail on Sign In page because name is null
  if (name !== null && name !== undefined) {
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if (!isNameValid) return "Name is not valid";
  }

  // Return error messages in order of priority
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  // If all validations pass, return null (no error)
  return null;
};

export default checkValidateData;
