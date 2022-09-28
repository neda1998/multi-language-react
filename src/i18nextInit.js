import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./lng/en.json";
import kurdi from "./lng/kurdi.json";

i18next.use(initReactI18next).init({
	resources: {
		en: {
			translation: en,
		},
		kurdi: { 
			translation: kurdi,
		},
	},
	lng: localStorage.getItem("lng") || "en",
});

export default i18next;

