import Image from 'next/image'

export const DelegateFooter = () => {
  return (
    <div className="fixed inset-x-0 -bottom-4 h-[200px] w-full opacity-55 md:-bottom-52 md:h-[340px]">
      <Image
        src="/images/hero-wave.webp"
        alt="hero image"
        className="object-cover"
        fill
        priority
        quality={90}
        loading="eager"
      />
    </div>
  )
}
