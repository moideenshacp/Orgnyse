import React, { useRef, useState } from "react";
import axios from "axios";
import EventData from "../../interface/IeventData";
import { toast } from "react-toastify";

interface ImageDescriptionStepProps {
  eventData: EventData;
  setEventData: React.Dispatch<React.SetStateAction<EventData>>;
  errors?: Record<string, string>;
  clearError: (field: string) => void;
}

export const ImageDescriptionStep: React.FC<ImageDescriptionStepProps> = ({
  eventData,
  setEventData,
  errors = {},
  clearError,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);

  //For handling image upload into the cloudinary
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );
    formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_NAME);

    try {
      setUploading(true);
      const cloudinaryRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_NAME
        }/image/upload`,
        formData
      );

      const imageUrl = cloudinaryRes.data.secure_url; //Final Image Url to send backend

      setEventData((prev) => ({ ...prev, coverImage: imageUrl }));
      clearError("coverImage");
    } catch (error) {
      console.error("Image upload failed:", error);
      toast.error("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  //For triggering the file input when clicking
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <h2 className="text-lg font-medium text-blue-600 mb-4">
        Image & Description
      </h2>

      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">
          Upload Cover Image
        </label>

        <div className="flex items-start gap-4">
          {/* Upload Box */}
          <div
            className="flex-1 border-2 border-dashed border-gray-300 p-5 text-center rounded-md cursor-pointer hover:border-blue-400 transition min-h-[150px]"
            onClick={triggerFileInput}
          >
            {uploading ? (
              <p className="text-blue-500 animate-pulse">Uploading...</p>
            ) : (
              <>
                <p className="text-gray-400 mb-2">Drop your file(s) here or</p>
                <button type="button" className="text-blue-500">
                  Browse
                </button>
                <p className="text-gray-400 text-sm mt-2">
                  Max. 3 MB. JPEG/PNG
                  <br />
                  Size: 2000×900px
                </p>
              </>
            )}
          </div>

          {/* Preview Image */}
          {eventData.coverImage && !uploading && (
            <img
              src={eventData.coverImage}
              alt="Event cover"
              className="w-36 h-36 object-cover rounded-md shadow"
            />
          )}
        </div>
        {errors.coverImage && (
          <p className="text-red-500 text-sm mt-1">{errors.coverImage}</p>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageUpload}
        />
      </div>
      
        {/* Event description */}
      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">
          Event Description
        </label>
        <textarea
          placeholder="Describe your event..."
          value={eventData.description}
          onChange={(e) => {
            clearError("description");
            setEventData({ ...eventData, description: e.target.value });
          }}
          className="w-full h-32 p-3 border border-gray-300 rounded-md"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>
    </>
  );
};

export default ImageDescriptionStep;
