import React, { useState, FormEvent, useCallback, memo } from "react";
import { useTranslation } from "react-i18next";

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Check if there's a file and if it's too large (Formspree has limits)
      const fileInput = formData.get("image") as File;
      if (fileInput && fileInput.size > 10 * 1024 * 1024) {
        // 10MB limit
        throw new Error(
          "Image file is too large. Please select a file smaller than 10MB."
        );
      }

      // Using Formspree - create a form at https://formspree.io and replace with your endpoint
      const response = await fetch("https://formspree.io/f/xpwljdad", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();

        // Reset status after 8 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 8000);
      } else {
        const data = await response.json();
        if (data.errors) {
          throw new Error(
            data.errors
              .map((error: { message: string }) => error.message)
              .join(", ")
          );
        } else {
          throw new Error("Failed to submit form");
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const getButtonText = () => {
    if (isSubmitting) return `${t("form.submitSending")} 📤`;
    if (submitStatus === "success") return "Message Sent! ✅";
    if (submitStatus === "error") return "Error! Try Again ❌";
    return `${t("form.submitIdle")} 📨`;
  };

  const getButtonStyle = () => {
    if (submitStatus === "success") return { backgroundColor: "#4CAF50" };
    if (submitStatus === "error") return { backgroundColor: "#f44336" };
    return {};
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      encType="multipart/form-data"
    >
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">{t("form.name")}:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t("form.namePlaceholder")}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t("form.email")}:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("form.emailPlaceholder")}
            required
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="subject">{t("form.subject")}:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder={t("form.subjectPlaceholder")}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">{t("form.message")}:</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder={t("form.messagePlaceholder")}
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image" className="image-upload-label">
          {t("form.imageLabel")}:
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept=".jpg,.jpeg,.png,.gif,.webp,image/*"
          className="image-upload-input"
          disabled={isSubmitting}
        />
        <div className="upload-info">
          <small>{t("form.imageInfo")} (Max: 10MB, JPG/PNG/GIF/WebP)</small>
        </div>
      </div>

      {submitStatus === "success" && (
        <div className="success-message">
          <p>{t("form.successMsg")}</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="error-message">
          <p>{t("form.errorMsg")}</p>
        </div>
      )}

      <button
        type="submit"
        className="btn-primary"
        disabled={isSubmitting}
        style={getButtonStyle()}
      >
        {getButtonText()}
      </button>
    </form>
  );
});

ContactForm.displayName = "ContactForm";
