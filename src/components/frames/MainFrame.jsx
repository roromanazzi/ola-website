import styles from "./MainFrame.module.css";
import React from "react";
import { SectionNavBar } from "../NavigationBar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const MainFrame = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonPath,
  secondaryButtonPath,
  backgroundImageUrl,
}) => {
  return (
    <section
      className={styles.kitchenPageHeader}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <SectionNavBar></SectionNavBar>
      <div className={styles.titles}>
        <h1 className={styles.kitchenTitle}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
      </div>
      <div className={styles.buttons}>
        <a
          className={styles.firstButton}
          href={primaryButtonPath}
          target="_blank"
          rel="noreferrer"
        >
          {primaryButtonText}
        </a>
        {secondaryButtonText && secondaryButtonPath && (
          <Link
            to={secondaryButtonPath}
            className={styles.secondButton}
            id={styles.secondButton}
          >
            {secondaryButtonText}
          </Link>
        )}
      </div>
      <div className={styles.backgroundFilter}></div>
    </section>
  );
};

MainFrame.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  backgroundImageUrl: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string,
  onSecondaryButtonClick: PropTypes.func.isRequired,
  onPrimaryButtonClick: PropTypes.func,
};
