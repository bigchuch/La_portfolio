
import { FileDown } from "lucide-react";

export default function DownloadCVButton() {
  return (
    <div className="flex justify-center items-center">
      <a
        href="/cv.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          
          className="py-3 px-5 mt-8 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span className="inline-block">
            <FileDown className="w-4 h-4 mr-2" />
          </span>
          Download CV
        </button>
      </a>

    </div>
  );
}
