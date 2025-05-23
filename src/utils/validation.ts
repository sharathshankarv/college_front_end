interface ValidationRules {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    customValidator?: (value: string, formData?: Record<string, string>) => string | null;
  }
  
  type FormSchema = Record<string, ValidationRules>;
  
  export const validateForm = (formData: Record<string, string>, schema: FormSchema) => {
    const errors: Record<string, string> = {};
    let isValid = true;
  
    Object.entries(schema).forEach(([field, rules]) => {
      const value = formData[field] || "";
  
      if (rules.required && !value.trim()) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
        isValid = false;
      }
  
      if (rules.minLength && value.length < rules.minLength) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least ${rules.minLength} characters.`;
        isValid = false;
      }
  
      if (rules.maxLength && value.length > rules.maxLength) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be at most ${rules.maxLength} characters.`;
        isValid = false;
      }
  
      if (rules.pattern && !rules.pattern.test(value)) {
        errors[field] = `Invalid ${field} format.`;
        isValid = false;
      }
  
      if (rules.customValidator) {
        const customError = rules.customValidator(value, formData);
        if (customError) {
          errors[field] = customError;
          isValid = false;
        }
      }
    });
  
    return { isValid, errors };
  };
  