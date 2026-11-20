# Jorge David Cabrera — Architecture & Legacy Migration Portfolio

Interactive engineering portfolio and printable technical resume focused on **.NET Backend Development (ASP.NET Core 8 & .NET Framework)**, **Legacy System Modernization (VB6 / VBA 6 to .NET)**, and **ERP Transactional Integrations (Consuman)**.

## Highlights

- **Ecosystem Topology Diagram**: Visualizes how the 7 production systems interact across 3 architectural tiers (Legacy/ERP Sources $\rightarrow$ .NET Framework Desktop Core $\rightarrow$ .NET 8 Web Perimeter).
- **7 ADR / RFC Case Studies**:
  1. **Comprobantes Proveedores**: Critical VB6 $\rightarrow$ .NET Framework migration + Consuman ERP API reconciliation (PO vs. Invoice matching).
  2. **Liquidaciones Automáticas**: Forward-looking bank balance projection and multi-account payment load distribution.
  3. **SARH**: Full VB6 $\rightarrow$ .NET Framework migration for occupational health, medical records, employee files, and trainings.
  4. **Portal Empleados (.NET 8)**: Greenfield ASP.NET Core 8 B2E portal for digital payslip signing and remote medical certificate submission synchronized with SARH.
  5. **Extranet José Guma (.NET 8)**: Greenfield ASP.NET Core 8 B2B perimeter portal for sales reps, traveling agents, and suppliers with strict data isolation.
  6. **Cash Flow**: Liquidity projection engine and relational query refactoring.
  7. **Rentabilidad**: T-SQL analytical query tuning and margin engine modernization.
- **Bilingual (ES / EN)**: Instant client-side toggle between Spanish and English.
- **Print-to-PDF Ready**: Clean `@media print` stylesheet for exporting a concise PDF CV directly from the browser.

## Free Hosting Instructions

Because this project has **zero build steps or external dependencies**, you can deploy it for free in under 60 seconds:

1. **GitHub Pages**: Push this repository to GitHub (`G3orgeX`), go to **Settings $\rightarrow$ Pages**, and select the `main` branch (`/` root).
2. **Vercel / Netlify / Cloudflare Pages**: Import the GitHub repository with no build command and output directory set to `.`.
