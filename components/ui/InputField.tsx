import { forwardRef, InputHTMLAttributes } from "react";
import styles from "./Fields.module.css"; // Compartirán el mismo archivo de estilos

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, error, id, ...props }, ref) => {
    return (
      <div className={styles.fieldGroup}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={`${styles.input} ${error ? styles.inputError : ""}`}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

InputField.displayName = "InputField";