import { useState } from "react";
import { Upload as UploadIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    handleFiles(files);
  };

  const handleFiles = async (files: File[]) => {
    if (files.length === 0) return;

    setIsProcessing(true);
    console.log("Processing resume:", files[0].name);

    try {
      // Simulate API call to process resume
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Resume Processed Successfully!",
        description: "Click 'View Career Suggestions' to see your personalized recommendations.",
      });

      // Store processed data in sessionStorage (simulated data for now)
      sessionStorage.setItem('resumeProcessed', 'true');
      sessionStorage.setItem('skills', JSON.stringify([
        'React',
        'TypeScript',
        'JavaScript',
        'Node.js'
      ]));

      // Enable navigation to careers page
      setIsProcessing(false);
    } catch (error) {
      console.error("Error processing resume:", error);
      toast({
        title: "Error Processing Resume",
        description: "Please try uploading again.",
        variant: "destructive",
      });
      setIsProcessing(false);
    }
  };

  const handleViewSuggestions = () => {
    if (!isProcessing && sessionStorage.getItem('resumeProcessed')) {
      navigate('/careers');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Upload Your Resume</h1>
        <p className="text-gray-600 text-center mb-8">
          Upload your resume to get personalized career recommendations
        </p>

        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-gray-300 hover:border-primary"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <UploadIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-lg mb-4">
            {isProcessing ? "Processing resume..." : "Drag and drop your resume here"}
          </p>
          <p className="text-sm text-gray-500 mb-4">or</p>
          <label className="inline-block">
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileInput}
              disabled={isProcessing}
            />
            <span 
              className={`bg-primary text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-primary-hover transition-colors ${
                isProcessing ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Browse Files
            </span>
          </label>
          <p className="text-sm text-gray-500 mt-4">
            Supported formats: PDF, DOCX, TXT
          </p>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleViewSuggestions}
            disabled={isProcessing || !sessionStorage.getItem('resumeProcessed')}
            className={`bg-primary text-white px-8 py-3 rounded-lg transition-colors ${
              isProcessing || !sessionStorage.getItem('resumeProcessed')
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-primary-hover'
            }`}
          >
            View Career Suggestions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;