import Image from 'next/image'

export default function Home() {
  return (
    <div style={{textAlign: 'center'}}>
      <Image 
        src="/images/sniffa.gif" 
        alt="sniffa" 
        width={800}
        height={800}
      />
    </div>
  )
}
