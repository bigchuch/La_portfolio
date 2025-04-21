import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function DownloadCVButton() {
  return (
    <a
      href="/cv.pdf"
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        className=" hover:bg-gray-700 hover:text-white"
      >
        <FileDown className="w-4 h-4 mr-2" />
        Download CV
      </Button>
    </a>
  );
}
