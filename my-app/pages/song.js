import React, { useState, useEffect, useRef } from "react";

export default function song() {
  return (
    <>
      <div>MEEEEEEEEEE</div>
      <div className={styles["main-page-title"]}>
        <PageTitle chineseTitle="找市集" englishTitle="Search Market　" />
        <SearchMarketSwitch />
      </div>
    </>
  );
}
