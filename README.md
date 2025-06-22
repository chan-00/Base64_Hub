# Base64 Hub

빠르고 간편한 Base64 인코더/디코더 웹 애플리케이션입니다.

## 주요 기능

- ⚡ **실시간 변환**: 입력과 동시에 Base64 인코딩/디코딩
- 🌐 **다양한 인코딩**: UTF-8, EUC-KR 지원
- 🔗 **URL-safe 옵션**: URL에서 사용하기 안전한 Base64 생성
- 🌙 **다크/라이트 테마**: 사용자 선호에 따른 테마 전환
- 📚 **변환 히스토리**: 이전 변환 기록 저장 및 재사용
- 📱 **반응형 디자인**: 모바일과 데스크톱 최적화
- 💰 **광고 수익화**: Google AdSense 연동

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Deployment**: Vercel

## 로컬 개발

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## Vercel 배포

1. **GitHub에 코드 푸시**

   ```bash
   git remote add origin https://github.com/yourusername/base64-hub.git
   git push -u origin main
   ```

2. **Vercel에서 배포**
   - [vercel.com](https://vercel.com)에 가입
   - "New Project" 클릭
   - GitHub 저장소 import
   - 자동으로 배포 완료

## Google AdSense 설정

### 1. AdSense 계정 생성

1. [Google AdSense](https://www.google.com/adsense)에 가입
2. 사이트 승인 대기 (보통 1-2주 소요)

### 2. Google Search Console 설정

1. [Google Search Console](https://search.google.com/search-console)에 가입
2. 사이트 소유권 확인 (HTML 태그 방식 권장)
3. 인증 코드를 복사하여 환경변수에 설정

### 3. 환경 변수 설정

Vercel 대시보드에서 환경 변수를 설정하세요:

```
# AdSense 설정
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxxxxxxxx
NEXT_PUBLIC_ADSENSE_BANNER_SLOT=xxxxxxxxxx
NEXT_PUBLIC_ADSENSE_SIDEBAR_SLOT=xxxxxxxxxx
NEXT_PUBLIC_ADSENSE_CONTENT_SLOT=xxxxxxxxxx

# Google Search Console
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=xxxxxxxxxxxxxxxxxx
```

### 4. 광고 슬롯 생성

AdSense 대시보드에서 다음 광고 슬롯을 생성하세요:

- **배너 광고**: 페이지 하단 (Footer)
- **사이드바 광고**: 메인 콘텐츠 옆 (Sidebar)
- **콘텐츠 광고**: 콘텐츠 중간 (Content)

### 5. 광고 배치 최적화

- 콘텐츠와 광고 비율: 70:30 권장
- 사용자 경험을 해치지 않는 위치에 배치
- 모바일에서도 적절히 표시되는지 확인

## 프로젝트 구조

```
Base64_Studio/
├── app/                    # Next.js App Router
│   ├── about/             # Base64 설명 페이지
│   ├── privacy/           # 개인정보처리방침
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   └── page.tsx           # 메인 페이지
├── components/            # React 컴포넌트
│   ├── AdSense.tsx        # Google AdSense 컴포넌트
│   ├── Base64Converter.tsx # 메인 변환기
│   ├── Footer.tsx         # 푸터
│   ├── Header.tsx         # 헤더
│   ├── HistoryModal.tsx   # 히스토리 모달
│   └── ThemeProvider.tsx  # 테마 프로바이더
├── lib/                   # 유틸리티 함수
│   ├── base64.ts          # Base64 인코딩/디코딩
│   └── store.ts           # Zustand 상태 관리
└── public/                # 정적 파일
```

## 수익화 전략

### 광고 배치

1. **페이지 하단 배너**: 높은 노출률
2. **사이드바 광고**: 콘텐츠와 분리된 위치
3. **인라인 광고**: 콘텐츠 중간 삽입 (선택사항)

### 수익 최적화

- **A/B 테스트**: 다양한 광고 위치 테스트
- **사용자 경험**: 과도한 광고 배치 지양
- **콘텐츠 품질**: 유용한 기능으로 사용자 유지

## 라이선스

MIT License

## 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
