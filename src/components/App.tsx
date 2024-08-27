import { useEffect, useState, FormEvent } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { fetchPhotos } from "../API";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import styles from "./App.module.css";
import ImageModal from "./ImageModal/ImageModal";
import { Photo } from "../types";

const App = () => {
  const [hits, setHits] = useState<any>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  console.log(selectedPhoto);

  function openModal(photo: any): void {
    console.log(photo);
    setSelectedPhoto(photo);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedPhoto(null);
  }

  useEffect(() => {
    if (query) {
      const getData = async () => {
        try {
          setIsError(false);
          setIsLoading(true);
          const { data, headers } = await fetchPhotos(query, page);
          setHits((prev: any) => [...prev, ...data]);
          const totalItems = parseInt(headers["x-total"], 10);
          const perPage = parseInt(headers["x-per-page"], 10);
          setTotalPages(Math.ceil(totalItems / perPage));
        } catch (error) {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      };
      getData();
    }
  }, [query, page]);

  const handleSetQuery = (query: string) => {
    setQuery(query);
    setHits([]);
    setPage(1);
  };

  return (
    <div className={styles.container}>
      <Toaster />
      <SearchBar setQuery={handleSetQuery} />
      <ImageGallery hits={hits} openModal={openModal} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {page < totalPages && <LoadMoreBtn setPage={setPage} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        photo={selectedPhoto}
      />
    </div>
  );
};

export default App;
