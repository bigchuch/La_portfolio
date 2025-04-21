import AboutSection from "@/components/AboutSection";
import DownloadCVButton from "@/components/DownloadCvButton";
import ExperienceSection from "@/components/ExperienceSection";
import Technologies from "@/components/Technologies";



export default function AboutPage() {
  return (
    <div className="w-full`">
      <div className="mx-auto max-w-7xl px-2 mt-18  ">
        <h1 className="text-4xl text-center lg:sticky lg:top-5 lg:left-0 lg:right-0 z-11 ">About Me</h1>

        <AboutSection />
        <DownloadCVButton />
        <Technologies />
        <ExperienceSection />

      </div>
      
    </div>
  );
}