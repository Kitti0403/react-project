import React, { useState, FormEvent, useCallback, memo } from "react";
import { useTranslation } from "react-i18next";

interface ContactFormLocalProps {
  className?: string;
}

export const ContactFormLocal: React.FC<ContactFormLocalProps> = memo(
  ({ className }) => {
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
        // Check file size before submission
        const fileInput = formData.get("image") as File;
        if (fileInput && fileInput.size > 25 * 1024 * 1024) {
          // 25MB limit for local PHP
          throw new Error(
            "Image file is too large. Please select a file smaller than 25MB."
          );
        }

        // Using local PHP handler
        const response = await fetch("/submit-form.php", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();

        if (data.status === "success") {
          setSubmitStatus("success");
          form.reset();

          // Reset status after 8 seconds
          setTimeout(() => {
            setSubmitStatus("idle");
          }, 8000);
        } else {
          throw new Error(data.message || "Failed to submit form");
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
            <small>{t("form.imageInfo")} (Max: 25MB, JPG/PNG/GIF/WebP)</small>
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
  }
);

ContactFormLocal.displayName = "ContactFormLocal";
