// Rio Elite Staff Operations Manual — PDF Generator
// Uses jsPDF to generate a branded, multi-page PDF from the manual data
// Brand: Deep black headers, gold accents

import jsPDF from "jspdf";
import { SECTIONS, ContentBlock } from "./manualData";

const BLACK = [13, 13, 13] as const;       // Deep black
const GOLD = [201, 162, 39] as const;      // Rio Elite gold
const GOLD_DARK = [160, 128, 28] as const; // Darker gold for text
const WHITE = [255, 255, 255] as const;
const LIGHT_GOLD = [252, 248, 235] as const; // Very light gold tint
const MID_GRAY = [100, 100, 100] as const;
const DARK = [35, 35, 35] as const;

const PAGE_W = 210; // A4 mm
const PAGE_H = 297;
const MARGIN_L = 18;
const MARGIN_R = 18;
const CONTENT_W = PAGE_W - MARGIN_L - MARGIN_R;

function addPageHeader(doc: jsPDF, sectionNum: string, sectionTitle: string) {
  // Black header bar
  doc.setFillColor(...BLACK);
  doc.rect(0, 0, PAGE_W, 18, "F");
  // Gold accent line
  doc.setFillColor(...GOLD);
  doc.rect(0, 18, PAGE_W, 1.5, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(...GOLD);
  doc.text("RIO ELITE", MARGIN_L, 11.5);

  // Section label
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(180, 170, 140);
  const label = `SECTION ${sectionNum}  ·  ${sectionTitle.toUpperCase()}`;
  doc.text(label, PAGE_W / 2, 11.5, { align: "center" });

  // Page number
  doc.setTextColor(180, 170, 140);
  doc.setFontSize(7.5);
  doc.text(`${doc.getCurrentPageInfo().pageNumber}`, PAGE_W - MARGIN_R, 11.5, { align: "right" });
}

function addPageFooter(doc: jsPDF) {
  doc.setFillColor(...BLACK);
  doc.rect(0, PAGE_H - 10, PAGE_W, 10, "F");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  doc.setTextColor(180, 170, 140);
  doc.text("RIO ELITE  ·  STAFF OPERATIONS MANUAL  ·  CONFIDENTIAL", PAGE_W / 2, PAGE_H - 3.5, { align: "center" });
}

function wrapText(doc: jsPDF, text: string, x: number, maxWidth: number, fontSize: number): string[] {
  doc.setFontSize(fontSize);
  return doc.splitTextToSize(text, maxWidth);
}

export async function downloadManualPdf(onProgress?: (pct: number) => void) {
  const doc = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });

  let currentSection = "00";
  let currentSectionTitle = "RIO ELITE STAFF OPERATIONS MANUAL";

  // ── Cover Page ────────────────────────────────────────────────────────────
  doc.setFillColor(...BLACK);
  doc.rect(0, 0, PAGE_W, PAGE_H, "F");

  // Gold accent bar
  doc.setFillColor(...GOLD);
  doc.rect(0, PAGE_H * 0.55, PAGE_W, 3, "F");

  // Subtitle label
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...GOLD);
  doc.text("RIO ELITE  ·  OFFICIAL PROGRAM DOCUMENT", MARGIN_L, 95);

  // Title — single line with smaller font to avoid word-wrap issues
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(...WHITE);
  doc.text("STAFF OPERATIONS MANUAL", MARGIN_L, 115);

  // Gold rule under title
  doc.setFillColor(...GOLD);
  doc.rect(MARGIN_L, 120, 40, 1.5, "F");

  // Description
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(180, 170, 140);
  const coverDesc = doc.splitTextToSize(
    "This manual is the definitive guide to coaching standards, program systems, policies, and procedures at Rio Elite. Every coach is expected to read, understand, and operate in full compliance with everything contained herein.",
    CONTENT_W
  );
  doc.text(coverDesc, MARGIN_L, 132);

  // Confidential notice
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(120, 110, 80);
  doc.text("CONFIDENTIAL — FOR RIO ELITE COACHING STAFF ONLY", MARGIN_L, PAGE_H - 20);

  addPageFooter(doc);

  // ── Table of Contents ─────────────────────────────────────────────────────
  doc.addPage();
  addPageHeader(doc, "00", "TABLE OF CONTENTS");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(...BLACK);
  doc.text("TABLE OF CONTENTS", MARGIN_L, 35);

  doc.setFillColor(...GOLD);
  doc.rect(MARGIN_L, 38, 14, 1.5, "F");

  let tocY = 50;
  SECTIONS.forEach((section, i) => {
    if (tocY > PAGE_H - 20) {
      addPageFooter(doc);
      doc.addPage();
      addPageHeader(doc, "00", "TABLE OF CONTENTS");
      tocY = 30;
    }
    // Alternating row background
    if (i % 2 === 0) {
      doc.setFillColor(...LIGHT_GOLD);
      doc.rect(MARGIN_L, tocY - 4, CONTENT_W, 8, "F");
    }
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(...GOLD_DARK);
    doc.text(section.num, MARGIN_L + 2, tocY + 0.5);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(...DARK);
    doc.text(section.title, MARGIN_L + 14, tocY + 0.5);

    doc.setTextColor(...MID_GRAY);
    doc.setFontSize(7.5);
    doc.text(section.sub, MARGIN_L + 14, tocY + 4.5);

    tocY += 10;
  });

  addPageFooter(doc);

  // ── Sections ──────────────────────────────────────────────────────────────
  const totalSections = SECTIONS.length;

  for (let si = 0; si < SECTIONS.length; si++) {
    const section = SECTIONS[si];
    currentSection = section.num;
    currentSectionTitle = section.title;

    if (onProgress) onProgress(Math.round((si / totalSections) * 90) + 5);

    // Only start a new page if there isn't enough room for the section header + some content
    // (or if this is the very first section)
    if (si === 0 || y > PAGE_H - 60) {
      if (si > 0) addPageFooter(doc);
      doc.addPage();
      addPageHeader(doc, currentSection, currentSectionTitle);
      y = 28;
    } else {
      // Add a visual separator between sections on the same page
      y += 8;
      doc.setFillColor(...GOLD);
      doc.rect(MARGIN_L, y, CONTENT_W, 0.5, "F");
      y += 8;
    }

    // Section heading block
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(...GOLD_DARK);
    doc.text(`SECTION ${section.num}`, MARGIN_L, y);
    y += 6;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(...BLACK);
    const titleLines = doc.splitTextToSize(section.title, CONTENT_W);
    doc.text(titleLines, MARGIN_L, y);
    y += titleLines.length * 7 + 3;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...MID_GRAY);
    doc.text(section.sub, MARGIN_L, y);
    y += 5;

    doc.setFillColor(...GOLD);
    doc.rect(MARGIN_L, y, 12, 1.2, "F");
    y += 8;

    // Content blocks
    for (const block of section.content) {
      if (y > PAGE_H - 18) {
        addPageFooter(doc);
        doc.addPage();
        addPageHeader(doc, currentSection, currentSectionTitle);
        y = 28;
      }

      y = renderBlock(doc, block, y, currentSection, currentSectionTitle);
    }

    // Signature section special layout
    if (section.num === "22") {
      if (y > PAGE_H - 80) {
        addPageFooter(doc);
        doc.addPage();
        addPageHeader(doc, currentSection, currentSectionTitle);
        y = 28;
      }
      y += 5;
      doc.setDrawColor(...BLACK);
      doc.setLineWidth(0.3);
      doc.rect(MARGIN_L, y, CONTENT_W, 60, "S");

      const col1X = MARGIN_L + 5;
      const col2X = MARGIN_L + CONTENT_W / 2 + 5;
      const colW = CONTENT_W / 2 - 10;

      // Col headers
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7);
      doc.setTextColor(...BLACK);
      doc.text("COACH SIGNATURE", col1X, y + 8);
      doc.text("PROGRAM LEADERSHIP", col2X, y + 8);

      // Signature lines
      const lineY1 = y + 22;
      const lineY2 = y + 38;
      const lineY3 = y + 54;

      [col1X, col2X].forEach((cx) => {
        doc.setDrawColor(100, 100, 100);
        doc.setLineWidth(0.3);
        doc.line(cx, lineY1, cx + colW, lineY1);
        doc.line(cx, lineY2, cx + colW, lineY2);
        doc.line(cx, lineY3, cx + colW, lineY3);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(6.5);
        doc.setTextColor(...MID_GRAY);
        doc.text("Signature", cx, lineY1 + 3.5);
        doc.text("Printed Name", cx, lineY2 + 3.5);
        doc.text("Date", cx, lineY3 + 3.5);
      });
    }

    addPageFooter(doc);
  }

  if (onProgress) onProgress(100);

  doc.save("Rio_Elite_Staff_Operations_Manual.pdf");
}

function renderBlock(
  doc: jsPDF,
  block: ContentBlock,
  y: number,
  sectionNum: string,
  sectionTitle: string
): number {
  const checkPage = (neededHeight: number): number => {
    if (y + neededHeight > PAGE_H - 18) {
      addPageFooter(doc);
      doc.addPage();
      addPageHeader(doc, sectionNum, sectionTitle);
      return 28;
    }
    return y;
  };

  switch (block.type) {
    case "body": {
      const lines = wrapText(doc, block.text, MARGIN_L, CONTENT_W, 9.5);
      y = checkPage(lines.length * 5 + 4);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...DARK);
      doc.text(lines, MARGIN_L, y);
      y += lines.length * 5 + 4;
      break;
    }

    case "italic_intro": {
      const lines = wrapText(doc, block.text, MARGIN_L + 2, CONTENT_W - 4, 9);
      y = checkPage(lines.length * 5 + 6);
      doc.setFillColor(...LIGHT_GOLD);
      doc.rect(MARGIN_L, y - 3, CONTENT_W, lines.length * 5 + 5, "F");
      doc.setDrawColor(...GOLD);
      doc.setLineWidth(0.8);
      doc.line(MARGIN_L, y - 3, MARGIN_L, y + lines.length * 5 + 2);
      doc.setFont("helvetica", "italic");
      doc.setFontSize(9);
      doc.setTextColor(60, 55, 35);
      doc.text(lines, MARGIN_L + 4, y);
      y += lines.length * 5 + 8;
      break;
    }

    case "section_label": {
      y = checkPage(10);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(...GOLD_DARK);
      doc.text(block.text.toUpperCase(), MARGIN_L, y);
      y += 2;
      doc.setDrawColor(...GOLD);
      doc.setLineWidth(0.5);
      doc.line(MARGIN_L, y, MARGIN_L + 30, y);
      y += 5;
      break;
    }

    case "bullet": {
      for (const item of block.items) {
        const lines = wrapText(doc, item, MARGIN_L + 7, CONTENT_W - 7, 9);
        y = checkPage(lines.length * 5 + 2);
        doc.setFillColor(...GOLD);
        doc.rect(MARGIN_L + 1, y - 2, 2.5, 2.5, "F");
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(...DARK);
        doc.text(lines, MARGIN_L + 7, y);
        y += lines.length * 5 + 1;
      }
      y += 3;
      break;
    }

    case "numbered": {
      block.items.forEach((item, i) => {
        const lines = wrapText(doc, item, MARGIN_L + 9, CONTENT_W - 9, 9);
        y = checkPage(lines.length * 5 + 2);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8.5);
        doc.setTextColor(...BLACK);
        doc.text(`${i + 1}.`, MARGIN_L + 1, y);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(...DARK);
        doc.text(lines, MARGIN_L + 9, y);
        y += lines.length * 5 + 1;
      });
      y += 3;
      break;
    }

    case "link": {
      y = checkPage(10);
      doc.setFillColor(...LIGHT_GOLD);
      doc.rect(MARGIN_L, y - 3, CONTENT_W, 9, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.setTextColor(...GOLD_DARK);
      doc.text(`→  ${block.label}`, MARGIN_L + 4, y + 2);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(7.5);
      doc.setTextColor(80, 100, 160);
      doc.text(block.url, MARGIN_L + 4, y + 5.5);
      y += 12;
      break;
    }

    case "grip_cards": {
      const cardW = (CONTENT_W - 6) / 4;
      const cardH = 48;
      y = checkPage(cardH + 6);
      block.cards.forEach((card, i) => {
        const cx = MARGIN_L + i * (cardW + 2);
        doc.setFillColor(...LIGHT_GOLD);
        doc.rect(cx, y, cardW, cardH, "F");

        // Big letter
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(...GOLD_DARK);
        doc.text(card.letter, cx + 4, y + 14);

        // Word
        doc.setFont("helvetica", "bold");
        doc.setFontSize(7.5);
        doc.setTextColor(...BLACK);
        doc.text(card.word, cx + 4, y + 20);

        // Gold underline
        doc.setFillColor(...GOLD);
        doc.rect(cx + 4, y + 22, 10, 0.8, "F");

        // Description
        const descLines = doc.splitTextToSize(card.desc, cardW - 8);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(7);
        doc.setTextColor(60, 55, 35);
        doc.text(descLines.slice(0, 5), cx + 4, y + 27);
      });
      y += cardH + 8;
      break;
    }

    case "penalty_table":
    case "bonus_table": {
      const isBonus = block.type === "bonus_table";
      const rowH = 8;
      const totalH = (block.rows.length + 1) * rowH + 4;
      y = checkPage(totalH);

      // Header row
      doc.setFillColor(...BLACK);
      doc.rect(MARGIN_L, y, CONTENT_W, rowH, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(...WHITE);
      doc.text("AMOUNT", MARGIN_L + 2, y + 5.5);
      doc.text("DESCRIPTION", MARGIN_L + 28, y + 5.5);
      doc.text("NOTES / QUALIFICATIONS", MARGIN_L + 80, y + 5.5);
      y += rowH;

      block.rows.forEach((row, i) => {
        if (y + rowH > PAGE_H - 18) {
          addPageFooter(doc);
          doc.addPage();
          addPageHeader(doc, sectionNum, sectionTitle);
          y = 28;
        }
        if (i % 2 === 0) {
          doc.setFillColor(...LIGHT_GOLD);
          doc.rect(MARGIN_L, y, CONTENT_W, rowH, "F");
        }
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(isBonus ? 40 : 160, isBonus ? 140 : 128, isBonus ? 60 : 28);
        doc.text(row.amount, MARGIN_L + 2, y + 5.5);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(7.5);
        doc.setTextColor(...BLACK);
        doc.text(doc.splitTextToSize(row.description, 48)[0], MARGIN_L + 28, y + 5.5);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(7);
        doc.setTextColor(...DARK);
        doc.text(doc.splitTextToSize(row.notes, 90)[0], MARGIN_L + 80, y + 5.5);
        y += rowH;
      });
      y += 5;
      break;
    }

    case "steps": {
      for (const step of block.items) {
        const descLines = wrapText(doc, step.desc, MARGIN_L + 16, CONTENT_W - 16, 9);
        const stepH = descLines.length * 5 + 12;
        y = checkPage(stepH);

        doc.setFillColor(...LIGHT_GOLD);
        doc.rect(MARGIN_L, y, CONTENT_W, stepH, "F");
        doc.setFillColor(...BLACK);
        doc.rect(MARGIN_L, y, 3, stepH, "F");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(7.5);
        doc.setTextColor(...BLACK);
        doc.text(step.title.toUpperCase(), MARGIN_L + 8, y + 6);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(...DARK);
        doc.text(descLines, MARGIN_L + 8, y + 11);

        y += stepH + 3;
      }
      y += 2;
      break;
    }
  }

  return y;
}
