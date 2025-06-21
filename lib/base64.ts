import iconv from 'iconv-lite'

export const ENCODINGS = {
  'UTF-8': 'utf8',
  'EUC-KR': 'euc-kr',
} as const

export type EncodingType = keyof typeof ENCODINGS

export function encodeBase64(input: string, encoding: EncodingType, isUrlSafe: boolean = false): string {
  if (!input) return ''
  
  try {
    let buffer: Buffer
    
    if (encoding === 'UTF-8') {
      buffer = Buffer.from(input, 'utf8')
    } else if (encoding === 'EUC-KR') {
      buffer = iconv.encode(input, 'euc-kr')
    } else {
      buffer = Buffer.from(input, 'utf8')
    }
    
    let base64 = buffer.toString('base64')
    
    if (isUrlSafe) {
      base64 = base64.replace(/\+/g, '-').replace(/\//g, '_')
    }
    
    return base64
  } catch (error) {
    console.error('Base64 encoding error:', error)
    return ''
  }
}

export function decodeBase64(input: string, encoding: EncodingType, isUrlSafe: boolean = false): string {
  if (!input) return ''
  
  try {
    let base64 = input.trim()
    
    if (isUrlSafe) {
      base64 = base64.replace(/-/g, '+').replace(/_/g, '/')
      // 패딩 추가
      while (base64.length % 4) {
        base64 += '='
      }
    }
    
    const buffer = Buffer.from(base64, 'base64')
    
    if (encoding === 'UTF-8') {
      return buffer.toString('utf8')
    } else if (encoding === 'EUC-KR') {
      return iconv.decode(buffer, 'euc-kr')
    } else {
      return buffer.toString('utf8')
    }
  } catch (error) {
    console.error('Base64 decoding error:', error)
    return ''
  }
}

export function isValidBase64(str: string, isUrlSafe: boolean = false): boolean {
  if (!str) return false
  
  try {
    let testStr = str.trim()
    
    if (isUrlSafe) {
      testStr = testStr.replace(/-/g, '+').replace(/_/g, '/')
      while (testStr.length % 4) {
        testStr += '='
      }
    }
    
    // Base64 패턴 검증
    const base64Pattern = /^[A-Za-z0-9+/]*={0,2}$/
    if (!base64Pattern.test(testStr)) return false
    
    // 실제 디코딩 테스트
    Buffer.from(testStr, 'base64')
    return true
  } catch {
    return false
  }
} 