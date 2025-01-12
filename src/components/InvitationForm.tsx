import { uploadImage } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
// import { uploadImage, createInvitation } from "../utils/firebase";
const InvitationForm = () => {
  const [data, setData] = useState<{
    name: string;
    file: File | null;
    isLoading: boolean;
    invitationLink: string;
  }>({
    name: "",
    file: null,
    isLoading: false,
    invitationLink: "",
  });
  console.log(data);

  const handleSubmit = async (e: React.FormEvent) => {
    setData((prevState) => ({
      ...prevState,
      isLoading: true,
      invitationLink: "",
    }));

    e.preventDefault();
    const { file } = data;
    if (!file) return;

    const { fileName } = await uploadImage({ file, setData });
    const generateUrl = `${window.location.origin}/invitation?i=${fileName}`;
    setData((prevState) => ({
      ...prevState,
      invitationLink: generateUrl,
    }));
  };

  return (
    <div className=" flex w-full justify-center ">
      <form onSubmit={handleSubmit} className=" w-72">
        <div className="mb-4 flex flex-col gap-y-2">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            તમારું નામ અને ફોટો અપલોડ કરો
          </label>
          <input
            placeholder="તમારું નામ લખો "
            type="text"
            id="name"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                name: e?.target.value,
              }))
            }
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md"
          />
          <input
            placeholder="Upload Your Image"
            type="file"
            id="photo"
            accept="image/*"
            onChange={(e) =>
              setData((prevState) => ({
                ...prevState,
                file: e.target.files?.[0] || null,
              }))
            }
            className="w-full px-3 text-sm py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#ff5722] text-white h-10 flex flex-row justify-center items-center  py-2 px-4 rounded-md hover:bg-[#e64a19] transition-colors"
        >
          {data.isLoading ? (
            <svg
              className="absolute animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "તમારું આમંત્રણ લિંક બનાવો"
          )}
        </button>
        {data.invitationLink ? (
          <div className="mt-4">
            <p className="mb-2">
              તમારું આમંત્રણ લિંક તૈયાર છે: કૃપા કરી બટન પર ક્લિક કરો.
            </p>
            <div className="flex justify-center mt-4">
              <Link
                href={data.invitationLink}
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                <button
                  onClick={() =>
                    setData({
                      file: null,
                      invitationLink: "",
                      isLoading: false,
                      name: "",
                    })
                  }
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  લિંક પર ક્લિક કરો
                </button>
              </Link>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default InvitationForm;
