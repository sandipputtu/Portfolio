import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import {
  User,
  Target,
  CheckCircle2,
  Sparkles,
  Brain,
  Code,
  Shield,
  Zap,
} from "lucide-react";

// Icon mapping for different skill types
function GetSkillIcon({ fileName, theme }) {
  const iconProps = {
    size: 80,
    strokeWidth: 1.5,
    className: "skill-icon",
  };

  const iconMap = {
    DataScienceImg: <Brain {...iconProps} />,
    ExpertiseImg: <Target {...iconProps} />,
    PrioritiesImg: <CheckCircle2 {...iconProps} />,
    FullStackImg: <Code {...iconProps} />,
    CloudInfraImg: <Shield {...iconProps} />,
    DesignImg: <Sparkles {...iconProps} />,
  };

  return (
    <div className="skill-icon-container">
      <div className="skill-icon-backdrop">
        {iconMap[fileName] || <Zap {...iconProps} />}
      </div>
    </div>
  );
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="skills-bento-container">
        {skills.data.map((skill, i) => {
          return (
            <Fade key={i} duration={1000} delay={i * 200}>
              <div
                className="bento-card"
                style={{
                  "--theme-text": theme.text,
                  "--theme-secondary": theme.secondaryText,
                  "--theme-highlight": theme.highlight || theme.text,
                }}
              >
                {/* Animated Background Gradient */}
                <div className="bento-gradient-bg"></div>

                {/* Card Header with Icon */}
                <div className="bento-header">
                  <GetSkillIcon fileName={skill.fileName} theme={theme} />
                  <h2 className="bento-title" style={{ color: theme.text }}>
                    {skill.title}
                  </h2>
                </div>

                {/* Software Skills (if any) */}
                {skill.softwareSkills && skill.softwareSkills.length > 0 && (
                  <div className="bento-skills-showcase">
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </div>
                )}

                {/* Skills List */}
                <div className="bento-content">
                  {skill.skills.map((skillSentence, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-bullet">
                        <Sparkles size={16} />
                      </div>
                      <p
                        className="skill-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Decorative Corner Elements */}
                <div className="bento-corner-decoration"></div>
              </div>
            </Fade>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
