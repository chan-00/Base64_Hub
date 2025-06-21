'use client'

import { useEffect } from 'react'

interface AdSenseProps {
  client: string // Google AdSense 클라이언트 ID (ca-pub-xxxxxxxxxx)
  slot: string // 광고 슬롯 ID
  format?: string // 광고 형식 (auto, rectangle, horizontal 등)
  responsive?: boolean // 반응형 여부
  style?: React.CSSProperties
  className?: string
}

export default function AdSense({ 
  client, 
  slot, 
  format = 'auto', 
  responsive = true,
  style,
  className 
}: AdSenseProps) {
  useEffect(() => {
    try {
      // Google AdSense 스크립트가 로드되었는지 확인
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        (window as any).adsbygoogle = (window as any).adsbygoogle || []
        ;(window as any).adsbygoogle.push({})
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className={className} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  )
} 