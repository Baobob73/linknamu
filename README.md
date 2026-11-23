# 🌳 링크나무

내 모든 링크를 한 페이지에 모아 하나의 URL로 공유하는 Link in Bio 서비스입니다.

## 시작하기

1. Node.js 18.17 이상 설치 (https://nodejs.org 의 LTS 버전 권장)
2. 의존성 설치: `npm install`
3. 환경 변수: `.env.example`을 `.env.local`로 복사하고 MongoDB Atlas 연결 문자열을 입력합니다.
   - 비워 두면 클릭 수 집계 없이 페이지만 동작합니다.
4. 개발 서버: `npm run dev` → http://localhost:3000

## 내 정보로 바꾸기

`src/data/profile.ts`에서 이름·소개·사진·링크를 수정하세요.
프로필 사진은 `public/`에 넣고 `avatar` 경로를 바꾸면 됩니다.

## 구조

```
src/
  app/
    layout.tsx           # 테마 깜빡임 방지 스크립트, 메타데이터
    page.tsx             # 메인 페이지
    api/clicks/route.ts  # GET: 클릭 수 조회 / POST: 클릭 기록
  components/            # ProfileHeader, LinkList, LinkCard, ThemeToggle
  data/profile.ts        # 프로필 · 링크 데이터
  lib/mongodb.ts         # MongoDB 연결 (전역 캐시)
```

## Vercel 배포

1. GitHub에 푸시한 뒤 Vercel에서 Import합니다.
2. Project Settings → Environment Variables에 `MONGODB_URI`, `MONGODB_DB`를 추가합니다.
3. MongoDB Atlas → Network Access에서 `0.0.0.0/0`을 허용합니다. (Vercel은 IP가 고정되지 않습니다)
