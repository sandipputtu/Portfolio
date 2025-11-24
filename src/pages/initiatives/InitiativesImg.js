import React, { Component } from "react";

export default class InitiativesImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="795"
        height="574"
        viewBox="0 0 795 574"
      >
        <title>Digital Initiatives</title>
        <ellipse cx="232" cy="450" rx="35" ry="5" fill="#e0e0e0" />
        <rect
          x="300"
          y="100"
          width="400"
          height="300"
          rx="40"
          fill="#f5f5f5"
          stroke="#1976d2"
          strokeWidth="6"
        />
        <circle cx="500" cy="250" r="60" fill="#1976d2" opacity="0.15" />
        <text
          x="500"
          y="250"
          textAnchor="middle"
          fill="#1976d2"
          fontSize="32"
          fontFamily="Google Sans Medium"
          dy=".3em"
        >
          KSITM
        </text>
        <rect
          x="340"
          y="180"
          width="320"
          height="40"
          rx="10"
          fill="#1976d2"
          opacity="0.1"
        />
        <rect
          x="340"
          y="240"
          width="320"
          height="40"
          rx="10"
          fill="#1976d2"
          opacity="0.1"
        />
        <rect
          x="340"
          y="300"
          width="320"
          height="40"
          rx="10"
          fill="#1976d2"
          opacity="0.1"
        />
        <rect
          x="340"
          y="360"
          width="320"
          height="40"
          rx="10"
          fill="#1976d2"
          opacity="0.1"
        />
        <text
          x="500"
          y="210"
          textAnchor="middle"
          fill="#1976d2"
          fontSize="18"
          fontFamily="Google Sans"
          dy=".3em"
        >
          Cybersecurity
        </text>
        <text
          x="500"
          y="270"
          textAnchor="middle"
          fill="#1976d2"
          fontSize="18"
          fontFamily="Google Sans"
          dy=".3em"
        >
          IAM & AI
        </text>
        <text
          x="500"
          y="330"
          textAnchor="middle"
          fill="#1976d2"
          fontSize="18"
          fontFamily="Google Sans"
          dy=".3em"
        >
          Digital Services
        </text>
        <text
          x="500"
          y="390"
          textAnchor="middle"
          fill="#1976d2"
          fontSize="18"
          fontFamily="Google Sans"
          dy=".3em"
        >
          Public Good
        </text>
      </svg>
    );
  }
}
