# Portfolio Web

Next.js(App Router) + TypeScript 기반 포트폴리오 웹 프로젝트입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

- 개발 서버: `http://localhost:3000`

## 사용 스택

- Next.js 16
- React 19
- TypeScript
- ESLint (next/core-web-vitals + next/typescript)

## 배포 정책 (Vercel + Git 연동 전용)

이 프로젝트는 **Vercel CLI 수동 배포를 사용하지 않고**, Git push 기반 자동 배포만 사용합니다.

### 1) Git 저장소 준비

1. 원격 저장소 생성 (GitHub/GitLab/Bitbucket 중 택1)
2. 로컬 프로젝트를 해당 원격 저장소에 push

### 2) Vercel 프로젝트 연결

1. Vercel Dashboard에서 `Add New... -> Project`
2. Git Provider 연동 후 해당 저장소 선택
3. Framework Preset은 `Next.js` 확인
4. Build/Output 설정은 기본값 사용

### 3) 배포 방식

- `main` 브랜치 push -> Production 배포
- PR/브랜치 push -> Preview 배포

## 스크립트

- `npm run dev`: 개발 서버
- `npm run lint`: ESLint 검사
- `npm run build`: 프로덕션 빌드
- `npm run start`: 빌드 결과 실행
