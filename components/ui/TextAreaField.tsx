import { forwardRef, TextareaHTMLAttributes } from "react";
import styles from "./Fields.module.css";

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
  ({ label, error, id, ...props }, ref) => {
    return (
      <div className={styles.fieldGroup}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          className={`${styles.textarea} ${error ? styles.textareaError : ""}`}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

TextAreaField.displayName = "TextAreaField";