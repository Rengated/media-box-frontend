import { getAllMediaFiles, getPhotoMedia, getVideoMedia, uploadMediaFile } from "@/api/media";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { MediaFile } from "@/types";
import { useEffect, useState } from "react";
import { categories } from "@/constants";

const Media = () => {
  const [media, setMedia] = useState<MediaFile[]>([]);
  const [category, setCategories] = useState(categories[0]);

  const fetchFiles = async () => {
    const reponse = await getAllMediaFiles();
    setMedia(reponse.files);
  };

  const fetchVideos = async () => {
    const reponse = await getVideoMedia();
    setMedia(reponse);
  };

  const fetchPhotos = async () => {
    const reponse = await getPhotoMedia();
    setMedia(reponse);
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

  useEffect(() => {
    if (category == "Видео") fetchVideos();
    if (category == "Фото") fetchPhotos();
    if (category == "Все медиафайлы") fetchFiles();
  }, [category]);

  return (
    <div className="flex bg-gray-100">
      <Sidebar
        setCategories={setCategories}
        currentCategories={category}
      />
      <div className="flex flex-col w-full">
        <Header onChange={onImportChange} />
        <div className="grid grid-cols-auto-fill-368 grid-rows-auto gap-20 w-full mx-auto justify-center py-[40px] ">
          {media?.map((item) => (
            <div key={item.path}>
              {item.name.includes("mp4") && (
                <video
                  className="min-w-[368px] aspect-square	mb-2"
                  width={368}
                  height={368}
                  controls>
                  <source
                    src={item.path.replace("minio", "localhost").split("?")[0]}
                    type="video/mp4"
                  />
                </video>
              )}
              {item.name.includes("jpg") && (
                <img
                  className="min-w-[368px] aspect-square	mb-2"
                  src={item.path.replace("minio", "localhost").split("?")[0]}
                  width={368}
                  height={368}
                />
              )}
              <p className="text-center text-[20px] ">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
