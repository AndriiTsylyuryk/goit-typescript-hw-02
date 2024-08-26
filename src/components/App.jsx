import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { fetchPhotos } from "../API";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import styles from "./App.module.css";
import ImageModal from "./ImageModal/ImageModal";

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  function openModal(photo) {
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
          setHits((prev) => [...prev, ...data]);
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

  const handleSetQuery = (query) => {
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
