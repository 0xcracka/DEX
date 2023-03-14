import { PageHeader } from "antd";
import React from "react";

// displays a page header

export default function Header() {
  return (
    <a href="https://skylortengan.vercel.app/page" target="_blank" rel="noopener noreferrer">
      <PageHeader
        title="🧨Crackin DEX"
        subTitle="Built on Scaffold eth"
        style={{ cursor: "pointer" }}
      />
    </a>
  );
}
