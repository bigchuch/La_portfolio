import AboutSection from "./AboutSection";
import DownloadCVButton from "./DownloadCvButton";
import ExperienceSection from "./ExperienceSection";
import Technologies from "./Technologies";



export default function AboutPage() {
  return (
    <div className="w-full`">
      <div className="mx-auto max-w-7xl px-2 md:mt-24  ">
        <div className="lg:w-[30%]   mx-auto  text-center lg:sticky lg:top-5 lg:left-0 lg:right-0 z-50 ">
          <h1 className="text-4xl font-prata">About Me</h1>
        </div>

        <AboutSection />
        <DownloadCVButton />
        <Technologies />
        <ExperienceSection />

      </div>
      
    </div>
  );
}