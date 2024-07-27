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
    icon: <i className='bx bxl-tiktok text-[50px] -mt-[2px] text-white'></i>,
    link: "https://www.tiktok.com/@tusanvicr",
  }
];

export default function SocialMediaButtons() {

  const scrollY = useWindowScroll();

  return (
    <div className="absolute top-0 w-screen z-1">
      <div className="relative w-full h-svh">
        <div className="absolute z-10 flex items-center justify-end transition-all duration-1000 ease-in-out bottom-8 gap-x-6" style={{ right: scrollY > 20 ? -200 : 40 }}>
          {SOCIAL_MEDIA_BUTTONS.map(({ name, icon, link }) => {
            return <SocialMediaButton icon={icon} key={name} link={link} />
          })}
        </div>
      </div>
    </div>
  )
}

