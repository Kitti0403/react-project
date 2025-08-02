import React from "react";
import { useDragToScroll } from "./useDragToScroll";
import { useTranslation } from "react-i18next";

export const ServicesGallery: React.FC = () => {
  const dragRef = useDragToScroll();
  const { t } = useTranslation();

  return (
    <section id="services" className="services-grid">
      <h2>{t("services.title")}</h2>
      <div className="services-container" ref={dragRef}>
        <div className="service-card">
          <div className="service-icon">🛠️</div>
          <h3>{t("services.development")}</h3>
          <p>{t("services.developmentDesc")}</p>
        </div>
        <div className="service-card">
          <div className="service-icon">📱</div>
          <h3>{t("services.design")}</h3>
          <p>{t("services.designDesc")}</p>
        </div>
        <div className="service-card">
          <div className="service-icon">📚</div>
          <h3>{t("services.exams")}</h3>
          <p>{t("services.examsDesc")}</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🎭</div>
          <h3>{t("services.commissions")}</h3>
          <p>{t("services.commissionsDesc")}</p>
        </div>
        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3>{t("services.art")}</h3>
          <p>{t("services.artDesc")}</p>
        </div>
      </div>
      <div className="drag-hint">{t("dragHint")}</div>
    </section>
  );
};
