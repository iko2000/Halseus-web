"use client";
import Link from "next/link";
import type React from "react";

import { useEffect, useState, useMemo, useCallback, memo } from "react";
import { useTranslations } from "next-intl";
import FaultyTerminal from "@/components/reactbits/terminal";
import { HomeHero } from "./homeHero";
import { AutomationsHighlight } from "./homeAutomations";
import { HomeScene } from "./homeScene";
import TrainAIModels from "./homeLocalAI";
import { ServicesList } from "./List";
import { ContactSection } from "./contact";
// Main component
export default function HomeIndex() {
  const t = useTranslations("Index");
  const f = useTranslations("Footer");
  const [isRTL, setIsRTL] = useState(false);

  // Translations object (no need for useMemo)
  const translations = {
    boilerplateName: t("boilerplateName"),
    title: t("title"),
    description: t("description"),
    cloneRepository: t("cloneRepository"),
    leaveStar: t("leaveStar"),
    howToUse: t("howToUse"),
    installation: t("installation"),
    omitrtlUsage: t("omitrtlUsage"),
    contribute: t("contribute"),
    gettingStarted: t("gettingStarted"),
    howToContribute: t("howToContribute"),
    OmitRTLInstruction: t("OmitRTLInstruction"),
    installationSteps: {
      cloneRepository: t("installationSteps.cloneRepository"),
      installDependencies: t("installationSteps.installDependencies"),
      startDevServer: t("installationSteps.startDevServer"),
    },
    contributeSteps: {
      fork: t("contributeSteps.fork"),
      createBranch: t("contributeSteps.createBranch"),
      commit: t("contributeSteps.commit"),
      push: t("contributeSteps.push"),
      pullRequest: t("contributeSteps.pullRequest"),
    },
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <HomeHero/>
      <AutomationsHighlight/>
      <HomeScene/>
      <div id="services">
        <ServicesList/>
      </div>
      <div id="localai">
        <TrainAIModels/>
      </div>
      <ContactSection/>
    </div>
  );
}

// Separate TabsSection component to reduce complexity
