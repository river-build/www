/* eslint-disable react/jsx-no-target-blank */
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'
import { Typography } from '../ui/typography'
import { carouselItems } from './features-carousel'

export default function FeaturesMobile() {
  return (
    <div className="mt-12 flex w-full flex-col gap-8 px-4 pb-0 lg:hidden">
      {carouselItems.map((item, index) => (
        <a href={item.link} key={index} target="_blank">
          <Card className="w-full" disableHover>
            <CardContent className="flex flex-col items-start hover:cursor-pointer justify-center p-6">
              <div className="w-full">
                <Typography as="h3" size="3xl" className="w-full font-medium">
                  {item.heading}
                </Typography>
                <Typography as="p" size="md" className="!mt-2 font-normal text-gray-20">
                  {item.subheading}
                </Typography>
              </div>
            </CardContent>
            <div className="relative aspect-[2.121] w-full">
              <Image
                src={item.imageUrl}
                className="object-cover object-top"
                fill
                alt="features"
                quality={100}
              />
            </div>
          </Card>
        </a>
      ))}
    </div>
  )
}
