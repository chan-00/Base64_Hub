const fs = require('fs');
const path = require('path');

// SVG 내용을 정의
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#3b82f6"/>
  <text x="16" y="22" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="white">B</text>
</svg>`;

// public 디렉토리에 favicon.svg 파일 생성
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
console.log('✅ favicon.svg 생성 완료');

// 간단한 ICO 파일 생성 (바이너리 데이터)
const icoHeader = Buffer.from([
  0x00, 0x00, // Reserved
  0x01, 0x00, // Type (1 = ICO)
  0x01, 0x00, // Number of images
  0x20, 0x00, // Width (32)
  0x20, 0x00, // Height (32)
  0x00,       // Color count
  0x00,       // Reserved
  0x01, 0x00, // Color planes
  0x20, 0x00, // Bits per pixel (32)
  0x00, 0x00, 0x00, 0x00, // Size (placeholder)
  0x16, 0x00, 0x00, 0x00  // Offset (22 bytes)
]);

// 간단한 PNG 데이터 (32x32 파란색 사각형)
const pngData = Buffer.from([
  0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // PNG signature
  0x00, 0x00, 0x00, 0x0D, // IHDR chunk length
  0x49, 0x48, 0x44, 0x52, // IHDR
  0x00, 0x00, 0x00, 0x20, // Width: 32
  0x00, 0x00, 0x00, 0x20, // Height: 32
  0x08, // Bit depth
  0x06, // Color type (RGBA)
  0x00, // Compression
  0x00, // Filter
  0x00, // Interlace
  0x00, 0x00, 0x00, 0x00, // CRC (placeholder)
]);

// ICO 파일 생성
const icoData = Buffer.concat([icoHeader, pngData]);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoData);
console.log('✅ favicon.ico 생성 완료');

// apple-touch-icon.png (180x180) - 간단한 버전
const appleTouchIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="36" fill="#3b82f6"/>
  <text x="90" y="120" font-family="Arial, sans-serif" font-size="100" font-weight="bold" text-anchor="middle" fill="white">B</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.svg'), appleTouchIconSvg);
console.log('✅ apple-touch-icon.svg 생성 완료');

console.log('🎉 모든 favicon 파일이 생성되었습니다!');
console.log('📁 생성된 파일들:');
console.log('  - public/favicon.svg');
console.log('  - public/favicon.ico');
console.log('  - public/apple-touch-icon.svg'); 