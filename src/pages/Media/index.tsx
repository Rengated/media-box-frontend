import { getAllMediaFiles, uploadMediaFile } from "@/api/media";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { MediaFile } from "@/types";
import { useEffect, useState } from "react";

const Media = () => {
  const [media, setMedia] = useState<MediaFile[]>([]);

  const fetchFiles = async () => {
    const reponse = await getAllMediaFiles();
    setMedia(reponse.files);
  };

  const onImportChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files?.length != 0) {
      await uploadMediaFile(files![0]);
      await fetchFiles();
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header onChange={onImportChange} />
        <div className="grid grid-cols-auto-fill-368 grid-rows-auto gap-20 w-full mx-auto justify-center py-[40px] ">
          {media?.map((item) => (
            <div key={item.path}>
              <img
                className="min-w-[368px] aspect-square	mb-2"
                src={item.path.replace("minio", "localhost").split("?")[0]}
                width={368}
                height={368}
              />
              <p className="text-center text-[20px] ">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
