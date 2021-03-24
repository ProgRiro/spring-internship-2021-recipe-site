import { LocalStorage } from "@/Library";

export const StarHandler = () => {
  const getStarIds = () => {
    const starIds = LocalStorage.get("star");
    return starIds.ids || [];
  };

  const getFormattedStarIds = () => {
    const starIds = getStarIds();
    const formattedStarIds = starIds.join(",");
    return formattedStarIds;
  };

  const getIsStar = (id: number) => {
    const starIds = getStarIds();
    const isStar = starIds.includes(id);
    return isStar;
  };

  const getStarIdNum = () => {
    const starIds = getStarIds();
    return starIds.length;
  };

  const setStarId = (id: number) => {
    const preStarIds = getStarIds();
    const newStarIds = preStarIds.filter((preStarId) => preStarId !== id);
    LocalStorage.set("star", { ids: [...newStarIds, id] });
  };

  const deleteStarId = (id: number) => {
    const preStarIds = getStarIds();
    const newStarIds = preStarIds.filter((preStarId) => preStarId !== id);
    LocalStorage.set("star", { ids: newStarIds });
  };

  return {
    getStarIds,
    getFormattedStarIds,
    getIsStar,
    getStarIdNum,
    setStarId,
    deleteStarId,
  };
};
