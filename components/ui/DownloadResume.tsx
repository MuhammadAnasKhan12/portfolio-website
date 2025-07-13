"use client"

import React from 'react'
import MagicButton from '../MagicButton';
import { FaDownload } from 'react-icons/fa6';

const downloadPdf = (url: string, filename: string) => {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const DownloadResume = () => {
  return (
    <div
      onClick={() =>
        downloadPdf("/M Anas Khan Resume.pdf", "M Anas Khan Resume.pdf")
      }
      className="mt-4 sm:mt-0"
    >
      <MagicButton
        title="Download Resume"
        position="right"
        icon={<FaDownload />}
      />
    </div>
  );
}

export default DownloadResume