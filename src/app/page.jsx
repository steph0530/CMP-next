"use client";
import Image from "next/image";
import link from "next/link";
import React from "react";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../common/theme/Theme";
import Typography from "@mui/material/Typography";

import { ScreenWrapper } from "@/ui/Container";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <ScreenWrapper
        sx={{
          bgcolor: "theme.palette.primary.dark",
          height: "100%",
          width: "100%",
        }}
        maxWidth="false"
      ></ScreenWrapper>
    </ThemeProvider>
  );
}
Home.displayName = "THE CMP";
