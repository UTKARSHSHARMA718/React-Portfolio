import { useLocation, useNavigate } from "react-router-dom";

const useCustomNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const navigateTo = (url) => {
    if (url !== pathname) {
      navigate(url);
      return;
    }
  };

  return { navigateTo };
};

export default useCustomNavigate;
