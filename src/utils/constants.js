export const Netflix_logo =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const back_ground =
  "https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_large.jpg";
export const photo_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAS1BMVEVHcEzVBhLkCBPbBxKwBQ6xBg/FBhCtBQ7oCBPiBxLkCBOlBA7iBxTkCBPxCBSXAw3kCBOUAw3lCBJtAAuDAQynBQ6xBg+xBRDjBxJ6RmETAAAAGXRSTlMA//+Xgf////9NuP9m0xr/gn7zcf/MtjhOS7LcjwAAAMtJREFUeAF10MESgzAIRVFUCVZqMTW2/f8v7RjYtMNjlcUZbgaKGcZrpus5cx/6nTL2wUCWDm4YeGOFgNlXYKD+iTsG/s0NAolvPhBg88ZOFQAtfcWTquRALBpVEYhzH5YDNvYGBNo6WM4mOZDmjdI0B2zqK5ohEA1FQJufe2iSA2lnNDQHbMezAzYIpmgAoPXRwWKSA6nkjaIQ7GMfywFXioZKDmaiLRoQ3L2BAXmDMVj9FALBzVdg4I2x/IPzNc3z+3p+9n1at4F8vruuDABTzZR7AAAAAElFTkSuQmCC";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "Spanish", name: "Spanish" },
  { identifier: "Telugu", name: "Telugu" },
];

export const LANGUAGE_TRANSLATIONS = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },
  hindi: {
    search: "खोज",
    gptSearchPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  Spanish: {
    search: "Buscar",
    gptSearchPlaceholder: "¿Qué te gustaría ver hoy?",
  },
  Telugu: {
    search: "వెతకండి",
    gptSearchPlaceholder: "మీరు ఈరోజు ఏమి చూడాలనుకుంటున్నారు?",
  },
};

// Groq API Key (FREE - Get from https://console.groq.com)
export const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
