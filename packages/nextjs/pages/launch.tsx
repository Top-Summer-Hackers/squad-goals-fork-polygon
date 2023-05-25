import React, { useState } from "react";

const Launch = () => {
  const [previewImgURL, setPreviewImgURL] = useState("");
  // const [uploadImgFile, setUploadImgFile] = useState<File>();

  // handle image change
  function handleImageUploadChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files != null) {
      const file = e.target.files[0];
      // setUploadImgFile(file);
      if (file != null && file != undefined) {
        setPreviewImgURL(URL.createObjectURL(file));
      }
    }
  }

  return (
    <div className="relative max-w-[1980px] mx-auto w-[80%]">
      <div className="z-[-100] w-full fixed left-0 right-0">
        <img src="/bgvector.png" alt="" className="w-full h-full" />
      </div>
      <div className="w-full">
        {/* Launch Your Own Challenge title */}
        <h3 className="text-3xl">Launch Your Own Challenge</h3>

        {/* form */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* name + description */}
            <div>
              {/* name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="outline outline-1 rounded-full px-3 py-0.5"
                  placeholder="every challenge must have a name"
                />
              </div>
              {/* description */}
              <div className="mt-5 flex flex-col">
                <label htmlFor="description" className="mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  rows={8}
                  className="outline outline-1 rounded-xl px-3 py-0.5"
                  placeholder="make sure it is SMART; specific, measurable, achievable, relevant, time bound."
                />
              </div>
            </div>
            {/* duration + stake + tags */}
            <div className="flex flex-col gap-5">
              {/* duration */}
              <div className="flex flex-col">
                <label htmlFor="duration" className="mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  id="duration"
                  className="outline outline-1 rounded-full px-3 py-0.5"
                  placeholder="how long the challenge is open in days"
                />
              </div>
              {/* stake */}
              <div className="flex flex-col">
                <label htmlFor="duration" className="mb-2">
                  ETH Stake
                </label>
                <input
                  type="text"
                  id="duration"
                  className="outline outline-1 rounded-full px-3 py-0.5"
                  placeholder="how long the challenge is open in days"
                />
              </div>
              {/* Tags */}
              <div className="flex flex-col">
                <label htmlFor="duration" className="mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  id="duration"
                  className="outline outline-1 rounded-full px-3 py-0.5"
                  placeholder="how long the challenge is open in days"
                />
              </div>
            </div>
          </div>
          {/* nft image */}
          <div className="mt-10 ">
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file">
                NFT Image
                <div className="border border-black rounded-lg flex flex-col items-center justify-center w-32 h-32 brounded-lg cursor-pointer  overflow-hidden">
                  {" "}
                  {previewImgURL === "" ? (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <img src="/launch/upload.png" alt="" />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <img src={previewImgURL} alt="" />
                    </div>
                  )}
                </div>
                <input onChange={handleImageUploadChange} id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
          {/* launch */}
          <div className="text-lg cursor-pointer my-10 w-fit mx-auto bg-[#B5B2B0] px-14 py-1 rounded-xl">launch</div>
        </div>
      </div>
    </div>
  );
};

export default Launch;