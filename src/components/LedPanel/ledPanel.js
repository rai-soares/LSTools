import "../LedPanel/leadPanel.styles.css";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarPhoto from "../../images/avatar.png";
import PersonalInfo from "./PersonalInfoCard/personalInfo";
import GoalsPanel from "./GoalsPanel/goalsPanel";
import SkillsPanel from "./SkillsPanel/skillsPanel";
import OneToOnePanel from "./OneToOnePanel/OneToOnePanel";
import SalaryPanel from "./SalaryPanel/SalaryPanel";

const LedPanel = () => {
  return (
    <>
      <section className="ledPanel">
        <div role="img" className="iconAvatar">
          <Avatar
            alt="Remy Sharp"
            src={AvatarPhoto}
            style={{ height: "160px", width: "160px" }}
          />
        </div>
        <PersonalInfo />
      </section>
      <section>
        <GoalsPanel />
        <SkillsPanel />
        <OneToOnePanel />
        <SalaryPanel />
      </section>
    </>
  );
};

export default LedPanel;
