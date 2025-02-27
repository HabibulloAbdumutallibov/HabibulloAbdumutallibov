import { useEffect, useState } from "react";
import { db, ref, get, set } from "../firebase";

export default function PageViews() {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const viewsRef = ref(db, "pageViews");

    get(viewsRef).then((snapshot) => {
      const currentViews = snapshot.exists() ? snapshot.val() : 0;
      set(viewsRef, currentViews + 1); // Firebase'ga yangi qiymatni saqlaymiz
      setViews(currentViews + 1);
    });
  }, []);

  return <p>Saytni {views} ta odam ko‘rdi.</p>;
}
