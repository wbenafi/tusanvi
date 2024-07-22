import { useWindowScroll } from "../../hooks/useScroll";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import SocialMediaButton from "./SocialMediaButton";

const SOCIAL_MEDIA_BUTTONS = [
  {
    name: "Facebook",
    icon: <Facebook className="size-full text-[#0099D7]" />,
    link: "https://www.facebook.com/tusanvicr/",
  },
  {
    name: "Instagram",
    icon: <Instagram className="size-full text-[#E6007E]" />,
    link: "https://www.instagram.com/tusanvicr/",
  },
];

export default function SocialMediaButtons() {

  const scrollY = useWindowScroll();

  return (
    <div className="absolute top-0 z-0 w-screen">
      <div className="w-full h-svh relative">
        <div className="absolute bottom-8 flex justify-end items-center gap-x-4 transition-all duration-1000 ease-in-out" style={{ right: scrollY > 20 ? -150 : 40 }}>
          {SOCIAL_MEDIA_BUTTONS.map(({ name, icon, link }) => {
            return <SocialMediaButton icon={icon} key={name} link={link} />
          })}
        </div>
      </div>
    </div>
  )
}

