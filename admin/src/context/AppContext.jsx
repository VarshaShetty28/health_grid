import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currency = '$'
  const calculateAge = (dob) => {
    if (!dob) return ""; // Return empty if dob is missing

    const birthDate = new Date(dob);
    if (isNaN(birthDate)) return ""; // Return empty if invalid date

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // If birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };
  const months = [' ', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const formatSlotDate = (slotDate) => {
    const [day, month, year] = slotDate.split('_');
    if (!day || !month || !year) return slotDate;
    return `${day} ${months[Number(month)]} ${year}`;
  };

  const value = {
    calculateAge,
    formatSlotDate,
    currency,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
