import { useEffect, useState } from "react";
import Button from "@mui/material/Button";

function UploadImage() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    console.log("FILE :", file);

    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  // ✅ cleanup correct (EN DEHORS)
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <Button variant="contained" component="label">
        Choisir un fichier
        <input
          type="file"
          hidden
          accept="image/*,video/*"
          onChange={handleChange}
        />
      </Button>

      {/* VIDEO */}
      {preview && (
        <video
          src={preview}
          controls
          preload="metadata"
          style={{ width: "300px", marginTop: 20 }}
        >
          Votre navigateur ne supporte pas la vidéo.
        </video>
      )}

      {/* IMAGE */}
      {preview && (
        <img
          src={preview}
          alt="preview"
          style={{ width: 200, marginTop: 20 }}
        />
      )}
    </div>
  );
}

export default UploadImage;