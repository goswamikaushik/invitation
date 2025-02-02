import { createClient } from "@supabase/supabase-js";
import { SetStateAction } from "react";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.NEXT_PUBLIC_URL!,
  process.env.NEXT_PUBLIC_AVON!
);

const BUCKET_NAME = "invitation_images";

export const uploadImage = async ({
  file,
  setData,
}: {
  file: File;
  setData: (
    value: SetStateAction<{
      name: string;
      file: File | null;
      isLoading: boolean;
      invitationLink: string;
    }>
  ) => void;
}) => {
  // Generate a unique file name using current timestamp
  const fileName = `${Date.now()}-${file.name}`;

  try {
    // Upload image to Supabase Storage (bucket name 'avatars')
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file);

    if (error) {
      throw new Error(error.message);
    }

    const publicUrl = supabase.storage.from(BUCKET_NAME).getPublicUrl(fileName);
    return { publicUrl: publicUrl?.data?.publicUrl, fileName: fileName };
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  } finally {
    setData((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  }
};
