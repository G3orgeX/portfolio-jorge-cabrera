/**
 * Compact Expandable Portfolio (Progressive Disclosure)
 * Quick 15-second scan view + On-demand full ADR Case Study details
 */

const i18nData = {
  es: {
    "nav.overview": "Perfil",
    "nav.cases": "Proyectos (7)",
    "nav.more": "Trayectoria & Arquitectura",
    "nav.contact": "Contacto",
    "nav.expandAll": "+ Desplegar Todo",
    "nav.collapseAll": "- Contraer Todo",
    "footer.eyebrow": "Contacto Directo",
    "hero.role": "DESARROLLADOR BACK-END (+4 AÑOS EXP.)",
    "hero.tagline": "Arquitectura de datos, modernización de sistemas legacy (VB6 a .NET Framework / .NET 8) e integración de APIs REST.",
    "metrics.m2.title": "EXPERIENCIA",
    "metrics.m1.title": "TESORERÍA",
    "metrics.m1.val": "Proyección 5 Semanas",
    "metrics.m3.title": "INTEGRACIÓN ERP",
    "metrics.m4.title": "PORTALES WEB",
    "cases.eyebrow": "7 Sistemas en Producción • Clic en cada proyecto para ver el detalle técnico",
    "cases.title": "Proyectos y Casos de Estudio (Guma S.A.)",
    "filter.all": "Todos (7)",
    "filter.migration": "Migración VB6 & SQL (5)",
    "filter.net8": ".NET 8 Web (2)",
    "more.eyebrow": "Secciones Desplegables",
    "more.title": "Trayectoria, Arquitectura y Metodología de Trabajo",
    "acc1.title": "Experiencia Laboral (Guma S.A.) & Formación Académica",
    "acc1.sub": "Desarrollador .NET (2022–Actualidad) • Analista de Sistemas (ISSD) • UTN • Certificaciones Azure",
    "acc2.title": "Mapa de Arquitectura del Ecosistema (3 Capas)",
    "acc2.sub": "Cómo se conectan SQL Server + ERP Consuman → Core Desktop (.NET Framework) → Portales Web (.NET 8)",
    "acc3.title": "Flujo de Trabajo Humano + Agente IA (Spec-Driven Development)",
    "acc3.sub": "El Humano dirige la arquitectura y valida SQL/negocio • El Agente IA acelera el mapeo legacy y código base",
    "exp.role": "Desarrollador .NET & SQL Server — Guma S.A.",
    "exp.period": "07/2022 – Actualidad",
    "exp.b1": "<strong>Modernización Legacy:</strong> Migración de sistemas VB6 a C#, VB.NET y ASP.NET Core 8.",
    "exp.b2": "<strong>Core de Negocio:</strong> Sistemas integrales para producción, ventas, compras, RRHH y finanzas.",
    "exp.b3": "<strong>APIs REST (Swagger):</strong> Integración con ERP Consuman para validación de órdenes y facturas.",
    "exp.b4": "<strong>Finanzas y SQL Server:</strong> Proyección bancaria a 5 semanas, análisis de demanda y Query Tuning.",
    "edu.academicHeader": "Estudios",
    "edu.deg1.title": "Analista de Sistemas",
    "edu.deg2.title": "Ing. en Sistemas de Información",
    "edu.certsHeader": "Certificaciones",
    "arch.tier1.title": "1. Orígenes Legacy, SQL & ERP",
    "arch.tier1.node1": "• Módulos VB6 migrados a .NET",
    "arch.tier1.node2": "• ERP Consuman (REST API Swagger)",
    "arch.tier1.node3": "• Motor Central Microsoft SQL Server",
    "arch.tier2.title": "2. Core Desktop (.NET) & BI",
    "arch.tier3.title": "3. Perímetro Web (.NET 8)",
    "ai.human.badge": "DIRECTOR & RESPONSABLE (JORGE CABRERA)",
    "ai.human.short": "Releva reglas de negocio (finanzas, RRHH, ERP Consuman), define la arquitectura de datos/seguridad y audita cada consulta SQL antes de producción.",
    "ai.agent.badge": "EJECUTOR TÁCTICO (AGENTE IA)",
    "ai.agent.short": "Escanea formularios VB6 para extraer dependencias ocultas, genera scaffolding C# / .NET 8 bajo especificación y asiste en pruebas de casos borde.",
    "ai.p1.short": "Especificación y reglas de dominio.",
    "ai.p2.short": "Extracción VB6/SQL y trade-offs.",
    "ai.p3.short": "Capas C#, APIs y queries optimizadas.",
    "ai.p4.short": "Validación con datos reales y deploy.",
    "card.toggle": "Ver Arquitectura & Detalle Técnico",
    "card.problem": "PROBLEMA & ORIGEN LEGACY",
    "card.architecture": "ARQUITECTURA & SOLUCIÓN .NET",
    "card.impact": "IMPACTO EN NEGOCIO"
  },
  en: {
    "nav.overview": "Profile",
    "nav.cases": "Projects (7)",
    "nav.more": "Experience & Architecture",
    "nav.contact": "Contact",
    "nav.expandAll": "+ Expand All",
    "nav.collapseAll": "- Collapse All",
    "footer.eyebrow": "Direct Contact",
    "hero.role": "BACK-END DEVELOPER (+4 YEARS EXP.)",
    "hero.tagline": "Data architecture, legacy system modernization (VB6 to .NET Framework / .NET 8), and REST API integrations.",
    "metrics.m2.title": "EXPERIENCE",
    "metrics.m1.title": "TREASURY",
    "metrics.m1.val": "5-Week Projection",
    "metrics.m3.title": "ERP INTEGRATION",
    "metrics.m4.title": "WEB PORTALS",
    "cases.eyebrow": "7 Production Systems • Click any project to expand technical details",
    "cases.title": "Projects & Case Studies (Guma S.A.)",
    "filter.all": "All (7)",
    "filter.migration": "VB6 Migration & SQL (5)",
    "filter.net8": ".NET 8 Web (2)",
    "more.eyebrow": "Collapsible Sections",
    "more.title": "Track Record, Architecture & Workflow",
    "acc1.title": "Work Experience (Guma S.A.) & Academic Education",
    "acc1.sub": ".NET Developer (2022–Present) • Systems Analyst (ISSD) • UTN • Azure Data Certifications",
    "acc2.title": "Ecosystem Architecture Map (3 Tiers)",
    "acc2.sub": "How SQL Server + Consuman ERP → Desktop Core (.NET Framework) → Web Portals (.NET 8) connect",
    "acc3.title": "Human + AI Agent Workflow (Spec-Driven Development)",
    "acc3.sub": "Human leads architecture and validates SQL/business rules • AI Agent accelerates legacy mapping & scaffolding",
    "exp.role": ".NET & SQL Server Developer — Guma S.A.",
    "exp.period": "07/2022 – Present",
    "exp.b1": "<strong>Legacy Modernization:</strong> Migrated VB6 desktop systems to C#, VB.NET, and ASP.NET Core 8.",
    "exp.b2": "<strong>Business Core:</strong> End-to-end internal systems for manufacturing, sales, purchasing, HR, and finance.",
    "exp.b3": "<strong>REST APIs (Swagger):</strong> Consuman ERP integration for automated PO and invoice validation.",
    "exp.b4": "<strong>Finance & SQL Server:</strong> 5-week bank projections, industrial demand analysis, and Query Tuning.",
    "edu.academicHeader": "Education",
    "edu.deg1.title": "Systems Analyst",
    "edu.deg2.title": "Information Systems Engineering",
    "edu.certsHeader": "Certifications",
    "arch.tier1.title": "1. Legacy, SQL & ERP Sources",
    "arch.tier1.node1": "• VB6 modules migrated to .NET",
    "arch.tier1.node2": "• Consuman ERP (Swagger REST API)",
    "arch.tier1.node3": "• Corporate Microsoft SQL Server",
    "arch.tier2.title": "2. Desktop Core (.NET) & BI",
    "arch.tier3.title": "3. Web Perimeter (.NET 8)",
    "ai.human.badge": "DIRECTOR & OWNER (JORGE CABRERA)",
    "ai.human.short": "Gathers domain rules (finance, HR, Consuman ERP), defines data/security architecture, and audits every SQL query before production.",
    "ai.agent.badge": "TACTICAL EXECUTOR (AI AGENT)",
    "ai.agent.short": "Scans legacy VB6 forms to uncover hidden dependencies, generates spec-driven C# / .NET 8 scaffolding, and assists with edge-case reviews.",
    "ai.p1.short": "Specification & domain rules.",
    "ai.p2.short": "VB6/SQL extraction & trade-offs.",
    "ai.p3.short": "C# layers, APIs & tuned queries.",
    "ai.p4.short": "Real-data validation & release.",
    "card.toggle": "View Architecture & Full Details",
    "card.problem": "PROBLEM & LEGACY ORIGIN",
    "card.architecture": "ARCHITECTURE & .NET SOLUTION",
    "card.impact": "BUSINESS IMPACT"
  }
};

const projectsData = [
  {
    id: "project-comprobantes",
    code: "SYS-01",
    category: "migration",
    stack: [".NET Framework", "C#", "VB6 Migration", "Swagger REST API", "ERP Consuman", "SQL Server"],
    badgeColor: "amber",
    es: {
      title: "Comprobantes Proveedores & API ERP Consuman",
      typeBadge: "Migración VB6 → .NET + API",
      hook: "Conciliación automatizada de órdenes de compra (ERP Consuman) contra facturas de proveedores vía API REST.",
      problem: "El registro digital de comprobantes tenía un módulo crítico en VB6 con fricción para validar qué productos de una orden de compra en Consuman habían ingresado frente a la factura recibida.",
      architecture: "Migración hacia .NET integrando servicios REST (Swagger) del ERP Consuman para consultar órdenes activas y marcar transaccionalmente en SQL Server los ítems recepcionados por factura.",
      impact: "Cero discrepancias entre mercadería ingresada y facturada; actualización automática de estados en SQL Server."
    },
    en: {
      title: "Supplier Invoices & Consuman ERP API",
      typeBadge: "VB6 → .NET Migration + API",
      hook: "Automated reconciliation of Consuman ERP purchase orders against incoming supplier invoices via REST API.",
      problem: "Digital invoice registration relied on a legacy VB6 module with high friction when verifying which items from a Consuman purchase order had entered inventory against the billed invoice.",
      architecture: "Migrated the critical core to .NET, consuming Swagger REST endpoints from Consuman ERP to query active POs and transactionally mark received items per invoice in SQL Server.",
      impact: "Zero discrepancies between received goods and billed invoices; automated status updates in SQL Server."
    }
  },
  {
    id: "project-liquidaciones",
    code: "SYS-02",
    category: "migration",
    stack: [".NET Framework", "C#", "VB6 Migration", "SQL Server", "5-Week Projection"],
    badgeColor: "sky",
    es: {
      title: "Liquidaciones Automáticas (Proyección 5 Semanas)",
      typeBadge: "Migración VB6 → .NET & SQL",
      hook: "Planificador de pagos múltiples a proveedores con proyección bancaria a 5 semanas y balanceo entre cuentas.",
      problem: "Concentrar pagos en una sola cuenta o no visualizar los compromisos futuros generaba riesgo de sobrecarga bancaria al armar lotes de pago.",
      architecture: "Motor en .NET Framework y SQL Server que simula saldos bancarios a 5 semanas y permite distribuir el peso de los comprobantes entre múltiples cuentas antes de ejecutar el pago.",
      impact: "Previsibilidad financiera a 5 semanas y distribución equilibrada de liquidez entre cuentas bancarias."
    },
    en: {
      title: "Automated Settlements (5-Week Projection)",
      typeBadge: "VB6 → .NET & SQL Migration",
      hook: "Multi-supplier payment planner featuring 5-week forward bank balance projections and multi-account load balancing.",
      problem: "Concentrating payments on a single bank account without forward visibility created overload risks when scheduling supplier payment batches.",
      architecture: ".NET Framework and SQL Server engine that projects bank balances 5 weeks ahead and distributes invoice loads across multiple accounts prior to execution.",
      impact: "5-week financial predictability and balanced liquidity distribution across corporate bank accounts."
    }
  },
  {
    id: "project-portal-empleados",
    code: "SYS-03",
    category: "net8",
    stack: [".NET 8", "ASP.NET Core", "C#", "SQL Server", "Sync ↔ SARH"],
    badgeColor: "sky",
    es: {
      title: "Portal Empleados — Recibos y Certificados Médicos",
      typeBadge: "Greenfield .NET 8 Web",
      hook: "Portal web B2E para visualización/firma de recibos de sueldo y carga remota de certificados médicos conectado a SARH.",
      problem: "Entregar certificados médicos exigía que el empleado enfermo se trasladara presencialmente al consultorio laboral, restando trazabilidad y confort.",
      architecture: "Aplicación web en ASP.NET Core (.NET 8) de autogestión que digitaliza la firma de recibos y recepción de certificados de inasistencia, sincronizada con el sistema interno SARH.",
      impact: "Trazabilidad digital punta a punta y eliminación de traslados presenciales para empleados con problemas de salud."
    },
    en: {
      title: "Employee Portal — Payslips & Medical Certificates",
      typeBadge: "Greenfield .NET 8 Web",
      hook: "B2E web portal for viewing/signing payslips and remotely uploading absence certificates synced with SARH.",
      problem: "Submitting medical certificates required unwell employees to travel in person to the company doctor's office, hurting traceability and employee comfort.",
      architecture: "Self-service ASP.NET Core (.NET 8) web platform digitizing payslip signatures and absence certificate uploads, directly connected to the internal SARH backoffice.",
      impact: "End-to-end digital traceability and elimination of mandatory in-person visits for sick employees."
    }
  },
  {
    id: "project-extranet",
    code: "SYS-04",
    category: "net8",
    stack: [".NET 8", "ASP.NET Core", "C#", "SQL Server", "Data Isolation"],
    badgeColor: "sky",
    es: {
      title: "Extranet José Guma — Portal B2B Perimetral",
      typeBadge: "Greenfield .NET 8 Web",
      hook: "Portal externo para representantes, viajantes y proveedores (estados de cuenta, comprobantes y pagos) con aislamiento de datos.",
      problem: "Proveedores y viajantes requerían consultar cuentas corrientes y pagos las 24 hs sin comprometer ni exponer la base de datos interna de la empresa.",
      architecture: "Portal en ASP.NET Core (.NET 8) con seguridad perimetral y vistas acotadas en SQL Server que expone únicamente la cuenta corriente del actor autenticado.",
      impact: "Autogestión comercial 24/7 con resguardo total de la información financiera sensible de Guma S.A."
    },
    en: {
      title: "José Guma Extranet — B2B Perimeter Portal",
      typeBadge: "Greenfield .NET 8 Web",
      hook: "External portal for sales reps, traveling agents, and suppliers (statements, invoices, payments) with strict data isolation.",
      problem: "External reps and suppliers needed 24/7 access to account balances and payments without exposing sensitive internal corporate tables.",
      architecture: "ASP.NET Core (.NET 8) web portal enforcing perimeter security and scoped SQL Server projections tailored to each authenticated partner.",
      impact: "24/7 B2B self-service while keeping sensitive corporate financial data completely isolated."
    }
  },
  {
    id: "project-sarh",
    code: "SYS-05",
    category: "migration",
    stack: [".NET Framework", "C# / VB.NET", "VB6 Migration", "SQL Server", "HR & Medical Core"],
    badgeColor: "amber",
    es: {
      title: "SARH — Core de RRHH y Seguimiento Médico",
      typeBadge: "Migración VB6 → .NET",
      hook: "Modernización del sistema interno de Recursos Humanos: historia clínica laboral, datos personales y capacitaciones.",
      problem: "El sistema original en VB6 dificultaba el seguimiento médico moderno de los empleados y la gestión estructurada de su historia clínica y capacitaciones.",
      architecture: "Migración completa a .NET Framework y SQL Server centralizando Historia Clínica, Legajos y Capacitaciones, actuando además como backoffice receptor del Portal Empleados (.NET 8).",
      impact: "Gestión médica y de RRHH unificada, estable y conectada directamente con el canal web de empleados."
    },
    en: {
      title: "SARH — HR Core & Occupational Health Tracking",
      typeBadge: "VB6 → .NET Migration",
      hook: "Modernization of the internal HR core system managing clinical history, personal files, and employee training.",
      problem: "The legacy VB6 application lacked an agile structure for occupational health follow-ups, clinical history auditing, and training records.",
      architecture: "Full migration to .NET Framework and SQL Server centralizing Clinical History, Employee Records, and Trainings, while serving as the backoffice core for the .NET 8 Employee Portal.",
      impact: "Unified, stable occupational health and HR management seamlessly connected to the web portal."
    }
  },
  {
    id: "project-cashflow",
    code: "SYS-06",
    category: "migration",
    stack: [".NET Framework", "C#", "SQL Server", "Query Tuning", "Treasury"],
    badgeColor: "sky",
    es: {
      title: "Cash Flow — Proyección de Liquidez & SQL Tuning",
      typeBadge: "Optimización SQL / .NET",
      hook: "Actualización evolutiva y optimización de consultas financieras para proyección de disponibilidad de caja en tiempo real.",
      problem: "Consolidar compromisos bancarios, liquidaciones y cobranzas requería optimizar consultas SQL pesadas y actualizar criterios financieros.",
      architecture: "Refactorización de consultas en Microsoft SQL Server y mejoras en .NET Framework, alineando las proyecciones con el motor de Liquidaciones Automáticas.",
      impact: "Tiempos de respuesta inmediatos en escenarios de liquidez a corto y mediano plazo."
    },
    en: {
      title: "Cash Flow — Liquidity Projection & SQL Tuning",
      typeBadge: "SQL / .NET Optimization",
      hook: "Evolutionary updates and financial query optimization for real-time cash availability projections.",
      problem: "Consolidating bank commitments, settlements, and collections required optimizing heavy SQL queries and updating financial logic.",
      architecture: "Refactored Microsoft SQL Server queries and updated .NET Framework modules, aligning data directly with Automated Settlements.",
      impact: "Immediate execution times when generating short- and medium-term liquidity scenarios."
    }
  },
  {
    id: "project-rentabilidad",
    code: "SYS-07",
    category: "migration",
    stack: [".NET Framework", "C#", "SQL Server / T-SQL", "Power BI", "Demand Analysis"],
    badgeColor: "sky",
    es: {
      title: "Rentabilidad & Análisis de Demanda Industrial",
      typeBadge: "SQL Tuning & BI Analytics",
      hook: "Optimización de consultas complejas para cálculo de márgenes comerciales y estimación de promedios de producción industrial.",
      problem: "El alto volumen histórico de operaciones generaba cuellos de botella al cruzar costos, márgenes y estimaciones de demanda productiva.",
      architecture: "Tuning de consultas T-SQL en SQL Server y módulos analíticos en .NET para estimar promedios de producción industrial y alimentar indicadores de Power BI.",
      impact: "Reportes gerenciales de rentabilidad y demanda industrial rápidos, precisos y listos para Business Intelligence."
    },
    en: {
      title: "Profitability & Industrial Demand Analysis",
      typeBadge: "SQL Tuning & BI Analytics",
      hook: "Complex query optimization for commercial margin calculations and industrial production demand averaging.",
      problem: "Growing historical transaction volumes caused bottlenecks when cross-referencing costs, margins, and production demand estimates.",
      architecture: "Tuned complex T-SQL queries in SQL Server and built .NET analytical modules to estimate industrial production averages and feed Power BI dashboards.",
      impact: "Fast, accurate executive profitability and production demand metrics ready for Business Intelligence."
    }
  }
];

let currentLang = "es";
let currentFilter = "all";
let allExpanded = false;

const badgeStyles = {
  sky: "bg-sky-100 dark:bg-sky-100 border-sky-300 text-sky-900 font-semibold",
  amber: "bg-amber-100 dark:bg-amber-100 border-amber-300 text-amber-900 font-semibold"
};

function getTechIconHtml(tech) {
  const t = tech.toLowerCase();
  if (t.includes("c#")) {
    return `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="" class="w-5 h-5 shrink-0" />`;
  }
  if (t.includes(".net 8") || t.includes("asp.net")) {
    return `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt="" class="w-5 h-5 shrink-0" />`;
  }
  if (t.includes(".net framework")) {
    return `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" alt="" class="w-5 h-5 shrink-0" />`;
  }
  if (t.includes("vb6") || t.includes("vb.net")) {
    return `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg" alt="" class="w-5 h-5 shrink-0" />`;
  }
  if (t.includes("sql")) {
    return `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" alt="" class="w-5 h-5 shrink-0" />`;
  }
  if (t.includes("swagger") || t.includes("api")) {
    return `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg" alt="" class="w-5 h-5 shrink-0" />`;
  }
  if (t.includes("power bi")) {
    return `<svg class="w-5 h-5 text-amber-600 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14h4v7H4v-7zm6-5h4v12h-4V9zm6-6h4v18h-4V3z"/></svg>`;
  }
  return `<span class="w-2 h-2 rounded-full bg-sky-600 shrink-0"></span>`;
}

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = projectsData.filter(p =>
    currentFilter === "all" ? true : p.category === currentFilter
  );

  const labels = i18nData[currentLang];

  container.innerHTML = filtered.map(project => {
    const content = project[currentLang];
    const badgeClass = badgeStyles[project.badgeColor] || badgeStyles.sky;
    const openAttr = allExpanded ? "open" : "";

    return `
      <details id="${project.id}" class="project-card group bg-white dark:bg-slate-200/95 hover:bg-sky-50/40 dark:hover:bg-slate-100 border border-slate-300 dark:border-slate-300/90 hover:border-sky-500 rounded-xl overflow-hidden transition-all shadow-md dark:shadow-xl dark:shadow-black/30 text-slate-900" ${openAttr}>
        <summary class="cursor-pointer list-none p-5 space-y-3 select-none">
          <!-- Top Bar: Code + Badge + Expand Chevron -->
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <span class="font-mono text-[11px] font-bold text-slate-800 bg-slate-100 dark:bg-white px-2 py-0.5 rounded border border-slate-300 shadow-sm">
                ${project.code}
              </span>
              <span class="font-mono text-[11px] px-2 py-0.5 rounded border ${badgeClass}">
                ${content.typeBadge}
              </span>
            </div>
            <span class="font-mono text-[11px] font-semibold text-sky-700 dark:text-sky-800 flex items-center gap-1 group-open:text-slate-950">
              <span class="hidden sm:inline">${labels["card.toggle"]}</span>
              <span class="inline-block transition-transform group-open:rotate-180">&#9662;</span>
            </span>
          </div>

          <!-- Title & Compact 1-Line Hook -->
          <div>
            <h3 class="text-base sm:text-lg font-extrabold text-slate-950 group-hover:text-sky-800 dark:group-hover:text-sky-900 transition-colors">
              ${content.title}
            </h3>
            <p class="text-xs sm:text-sm text-slate-700 mt-1 leading-snug font-medium">
              ${content.hook}
            </p>
          </div>

          <!-- Compact Stack Pills with Tech Icons -->
          <div class="flex flex-wrap gap-1.5 pt-1">
            ${project.stack.map(tech => `
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 dark:bg-white border border-slate-300/90 text-slate-800 font-mono text-[11px] font-medium shadow-sm">
                ${getTechIconHtml(tech)}
                <span>${tech}</span>
              </span>
            `).join("")}
          </div>
        </summary>

        <!-- Expandable Full Technical Details (Hidden by default) -->
        <div class="px-5 pb-5 pt-3 border-t border-slate-200 dark:border-slate-300 bg-slate-50 dark:bg-slate-100/90 space-y-3 text-xs leading-relaxed">
          <div>
            <span class="font-mono text-[11px] text-amber-800 font-bold block">${labels["card.problem"]}</span>
            <p class="text-slate-700 mt-0.5">${content.problem}</p>
          </div>
          <div>
            <span class="font-mono text-[11px] text-sky-900 font-bold block">${labels["card.architecture"]}</span>
            <p class="text-slate-700 mt-0.5">${content.architecture}</p>
          </div>
          <div class="p-3 rounded-lg bg-sky-950 text-slate-100 border border-sky-800 shadow-inner">
            <span class="font-mono text-[11px] text-sky-300 font-bold block">${labels["card.impact"]}</span>
            <p class="text-white mt-0.5 font-medium">${content.impact}</p>
          </div>
        </div>
      </details>
    `;
  }).join("");
}

function applyTranslations() {
  const dict = i18nData[currentLang];
  document.documentElement.lang = currentLang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const langLabel = document.getElementById("lang-label");
  if (langLabel) {
    langLabel.textContent = currentLang === "es" ? "ES ▾" : "EN ▾";
  }

  const expandBtn = document.getElementById("expand-all-btn");
  if (expandBtn) {
    expandBtn.textContent = allExpanded ? dict["nav.collapseAll"] : dict["nav.expandAll"];
  }

  renderProjects();
}

function updateThemeUI(isDark) {
  const sunIcon = document.getElementById("theme-icon-sun");
  const moonIcon = document.getElementById("theme-icon-moon");
  const themeLabel = document.getElementById("theme-label");

  if (isDark) {
    document.documentElement.classList.add("dark");
    if (sunIcon) sunIcon.classList.remove("hidden");
    if (moonIcon) moonIcon.classList.add("hidden");
    if (themeLabel) themeLabel.textContent = "Light";
  } else {
    document.documentElement.classList.remove("dark");
    if (sunIcon) sunIcon.classList.add("hidden");
    if (moonIcon) moonIcon.classList.remove("hidden");
    if (themeLabel) themeLabel.textContent = "Dark";
  }
}

function setupEventListeners() {
  // Initialize Theme from localStorage (defaults to dark)
  const savedTheme = localStorage.getItem("jc_portfolio_theme");
  const initialDark = savedTheme ? savedTheme === "dark" : true;
  updateThemeUI(initialDark);

  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isCurrentlyDark = document.documentElement.classList.contains("dark");
      const nextDark = !isCurrentlyDark;
      localStorage.setItem("jc_portfolio_theme", nextDark ? "dark" : "light");
      updateThemeUI(nextDark);
    });
  }

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : "es";
      applyTranslations();
    });
  }

  const expandBtn = document.getElementById("expand-all-btn");
  if (expandBtn) {
    expandBtn.addEventListener("click", () => {
      allExpanded = !allExpanded;
      document.querySelectorAll("details").forEach(d => {
        d.open = allExpanded;
      });
      const dict = i18nData[currentLang];
      expandBtn.textContent = allExpanded ? dict["nav.collapseAll"] : dict["nav.expandAll"];
    });
  }

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      currentFilter = btn.getAttribute("data-filter") || "all";

      filterButtons.forEach(b => {
        b.classList.remove(
          "active",
          "border-sky-600",
          "dark:border-sky-400/60",
          "bg-sky-600/10",
          "dark:bg-sky-400/15",
          "text-sky-900",
          "dark:text-sky-200",
          "font-semibold"
        );
        b.classList.add(
          "border-slate-300",
          "dark:border-sky-900",
          "bg-white",
          "dark:bg-navy-900",
          "text-slate-600",
          "dark:text-slate-300"
        );
      });

      btn.classList.remove(
        "border-slate-300",
        "dark:border-sky-900",
        "bg-white",
        "dark:bg-navy-900",
        "text-slate-600",
        "dark:text-slate-300"
      );
      btn.classList.add(
        "active",
        "border-sky-600",
        "dark:border-sky-400/60",
        "bg-sky-600/10",
        "dark:bg-sky-400/15",
        "text-sky-900",
        "dark:text-sky-200",
        "font-semibold"
      );

      renderProjects();
    });
  });

  // Automatically open all <details> before printing to PDF so the exported CV is complete
  window.addEventListener("beforeprint", () => {
    document.querySelectorAll("details").forEach(d => {
      d.setAttribute("open", "");
    });
  });

  // Smoothly dock profile photo into top nav when user scrolls past the hero avatar
  const heroAvatar = document.getElementById("hero-avatar-wrapper");
  const navAvatar = document.getElementById("nav-avatar");
  const navMonogram = document.getElementById("nav-monogram");
  const navSubrole = document.getElementById("nav-subrole");

  if (heroAvatar && navAvatar && navMonogram && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrolledPast = !entry.isIntersecting;
        if (scrolledPast) {
          navAvatar.classList.remove("opacity-0", "scale-75", "pointer-events-none");
          navAvatar.classList.add("opacity-100", "scale-100");
          navMonogram.classList.add("opacity-0", "scale-75");
          if (navSubrole) {
            navSubrole.classList.remove("opacity-0", "-translate-y-1");
            navSubrole.classList.add("opacity-100", "translate-y-0");
          }
        } else {
          navAvatar.classList.add("opacity-0", "scale-75", "pointer-events-none");
          navAvatar.classList.remove("opacity-100", "scale-100");
          navMonogram.classList.remove("opacity-0", "scale-75");
          if (navSubrole) {
            navSubrole.classList.add("opacity-0", "-translate-y-1");
            navSubrole.classList.remove("opacity-100", "translate-y-0");
          }
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(heroAvatar);
  }

  // Floating Contact Button (FAB) + Popover Panel + Auto-hide when reaching Footer
  const fabWidget = document.getElementById("floating-contact-widget");
  const fabBtn = document.getElementById("floating-contact-btn");
  const fabPanel = document.getElementById("floating-contact-panel");
  const fabClose = document.getElementById("floating-contact-close");
  const fabIconOpen = document.getElementById("fab-icon-open");
  const fabIconClose = document.getElementById("fab-icon-close");
  const footerSection = document.getElementById("contact");

  let isFabOpen = false;

  function setFabPanelState(open) {
    isFabOpen = open;
    if (!fabPanel || !fabIconOpen || !fabIconClose) return;
    if (open) {
      fabPanel.classList.remove("opacity-0", "scale-90", "pointer-events-none");
      fabPanel.classList.add("opacity-100", "scale-100");
      fabIconOpen.classList.add("hidden");
      fabIconClose.classList.remove("hidden");
    } else {
      fabPanel.classList.add("opacity-0", "scale-90", "pointer-events-none");
      fabPanel.classList.remove("opacity-100", "scale-100");
      fabIconOpen.classList.remove("hidden");
      fabIconClose.classList.add("hidden");
    }
  }

  if (fabBtn) {
    fabBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setFabPanelState(!isFabOpen);
    });
  }

  if (fabClose) {
    fabClose.addEventListener("click", () => {
      setFabPanelState(false);
    });
  }

  document.addEventListener("click", (e) => {
    if (isFabOpen && fabWidget && !fabWidget.contains(e.target)) {
      setFabPanelState(false);
    }
  });

  if (footerSection && fabWidget && "IntersectionObserver" in window) {
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFabPanelState(false);
          fabWidget.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
        } else {
          fabWidget.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
        }
      },
      { threshold: 0.1 }
    );
    footerObserver.observe(footerSection);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  applyTranslations();
});
