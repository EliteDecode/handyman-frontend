import { useState } from "react";

export const useFileUpload = (maxFileSize: number, allowedTypes: string[]) => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (file: File | null) => {
    if (!file) {
      setError("File is required");
      return;
    }

    // Check file type
    if (!allowedTypes.includes(file.type)) {
      setError("Only PNG and JPEG files are allowed");
      return;
    }

    // Check file size
    if (file.size > maxFileSize) {
      setError("File size exceeds the limit");
      return;
    }

    setFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setError(null); // Clear errors if validation passes
  };

  return { file, previewUrl, error, handleFileChange };
};
