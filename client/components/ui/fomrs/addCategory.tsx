"use client";
import { useEffect, useRef, useState } from "react";
import {
  useAddCategory,
  useGetAdmin,
  useGetSubAdmin,
  useUploadToAws,
} from "@/hooks";
import { handleImgInput, handleDescriptionLenght } from "@/helpers";
import { TbPhoto } from "react-icons/tb";
import toast from "react-hot-toast";
// input style
const inputStyle = `w-[90%] h-[55px] bg-transparent outline-none text-white text-[20px] border border-[#ffffff88] rounded-lg placeholder:text-white placeholder:text-[20px] p-[10px] `;

export const AddCategory = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [popular, setPopular] = useState(false);
  const [userType, setUserType] = useState<"admin" | "sub-admin">();
  const [descriptionLetterCount, setDescriptionLetterCount] = useState(0);

  function resetState() {
    setTitle("");
    setDescription("");
    setImageUrl("");
    setPopular(false);
  }

  // checkbox refs
  const checkbox = useRef<HTMLInputElement[]>([]);
  const descriptionInput = useRef<HTMLTextAreaElement | null>(null);

  const queryBody = {
    body: {
      title: title.trim(),
      description,
      imageUrl,
      popular,
    },
    userType: userType!,
  };
  const { admin } = useGetAdmin();
  const { subAdmin } = useGetSubAdmin();
  const { addCategoryMutation } = useAddCategory(resetState);
  const { awsMutations } = useUploadToAws(setImageUrl, userType);

  useEffect(() => {
    if (admin) {
      setUserType("admin");
    }
    if (subAdmin) {
      setUserType("sub-admin");
    }
  }, [admin, subAdmin]);
  return (
    <div className=" w-[350px] mobile:w-[500px] min-h-[450px] bg-[#999999] rounded-lg overflow-scroll z-[10] box-content pb-[10px]">
      <div className="w-[100%] h-[100%] flex flex-col items-center">
        <h1 className="text-white text-[25px] font-[500] mt-[20px]">
          Add Sofa Category
        </h1>
        {imageUrl !== "" && (
          <img
            src={imageUrl}
            alt="uploaded"
            className="mt-[20px] w-[150px] h-[150px]"
          />
        )}
        <div className="w-[100%]  flex flex-col items-center mt-[50px] gap-[30px]">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className={`${inputStyle} `}
          />
          <div className="w-[90%] relative flex items-center gap-[10px]">
            <textarea
              ref={descriptionInput}
              placeholder="Description"
              value={description}
              onChange={(e) => {
                const descriptionLength = e.target.value.length;
                handleDescriptionLenght(
                  e.target.value.length,
                  setDescriptionLetterCount
                );
                setDescription(e.target.value);
              }}
              className={` w-[100%] h-[150px]  bg-transparent outline-none text-white text-[20px] border border-[#ffffff88] rounded-lg placeholder:text-white placeholder:text-[20px] p-[10px] box-border pr-[50px]`}
            />
            <div className="absolute right-[10px] text-white">{`/${descriptionLetterCount}`}</div>
          </div>
          <div className="w-[90%] flex items-center gap-[10px] text-white">
            <input
              id="popular"
              type="checkbox"
              value={description}
              onChange={() => {
                setPopular((crnt) => !crnt);
              }}
            />
            <label htmlFor="popular">Popular</label>
          </div>
          <div className="w-[90%]">
            <button
              onClick={() => {
                handleImgInput(awsMutations.mutate);
              }}
            >
              <TbPhoto className="w-[30px] h-[30px] text-white hover:text-slate-800" />
            </button>
          </div>

          {/* image input */}
        </div>
        <div className="w-[100%] flex flex-col justify-center items-center mt-[20px] gap-[10px]">
          <button
            className="w-[90%] flex justify-center items-center text-white font-[500] bg-[#2F94C4] hover:bg-[#60b8e0] p-[10px] pl-[15px] pr-[15px] rounded-lg"
            onClick={() => {
              if (title === "") {
                return toast.error("title cannot be empty");
              }
              if (description.length > 500) {
                return toast.error("description cannot this long");
              }
              addCategoryMutation.mutate(queryBody);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
