import { useWindowScroll } from "../../hooks/useScroll";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import SocialMediaButton from "./SocialMediaButton";

const SOCIAL_MEDIA_BUTTONS = [
  {
    name: "Facebook",
    icon: <Facebook className="text-white size-full" />,
    link: "https://www.facebook.com/tusanvicr/",
  },
  {
    name: "Instagram",
    icon: <Instagram className="text-white size-full" />,
    link: "https://www.instagram.com/tusanvicr/",
  },
  {
    name: "TikTok",
    icon: <i className='bx bxl-tiktok text-[36px] md:text-[50px] -mt-[1px] md:-mt-[2px] -ml-[3px] text-white'></i>,
    link: "https://www.tiktok.com/@tusanvicr",
  }
];

export default function SocialMediaButtons() {

  const scrollY = useWindowScroll();

  return (
    <div className="absolute top-0 w-screen z-1">
      <div className="relative w-full h-svh overflow-hidden">
        <div className="absolute z-10 flex items-center justify-end transition-all duration-1000 ease-in-out bottom-8 gap-x-4 md:gap-x-6 mr-5 md:mr-10" style={{ right: scrollY > 20 ? -160 : 0 }}>
          {SOCIAL_MEDIA_BUTTONS.map(({ name, icon, link }) => {
            return <SocialMediaButton icon={icon} key={name} link={link} />
          })}
        </div>
      </div>
    </div>
  )
}

