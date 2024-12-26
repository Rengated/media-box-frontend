import { MediaFile } from "@/types";
import { $api } from "..";

interface MediaFilesResponse {
  username: string;
  files: MediaFile[];
}

type FilteredResponse = MediaFile[];

export const getAllMediaFiles = async (): Promise<MediaFilesResponse> => {
  return $api.get("/home").then((res) => res.data);
};

export const getVideoMedia = async (): Promise<FilteredResponse> => {
  return $api.get("/home/videos").then((res) => res.data);
};

export const getPhotoMedia = async (): Promise<FilteredResponse> => {
  return $api.get("/home/photos").then((res) => res.data);
};

export const uploadMediaFile = async (file: File): Promise<MediaFile> => {
  const formData = new FormData();
  formData.append("file", file);
  return $api.post("/home/upload", formData).then((res) => res.data);
};
