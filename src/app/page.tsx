"use client";

import { useEffect, useState } from "react";

type Locale = "ko" | "en";

const LOCALE_STORAGE_KEY = "portfolio-locale";

type CapabilityItem = {
  title: string;
  summary: string;
};

type ProjectItem = {
  title: string;
  role: string;
  detail: string;
  impact: string;
};

type WorkflowStep = {
  title: string;
  description: string;
};

type ArchiveItem = {
  title: string;
  description: string;
};

type ProfilePoint = {
  label: string;
  value: string;
};

type LocaleContent = {
  brand: string;
  nav: {
    overview: string;
    about: string;
    expertise: string;
    projects: string;
    workflow: string;
    writing: string;
    contact: string;
  };
  hero: {
    kicker: string;
    title: string;
    copy: string;
    primaryCta: string;
    secondaryCta: string;
    asideTitle: string;
  };
  signalItems: Array<{
    title: string;
    description: string;
  }>;
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    profileTitle: string;
    profilePoints: ProfilePoint[];
  };
  expertise: {
    label: string;
    title: string;
    items: CapabilityItem[];
  };
  projects: {
    label: string;
    title: string;
    items: ProjectItem[];
  };
  workflow: {
    label: string;
    title: string;
    steps: WorkflowStep[];
  };
  writing: {
    label: string;
    title: string;
    description: string;
    items: ArchiveItem[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    email: string;
  };
  focusAreas: string[];
  localeButtonLabel: string;
  localeButtonAria: string;
};

const content: Record<Locale, LocaleContent> = {
  ko: {
    brand: "Security Consulting Portfolio",
    nav: {
      overview: "요약",
      about: "소개",
      expertise: "진단 분야",
      projects: "수행 사례",
      workflow: "수행 절차",
      writing: "아카이브",
      contact: "문의",
    },
    hero: {
      kicker: "Security Consulting Portfolio",
      title: "보안 컨설팅 수행 이력 포트폴리오",
      copy:
        "금융 웹 애플리케이션, 안드로이드 애플리케이션, 모의해킹 기반 진단 수행 경험을 중심으로 주요 프로젝트와 산출물 체계를 정리했습니다.",
      primaryCta: "대표 이력 보기",
      secondaryCta: "문의하기",
      asideTitle: "핵심 진단 분야",
    },
    signalItems: [
      {
        title: "실무 중심 수행",
        description: "실제 프로젝트 기반으로 진단 범위와 절차를 설계합니다.",
      },
      {
        title: "증적 기반 검증",
        description: "재현 가능한 증적과 로그를 중심으로 결과를 정리합니다.",
      },
      {
        title: "이행 확인 중심",
        description: "재진단을 통해 보완 조치 적용 여부를 명확히 확인합니다.",
      },
    ],
    about: {
      label: "소개",
      title: "컨설팅 수행 이력 기반 보안 진단 포트폴리오",
      paragraphs: [
        "시기별 수행 내역을 단순 나열하지 않고, 반복적으로 수행한 진단 역량을 중심으로 재구성해 핵심 전문 영역을 명확히 제시합니다.",
        "각 항목은 검증 방식, 증적 확보, 보고 체계, 이행 확인 흐름을 포함하며 실무 재현성과 전달 품질을 기준으로 정리되어 있습니다.",
      ],
      profileTitle: "수행 원칙",
      profilePoints: [
        {
          label: "핵심 분야",
          value: "웹 애플리케이션 진단, 인증/세션 점검, 모바일 애플리케이션 보안 진단",
        },
        {
          label: "업무 프레임",
          value: "범위 정의 -> 시나리오 설계 -> 검증 -> 증적 정리 -> 이행 확인",
        },
        {
          label: "결과 기준",
          value: "재현성, 명확성, 추적 가능성을 기준으로 산출물을 구성합니다.",
        },
      ],
    },
    expertise: {
      label: "진단 분야",
      title: "컨설팅 수행 대분류",
      items: [
        {
          title: "웹 애플리케이션 취약점 진단",
          summary:
            "진단 범위 설정부터 항목 수행, 재진단, 이행 확인까지 실무 진단 사이클을 일관된 기준으로 수행합니다.",
        },
        {
          title: "인증/세션 보안 진단",
          summary:
            "PassKey/FIDO, 세션 재사용, 중복 로그인, 토큰 무결성 검증 등 인증 흐름 중심 점검을 수행합니다.",
        },
        {
          title: "API 보안 및 입력값 검증",
          summary:
            "Body/Param 변조, 자료형 변경, 누락값 처리, 서버 검증 로직 확인을 통해 취약 가능성을 점검합니다.",
        },
        {
          title: "증적 수집 및 보고서 작성",
          summary:
            "항목별 증적 수집, 요약표 구성, 리포트 시인성 개선을 통해 결과 전달 품질을 표준화합니다.",
        },
        {
          title: "진단 보조도구 운영 및 자동화",
          summary:
            "보조도구와 대시보드를 활용해 반복 작업을 자동화하고 실행 이력과 결과 확인 효율을 높입니다.",
        },
        {
          title: "모바일 애플리케이션 보안 분석",
          summary:
            "APK 분석, 루팅 환경 구성, Frida 기반 동적 분석과 우회 실험으로 모바일 진단 역량을 강화합니다.",
        },
        {
          title: "운영 이슈 대응 및 재진단",
          summary:
            "계정, 접근 권한, 시스템 상태, 환경 제약 이슈를 분리 대응해 진단 연속성과 일정 안정성을 확보합니다.",
        },
        {
          title: "컨설팅 수행 체계 고도화",
          summary:
            "체크리스트 고도화, 수행 기준 정비, 특이 케이스 대응 방식 개선을 통해 수행 품질을 지속적으로 향상합니다.",
        },
      ],
    },
    projects: {
      label: "수행 사례",
      title: "주요 진단 수행 사례",
      items: [
        {
          title: "금융 웹 애플리케이션 취약점 진단",
          role: "웹 애플리케이션 취약점 진단 수행",
          detail:
            "인증·인가, 입력값 검증, 중요 정보 노출, 비즈니스 로직 우회 가능성을 중심으로 핵심 기능 흐름을 점검하고 재현 가능한 증적을 수집했습니다.",
          impact: "우선 조치 대상 취약점 도출 및 보고서 완성도 향상",
        },
        {
          title: "운영계 로그인 및 PassKey 인증 보안 진단",
          role: "인증/세션 보안 진단 수행",
          detail:
            "PassKey 등록·조회·삭제, 세션 유지 정책, 요청 재전송, 파라미터 무결성 검증을 통해 인증 흐름 전반의 취약 가능성을 점검했습니다.",
          impact: "인증/세션 리스크 식별 정확도 및 검증 범위 강화",
        },
        {
          title: "안드로이드 애플리케이션 보안 진단",
          role: "안드로이드 애플리케이션 진단 수행",
          detail:
            "APK 정적 분석과 동적 분석을 병행해 통신 보호, 인증 처리, 클라이언트 저장소, 우회 시나리오를 점검하고 취약 가능 구간을 분류했습니다.",
          impact: "모바일 진단 커버리지 확대 및 대응 우선순위 명확화",
        },
        {
          title: "모의해킹 시나리오 기반 취약점 검증",
          role: "모의해킹 시나리오 검증 수행",
          detail:
            "공격자 관점 시나리오를 기준으로 단계 스킵, 요청 변조, 재사용 공격, 접근 통제 우회 가능성을 검증해 실제 악용 경로를 확인했습니다.",
          impact: "실전 관점의 취약점 재현성 확보 및 위험도 판단 고도화",
        },
        {
          title: "이행점검 및 재진단 수행",
          role: "이행점검 및 재진단 수행",
          detail:
            "조치 완료 항목에 대해 동일 기준으로 재검증하고, 미이행/부분 이행 구간을 구분해 후속 조치 필요사항을 명확히 정리했습니다.",
          impact: "개선 이력 추적성 확보 및 재발 방지 중심의 이행 관리 강화",
        },
      ],
    },
    workflow: {
      label: "수행 절차",
      title: "컨설팅 수행 프로세스",
      steps: [
        {
          title: "범위 및 제약 정의",
          description: "대상 기능, 계정 조건, 접근 제약을 먼저 정리해 실제 검증 가능한 범위를 확정합니다.",
        },
        {
          title: "시나리오 설계",
          description: "인증, 세션, 입력값, 접근제어, 정보 노출 항목 기준으로 테스트 시나리오를 구성합니다.",
        },
        {
          title: "검증 및 우회 시도",
          description: "요청 변조, 재전송, 흐름 스킵, 파라미터 조작 등으로 취약 가능성을 확인합니다.",
        },
        {
          title: "증적 수집 및 보고 정리",
          description: "재현 절차, 요청/응답 근거, 영향도, 조치 방향을 표준 형식으로 문서화합니다.",
        },
        {
          title: "재진단 및 이행 확인",
          description: "보완 항목을 동일 기준으로 재검증해 조치 완료 여부와 잔여 리스크를 확인합니다.",
        },
      ],
    },
    writing: {
      label: "수행 아카이브",
      title: "수행 이력 및 개선 기록",
      description:
        "컨설팅 수행 중 축적한 개선 내역과 보조 자료를 아카이브로 관리해 이후 수행에 재사용 가능한 기준으로 정리하고 있습니다.",
      items: [
        {
          title: "컨설팅 산출물 표준화",
          description:
            "OWASP 기반 세부 항목을 재정의하고 CWE/CVE 매핑을 확장해 실무 적용 가능한 점검 기준을 정리했습니다.",
        },
        {
          title: "수행 보조도구 운영 개선",
          description:
            "실행 설정 프리셋, denylist 저장, history 분리, audit 로그, 라이브 출력 등 운영 기능 개선 내역을 기록했습니다.",
        },
        {
          title: "모바일 점검 대응 기록",
          description:
            "Hook 포인트 재구성, Pinning 우회 방식 검토, 분석 흐름 개선 사항을 기술 메모 형태로 축적했습니다.",
        },
        {
          title: "특이 케이스 대응 사례",
          description:
            "HTTP/2 기반 변종 취약점 분류와 실제 진단 적용 가능성 검토 결과를 케이스별로 정리했습니다.",
        },
      ],
    },
    contact: {
      label: "문의",
      title: "컨설팅 이력 관련 및 채용 문의",
      description:
        "수행 이력, 프로젝트 범위, 채용 관련 문의는 이메일로 전달해 주세요. 목적과 일정, 요청 사항을 확인한 후 회신드립니다.",
      email: "sunhooahn@naver.com",
    },
    focusAreas: [
      "금융 웹 애플리케이션 취약점 진단",
      "안드로이드 애플리케이션 진단",
      "모의해킹 시나리오 기반 점검",
      "인증/세션 보안 검증",
      "증적 기반 보고서 작성",
    ],
    localeButtonLabel: "EN",
    localeButtonAria: "Switch to English",
  },
  en: {
    brand: "Security Consulting Portfolio",
    nav: {
      overview: "Overview",
      about: "About",
      expertise: "Practice Areas",
      projects: "Case Studies",
      workflow: "Process",
      writing: "Archive",
      contact: "Contact",
    },
    hero: {
      kicker: "Security Consulting Portfolio",
      title: "Practical Security Consulting Portfolio",
      copy:
        "This portfolio highlights hands-on assessments across financial web applications, Android applications, and penetration-testing scenarios, with clear project outcomes and deliverables.",
      primaryCta: "View Case Studies",
      secondaryCta: "Get in Touch",
      asideTitle: "Core Domains",
    },
    signalItems: [
      {
        title: "Execution-Focused Delivery",
        description: "Assessment scope and test plans are built from real project constraints.",
      },
      {
        title: "Evidence-Driven Validation",
        description: "Findings are supported by reproducible evidence and traceable logs.",
      },
      {
        title: "Remediation Verification",
        description: "Reassessments confirm whether corrective actions are fully implemented.",
      },
    ],
    about: {
      label: "About",
      title: "Security Assessment Portfolio Built on Consulting Delivery",
      paragraphs: [
        "Instead of listing tasks by date, this portfolio organizes recurring consulting capabilities into clear technical domains.",
        "Each section includes validation approach, evidence collection, reporting format, and remediation verification for practical reuse.",
      ],
      profileTitle: "Working Principles",
      profilePoints: [
        {
          label: "Core Scope",
          value: "Web application assessment, authentication/session review, Android application security assessment",
        },
        {
          label: "Delivery Frame",
          value: "Scope definition -> Scenario design -> Validation -> Evidence reporting -> Reassessment",
        },
        {
          label: "Outcome Standard",
          value: "Deliverables are structured for reproducibility, clarity, and traceability.",
        },
      ],
    },
    expertise: {
      label: "Practice Areas",
      title: "Consulting Capability Categories",
      items: [
        {
          title: "Web Application Vulnerability Assessment",
          summary:
            "From scope definition to remediation validation, assessments are executed with a consistent delivery standard.",
        },
        {
          title: "Authentication and Session Security Review",
          summary:
            "Assessment focuses on PassKey/FIDO, session reuse, duplicate sessions, and token integrity controls.",
        },
        {
          title: "API Security and Input Validation",
          summary:
            "Request-body tampering, type validation, missing-field handling, and server-side validation logic are systematically reviewed.",
        },
        {
          title: "Evidence Collection and Reporting",
          summary:
            "Evidence gathering, summary-table design, and report readability improvements are standardized for delivery quality.",
        },
        {
          title: "Assessment Tooling and Automation",
          summary:
            "Supporting tools and dashboards are used to automate repetitive tasks and improve execution traceability.",
        },
        {
          title: "Mobile Application Security Analysis",
          summary:
            "APK analysis, rooted-environment setup, Frida-based dynamic review, and bypass scenarios strengthen mobile coverage.",
        },
        {
          title: "Operational Issue Handling and Reassessment",
          summary:
            "Account, permission, and environment constraints are handled to maintain continuity and schedule stability.",
        },
        {
          title: "Consulting Delivery Framework Enhancement",
          summary:
            "Checklist refinement and edge-case response standards are continuously improved to raise delivery quality.",
        },
      ],
    },
    projects: {
      label: "Case Studies",
      title: "Representative Assessment Engagements",
      items: [
        {
          title: "Financial Web Application Vulnerability Assessment",
          role: "Web Application Penetration Test",
          detail:
            "Core user flows were reviewed for authentication/authorization gaps, input validation weaknesses, sensitive-data exposure, and business-logic bypass paths, with reproducible evidence capture.",
          impact: "Prioritized remediation targets identified with improved reporting quality",
        },
        {
          title: "Production Login and PassKey Security Assessment",
          role: "Authentication and Session Security Assessment",
          detail:
            "PassKey registration, lookup, deletion, session policy behavior, replay risk, and parameter integrity were assessed across the end-to-end authentication flow.",
          impact: "Higher precision in identifying authentication/session risk points",
        },
        {
          title: "Android Application Security Assessment",
          role: "Android Application Security Assessment",
          detail:
            "Static and dynamic analysis were combined to review transport security, authentication handling, client-side storage, and bypass scenarios, then classify feasible risk zones.",
          impact: "Expanded mobile coverage with clearer remediation prioritization",
        },
        {
          title: "Penetration-Testing Scenario Validation",
          role: "Penetration Testing Scenario Execution",
          detail:
            "Attacker-oriented scenarios validated step-skip attempts, request tampering, replay behavior, and access-control bypass to confirm realistic exploitation paths.",
          impact: "Improved exploit reproducibility and practical risk judgment",
        },
        {
          title: "Remediation Validation and Reassessment",
          role: "Remediation Validation and Reassessment",
          detail:
            "Completed fixes were reassessed under the same criteria, with non-implemented and partially implemented areas clearly separated for follow-up action tracking.",
          impact: "Stronger remediation traceability and prevention-focused follow-up",
        },
      ],
    },
    workflow: {
      label: "Process",
      title: "Consulting Delivery Workflow",
      steps: [
        {
          title: "Scope and Constraint Definition",
          description: "Target functions, account conditions, and environment constraints are defined up front.",
        },
        {
          title: "Scenario Design",
          description: "Test scenarios are built around authentication, session, input validation, access control, and data exposure.",
        },
        {
          title: "Validation and Bypass Testing",
          description: "Tampering, replay, and flow-skip attempts are used to confirm exploitable conditions.",
        },
        {
          title: "Evidence and Reporting",
          description: "Reproduction steps, request/response evidence, impact, and remediation guidance are documented.",
        },
        {
          title: "Reassessment and Closure Check",
          description: "Remediated items are retested under identical criteria to confirm closure and residual risk.",
        },
      ],
    },
    writing: {
      label: "Archive",
      title: "Delivery Records and Improvement Notes",
      description:
        "Improvement records and supporting materials are maintained as a structured archive for reuse in future engagements.",
      items: [
        {
          title: "Deliverable Standardization",
          description:
            "OWASP-based checks and expanded CWE/CVE mapping were organized into practical assessment standards.",
        },
        {
          title: "Tooling Operations Improvement",
          description:
            "Preset configurations, denylist persistence, history separation, audit logging, and live output features were refined.",
        },
        {
          title: "Mobile Assessment Response Notes",
          description:
            "Hook-point restructuring, pinning-bypass review, and analysis-flow improvements were documented as technical notes.",
        },
        {
          title: "Edge-Case Response Records",
          description:
            "HTTP/2 variant case classification and practical applicability checks were documented by scenario.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Inquiries About Consulting Experience",
      description:
        "For experience, project scope, or hiring inquiries, please share your purpose, timeline, and request details by email.",
      email: "sunhooahn@naver.com",
    },
    focusAreas: [
      "Financial Web Application Assessment",
      "Android Application Assessment",
      "Penetration Testing Scenarios",
      "Authentication and Session Security",
      "Evidence-Driven Reporting",
    ],
    localeButtonLabel: "KO",
    localeButtonAria: "Switch to Korean",
  },
};

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "ko";
    }

    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return storedLocale === "ko" || storedLocale === "en" ? storedLocale : "ko";
  });

  const t = content[locale];

  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale]);

  const toggleLocale = () => {
    const nextLocale: Locale = locale === "ko" ? "en" : "ko";
    setLocale(nextLocale);
  };

  return (
    <div className="page-layout">
      <aside className="side-rail" aria-label="Side navigation">
        <header className="floating-brand">
          <a className="brand" href="#top">
            {t.brand}
          </a>
        </header>

        <nav aria-label="Table of contents" className="side-toc">
          <a href="#top">{t.nav.overview}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#expertise">{t.nav.expertise}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#workflow">{t.nav.workflow}</a>
          <a href="#writing">{t.nav.writing}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
      </aside>

      <main className="site-shell">
        <section className="hero-panel" id="top" aria-labelledby="hero-title">
          <div className="hero-layout">
            <div className="hero-main">
              <p className="hero-kicker">{t.hero.kicker}</p>
              <h1 id="hero-title">{t.hero.title}</h1>
              <p className="hero-copy">{t.hero.copy}</p>
              <div className="hero-actions">
                <a className="button-primary" href="#projects">
                  {t.hero.primaryCta}
                </a>
                <a className="button-ghost" href="#contact">
                  {t.hero.secondaryCta}
                </a>
              </div>
            </div>

            <aside className="hero-aside" aria-label="Focus areas">
              <p className="aside-title">{t.hero.asideTitle}</p>
              <ul className="tag-list">
                {t.focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          </div>

          <ul className="signal-row" aria-label="Working principles">
            {t.signalItems.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section split" id="about" aria-labelledby="about-title">
          <div>
            <p className="section-label">{t.about.label}</p>
            <h2 id="about-title">{t.about.title}</h2>
            {t.about.paragraphs.map((paragraph) => (
              <p className="section-description" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="profile-card" aria-label="Profile summary">
            <h3>{t.about.profileTitle}</h3>
            <dl className="profile-points">
              {t.about.profilePoints.map((point) => (
                <div key={point.label}>
                  <dt>{point.label}</dt>
                  <dd>{point.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </section>

        <section className="section" id="expertise" aria-labelledby="expertise-title">
          <div className="section-head">
            <p className="section-label">{t.expertise.label}</p>
            <h2 id="expertise-title">{t.expertise.title}</h2>
          </div>
          <div className="card-grid">
            {t.expertise.items.map((item) => (
              <article className="info-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="section-head">
            <p className="section-label">{t.projects.label}</p>
            <h2 id="projects-title">{t.projects.title}</h2>
          </div>
          <div className="project-grid">
            {t.projects.items.map((project) => (
              <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p>{project.detail}</p>
                <p className="project-impact">{project.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="workflow" aria-labelledby="workflow-title">
          <div className="section-head">
            <p className="section-label">{t.workflow.label}</p>
            <h2 id="workflow-title">{t.workflow.title}</h2>
          </div>
          <ol className="timeline">
            {t.workflow.steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section split" id="writing" aria-labelledby="writing-title">
          <div>
            <p className="section-label">{t.writing.label}</p>
            <h2 id="writing-title">{t.writing.title}</h2>
            <p className="section-description">{t.writing.description}</p>
          </div>
          <ul className="publication-list">
            {t.writing.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="section-label">{t.contact.label}</p>
          <h2 id="contact-title">{t.contact.title}</h2>
          <p>{t.contact.description}</p>
          <div className="hero-actions">
            <a className="button-primary" href={`mailto:${t.contact.email}`}>
              {t.contact.email}
            </a>
          </div>
        </section>
      </main>

      <button
        type="button"
        className="lang-toggle"
        onClick={toggleLocale}
        aria-label={t.localeButtonAria}
      >
        {t.localeButtonLabel}
      </button>
    </div>
  );
}
